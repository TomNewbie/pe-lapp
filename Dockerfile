# Build stage 1
# This stage transpile typescript node server code to a middle container containing javascript code
# Start from the node image
FROM node:18 as build-server

# Use /usr/src/app as the workdir. The following instructions will be executed in this location
WORKDIR /usr/src/app

# Copy the the files require to install the dependencies
COPY ./server/package*.json ./
COPY ./server/tsconfig.json ./

# Install the required dependencies
RUN npm install

# Copy the server source code
COPY ./server .

# Buid the server 
RUN npm run build

# Build stage 2
# Build the client production code

# Start from node image
FROM node:18 as build-client

# Use /usr/src/app as the workdir. The following instructions will be executed in this location
WORKDIR /usr/src/app

# Copy the the files require to install the dependencies
COPY ./lapp/package*.json ./
COPY ./lapp/tailwind.config.js ./

# Install the required dependencies
RUN npm install

# Copy the client source
COPY ./lapp .

# Buid the production code
RUN npm run build

# Build stage 3
# Build the final docker image used for production
FROM node:18-alpine@sha256:ca5d399560a9d239cbfa28eec00417f1505e5e108f3ec6938d230767eaa81f61

# Add program to initialize the container
RUN apk add dumb-init

# Set the default working directory for application
WORKDIR /usr/src/app

# Change the environment to production
ENV NODE_ENV=production
ENV PORT=8080
ENV SERVER_DOMAIN=https://lapp.fly.dev

# Create the directories for server and client
RUN mkdir server && mkdir lapp

# Copy the production build
COPY --chown=node:node --from=build-client /usr/src/app/build ./lapp/build

# Install the dependencies for server
COPY ./server/package*.json ./server/
RUN cd server && \
    npm ci --only=production

# Add the transpiled javascript code
COPY --chown=node:node --from=build-server /usr/src/app/dist ./server/dist

# Set the user to node
USER node

# Publishing the port
EXPOSE 8080

# Command to run the application
CMD ["dumb-init", "node", "server/dist/index.js"]




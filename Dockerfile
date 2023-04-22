# Build stage 1
# This stage transpile typescript node server code to a middle container containing javascript code
# Start from the node image
FROM node:18 as build-server

# Use /usr/src/app as the workdir. The following instructions will be executed in this location
WORKDIR /usr/src/app

# Copy the the files require to install the dependencies
COPY package*.json ./
COPY ts.config.json ./

# Install the required dependencies
RUN npm install

# Copy the server source code
COPY ./server .

# Buid the server 
RUN npm run build

# Build stage 2
# Build the final docker image used for production
FROM node:18-alpine

# Set the default working directory for application
WORKDIR /usr/src/app

# Install the dependencies
COPY package*.json ./
RUN npm ci --only=production

# Add the transpiled javascript code
COPY --from=build-server /usr/src/app/dist ./dist

# Change the environment to production
ENV NODE_ENV=production
ENV PORT=8080

# Publishing the port
EXPOSE 8080

# Command to run the application
CMD ["node", "dist/index.js"]




# Build stage 1
# This stage transpile typescript node server code to a middle container containing javascript code
# Start from the node image
FROM node:18 as build-server

# Use /usr/src/app as the workdir. The following instructions will be executed in this location
WORKDIR /usr/src/app

# Change the environment to production
ENV NODE_ENV=production

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


# Command to run the application
CMD ["node", "dist/index.js"]




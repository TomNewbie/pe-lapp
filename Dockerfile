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

# Command to run the application
CMD ["node", "dist/index.js"]




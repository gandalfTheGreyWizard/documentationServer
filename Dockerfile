# Use Node.js LTS version as the base image
FROM node:18-alpine

# Set working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy application files
COPY . .

# Expose the application port (default: 3000)
EXPOSE 8080

# Define the command to start the application
CMD ["node", "./bin/www"]

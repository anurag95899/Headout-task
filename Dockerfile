# Use a base image compatible with ARM and x86 architectures
FROM node:14

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files to the working directory
COPY . .

# Expose port 8080
EXPOSE 8080

# Define environment variables for memory and CPU allocation
ENV NODE_OPTIONS="--max-old-space-size=1500"
ENV CPU_LIMIT="2000m"

# Command to run the server
CMD ["node", "app.js"]

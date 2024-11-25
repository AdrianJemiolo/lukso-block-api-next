# Use a lightweight Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the application source code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose port 3000 to make the application accessible
EXPOSE 3000

# Command to start the application in production mode
CMD ["npm", "start"]

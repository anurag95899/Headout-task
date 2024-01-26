# HTTP Server Optimization

This project implements a simple HTTP server optimized for performance and efficiency, along with Docker configuration for containerization.

## Overview

The HTTP server responds to incoming GET requests on the `/data` endpoint, allowing clients to retrieve content from data files stored within the server. The server is optimized for resource usage and scalability to handle a high volume of concurrent requests efficiently.

## Features

- Accepts GET requests with query parameters `n` (file name) and `m` (line number).
- Returns the content of the specified file at the given line number or the entire file content if only `n` is provided.
- Optimized for minimal resource consumption and fast response times.

## Optimizations Implemented

- **Dockerfile Optimization**:
  - Utilized a lightweight Node.js base image compatible with ARM and x86 architectures.
  - Installed only necessary dependencies and minimized layer size to improve build efficiency.

- **Resource Allocation**:
  - Allocated maximum of 1500 MB RAM and 2000m/2 Core CPU to the Docker container based on expected workload and requirements.
  - Monitored resource usage and adjusted allocation as needed for optimal performance.

- **File System Optimization**:
  - Stored data files in the `/tmp/data` directory within the Docker container for efficient access.
  - Implemented file naming conventions and organized data files to facilitate retrieval and management.

- **Server Optimization**:
  - Optimized file I/O operations for reading data files to minimize latency and improve throughput.
  - Implemented caching mechanisms and asynchronous request handling to enhance concurrency and scalability.

## Monitoring and Troubleshooting

- Utilized monitoring tools such as Prometheus and Grafana to track server metrics and performance indicators.
- Implemented centralized logging using tools like ELK stack to facilitate troubleshooting and analysis of server logs.

## Security Considerations

- Configured network access controls and firewall rules to restrict unauthorized access to the HTTP server.
- Implemented encryption protocols (e.g., HTTPS) and authentication mechanisms (e.g., JWT) to secure communication and access to sensitive resources.

## Usage

1. Clone the repository to your local machine:
2. Build the Docker image:   
3. Run the Docker container:4. 
4. Access the HTTP server API endpoints using Postman or any HTTP client:






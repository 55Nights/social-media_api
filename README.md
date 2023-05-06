SOCIAL MEDIA API
Prompt
You have been tasked with creating a RESTful API for a new social media platform. The API will be used by front-end developers to create a web application for users to interact with the platform. The API should allow users to create an account, post content, like content, and comment on content.

The API should be built using Express.js, Node.js, and MongoDB.

Requirements
Create an endpoint that allows users to create an account. The account should be stored in a MongoDB database and hashed using bcrypt for security.

Create an endpoint that allows users to log in. The endpoint should return a JWT (JSON Web Token) that can be used to authenticate requests to protected endpoints.

Create endpoints that allow users to create, read, update, and delete posts. Posts should be stored in a MongoDB database.

Create endpoints that allow users to like and comment on posts.

Implement input validation and error handling to ensure that requests are properly formatted and handled.

Use best practices for security, including:

Implementing rate limiting to prevent brute-force attacks
Using SSL/TLS to encrypt traffic
Using CORS headers to restrict access to the API
Implementing OAuth2.0 for third-party authentication and authorization
Implement automated tests to ensure that the API functions correctly and to prevent regressions.

Guidelines
To ensure that your API is professional and scalable, consider the following guidelines:

Use a modular architecture to separate concerns and keep the codebase organized.

Use middleware to handle cross-cutting concerns such as input validation and error handling.

Use environment variables to store sensitive data such as database connection strings and API keys.

Implement versioning for the API to allow for backwards compatibility.

Use a tool such as Swagger or Postman to document the API and make it easier for other developers to use.

Monitor the API using a tool such as New Relic to identify performance issues and bottlenecks.

Use a tool such as Docker to package the API and its dependencies for easy deployment and scaling.

Follow best practices for code formatting and naming conventions to make the codebase more readable and maintainable.

Implement logging and monitoring to help with debugging and troubleshooting.

Deliverables
Your deliverables for this project should include:

A working API that meets the requirements outlined above.

Automated tests to ensure that the API functions correctly.

Documentation for the API, including instructions for how to use it and any relevant information about its architecture and design.

A deployed instance of the API, either on a cloud-based platform such as AWS or Azure or on a self-hosted server.
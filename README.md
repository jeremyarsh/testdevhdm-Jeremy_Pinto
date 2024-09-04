# testdevhdm
Todo List Application

This is a Todo List application built with NestJS and React. The application allows users to create, read, update, and delete tasks.

Backend

The backend is built with NestJS and uses a Prisma database to store tasks. The API endpoints are:

GET /tasks: Retrieves a list of all tasks
POST /tasks: Creates a new task
PATCH /tasks/:id: Updates an existing task
DELETE /tasks/:id: Deletes a task
The backend uses a Use Case Factory to create instances of Use Cases, which encapsulate the business logic of the application.

Frontend

The frontend is built with React and uses the useFetch hook to make API requests to the backend. The application displays a list of tasks and allows users to create, update, and delete tasks.

Features

Create, read, update, and delete tasks
Validation of task names to prevent empty tasks
Error handling for API requests
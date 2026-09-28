AWS Task Manager

A full-stack Task Management application built with React and Spring Boot, containerized using Docker, and deployed on Amazon Web Services (AWS).

Live Application

Frontend:
http://aws-task-manager-frontend-403659230847.s3-website-ap-southeast-2.amazonaws.com

Backend API:
https://ta-150923e0c33747d0bdcb6f749d3f6a89.ecs.ap-southeast-2.on.aws

Architecture

React Frontend (Amazon S3)
|
v
Spring Boot Backend (Amazon ECS Express)
|
+----+----+
| |
v v
Secrets Amazon RDS
Manager PostgreSQL

Features

Create, view, update, and delete tasks

RESTful API

React frontend with Axios

Spring Boot backend

PostgreSQL database

Dockerized backend

AWS cloud deployment

AWS Secrets Manager for database credentials

Amazon CloudWatch logging

Private Amazon RDS database

SSL database connection

Technology Stack

Frontend

React

Vite

Axios

CSS

Backend

Java

Spring Boot

Spring Data JPA

Hibernate

Maven

REST API

Database

PostgreSQL

Cloud & DevOps

Docker

Amazon ECR

Amazon ECS Express

Amazon RDS

Amazon S3

AWS Secrets Manager

Amazon CloudWatch

AWS IAM

Project Structure

aws-task-manager/
├── backend/
│ ├── src/
│ │ ├── main/
│ │ │ ├── java/
│ │ │ │ └── com/taskmanager/
│ │ │ │ ├── controller/
│ │ │ │ ├── entity/
│ │ │ │ ├── repository/
│ │ │ │ └── service/
│ │ │ └── resources/
│ │ │ └── application.properties
│ │ ├── Dockerfile
│ │ └── pom.xml
├── frontend/
│ ├── src/
│ ├── public/
│ ├── package.json
│ └── vite.config.js
├── docker-compose.yml
├── .gitignore
└── README.md

REST API

Base URL:

https://ta-150923e0c33747d0bdcb6f749d3f6a89.ecs.ap-southeast-2.on.aws

Get All Tasks

GET /api/tasks

Get Task by ID

GET /api/tasks/{id}

Create Task

POST /api/tasks
Content-Type: application/json

Example:

{
"title": "Learn AWS",
"description": "Learn AWS cloud services",
"status": "TODO"
}

Update Task

PUT /api/tasks/{id}
Content-Type: application/json

Delete Task

DELETE /api/tasks/{id}

Local Development

Prerequisites

Java 21+

Node.js

npm

Docker Desktop

PostgreSQL or Docker

Backend

cd backend
mvnw.cmd spring-boot:run

Backend:

http://localhost:8080

Frontend

cd frontend
npm install
npm run dev

Docker

Build the backend image:

docker build -t aws-task-manager-backend ./backend

Start PostgreSQL:

docker compose up -d

AWS Deployment

Amazon ECR

The Spring Boot backend is built as a Docker image and pushed to Amazon Elastic Container Registry.

Repository:

task-manager-backend

Amazon ECS Express

The backend Docker image is deployed using Amazon ECS Express.

Container port:

8080

Health check:

/api/tasks

Amazon RDS PostgreSQL

PostgreSQL is hosted using Amazon RDS.

The database is configured as private and is not publicly accessible.

The backend connects to RDS using an SSL-enabled PostgreSQL connection.

AWS Secrets Manager

The database password is stored in AWS Secrets Manager.

Secret:

task-manager/db-password

ECS retrieves the database password when the application runs.

Amazon S3

The React production build is hosted using an Amazon S3 static website bucket.

Amazon CloudWatch

CloudWatch is used for ECS application logs and monitoring.

Security

Database passwords are not stored in source code.

.env files are excluded from Git.

RDS is configured as a private database.

ECS retrieves the database password from AWS Secrets Manager.

Database communication uses SSL.

IAM roles are used for AWS resource access.

AWS credentials are not stored in the repository.

Sensitive build files are excluded using .gitignore.

Deployment Flow

Developer
|
v
GitHub
|
+--------------------+
| |
v v
React Build Docker Backend
| |
v v
Amazon S3 Amazon ECR
|
v
Amazon ECS
|
+------+------+
| |
v v
Secrets Manager Amazon RDS
PostgreSQL
|
v
CloudWatch Logs

Application Flow

User
|
v
React Frontend
|
| REST API
v
Spring Boot Backend
|
+----> AWS Secrets Manager
|
v
Amazon RDS PostgreSQL

Backend Architecture

Controller
|
v
Service
|
v
Repository
|
v
PostgreSQL

Controller handles REST API requests.

Service contains application logic.

Repository uses Spring Data JPA.

Entity represents task data.

Database

The application uses PostgreSQL to store task information.

Field

Description

id

Unique task identifier

title

Task title

description

Task description

status

Current task status

Example:

{
"id": 1,
"title": "Learn AWS",
"description": "Learn AWS cloud services",
"status": "TODO"
}

AWS Resources

AWS Service

Purpose

Amazon S3

Hosts React frontend

Amazon ECS Express

Runs Spring Boot backend

Amazon ECR

Stores backend Docker image

Amazon RDS

Hosts PostgreSQL

AWS Secrets Manager

Stores database credentials

Amazon CloudWatch

Application logs and monitoring

AWS IAM

Access control and service roles

Deployment Process

1. Develop React and Spring Boot application
2. Test the application locally
3. Build the Spring Boot Docker image
4. Push the Docker image to Amazon ECR
5. Deploy the container using Amazon ECS Express
6. Configure PostgreSQL using Amazon RDS
7. Store database credentials in AWS Secrets Manager
8. Build the React production application
9. Deploy the React build to Amazon S3
10. Monitor application logs using CloudWatch

Live Endpoints

Frontend:

http://aws-task-manager-frontend-403659230847.s3-website-ap-southeast-2.amazonaws.com

Backend:

https://ta-150923e0c33747d0bdcb6f749d3f6a89.ecs.ap-southeast-2.on.aws

API:

GET /api/tasks
POST /api/tasks
GET /api/tasks/{id}
PUT /api/tasks/{id}
DELETE /api/tasks/{id}

What This Project Demonstrates

Full-stack application development

REST API development

Spring Boot

React

PostgreSQL

Docker

Amazon ECR

Amazon ECS

Amazon RDS

Amazon S3

AWS Secrets Manager

AWS IAM

Amazon CloudWatch

Cloud database connectivity

Secure credential management

SSL database connections

Cloud deployment

Git and GitHub

Author

Shriraksha K R

Computer Science Engineering
Mangalore, Karnataka, India

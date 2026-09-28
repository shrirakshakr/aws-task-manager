# AWS Task Manager

A full-stack Task Management application built with **React** and **Spring Boot**, containerized using **Docker**, and deployed on **Amazon Web Services (AWS)**.

The application provides a RESTful backend, PostgreSQL database, cloud deployment, and secure database credential management using AWS Secrets Manager.

---

## 🚀 Live Application

| Component | URL |
|---|---|
| **Frontend** | http://aws-task-manager-frontend-403659230847.s3-website-ap-southeast-2.amazonaws.com |
| **Backend API** | https://ta-150923e0c33747d0bdcb6f749d3f6a89.ecs.ap-southeast-2.on.aws |

---

## 🏗️ Architecture

```text
                    ┌─────────────────────────┐
                    │     React Frontend      │
                    │       Amazon S3         │
                    └────────────┬────────────┘
                                 │
                                 │ REST API
                                 ▼
                    ┌─────────────────────────┐
                    │    Amazon ECS Express    │
                    │     Spring Boot API      │
                    └────────────┬────────────┘
                                 │
                    ┌────────────┴────────────┐
                    │                         │
                    ▼                         ▼
          ┌──────────────────┐      ┌──────────────────┐
          │ AWS Secrets      │      │   Amazon RDS     │
          │ Manager          │      │   PostgreSQL     │
          │                  │      │                  │
          │ DB Credentials   │      │ Private Database │
          └──────────────────┘      └──────────────────┘

                    Amazon ECR
                         │
                         ▼
                Backend Docker Image

                    CloudWatch
                         │
                         ▼
                  Application Logs

✨ Features
Create tasks
View all tasks
Update tasks
Delete tasks
RESTful API
React frontend with Axios
Spring Boot backend
PostgreSQL database
Dockerized backend
AWS cloud deployment
AWS Secrets Manager for database credentials
Amazon CloudWatch logging
Private Amazon RDS database
SSL connection between backend and PostgreSQL


🛠️ Technology Stack
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


📁 Project Structure
aws-task-manager/
│
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/taskmanager/
│   │   │   │       ├── controller/
│   │   │   │       ├── entity/
│   │   │   │       ├── repository/
│   │   │   │       └── service/
│   │   │   │
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   │
│   │   ├── Dockerfile
│   │   └── pom.xml
│   │
│   ├── .dockerignore
│   └── mvnw
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── docker-compose.yml
├── .gitignore
└── README.md



🔌 REST API
Base URL
https://ta-150923e0c33747d0bdcb6f749d3f6a89.ecs.ap-southeast-2.on.aws

Get All Tasks
GET /api/tasks

Get Task by ID
GET /api/tasks/{id}

Create Task
POST /api/tasks
Content-Type: application/json

Example request:
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



💻 Local Development
Prerequisites
Java 21+
Node.js
npm
Docker Desktop
PostgreSQL or Docker

Backend Setup
Navigate to the backend directory:
cd backend

Run the Spring Boot application:
mvnw.cmd spring-boot:run

Backend URL:
http://localhost:8080

Frontend Setup
Navigate to the frontend directory:
cd frontend

Install dependencies:
npm install

Start the development server:
npm run dev


🐳 Docker
The Spring Boot backend is containerized using Docker.
Build the Backend Image

From the project root:
docker build -t aws-task-manager-backend ./backend

Start PostgreSQL
docker compose up -d


☁️ AWS Deployment
The application is deployed using multiple AWS services.

1. Amazon ECR
The Spring Boot backend is built as a Docker image and pushed to Amazon Elastic Container Registry (ECR).
Repository:
task-manager-backend
ECR stores the Docker image used by the ECS service.

2. Amazon ECS Express
The backend Docker image is deployed using Amazon ECS Express.
Container port:
8080
Health check endpoint:
/api/tasks
ECS runs the Spring Boot container and exposes the backend API.

3. Amazon RDS PostgreSQL
PostgreSQL is hosted using Amazon RDS.
The database is configured as a private database and is not publicly accessible.
The Spring Boot backend connects to RDS using an SSL-enabled PostgreSQL connection.

4. AWS Secrets Manager
The database password is stored securely in AWS Secrets Manager instead of being hardcoded in the application.
Secret:
task-manager/db-password
ECS retrieves the database password from Secrets Manager when the application runs.

5. Amazon S3
The React production build is deployed to an Amazon S3 static website bucket.
The S3 bucket hosts the frontend application and serves the production React build to users.

6. Amazon CloudWatch
Amazon CloudWatch is used for ECS application logs and monitoring.
Application logs from the Spring Boot container can be viewed through CloudWatch.

🔐 Security
The project follows basic cloud security practices:

Database passwords are not stored in source code.
.env files are excluded from Git.
RDS is configured as a private database.
ECS retrieves the database password from AWS Secrets Manager.
Database communication uses SSL.
IAM roles are used for AWS resource access.
AWS credentials are not stored in the repository.
Sensitive build files are excluded using .gitignore.



🔄 Deployment Flow

                         Developer
                             │
                             ▼
                          GitHub
                             │
              ┌──────────────┴──────────────┐
              │                             │
              ▼                             ▼
       React Production Build        Docker Backend
              │                             │
              ▼                             ▼
         Amazon S3                     Amazon ECR
                                            │
                                            ▼
                                       Amazon ECS
                                            │
                              ┌─────────────┴─────────────┐
                              │                           │
                              ▼                           ▼
                    AWS Secrets Manager             Amazon RDS
                                                    PostgreSQL
                              │
                              ▼
                       Amazon CloudWatch
                       Application Logs


🔁 Application Flow

User
 │
 ▼
React Frontend
 │
 │ REST API Request
 ▼
Spring Boot Backend
 │
 ├──────────────► AWS Secrets Manager
 │                      │
 │                      └── Database Password
 │
 ▼
Amazon RDS PostgreSQL


🧩 Backend Architecture
The backend follows a layered Spring Boot architecture:

                 REST Request
                     │
                     ▼
               ┌─────────────┐
               │ Controller  │
               └──────┬──────┘
                      │
                      ▼
               ┌─────────────┐
               │   Service   │
               └──────┬──────┘
                      │
                      ▼
               ┌─────────────┐
               │ Repository  │
               └──────┬──────┘
                      │
                      ▼
               ┌─────────────┐
               │ PostgreSQL  │
               └─────────────┘


Controller
Handles REST API requests.

Service
Contains application and business logic.

Repository
Uses Spring Data JPA to communicate with PostgreSQL.

Entity
Represents the task data stored in the database.


🗄️ Database
The application uses PostgreSQL to store task information.
Task Entity
| Field         | Description            |
| ------------- | ---------------------- |
| `id`          | Unique task identifier |
| `title`       | Task title             |
| `description` | Task description       |
| `status`      | Current task status    |


Example:
{
  "id": 1,
  "title": "Learn AWS",
  "description": "Learn AWS cloud services",
  "status": "TODO"
}


🐳 Docker Architecture

                 Docker Image
                      │
                      ▼
             Spring Boot Application
                      │
                      ▼
               Container Port 8080
                      │
                      ▼
                   REST API
                      │
                      ▼
              PostgreSQL Database

The backend uses a multi-stage Docker build:
Build Stage
     │
     ├── Maven
     ├── Compile Java
     └── Build JAR
            │
            ▼
Runtime Stage
     │
     ├── Java Runtime
     └── Spring Boot JAR


📊 AWS Resources
| AWS Service         | Purpose                          |
| ------------------- | -------------------------------- |
| Amazon S3           | Hosts the React frontend         |
| Amazon ECS Express  | Runs the Spring Boot backend     |
| Amazon ECR          | Stores the backend Docker image  |
| Amazon RDS          | Hosts PostgreSQL                 |
| AWS Secrets Manager | Stores database credentials      |
| Amazon CloudWatch   | Application logs and monitoring  |
| AWS IAM             | Access control and service roles |


🚀 Deployment Process
1. Develop React and Spring Boot application
                    │
                    ▼
2. Test the application locally
                    │
                    ▼
3. Build the Spring Boot Docker image
                    │
                    ▼
4. Push the Docker image to Amazon ECR
                    │
                    ▼
5. Deploy the container using Amazon ECS Express
                    │
                    ▼
6. Configure PostgreSQL using Amazon RDS
                    │
                    ▼
7. Store database credentials in AWS Secrets Manager
                    │
                    ▼
8. Build the React production application
                    │
                    ▼
9. Deploy the React build to Amazon S3
                    │
                    ▼
10. Monitor application logs using CloudWatch



🌐 Live Endpoints
Frontend
http://aws-task-manager-frontend-403659230847.s3-website-ap-southeast-2.amazonaws.com

Backend
https://ta-150923e0c33747d0bdcb6f749d3f6a89.ecs.ap-southeast-2.on.aws

API Endpoints
GET    /api/tasks
POST   /api/tasks
GET    /api/tasks/{id}
PUT    /api/tasks/{id}
DELETE /api/tasks/{id}


📚 What This Project Demonstrates
Full-stack application development
REST API development
Spring Boot
React
PostgreSQL
Docker containerization
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


👩‍💻 Author
Shriraksha K R
Computer Science Engineering
Mangalore, Karnataka, India

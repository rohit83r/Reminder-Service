# Reminder Service

## Overview

The Reminder Service is a Node.js-based service designed to send email notifications based on specified conditions and times. It utilizes Express for server-side operations, Sequelize as an ORM for database management, and NodeMailer for sending emails. The service also includes a cron job to regularly check and send pending notifications.

## Features

- **Notification Management**: Create and manage notifications, storing them in a database with details like subject, content, recipient email, and notification time.
- **Email Sending**: Automatically sends emails to the specified recipients when the conditions are met.
- **Cron Job for Scheduled Tasks**: A cron job runs periodically to check for and send pending notifications.
- **Input Validation**: Validates request data to ensure correctness and security.
- **Error Handling**: Comprehensive error handling with user-friendly messages and appropriate HTTP status codes.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)


## Installation

To install and set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rohit83r/Reminder-Service.git
   cd Reminder-Service
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Configuration

Create a `.env` file in the root directory of the project to store environment variables. Here is an example of what the `.env` file might include:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=reminder_service
EMAIL_HOST=smtp.mailtrap.io
EMAIL_PORT=2525
EMAIL_USER=your_email_user
EMAIL_PASS=your_email_password
```

Replace the placeholders with your actual database credentials and email service configuration.

## Database Setup

Ensure that your database is set up and running. The service uses Sequelize for ORM, and the following commands can be used to manage the database:

1. **Run migrations**:
   ```bash
   npx sequelize-cli db:migrate
   ```

2. **Seed the database** (optional):
   ```bash
   npx sequelize-cli db:seed:all
   ```

This will create the necessary tables (e.g., `NotificationTicket`) and seed initial data into the database.

## Running the Application

To start the server, use the following command:

```bash
npm start
```

The server will start on the port specified in the `.env` file (default is 3000). The API can then be accessed at `http://localhost:3000`.

## API Endpoints

Here is a list of the main API endpoints:

### **Notification Endpoints**

- **POST `/api/v1/notifications`**
  - Creates a new notification ticket.
  - **Request Body**:
    ```json
    {
      "subject": "Meeting Reminder",
      "content": "Don't forget about the meeting at 3 PM.",
      "recepientEmail": "user@example.com",
      "notificationTime": "2024-08-11T15:00:00Z"
    }
    ```

- **GET `/api/v1/notifications/:id`**
  - Retrieves the details of a specific notification by ID.
  - **Headers**:
    ```json
    {
      "Authorization": "Bearer <JWT_TOKEN>"
    }
    ```

## Project Structure

Here's a high-level overview of the project's structure:

```
Reminder-Service/
├── src/
│   ├── config/
│   │   └── emailConfig.js            # Email configuration
│   ├── controllers/
│   │   └── ticket-controller.js      # Notification ticket controllers
│   ├── migrations/
│   │   ├── 20240808171443-create-notification-ticket.js  # Notification ticket migration
│   ├── models/
│   │   ├── index.js                  # Model aggregator and DB connection
│   │   └── notificationTicket.js     # Notification ticket model definition
│   ├── services/
│   │   └── reminder-service.js       # Notification business logic
│   ├── utils/
│   │   ├── client-error.js           # Client error classes
│   │   ├── error-handler.js          # Central error handling
│   └── index.js                      # Entry point of the application
├── .gitignore                        # Git ignore file
├── README.md                         # Project documentation
├── package.json                      # Node.js dependencies and scripts
└── package-lock.json                 # Dependency lock file
```

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

### Steps to Contribute

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

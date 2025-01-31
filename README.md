# SEVA Hospital Management System

A comprehensive hospital management web application designed to streamline operations, integrate predictive medical AI, and enhance patient care. This system comprises multiple services and components built with modern web technologies.

---

## Project Structure

The project is organized into four main components:

### 1. Client (Frontend)
- **Path:** `/client`
- **Port:** 3000
- **Technology:** React.js
- **Package Manager:** Yarn
- **Description:** The client-side application provides the user interface for hospital staff, patients, and administrators to interact with the system.

### 2. Root Backend (Main Backend)
- **Path:** `/root`
- **Port:** 5000
- **Technology:** Node.js (Express)
- **Database:** SQL Server
- **Description:** The core backend service managing user data, appointments, hospital resources, and API routing.

### 3. Medical AI Backend (Chatbot)
- **Path:** `/medical-ai-backend`
- **Port:** 4000
- **Technology:** Node.js (Express)
- **Description:** An AI-driven chatbot backend that assists users by answering medical queries, providing information, and enhancing the hospital's support services.

### 4. Prediction Logic Backend
- **Path:** `/backend`
- **Port:** 6000
- **Technology:** Node.js (Express)
- **Description:** Backend logic that handles predictive models for medical diagnosis and treatment recommendations.

---

## Deployment Plan

The application is deployed using the following platforms:

- **Frontend:** Vercel
- **Backend:** Render (for various backend services)

---

## Features

1. **Patient and Hospital Staff Management**
   - Manage patient records, appointments, and doctor availability.
   
2. **Medical AI Integration**
   - Provides an intelligent chatbot that supports users with medical inquiries.

3. **Predictive Models**
   - Backend services for predictive healthcare models, improving diagnosis and treatment outcomes.

4. **Availability Scheduling**
   - Track and manage doctor availability efficiently.

---

## Setup Instructions

### Prerequisites

- Node.js
- Yarn
- SQL Server
- Vercel & Render accounts (for deployment)

### Steps

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   ```

2. **Install Dependencies:**
   ```bash
   cd client
   yarn install
   cd ../root
   yarn install
   cd ../medical-ai-backend
   yarn install
   cd ../backend
   yarn install
   ```

3. **Configure Environment Variables:**
   - Create `.env` files in each service folder with necessary environment variables.

4. **Run the Application Locally:**
   ```bash
   # Start frontend
   cd client
   yarn start

   # Start main backend
   cd ../root
   yarn start

   # Start AI backend
   cd ../medical-ai-backend
   yarn start

   # Start prediction backend
   cd ../backend
   yarn start
   ```

5. **Deploy:**
   - Frontend: Deploy via Vercel
   - Backends: Deploy services via Render

---

## Progress & Current Work

### Completed:
- Initial deployment and setup using Vercel and Render.
- Basic hospital management and chatbot functionality.

### Ongoing:
- Further integration of `DoctorAvailability` feature.

---

## Contributing

We welcome contributions to the SEVA Hospital Management System. Please follow the steps below to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push them to your fork.
4. Open a pull request for review.



---

## Contact

For inquiries, please reach out to the project maintainer at [@thefourredflags.gmail.com].



# Blog_APP

A full-stack blog application built with **React** on the frontend, and **Node.js**, **Express**, and **MongoDB** on the backend. This application allows users to create, view, and delete blog posts. The React frontend communicates with the Express backend via REST API.

## Features
- Create, view, and delete blog posts.
- Responsive user interface powered by React.
- Full-stack architecture with a separate frontend and backend.
- Simple and intuitive design.

## Tech Stack
- **Frontend**: 
  - **React**: A JavaScript library for building user interfaces.
  - **React Router**: For routing and navigation within the React app.
- **Backend**: 
  - **Node.js**: JavaScript runtime for the server.
  - **Express**: Web framework for Node.js to build the API.
  - **MongoDB**: NoSQL database for storing blog posts and user data.
  - **Mongoose**: ODM (Object Document Mapping) library for MongoDB.
- **Development Tools**:
  - **Nodemon**: For automatic server restarts during development.
  - **CORS**: Middleware to handle cross-origin requests between React frontend and Express backend.

## Installation

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (latest LTS version)
- [MongoDB](https://www.mongodb.com/) (you can also use MongoDB Atlas for cloud-based DB)
- [Git](https://git-scm.com/) for version control

### Steps to Run the Project Locally

1. **Clone the repository**:
    ```bash
    git clone https://github.com/RianneRay/Blog_APP.git
    cd Blog_APP
    ```

2. **Install server dependencies**:
    - Navigate to the backend folder (if separated) and install dependencies:
    ```bash
    cd backend
    npm install
    ```

3. **Install frontend dependencies**:
    - Navigate to the frontend folder and install dependencies:
    ```bash
    cd ../frontend
    npm install
    ```

4. **Set up environment variables for the backend**:
    - Install `dotenv` to manage environment variables:
      ```bash
      npm install dotenv
      ```
    - Create a `.env` file in the backend project root directory and add your MongoDB connection string:
      ```
      DB_URI=your_mongodb_connection_string
      ```

5. **Start the backend server**:
    - Navigate to the backend directory and start the server with **`nodemon`**:
      ```bash
      cd ../backend
      nodemon app.js
      ```

6. **Start the frontend development server**:
    - Navigate to the frontend directory and run the React app:
      ```bash
      cd ../frontend
      npm start
      ```

7. **Visit the app**:
    - Once both the frontend and backend servers are running, open your browser and visit:
      - [Frontend: http://localhost:3000](http://localhost:3000) 
      - [Backend API (if needed): http://localhost:4000](http://localhost:4000)

---

## Usage

Once the app is running, you can:
- **Create new blog posts** using the "New Blog" button in the navbar.
- **View a list of blog posts** on the homepage.
- **Delete blog posts** by clicking the delete button on individual blog entries.

---

## Environment Variables

To run the backend project, you need to set up environment variables:
- Create a `.env` file in the backend directory.
- Use the `.env.example` file as a reference. Add your own MongoDB connection string, for example:

```plaintext
DB_URI=your_mongodb_connection_string
```

## Contact

If you have any questions, feel free to reach out to:
- **Email**: [riannerayrelevo04@gmail.com](mailto:riannerayrelevo04@gmail.com)
- **GitHub**: [RianneRay](https://github.com/RianneRay)
# Blog App - Backend

This is the backend part of the Blog App, built with **Node.js**, **Express**, and **MongoDB**. It provides RESTful APIs to interact with blog posts. The frontend communicates with these APIs to manage the blog posts.

## Features
- API for creating, reading, updating, and deleting blog posts.
- MongoDB as a database for storing blog data.
- CORS enabled to allow requests from the frontend.

## Tech Stack
- **Node.js**: JavaScript runtime for server-side code.
- **Express**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing blog posts.
- **Mongoose**: ODM (Object Document Mapping) for MongoDB.
- **CORS**: Middleware for handling cross-origin requests.

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (latest LTS version)
- [MongoDB](https://www.mongodb.com/) (you can also use MongoDB Atlas for a cloud-based DB)

### Steps to Set Up Locally

1. **Clone the repository**:
    ```bash
    git clone https://github.com/RianneRay/Blog_APP.git
    cd Blog_APP/backend
    ```

2. **Install server dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    - Create a `.env` file in the `backend/` directory and add your MongoDB connection string:
    ```plaintext
    DB_URI=your_mongodb_connection_string
    ```

4. **Start the backend server**:
    - You can use `nodemon` for automatic server restarts during development:
    ```bash
    nodemon app.js
    ```

    - The backend server should now be running on `http://localhost:4000`.

---

## API Routes

- **GET /blogs**: Get all blogs.
- **GET /blogs/:id**: Get a single blog by ID.
- **POST /blogs**: Create a new blog.
- **DELETE /blogs/:id**: Delete a blog by ID.

---

## Usage

Once the backend server is running, you can interact with the API via any HTTP client (e.g., Postman, CURL). For example:

- **GET all blogs**:
  ```bash
  curl http://localhost:4000/blogs
  ```

curl -X POST http://localhost:4000/blogs -d "title=New Blog&content=This is a new blog."
  
## Contact
If you have any questions, feel free to reach out to:
- **Email**: [riannerayrelevo04@gmail.com](mailto:riannerayrelevo04@gmail.com)
- **GitHub**: [RianneRay](https://github.com/RianneRay)
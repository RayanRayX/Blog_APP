# Blog App - Frontend

This is the frontend part of the Blog App, built with **React**. It communicates with the backend via API endpoints to create, view, and delete blog posts.

## Features
- A responsive user interface built with **React**.
- Ability to view all blog posts and create new ones.
- Simple and intuitive UI/UX for interacting with blog posts.

## Tech Stack
- **React**: JavaScript library for building user interfaces.
- **React Router**: For navigation between different pages in the app.
- **Fetch**: For making HTTP requests to the backend API.

## Installation

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (latest LTS version)
- [Git](https://git-scm.com/) for version control

### Steps to Set Up Locally

1. **Clone the repository**:
    ```bash
    git clone https://github.com/RianneRay/Blog_APP.git
    cd Blog_APP/frontend
    ```

2. **Install frontend dependencies**:
    ```bash
    npm install
    ```

3. **Start the React development server**:
    ```bash
    npm start
    ```

    - The frontend app should now be running on `http://localhost:3000`.

---

## API Endpoints

This frontend app communicates with the backend APIs running on `http://localhost:4000`. Some of the key endpoints include:

- **GET /blogs**: Fetch all blogs.
- **POST /blogs**: Create a new blog.
- **DELETE /blogs/:id**: Delete a blog by ID.

---

## Environment Variables

For local development, ensure the frontend is properly set up to make requests to the backend. If necessary, configure any environment variables in a `.env` file in the `frontend/` directory:

```plaintext
REACT_APP_API_URL=http://localhost:4000
```

## Contact
If you have any questions, feel free to reach out to:
- **Email**: [riannerayrelevo04@gmail.com](mailto:riannerayrelevo04@gmail.com)
- **GitHub**: [RianneRay](https://github.com/RianneRay)
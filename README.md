# Blog_APP

A simple blog application built using the **MERN stack** (MongoDB, Express, React, Node.js). This application allows users to create, view, and delete blog posts.

## Features
- Create blog posts
- View all blog posts
- Delete blog posts
- Responsive and simple user interface

## Tech Stack
- **MongoDB**: NoSQL database for storing blog posts and user data.
- **Express**: Web framework for Node.js.
- **EJS**: Front-end library for building the user interface.
- **Node.js**: JavaScript runtime for the server.

## Installation

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (latest LTS version)
- [MongoDB](https://www.mongodb.com/) (you can also use MongoDB Atlas for cloud-based DB)
- [Git](https://git-scm.com/) for version control

### Steps to Run the Project Locally

1. Clone the repository:
    ```bash
    git clone https://github.com/RayanRayX/Blog_APP.git
    cd Blog_APP
    ```

2. Install server dependencies:
    ```bash
    cd server
    npm install
    ```

3. Install client dependencies:
    ```bash
    cd ../client
    npm install
    ```

4. Set up environment variables:
    - Create a `.env` file in the `server` folder and add your MongoDB connection string and any other required environment variables.
    - Example:
        ```
        MONGODB_URI=mongodb://localhost:27017/blogapp
        JWT_SECRET=your_secret_key
        ```

5. Start the server:
    ```bash
    cd ../server
    npm start
    ```

6. Start the client:
    ```bash
    cd ../client
    npm start
    ```

7. Visit the app in your browser at:  
    [http://localhost:3000](http://localhost:3000)

## Usage
Once the app is running, you can:
- Register and log in to your account.
- Create new blog posts.
- View a list of blog posts on the home page.
- Edit or delete any blog posts you’ve created.

## Contributing

We welcome contributions! If you’d like to contribute to the project, please fork the repository and create a pull request. Ensure that you:
- Follow proper code style and conventions.
- Write tests for new features or bug fixes.
- Update documentation if needed.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions, feel free to reach out to:
- **Email**: [your-email@example.com](mailto:your-email@example.com)
- **GitHub**: [RayanRayX](https://github.com/RayanRayX)


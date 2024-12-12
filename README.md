# Blog_APP

A simple blog application built using **Node.js** and **Express**. This application allows users to create, view, and delete blog posts. It uses MongoDB for data storage and does not include a separate client-side (React) setup.

## Features
- Create blog posts
- View all blog posts
- Delete blog posts
- Responsive and simple user interface

## Tech Stack
- **MongoDB**: NoSQL database for storing blog posts and user data.
- **Express**: Web framework for Node.js.
- **Node.js**: JavaScript runtime for the server.

## Installation

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (latest LTS version)
- [MongoDB](https://www.mongodb.com/) (you can also use MongoDB Atlas for cloud-based DB)
- [Git](https://git-scm.com/) for version control

### Steps to Run the Project Locally

1. **Clone the repository**:
    ```bash
    git clone https://github.com/RayanRayX/Blog_APP.git
    cd Blog_APP
    ```

2. **Install server dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    - Install `dotenv` to manage environment variables:
      ```bash
      npm install dotenv
      ```
    - Create a `.env` file in the project root directory and add your MongoDB connection string. For example:
      ```
      DB_URI=your_mongodb_connection_string
      ```
    - Replace `your_mongodb_connection_string` with your actual MongoDB URI (from MongoDB Atlas or your local setup).

4. **Start the server**:
    - Use **`nodemon`** to start the app. This will automatically restart the server when code changes are detected:
      ```bash
      nodemon app.js
      ```

5. **Visit the app**:
    - Once the server is running, open your browser and visit:
      [http://localhost:3000](http://localhost:3000)

---

## Usage

Once the app is running, you can:
- Create new blog posts.
- View a list of blog posts on the home page.
- Delete any blog posts you’ve created.

---

## Environment Variables

To run the project, you need to set up environment variables:
- Create a `.env` file in the root directory of the project.
- Use the `.env.example` file as a reference. Add your own MongoDB connection string:

## Contributing

We welcome contributions! If you’d like to contribute to the project, please fork the repository and create a pull request. Ensure that you:
- Follow proper code style and conventions.
- Write tests for new features or bug fixes.
- Update documentation if needed.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions, feel free to reach out to:
- **Email**: [riannerayrelevo04@gmail.com](mailto:riannerayrelevo04@gmail.com)
- **GitHub**: [RayanRayX](https://github.com/RayanRayX)


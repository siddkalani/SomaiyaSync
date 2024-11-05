Project Name : SomaiyaSync 
Project Description:
This project is a comprehensive platform that allows users to create profiles, search and connect with others, participate in quizzes, view news updates, check leaderboards, and manage documents. The platform includes a user dashboard and an admin dashboard, providing tools for administrators to post news and updates effectively.


Features
Authentication: User login, registration, and session management.
Profile Setup: User profile creation and editing.
Search Users: Find and connect with other users.
Play Quiz: Participate in quizzes and view scores.
View News Updates: Access latest news and updates.
Check Leaderboard: Real-time leaderboard display.
User Dashboard: Personalized dashboard for accessing various features.
Admin Dashboard: Allows admins to post news and manage documents.

Tech Stack
Frontend: React (for web), React Native (for mobile)
Backend: Node.js, Express
Database: MongoDB (NoSQL)
Authentication: JSON Web Tokens (JWT)
Other Tools: Lerna (for monorepo), Redux (state management)

Installation
Clone the repository:

git clone <repository-url>


The application uses MongoDB for data storage. Configure MongoDB as follows:

Create a MongoDB Atlas account or set up a local MongoDB instance.
Create the necessary database and collections, or allow the application to create them automatically on first use.
Database URI Example:

mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
Environment Variables
Create a .env file in the root of your project with the following keys:

PORT=3000
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
Usage
Start the Backend:
npm start
Start the Frontend:
npm run dev

Access the application:
User Dashboard: http://localhost:3000/user
Admin Dashboard: http://localhost:3000/admin

Contributions are welcome! Please follow these steps:
Fork the repository.
Create a new branch (feature-branch).
Commit your changes.
Push to the branch.
Open a Pull Request.
License
This project is licensed under the MIT License.

Contact
For any inquiries, please contact siddharthkalani@somaiya.edu

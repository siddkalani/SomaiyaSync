const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const cors = require("cors");
const logger = require("morgan")

const app = express();

app.use(logger("dev"))

// const allowedOrigins = ["http://localhost:5173"];
// app.use(
//   cors({
//     origin: function (origin, callback) {
//       // Check if the origin is allowed
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true, // Allow credentials (cookies, authorization headers, etc.)
//   })
// );

app.use(cors())

const port = process.env.PORT || 4200;
connectDb();

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/news", require("./routes/newsRoutes"));
app.use("/api/documents", require('./routes/docRoutes'))
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Sever is running on port: ${port}`);
});

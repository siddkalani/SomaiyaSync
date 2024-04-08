const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const cors = require("cors");

const app = express();
app.use(cors());

const port = process.env.PORT || 4200;
connectDb();

app.use(express.json());
app.use(express.static(path.join(__dirname, "somaiyasync", "src")));
app.get("/email", (req, res) => {
  res.redirect("http://localhost:5173/email");
});
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Sever is running on port: ${port}`);
});

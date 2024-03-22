import express from "express";
import cors from "cors";
const app = express();
import { Students } from "./users.js";

app.use(cors());

app.get("/", (req, res) => {
  const { q } = req.query;
  const keys = ["name", "email"];
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(q))
    );
  };
  res.json(search(Students));
});

app.listen(4200, () => console.log("Api is working"));

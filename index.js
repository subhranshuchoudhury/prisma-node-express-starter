const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
require("dotenv").config();
app.use(express.json());
app.use(cookieParser());

const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoute");

// app.use("/api", userRoutes);

app.use("/api", userRoutes);
app.use("/api/post", postRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

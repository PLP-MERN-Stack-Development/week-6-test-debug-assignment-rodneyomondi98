const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config();

dotenv.config();
const bugRoutes = require("./routes/bugRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/bugs", bugRoutes);

app.get("/", (req, res) => res.send("Bug Tracker API running"));

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((err) => console.error(err));

  // server/src/index.js
const errorHandler = require("./middleware/errorHandler");

// ... after all routes
app.use(errorHandler);

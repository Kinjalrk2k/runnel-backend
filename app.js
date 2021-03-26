const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const db = process.env.mongoURI;
const app = express();

app.use(cors());

// Express BodyParser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log(`MongoDB connected successfully`))
  .catch((err) => console.log(`Error connecting mongodb ` + err));

app.get("/", (req, res) => {
  res.json({
    app: "Runnel",
    developer: "Kinjal Raykarmakar",
  });
});

app.use("/streams", require("./routes/streams"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

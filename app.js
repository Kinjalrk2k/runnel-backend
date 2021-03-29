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

app.use("/streams", require("./routes/streams"));

app.get("/", (req, res) => {
  res.json({
    app: "Runnel",
    developer: "Kinjal Raykarmakar",
  });
});

const server = require("http").Server(app);
const io = require("socket.io")(server, { origins: "*:*" });

io.on("connection", (socket) => {
  // EVENT - Join a room
  socket.on("join-room", (roomId, userId) => {
    socket.join(roomId);
    // socket.to(roomId).broadcast.emit("user-connected", userId);

    // EVENT - Message on a room
    socket.on("message", (messageObj) => {
      // console.log(roomId);
      console.log(messageObj);
      io.to(roomId).emit("buildMessage", messageObj);
    });
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

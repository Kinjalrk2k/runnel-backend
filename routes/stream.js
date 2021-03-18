const router = require("express").Router();
const Stream = require("../models/Stream");

router.post("/", async (req, res) => {
  const newStream = await Stream.create(req.body);
  res.json(newStream);
});

router.get("/", async (req, res) => {
  const streams = await Stream.find();
  res.json(streams);
});

module.exports = router;

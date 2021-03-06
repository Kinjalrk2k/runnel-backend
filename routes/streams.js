const router = require("express").Router();
const Stream = require("../models/Stream");

router.post("/", async (req, res) => {
  const newStream = await Stream.create(req.body);
  res.json(newStream);
});

router.get("/", async (req, res) => {
  const streams = await Stream.find().sort("-createdOn");
  res.json(streams);
});

router.get("/:id", async (req, res) => {
  const stream = await Stream.findById(req.params.id);
  res.json(stream);
});

router.patch("/:id", async (req, res) => {
  const editedStream = await Stream.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(editedStream);
});

router.delete("/:id", async (req, res) => {
  await Stream.findByIdAndDelete(req.params.id);
  res.json({});
});

router.get("/streamer/:id", async (req, res) => {
  const streams = await Stream.find({ userId: req.params.id }).sort(
    "-createdOn"
  );
  res.json(streams);
});

module.exports = router;

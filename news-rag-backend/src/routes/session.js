const express = require("express");
const { v4: uuidv4 } = require("uuid");
const prisma = require("../config/db");
const { client: redis } = require("../config/redis");

const router = express.Router();

// Start a new session
router.post("/start", async (req, res) => {
 console.log("hey")
  try {
    const sessionId = uuidv4();

    await prisma.session.create({ data: { sessionId } });
    await redis.set(`session:${sessionId}`, JSON.stringify([]));

    res.json({ sessionId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Get session history from Redis
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const history = await redis.get(`session:${id}`);
    res.json({ sessionId: id, messages: history ? JSON.parse(history) : [] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Clear session
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await redis.del(`session:${id}`);
    await prisma.session.deleteMany({ where: { sessionId: id } });
    res.json({ message: "Session cleared" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router
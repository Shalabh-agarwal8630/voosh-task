// Load environment variables
const dotenv = require("dotenv");
dotenv.config();

// Core dependencies
const express = require("express");

// Config
const prisma = require("./config/db");
const { connectRedis } = require("./config/redis");

// Initialize app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("RAG Chatbot Backend is running");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Start server
async function startServer() {
  try {
    // Connect to Redis
    await connectRedis();

    // Connect to Postgres
    await prisma.$connect();
    console.log("✅ Postgres connected");

    // Start Express server
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

startServer();

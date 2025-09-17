const { createClient } = require("redis");

const client = createClient({
  url: process.env.REDIS_URL,
});

client.on("connect", () => {
  console.log(" Redis connected!!");
});

client.on("error", (err) => {
  console.error(" Redis error:", err);
});

async function connectRedis() {
  if (!client.isOpen) {
    await client.connect();
  }
}

module.exports = { client, connectRedis };

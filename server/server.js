const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
// const port = process.env.PORT || 3001;
const port = 3001;

// Thay đổi thông tin kết nối tại đây
const mongoURI =
  "mongodb+srv://trituyen2003:prodigy123@cluster0.g0egnsd.mongodb.net/";

async function connectToMongoDB() {
  const client = new MongoClient(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    // Định nghĩa các API endpoints ở đây

    // Ví dụ:
    app.get("/api/data", async (req, res) => {
      const db = client.db();
      const collection = db.collection("prodigy");
      const data = {
        users: ["user1", "user1", "user1"],
      };
      res.json(data);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToMongoDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

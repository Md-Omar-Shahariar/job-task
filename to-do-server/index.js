const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;
const uri =
  "mongodb+srv://to_do:oLfFESxRhjuJY87w@cluster0.rkerf.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    const users = client.db("to_do").collection("users");
    app.post("/users", async (req, res) => {
      const doc = req.body;
      const result = await users.insertOne(doc);
      res.send(result);
    });
    app.get("/users", async (req, res) => {
      const doc = { email: req?.query?.email };
      //   const result = await users.insertOne(doc);
      //   res.send(result);
      const result = await users.find(doc).toArray();
      res.send(result);
      console.log(result);
    });
  } finally {
    // Ensures that the client will close when you finish/error
    //   await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("hellow");
});

app.listen(port, () => {
  console.log("Listening to server");
});

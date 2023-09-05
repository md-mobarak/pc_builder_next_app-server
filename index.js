import express, { json } from "express";
import cors from "cors";
// const jwt = require("jsonwebtoken");
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";
const app = express();
const port = 5000;
require("dotenv").config();

app.use(json());
app.use(cors());

const uri = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@cluster0.q2xfa14.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    await client.connect();
  } catch (err) {}
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

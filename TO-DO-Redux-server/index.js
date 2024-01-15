const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const port = process.env.PORT || 5000;

// middleware
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.crku76a.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // await client.connect();

    // collection
    const taskCollection = client.db("todo").collection("tasks");

    app.get("/tasks", async (req, res) => {
      let query = {};
      if (req.query.priority) {
        query.priority = req.query.priority;
      }
      const cursor = taskCollection.find(query);
      const tasks = await cursor.toArray();
      res.send({ status: true, data: tasks });
    });

    app.post("/task", async (req, res) => {
      const task = req.body;
      const result = await taskCollection.insertOne(task);
      res.send(result);
    });

    app.get("/task/:id", async (req, res) => {
      const id = req.params.id;
      const result = await taskCollection.findOne({ _id: new ObjectId(id) });
      // console.log(result);
      res.send(result);
    });

    app.delete("/task/:id", async (req, res) => {
      const id = req.params.id;
      const result = await taskCollection.deleteOne({ _id: new ObjectId(id) });
      res.send(result);
    });

    // status update
    app.put("/task/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const task = req.body;
      const filter = { _id: ObjectId(id) };
      const updateDoc = {
        $set: {
          isCompleted: task.isCompleted,
          title: task.title,
          description: task.description,
          priority: task.priority,
        },
      };
      const options = { upsert: true };
      const result = await taskCollection.updateOne(filter, updateDoc, options);
      res.json(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// define a route
app.get("/", (req, res) => {
  res.send("to do app server is running");
});

// start the server
app.listen(port, () => {
  console.log("listening on port " + port);
});

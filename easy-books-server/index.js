const express = require('express');
const cors = require("cors");
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json());


// test route
app.get("/", (req, res) => {
    res.send("EasyBooks Server is running");
});

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        // Here is Collection
        const database = client.db("easybooks");
        const booksCollection = database.collection("books");


        // Here is API
        app.get("/books", async (req, res) => {
            const cursor = booksCollection.find();
            const result = await cursor.toArray()
            res.json(result);
        })

        app.get("/books/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id)};
            const result = await booksCollection.findOne(query);
            res.json(result);
        })

        app.post("/books", async (req, res) => {
            const newBook = req.body;
            const result = await booksCollection.insertOne(newBook);
            res.json(result);
        })

        
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {

        // await client.close();
    }
}
run().catch(console.dir);

// =========================================
// start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
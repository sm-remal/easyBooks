const express = require('express');
const cors = require("cors");
require('dotenv').config(); 
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const bcrypt = require('bcryptjs');

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
        const usersCollection = database.collection("users");

                // --- AUTH API: Registration ---
        app.post("/register", async (req, res) => {
            const { name, email, password } = req.body;

            const existingUser = await usersCollection.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: "User already exists!" });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = {
                name,
                email,
                password: hashedPassword,
                role: 'user', 
                createdAt: new Date()
            };

            const result = await usersCollection.insertOne(newUser);
            res.status(201).json({ message: "User registered successfully", result });
        });

        // --- AUTH API: Login ---
        app.post("/login", async (req, res) => {
            const { email, password } = req.body;

            const user = await usersCollection.findOne({ email });
            if (!user) {
                return res.status(404).json({ message: "User not found!" });
            }

            const isPasswordCorrect = await bcrypt.compare(password, user.password);
            
            if (!isPasswordCorrect) {
                return res.status(401).json({ message: "Invalid password!" });
            }

            
            const { password: _, ...userData } = user;
            res.json(userData);
        });


        // -------- Book Related API ---------
        app.get("/books", async (req, res) => {
            const cursor = booksCollection.find();
            const result = await cursor.toArray()
            res.json(result);
        })

        app.get("/books-latest", async (req, res) => {
            const cursor = booksCollection.find().limit(8);
            const result = await cursor.toArray();
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
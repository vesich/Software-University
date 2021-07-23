const express = require('express');
const mongoose = require('mongoose');
const cors = require('./middlewares/cors');


const furnitureController = require('./controllers/furnitureController');
const usersController = require('./controllers/usersController');
const auth = require('./middlewares/auth');

start();

async function start() {

    await new Promise((resolve, reject) => {
        mongoose.connect('mongodb://localhost:27017/furniture-rest', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        const db = mongoose.connection;
        db.once('open', () => {
            console.log('Database connected!');
            resolve();
        });
        db.on('error', (err) => reject(err))
    })

    const app = express();

    app.use((req, res, next) => {
        console.log(req.headers);

        next();
    })

    app.use(cors());
    app.use(auth());
    app.use(express.json())

    app.use('/data/catalog', furnitureController);
    app.use('/users', usersController);

    app.get("/", (req, res) => {
        res.send("REST Service operational. Send requests to /api");
    });

    app.listen(5000, () => console.log("Server is listening on port 5000"));
}


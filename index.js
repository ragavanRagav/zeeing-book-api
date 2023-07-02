const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const { initializeDB } = require('./entity');
const bookRouter = require("./router/books");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/book",bookRouter);

app.get("/",(req,res)=>{
    res.status(200).send("App is up and running");
});


app.listen(PORT,async ()=>{
    await initializeDB();
    console.log(`App is listening to http://localhost:${PORT}`);
})
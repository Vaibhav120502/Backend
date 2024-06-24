const express = require('express');
require('dotenv').config();


const app = express();
const port = process.env.PORT;

app.get('/' ,(req , res) => {
    res.send('hello veere');
});

app.listen(port , () => {
    console.log(`example is running on port ${port}`)
})
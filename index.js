const express = require('express');
const data = require('./database/db.js')

const app = express();
const PORT = 3000

app.post("/allrecipe", (req, res) => {
    data.find()
    .then(recipe => res.json(recipe))
    .catch(error => res.status(500).json({ error: 'Error getting the info'}));
})

app.listen(PORT, () => {
    console.log(`Server is started on ${PORT}`)
})
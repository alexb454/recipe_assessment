const express = require('express');
const data = require('./database/db.js')

const app = express();
const PORT = 3000

app.post("/allrecipe", data.all_recipes)

app.listen(PORT, () => {
    console.log(`Server is started on ${PORT}`)
})
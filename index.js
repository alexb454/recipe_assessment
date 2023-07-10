const express = require('express');
const data = require('./database/db.js')

const app = express();
const PORT = 3000

//app.get('/all_recipes', data.All_Recipes);

app.get('/all_recipes', async (req, res) => {
    try {
    const recipes = await data.All_Recipes();
    res.json(recipes);
    } catch (error) {
    console.error('Error getting the recipes:', error);
    res.status(500).json({ error: 'Error getting the recipes' });
    }
});

// app.get(data.All_Recipes, (req, res) => {
//     data.find()
//     .then(recipe => res.json(recipe))
//     .catch(error => res.status(500).json({ error: 'Error getting the info'}));
// })

app.listen(PORT, () => {
    console.log(`Server is started on ${PORT}`)
})
const express = require('express');
const data = require('./database/db.js');
const cors = require('cors');

const app = express();
const PORT = 3000

app.use(cors());

app.get('/all_recipes', async (req, res) => {
    try {
        const recipes = await data.All_Recipes();
        res.json(recipes);
    } catch (error) {
        console.error('Error getting the recipes:', error);
        res.status(500).json({ error: 'Error getting the recipes' });
    }
});

app.get('/id_recipe/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        console.log(req.params)
        if (isNaN(id)) {
            throw new Error('Invalid ID');
        }
        const recipe = await data.id_recipe(id);
        res.json(recipe);
    } catch (error) {
        console.log('error getting the id:', error);
        res.status(500).json({ error: 'Error getting the id' })
    }
});

app.get('/random_recipe', async (req, res) => {
    try {
        const ran_recipe = await data.random_recipe();
        res.json(ran_recipe);
    } catch (error) {
        console.log('error getting the random id:', error);
        res.status(500).json({ error: 'Error getting the random id' })
    }
});

app.listen(PORT, () => {
    console.log(`Server is started on ${PORT}`)
})
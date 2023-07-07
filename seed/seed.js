const pool = require('pg').Pool;
const data = require('../data/recipes.json');

const recipes = data;
recipes.forEach(recipe => {
    const {id, title, ingrediants, instructions, times, image} = recipe
})

const db = new pool({
    user: 'postgres',
    host: 'localhost',
    database: 'recipe',
    password: 'password',
    port: 5432,
})

async function Seed() {
    try {
        await db.connect();

        for (const recipedb of recipes) {
            await db.query('INSERT INTO recipe (id, title, ingredients, instructions, times, image) VALUES ($1, ARRAY[$2], $3, $4, $5, $6)', [
                recipedb.id, recipedb.title, recipedb.ingredients, recipedb.instructions, recipedb.times, recipedb.image
            ]);
        }
        console.log('Recipes are in the database!');
    } catch (error) {
        console.error('sadness happend, issue with inserting data:', error);
    } finally {
        await db.end();
    }
}

Seed();
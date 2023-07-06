import pool from 'pg';
import data from '../data/recipes.json';


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

        for (const recipedb of data) {
            await db.query('INSERT INTO recipe (id, title, ingredients, instructions, times, image) VALUES ($1, $2, $3, $4, $5, $6)', [
                recipedb.body.id, recipedb.body.title, recipedb.body.ingredients, recipedb.body.instructions, recipedb.body.times, recipedb.body.image
            ]);
        }
        console.log('Recipes are in the database!');
    } catch (error) {
        console.error('sadness happend, issue with inserting data:', error);
    } finally {
        await db.end();
    }
}

export default Seed();
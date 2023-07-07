const pool = require('pg').Pool;

const db = new pool({
    user: 'postgres',
    host: 'localhost',
    database: 'recipe',
    password: 'password',
    port: 5432,
})

//post
async function Create() {
    try {
        await db.connect();

        for (const createdb of create_info) {
            await db.query('INSERT INTO recipe (id, title, ingredients, instructions, times, image) VALUES ($1, $2, $3, $4, $5, $6)', [
                createdb.id, createdb.title, createdb.ingredients, createdb.instructions, createdb.times, createdb.image
            ]);
        }
        console.log('New recipes are in the database!');
    } catch (error) {
        console.error('sadness happend, issue with inserting data:', error);
    } finally {
        await db.end();
    }
}

//get
const all_recipes = async (req, res) => {
    try {
        await db.connect();
        let results = await db.query("SELECT * FROM recipe")

    } catch (error) {
        console.error('could not get data:', error);
    } finally {
        res.send(results.row)
        await db.end()
    }

}
// const id_recipe = await db()
// const ingredients_recipes = await db()
// const title_recipes = await db()
// const number_of_ingredients = await db()
// const random = await db()


//put
// const update_recipe = await db()
//delete
// const delete_recipe = await db()

module.exports = {
    all_recipes,
    Create
}

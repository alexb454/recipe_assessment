const pool = require('pg').Pool;

const db = new pool({
    user: 'postgres',
    host: 'localhost',
    database: 'recipe',
    password: 'password',
    port: 5432,
})

//post
//not tested or set up in front ed
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

const All_Recipes = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM recipe');
        console.log("all recipes are found and sent");
        return result.rows;
    } catch (error) {
        console.error("a major upset, issue with getting the data:", error);
        throw error;
    }
};

const id_recipe = async (id) => {
    try {
        const result = await db.query('SELECT id, title, times, image FROM recipe WHERE id = $1', [id]);
        console.log(id);
        console.log('ID of recipe found and sent');
        return result.rows[0];
    } catch (error) {
        console.error('Id not found or issue retrieving the data', error);
        throw error;
    }
}

// const ingredients_recipes
// const title_recipes
// const number_of_ingredients

const random_recipe = async (req, res) => {
    try {
        const result = await db.query('SELECT id, title, times, image FROM recipe ORDER BY RANDOM() LIMIT 1');
        console.log('Random ID of recipe found and sent');
        return result.rows[0];
    } catch (error) {
        console.error('Random id not found or issue retrieving the data', error);
        throw error;
    }
};

//put
// const update_recipe
//delete
// const delete_recipe

module.exports = {
    All_Recipes,
    id_recipe,
    random_recipe,
    Create
}

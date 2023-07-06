import pool from 'pg';

const db = new pool({
    user: 'postgres',
    host: 'localhost',
    database: 'recipe',
    password: 'password',
    port: 5432,
})

//post
const create_recipes = await db.query(
    'INSERT INTO recipe (title, ingredients, instructions, times, image) VALUES($1, $2, $3, $4, $5) RETURNING *'
    [req.body.title, req.body.ingredients, req.body.instructions, req.body.times, req.body.image]
)
console.log('created recipe successfully')

//get
// const all_recipes = await db()
// const id_recipe = await db()
// const ingredients_recipes = await db()
// const title_recipes = await db()
// const number_of_ingredients = await db()
// const random = await db()
//put
// const update_recipe = await db()
//delete
// const delete_recipe = await db()
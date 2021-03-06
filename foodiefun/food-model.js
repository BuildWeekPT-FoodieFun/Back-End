const db = require("../database/db-config");

module.exports = {
    add,
    update,
    remove,
    find,
    findById,
    findByRestaurant,
    // findByPrice,
    findByType,
    findByDate,
    findByRating    
}

function add(foodentry) {
    return db("foodentries").insert(foodentry)
}

function update(changes, id) {
    return db("foodentries").where({id}).update(changes)
}

function remove(id) {
    return db("foodentries").where({id}).del();
}

//List of all food entries
function find() {
    return db("foodentries")
}

//Single food item by ID
function findById(id) {
    return db("foodentries").where({id}).first();
}

function findByRestaurant(restaurant) {
    return db("foodentries").where({ restaurant }).first();
}

// function findByPrice(price) {

// }

function findByType(type) {
    return db("foodentries").where({ type }).first();
}

function findByDate(date) {
    return db("foodentries").where({ price }).first();
}

function findByRating(rating) {
    return db("foodentries").where({ rating }).first();
}
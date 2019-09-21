
exports.up = function(knex) {
    return knex.schema
    .createTable("foodentries", table => {
        table.increments();
        table.text("item_name")
            .notNullable();
        table.text("restaurant_name")
            .notNullable();
        table.text("restaurant_type")
            .notNullable();
        table.integer("rating")
            .unsigned()
            .notNullable();
        table.decimal("price", 6,2)
            .unsigned();
        table.text("comments")
        table.time("wait_time")
            .unsigned()
        table.date("date");
        table.blob("photo");
    })  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("foodentries");  
};

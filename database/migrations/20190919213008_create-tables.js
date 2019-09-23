
exports.up = function(knex) {
    return knex.schema
    .createTable("users", table => {
        table.increments();
        table.string("username", 64)
            .notNullable()
            .unique();
        table.string("password", 64)
    })
    
    .createTable("foodentries", table => {
        table.increments();
        table.text("item_name")
            .notNullable();
        table.string("restaurant_name", 64)
            .notNullable();
        table.text("restaurant_type")
            .notNullable();
        table.integer("rating", 1)
            .unsigned()
            .notNullable();
        table.decimal("price", 6,2)
            .unsigned();
        table.text("comments")
        table.time("wait_time")
            .unsigned()
        table.date("date");
        table.blob("photo");
        table.integer("user_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("users")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("foodentries")
    .dropTableIfExists("users");  
};

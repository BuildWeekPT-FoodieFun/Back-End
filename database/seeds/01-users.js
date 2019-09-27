
exports.seed = function(knex, Promise) {
  return knex("users").insert([
    { username: "curtis", password: "password" },
  ]);
};
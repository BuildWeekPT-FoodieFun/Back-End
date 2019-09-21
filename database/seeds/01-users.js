
exports.seed = function(knex, Promise) {
  return knex("users").insert([
    { username: "curtis", password: "password" },
    { username: "robert1", password: "password" },
    { username: "robert2", password: "password" },
    { username: "robert3", password: "password" },
    { username: "heather", password: "password" },
    { username: "rachell", password: "password" },
    { username: "edwin", password: "password" },
  ]);
};
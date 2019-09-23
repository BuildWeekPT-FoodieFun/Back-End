
exports.seed = function(knex, Promise) {
  return knex("foodentries").insert([
    { item_name: "Mad Love Burger", 
      restaurant_name: "Red Robin", 
      restaurant_type: "Gourmet Burgers",
      rating: 5,
      price: 10.00,
      comments: "Best burger ever!",
      date: 09/19/2019,
      user_id: 1      
    },
    {
      item_name: "Italian Meat Lovers Pizza",
      restaurant_name: "Calabria",
      restaurant_type: "Brick Oven Pizza",
      rating: 5,
      comments: "Best pizza in Nashville",
      user_id: 3
    },
    {
      item_name: "Chilli Cheese Fries",
      restaurant_name: "Wendys",
      restaurant_type: "Fast Food",
      rating: 3,
      comments: "At least it was cheap",
      price: 2.94,
      user_id: 1
    },
  ]);
};

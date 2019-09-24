const express = require("express");
const Food = require("./food-model");
const router = express.Router();

router.get("/", (req, res) => {
    Food.find()
    .then(food => {
        res.json(food);
    })
    .catch(err => {
        res.status(500).json({
            message: "Failed to get food posts"
        });
    });
});

router.get("/:id", (req, res) => {
    const {id} = req.params;
    Food.findById(id)
    .then(food => {
        if (food) {
            res.json(food);
        } else {
            res.status(404).json({
                message: "Could not find food entry by given ID"
            });
        }
    })
    .catch(err => {
        res.status(500).json({
            message: "Failed to get food entry"
        });
    });
});

router.post("/", (req, res) => {
    const foodData = req.body;

    Food.add(foodData)
    .then(newFood => {
        res.status(201).json(newFood);
    })
    .catch(err => {
        res.status(500).json({
            message: "Failed to create new food entry"
        });
    });
});

router.put("/:id", (req, res) => {
    const {id} = req.params;
    const changes = req.body;

    Food.update(changes, id)
    .then(food => {
        if (food) {
            res.json({
                updated: food
            })
        } else {
            res.status(404).json({
                message: "Could not find food item with given ID"
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            message: "Failed to update food item"
        })
    })
})

router.delete("/:id", (req, res) => {
    const {id} = req.params;

    Food.remove(id)
    .then (count => {
        if (count) {
            res.json({
                removed: count
            });
        } else {
            res.status(404).json({
                message: "Could not find food item with given ID"
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            message: "Failed to delete food item"
        })
    })
})

module.exports = router;
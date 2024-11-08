const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");

//here only we create route and manage all the routes under the controllers

/**
 App Routes

 
 */
// Home page --->
router.get("/", recipeController.homepage);
router.get("/categories", recipeController.exploreCategories);
router.post("/search", recipeController.searchRecipe);
router.get("/submit-recipe", recipeController.submitRecipe);

module.exports = router;

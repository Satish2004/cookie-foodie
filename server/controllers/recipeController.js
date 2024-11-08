require("../models/database"); // Ensure this is the correct path
const Category = require("../models/Category");
const Recipe = require("../models/Recipe");

/**
 * GET "/"
 * HOME PAGE
 */
exports.homepage = async (req, res) => {
  try {
    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);
    const latest = await Recipe.find({}).sort({ _id: -1 }).limit(limitNumber);
    const food = { latest };

    res.render("index", { title: "Cookie-foodie-Home", categories, food });
  } catch (error) {
    // console.log(error);
    res.status(500).send({ message: error.message || " Error Occured" });
  }
};

/**
 * GET "/categories"
 * exploreCategories
 */

exports.exploreCategories = async (req, res) => {
  try {
    const limitNumber = 20;
    const categories = await Category.find({}).limit(limitNumber);
    res.render("categories", { title: "category page", categories });
  } catch (error) {
    // console.log(error);
    res.status(500).send({ message: error.message || " Error Occured" });
  }
};

//Search Functionality

exports.searchRecipe = async (req, res) => {
  try {
    let searchTerm = req.body.searchTerm;
    let recipe = await Recipe.find({
      $text: { $search: searchTerm, $diacriticSensitive: true },
    });
    res.json(recipe);

    res.render("search", { title: "category page-search", recipe });
  } catch (error) {
    res.status(500).send({ message: error.message || " Error Occured" });
  }
};

exports.submitRecipe = async (req, res) => {
  try {
    res.render("submit-recipe", {
      title: "category page-submit-recipe",
    });
  } catch (error) {
    res.status(500).send({ message: error.message || " Error Occured" });
  }
};

/**
 * Function to insert dummy category data
 * Call this only once or conditionally to avoid inserting data every time the app runs
 */
// async function insertDummyCategoryData() {
//   try {
//     const existingCategories = await Category.find(); // Check if data already exists
//     if (existingCategories.length === 0) {
//       await Category.insertMany([
//         {
//           name: "Thai",
//           image: "thai-FontFaceSetLoadEvent.jpg",
//         },
//         {
//           name: "American",
//           image: "american-food.jpg",
//         },
//         {
//           name: "Chinese",
//           image: "chinese-food.jpg",
//         },
//         {
//           name: "Mexican",
//           image: "mexican-food.jpg",
//         },
//         {
//           name: "Indian",
//           image: "indian-food.jpg",
//         },
//         {
//           name: "Spanish",
//           image: "spanish-food.jpg",
//         },
//       ]);
//       console.log("Dummy categories inserted!");
//     } else {
//       console.log("Categories already exist in the database.");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// // Insert the dummy data once (call this only in development mode or once)
// insertDummyCategoryData();

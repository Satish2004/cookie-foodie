const mongoose = require("mongoose");

// Create categorySchema which will be used in the database
//  this section individual  category section when user touch any category so we make another database like name discription etc

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "This field is required",
  },
  discription: {
    type: String,
    required: "This field is required",
  },
  email: {
    type: String,
    required: "This field is required",
  },
  Ingredients: {
    type: Array,
    required: "This field is required",
  },
  category: {
    type: String,
    enum: ["Thai", "American", "Chinese", "Mexican", "Indian"],
    required: "This field is required",
  },
  image: {
    type: String,
    required: "This field is required",
  },
});
recipeSchema.index({ name: "text", description: "text" });
// wildCard Indexing
// recipeSchema.index({ "$**": "text" });


// Export the model
module.exports = mongoose.model("Recipe", recipeSchema);

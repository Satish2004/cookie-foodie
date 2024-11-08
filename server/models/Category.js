const mongoose = require("mongoose");

// Create categorySchema which will be used in the database
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: "This field is required",
  },
  image: {
    type: String,
    required: "This field is required",
  },
});

// Export the model
module.exports = mongoose.model("Category", categorySchema);

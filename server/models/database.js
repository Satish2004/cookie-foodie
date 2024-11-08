const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true, 
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("MongoDB connected!");
});

// Require your models to ensure they are registered
require("../models/Category"); 
require("../models/Recipe");

const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();

const port = process.env.PORT || 3000;

require("dotenv").config(); // for all private file in .env

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
const path = require("path");

app.use(expressLayouts);
// Setting the path to the views folder
app.set("views", path.join(__dirname, "views"));
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");
const routes = require("./server/routes/recipeRoutes.js");
app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});

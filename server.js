let express = require("express");
let bodyParser = require("body-parser");
let methodOverride = require("method-override");
let PORT = process.env.PORT || 8080;
let app = express();

require('dotenv').config().

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method", ["POST", "GET"]));

let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


let routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
  });

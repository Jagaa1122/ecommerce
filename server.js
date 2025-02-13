const express = require("express");
const { createUser, getProfile, loginUser } = require("./services/user-routes");
const { createProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct } = require("./services/product-routes");

const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());

//User Routes
app.post("/user/new", createUser);
app.post("/user/loginUser", loginUser);
app.get("/user/:id", getProfile);

//Product Routes
app.post("/products", createProduct);
app.get("/products", getAllProducts);
app.get("/products/:id", getSingleProduct);
app.put("/products/:id", updateProduct);
app.delete("/products/:id", deleteProduct);

app.listen(6000, () => {
  console.log(`My backend is started at ${6000}`);
});

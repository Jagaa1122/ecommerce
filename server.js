const express = require("express");
const { createUser, getProfile, loginUser } = require("./services/user-routes");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser());

//User Routes
app.post("/user", createUser);
app.post("/user/loginUser", loginUser);
app.get("/user/:id", getProfile);

//Product Routes
app.post("/product", createUser);
app.get("/user/:id", getProfile);

app.listen(6000, () => {
  console.log(`My backend is started at ${6000}`);
});

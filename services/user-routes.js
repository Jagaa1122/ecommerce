const { users } = require("../db/user-data");

const createUser = (req, res) => {
  //namegit
  //email
  //password
  //role
  //address

  let newUser = req.body;
  const lastUser = users[users.length - 1];
  newUser._id = lastUser._id + 1;
  newUser.createdAt = new Date();
  newUser.updatedAt = new Date();

  users.push(req.body);
  res.send({ users });
};

const loginUser = (req, res) => {
  const { name, password } = req.body;
  const user = users.find((user) => user.name === name);
  if (user.name == name) {
    if (user.password == password) {
      res.send("Login success");
    } else {
      res.send("Wrong Password");
    }
  } else {
    res.send("Username Failed");
  }
};

const getProfile = (req, res) => {
  res.send({ data: users });
};

const updateUserProfile = (req, res) => {
  res.send({ data: users });
};

module.exports = {
  createUser,
  getProfile,
  loginUser,
  updateUserProfile,
};

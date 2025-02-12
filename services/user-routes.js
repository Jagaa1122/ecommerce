const { users } = require("../db/user-data");

const createUser = (req, res) => {
  //name
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
  
  // Check if user exists
  const user = users.find((user) => user.name === name);
  if (!user) {
    return res.send("Username not found" );
  }

  // Check password
  if (user.password !== password) {
    return res.send("Wrong password" );
  }

  res.send( "Login success");
};

const getProfile = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((user) => user._id === userId);

  if (!user) {
    return res.send("User not found");
  }

  res.json({ data: user });
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

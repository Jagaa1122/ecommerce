const users = [
  {
    _id: 1,
    name: "John Doe",
    email: "test@gmail.com",
    password: "123456",
    role: "customer",
    address: {
      street: "123 Main street",
      city: "New York",
      zip: 10001,
    },
    cteatedAt: "2021-09-01T00:00:00.000Z",
    updatedAt: new Date(),
  },
];
module.exports = {
  users,
};

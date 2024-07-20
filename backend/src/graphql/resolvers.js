const User = require("../models/user");

module.exports = {
  getUsers: async () => {
    try {
      return await User.find();
    } catch (err) {
      throw err;
    }
  },
  getUser: async ({ id }) => {
    try {
      return await User.findById(id);
    } catch (err) {
      throw err;
    }
  },
  createUser: async ({ userInput }) => {
    const user = new User({
      name: userInput.name,
      email: userInput.email,
      age: userInput.age,
    });
    try {
      return await user.save();
    } catch (err) {
      throw err;
    }
  },
  updateUser: async ({ id, userInput }) => {
    try {
      return await User.findByIdAndUpdate(id, userInput, { new: true });
    } catch (err) {
      throw err;
    }
  },
  deleteUser: async ({ id }) => {
    try {
      return await User.findByIdAndDelete(id);
    } catch (err) {
      throw err;
    }
  },
};

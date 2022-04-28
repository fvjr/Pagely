const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("books");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("books");
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user.id }).populate("books");
      }
      throw new AuthenticationError(
        "You need to be logged in before you can see this information."
      );
    },
  },
};

module.exports = resolvers;

const { User } = require("../models");
const { signToken } = require("../utils/auth");
const bcrypt = require("bcrypt");

const {
  AuthenticationError,
  UserInputError,
} = require("apollo-server-express");
const fetch = require("node-fetch");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findone({ _id: context.user._id })
          .select("-__v -password")
          .populate("movies");
        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
    movies: (parent, args) => {
      console.log("getting movies");
      return fetch(`http://www.omdbapi.com/?apikey=b7b6ed72&s=${query}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json.map((o) => o.movie));
          return json.map((o) => o.movie);
        });
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      try {
        console.log(args);
        const user = await User.create(args);
        // await user.save();
        const token = signToken(user);

        return { token, user };
      } catch (e) {
        console.log(e);
      }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      // const correctPw = await user.isCorrectPassword(password);
      const correctPw = await bcrypt.compare(password, user.password);


      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;

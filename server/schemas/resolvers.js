const { User } = require('../models');
const {signToken} = require('../utils/auth');

const {
  AuthenticationError,
  UserInputError,
} = require("apollo-server-express");

const fetch = require("node-fetch");
const resolvers = {
  Query: {
    // me: async (parent, args, context) => {
    //   if (context.user) {
    //     const userData = await User.findone({ _id: context.user._id })
    //       .select("-__v -password")
    //       .populate("movies");
    //     return userData;
    //   }
    //   throw new AuthenticationError("Not logged in");
    // },
    movies: (parent, args) => {
      console.log("getting movies");
      return fetch("http://api.trakt.tv/movies/trending", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "trakt-api-key": process.env.TRAKT_API_KEY,
          "trakt-api-version": 2,
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
        console.log(args)
        const user = await User.create(args);
        const token = signToken(user);

        return { token, user };
      }
      catch (e) { console.log(e)}
    },
    // login: async (parent, { email, password }) => {
    //   const user = await User.findOne({ email });

    //   if (!user) {
    //     throw new AuthenticationError('Incorrect credentials');
    //   }

    //   const correctPw = await user.isCorrectPassword(password);

    //   if (!correctPw) {
    //     throw new AuthenticationError('Incorrect credentials');
    //   }

    //   const token = signToken(user);
    //   return { token, user };
    // },
  }
};

module.exports = resolvers;

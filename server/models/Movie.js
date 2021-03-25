const { Schema } = require('mongoose');

const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: 'You need to list a movie title!',
      minlength: 1,
      maxlength: 280
    },
    movieId: {
      type: String,
      required: true,
    },
    year: {
      type: String,
    },
    image: {
      type: String,
    },
  }
)



module.exports = movieSchema;
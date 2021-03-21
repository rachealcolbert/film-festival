const { Schema } = require('mongoose');

const movieSchema = new Schema(
  {
    movieTitle: {
      type: String,
      required: 'You need to list a movie title!',
      minlength: 1,
      maxlength: 280
    },
    movieId: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    link: {
      type: String,
    }
  }
)



module.exports = movieSchema;
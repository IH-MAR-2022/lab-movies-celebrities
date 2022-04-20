//  Add your code here
//destructuring
const { model, Schema } = require("mongoose");

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  plot: {
    type: String,
  },
  cast: [
    {
      type: Schema.Types.ObjectId,
      ref: "Celebrity",
    },
  ],
});

const Movie = model("Movie", movieSchema);

module.exports = Movie;

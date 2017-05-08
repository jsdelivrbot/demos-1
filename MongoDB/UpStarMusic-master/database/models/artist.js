const mongoose = require('mongoose');
const { Scheme } = mongoose;

const AlbumSchema = require('./album');

const ArtistSchema = new Scheme({
  name: String,
  age: Number,
  yearsActive: Number,
  image: String,
  genre: String,
  website: String,
  netWorth: Number,
  labelName: String,
  retired: Boolean,
  albums: [AlbumSchema]
});

const Artist = mongoose.model('artist', ArtistSchema);

module.exports = Artist;

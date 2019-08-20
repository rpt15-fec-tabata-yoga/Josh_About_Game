const db = require('./index.js');
const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;


const aboutThisGameSchema = new mongoose.Schema({
  aboutBody: String,
  features: String
});

const AboutThisGame = mongoose.model('aboutThisGame', aboutThisGameSchema);


module.exports = {AboutThisGame}
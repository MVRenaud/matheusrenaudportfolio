const { Schema, model } = require('mongoose');

const WeatherSchema = new Schema({
  city: { type: String, required: true },

});

const Weather = model('Weather', WeatherSchema);

module.exports = Weather;

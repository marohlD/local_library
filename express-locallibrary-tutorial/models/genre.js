var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    name: {type: String, required: true, maxLength: 100},
    id: {type: String, required: true, maxLength: 100},
  }
);

// Virtual for genre's URL
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});



GenreSchema
.virtual('title')
.get(function () {
  return this.name;
});



//Export model
module.exports = mongoose.model('genre', GenreSchema);
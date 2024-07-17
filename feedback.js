const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  title: String,
  content: String,
  rating: Number,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  creationDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Feedback', feedbackSchema);
const Feedback = require('../models/Feedback');

exports.submitForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const feedback = new Feedback({ name, email, message });
    await feedback.save();
    res.status(201).send({ message: 'Feedback submitted successfully!' });
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
};
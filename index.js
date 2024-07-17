const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const feedbackRoute = require('./routes/feedback');

app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.json());

app.use('/api', feedbackRoute);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
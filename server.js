const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/database');
const bookRoutes = require('./routes/bookRoutes');
const { handleNotFound, handleError } = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());

mongoose
  .connect(config.mongodbUri)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

app.use('/api/books', bookRoutes);

app.use(handleNotFound);
app.use(handleError);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
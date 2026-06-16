exports.handleNotFound = (req, res) => {
  res.status(404).json({ message: 'Resource not found' });
};

exports.handleError = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
};
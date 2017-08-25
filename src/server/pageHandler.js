const path = require('path');

exports.rootHandler = (req, res) => {
  if (req.session.user) exports.index(req, res);
  else res.send('Not logged in');
};

exports.index = (req, res) => {
  res.send('Map index');
};

exports.canvas = (req, res) => {
  res.send(`Map canvas for ${req.params.id}`);
};

exports.error = (req, res) => {
  res.sendFile(path.join(__dirname, '../assets/biblethump.jpg'));
};

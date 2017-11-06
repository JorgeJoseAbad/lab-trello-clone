var path = require('path');

module.exports = function(app) {

  app.use('/api/list', require('../api/list')); //por defecto se va al index.js
  app.use('/api/card', require('../api/card'));

	// catch 404 and forward to Angular
  app.all('/*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
  });
};

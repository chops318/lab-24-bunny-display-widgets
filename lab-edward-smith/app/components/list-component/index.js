'use strict';

module.exports = function(app) {
  require('./list-directive-ctrl')(app);
  require('./list-directive')(app);
};

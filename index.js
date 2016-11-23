var loaderUtils = require('loader-utils');


// Cacheable identity loader
module.exports = function(source) {

  this.cacheable();
  return source;
};
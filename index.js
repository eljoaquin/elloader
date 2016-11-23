var loaderUtils = require('loader-utils');


// Cacheable identity loader
module.exports = function(source) {

  this.cacheable();

  // var url = "/../gptAdsConfig";
  // var root = "./root";
  // var request = loaderUtils.urlToRequest(url);
  // console.log(request)
  const config = loaderUtils.getLoaderConfig(this, "elloader");
  // console.log(config.configuration);
  for(var pageType in config.configuration) {
    console.log(config.configuration[pageType])
  }
  return source;
};
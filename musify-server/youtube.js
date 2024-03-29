const request = require('request');
const queryString = require('querystring');


var YouTube = function() {

  var self = this;

  /**
  * API v3 Url
  * @type {string}
  */
  self.url = 'https://www.googleapis.com/youtube/v3/';

  /**
  * params
  * https://developers.google.com/youtube/v3/docs/search/list
  * @type {Object}
  */
  self.params = {};

  self.parts = [];

  /**
  * Set private key to class
  * @param {string} key
  */
  self.setKey = function(key) {
    self.addParam('key', key);
  };

  /**
  *
  * @param {string} name
  */
  self.addPart = function(name) {
    self.parts.push(name);
  };

  /**
  *
  * Optional parameters
  * https://developers.google.com/youtube/v3/docs/search/list
  *
  * @param {string} key
  * @param {string} value
  */
  self.addParam = function(key, value) {
    self.params[key] = value;
  };

  /**
  * Clear every parameter but the key
  */
  self.clearParams = function() {
    self.params = {
      key: self.params.key
    }
  };

  /**
  *
  * @param {string} path
  * @returns {string}
  */
  self.getUrl = function(path) {
    return self.url + path + '?' + queryString.stringify(self.params);
  };

  /**
  *
  * @returns {string}
  */
  self.getParts = function() {
    return self.parts.join(',');
  };

  /**
  * Simple http request
  * @param {string} url
  * @param {string} callback
  */
  self.request = function(url, callback) {
    var data = {};
    request(url, function(error, response, body) {
      if (error) {
        callback(error);
      }
      else {
        try {
          data = JSON.parse(body);
        } catch(e) {
          data = {};
        }

        if (response.statusCode == 200) {
          callback(null, data);
        }
        else {
          callback(data.error);
        }
      }
    });
  };

  /**
  * Return error object
  * @param {string} message
  */
  self.newError = function(message) {
    return {
      error : {
        message: message
      }
    };
  };

  /**
  * Validate params
  */
  self.validate = function() {
    if (!self.params.key) {
      return self.newError('Please set a key using setKey method. Get an key in https://console.developers.google.com');
    }
    else {
      return null;
    }
  };

  /**
  * Initialize parts
  */
  self.clearParts = function() {
    self.parts = [];
  };

  /**
  * Video data from ID
  * @param {string} id
  * @param {function} callback
  */
  self.getById = function(id, callback) {
    var validate = self.validate();

    if (validate !== null) {
      callback(validate);
    }
    else {
      self.clearParams();
      self.clearParts();

      self.addPart('snippet');
      self.addPart('contentDetails');

      self.addParam('order', 'relevance');

      self.addParam('part', self.getParts());
      self.addParam('id', id);

      self.request(self.getUrl('videos'), callback);
    }
  };

  /**
  * Videos data from query
  * @param {string} query
  * @param {int} maxResults
  * @param {function} callback
  */
  self.search = function(query, maxResults, params, callback) {
    var validate = self.validate();

    if (typeof params !== 'object') {
      if (typeof params === 'function') {
        callback = params;
      }
      params = {};
    }

    if (validate !== null) {
      callback(validate);
    }
    else {
      self.clearParams();
      self.clearParts();

      self.addPart('snippet');

      self.addParam('part', self.getParts());
      self.addParam('q', query);
      self.addParam('maxResults', maxResults);

      Object.keys(params).forEach(function(paramKey) {
        if (params[paramKey] !== undefined) {
          self.addParam(paramKey, params[paramKey]);
        }
      });

      self.request(self.getUrl('search'), callback);
    }
  };

  /**
  * Videos data from query
  * @param {string} id
  * @param {int} maxResults
  * @param {function} callback
  * Source: https://github.com/paulomcnally/youtube-node/pull/3/files
  */
  self.related = function(id, maxResults, callback) {
    var validate = self.validate();
    if (validate !== null) {
      callback(validate);
    }
    else {
      self.clearParams();
      self.clearParts();
      self.addPart('snippet');
      self.addParam('part', self.getParts());
      self.addParam('relatedToVideoId', id);
      self.addParam('maxResults', maxResults);
      self.addParam('type', 'video');
      self.addParam('order', 'relevance');

      self.request(self.getUrl('search'), callback);
    }
  };
};

module.exports = YouTube;

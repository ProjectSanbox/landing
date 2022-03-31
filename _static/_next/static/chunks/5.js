(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(
        timeoutErrorMessage,
        config,
        config.transitional && config.transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ "./node_modules/axios/lib/helpers/isAxiosError.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var validator = __webpack_require__(/*! ../helpers/validator */ "./node_modules/axios/lib/helpers/validator.js");

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean, '1.0.0'),
      forcedJSONParsing: validators.transitional(validators.boolean, '1.0.0'),
      clarifyTimeoutError: validators.transitional(validators.boolean, '1.0.0')
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var defaults = __webpack_require__(/*! ./../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");
var enhanceError = __webpack_require__(/*! ./core/enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/validator.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/validator.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pkg = __webpack_require__(/*! ./../../package.json */ "./node_modules/axios/package.json");

var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};
var currentVerArr = pkg.version.split('.');

/**
 * Compare package versions
 * @param {string} version
 * @param {string?} thanVersion
 * @returns {boolean}
 */
function isOlderVersion(version, thanVersion) {
  var pkgVersionArr = thanVersion ? thanVersion.split('.') : currentVerArr;
  var destVer = version.split('.');
  for (var i = 0; i < 3; i++) {
    if (pkgVersionArr[i] > destVer[i]) {
      return true;
    } else if (pkgVersionArr[i] < destVer[i]) {
      return false;
    }
  }
  return false;
}

/**
 * Transitional option validator
 * @param {function|boolean?} validator
 * @param {string?} version
 * @param {string} message
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  var isDeprecated = version && isOlderVersion(version);

  function formatMessage(opt, desc) {
    return '[Axios v' + pkg.version + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed in ' + version));
    }

    if (isDeprecated && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}

module.exports = {
  isOlderVersion: isOlderVersion,
  assertOptions: assertOptions,
  validators: validators
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "./node_modules/axios/package.json":
/*!*****************************************!*\
  !*** ./node_modules/axios/package.json ***!
  \*****************************************/
/*! exports provided: name, version, description, main, scripts, repository, keywords, author, license, bugs, homepage, devDependencies, browser, jsdelivr, unpkg, typings, dependencies, bundlesize, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"axios\",\"version\":\"0.21.4\",\"description\":\"Promise based HTTP client for the browser and node.js\",\"main\":\"index.js\",\"scripts\":{\"test\":\"grunt test\",\"start\":\"node ./sandbox/server.js\",\"build\":\"NODE_ENV=production grunt build\",\"preversion\":\"npm test\",\"version\":\"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json\",\"postversion\":\"git push && git push --tags\",\"examples\":\"node ./examples/server.js\",\"coveralls\":\"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js\",\"fix\":\"eslint --fix lib/**/*.js\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/axios/axios.git\"},\"keywords\":[\"xhr\",\"http\",\"ajax\",\"promise\",\"node\"],\"author\":\"Matt Zabriskie\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/axios/axios/issues\"},\"homepage\":\"https://axios-http.com\",\"devDependencies\":{\"coveralls\":\"^3.0.0\",\"es6-promise\":\"^4.2.4\",\"grunt\":\"^1.3.0\",\"grunt-banner\":\"^0.6.0\",\"grunt-cli\":\"^1.2.0\",\"grunt-contrib-clean\":\"^1.1.0\",\"grunt-contrib-watch\":\"^1.0.0\",\"grunt-eslint\":\"^23.0.0\",\"grunt-karma\":\"^4.0.0\",\"grunt-mocha-test\":\"^0.13.3\",\"grunt-ts\":\"^6.0.0-beta.19\",\"grunt-webpack\":\"^4.0.2\",\"istanbul-instrumenter-loader\":\"^1.0.0\",\"jasmine-core\":\"^2.4.1\",\"karma\":\"^6.3.2\",\"karma-chrome-launcher\":\"^3.1.0\",\"karma-firefox-launcher\":\"^2.1.0\",\"karma-jasmine\":\"^1.1.1\",\"karma-jasmine-ajax\":\"^0.1.13\",\"karma-safari-launcher\":\"^1.0.0\",\"karma-sauce-launcher\":\"^4.3.6\",\"karma-sinon\":\"^1.0.5\",\"karma-sourcemap-loader\":\"^0.3.8\",\"karma-webpack\":\"^4.0.2\",\"load-grunt-tasks\":\"^3.5.2\",\"minimist\":\"^1.2.0\",\"mocha\":\"^8.2.1\",\"sinon\":\"^4.5.0\",\"terser-webpack-plugin\":\"^4.2.3\",\"typescript\":\"^4.0.5\",\"url-search-params\":\"^0.10.0\",\"webpack\":\"^4.44.2\",\"webpack-dev-server\":\"^3.11.0\"},\"browser\":{\"./lib/adapters/http.js\":\"./lib/adapters/xhr.js\"},\"jsdelivr\":\"dist/axios.min.js\",\"unpkg\":\"dist/axios.min.js\",\"typings\":\"./index.d.ts\",\"dependencies\":{\"follow-redirects\":\"^1.14.0\"},\"bundlesize\":[{\"path\":\"./dist/axios.min.js\",\"threshold\":\"5kB\"}]}");

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_9c4bc4a42529b59eb100 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_9c4bc4a42529b59eb100 */ "dll-reference dll_9c4bc4a42529b59eb100"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_9c4bc4a42529b59eb100 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_9c4bc4a42529b59eb100 */ "dll-reference dll_9c4bc4a42529b59eb100"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_9c4bc4a42529b59eb100 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_9c4bc4a42529b59eb100 */ "dll-reference dll_9c4bc4a42529b59eb100"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/react-icons/cg/index.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/react-icons/cg/index.esm.js ***!
  \**************************************************/
/*! exports provided: CgAbstract, CgAddR, CgAdd, CgAdidas, CgAirplane, CgAlarm, CgAlbum, CgAlignBottom, CgAlignCenter, CgAlignLeft, CgAlignMiddle, CgAlignRight, CgAlignTop, CgAnchor, CgAppleWatch, CgArrangeBack, CgArrangeFront, CgArrowAlignH, CgArrowAlignV, CgArrowBottomLeftO, CgArrowBottomLeftR, CgArrowBottomLeft, CgArrowBottomRightO, CgArrowBottomRightR, CgArrowBottomRight, CgArrowDownO, CgArrowDownR, CgArrowDown, CgArrowLeftO, CgArrowLeftR, CgArrowLeft, CgArrowLongDownC, CgArrowLongDownE, CgArrowLongDownL, CgArrowLongDownR, CgArrowLongDown, CgArrowLongLeftC, CgArrowLongLeftE, CgArrowLongLeftL, CgArrowLongLeftR, CgArrowLongLeft, CgArrowLongRightC, CgArrowLongRightE, CgArrowLongRightL, CgArrowLongRightR, CgArrowLongRight, CgArrowLongUpC, CgArrowLongUpE, CgArrowLongUpL, CgArrowLongUpR, CgArrowLongUp, CgArrowRightO, CgArrowRightR, CgArrowRight, CgArrowTopLeftO, CgArrowTopLeftR, CgArrowTopLeft, CgArrowTopRightO, CgArrowTopRightR, CgArrowTopRight, CgArrowUpO, CgArrowUpR, CgArrowUp, CgArrowsBreakeH, CgArrowsBreakeV, CgArrowsExchangeAltV, CgArrowsExchangeAlt, CgArrowsExchangeV, CgArrowsExchange, CgArrowsExpandDownLeft, CgArrowsExpandDownRight, CgArrowsExpandLeftAlt, CgArrowsExpandLeft, CgArrowsExpandRightAlt, CgArrowsExpandRight, CgArrowsExpandUpLeft, CgArrowsExpandUpRight, CgArrowsHAlt, CgArrowsH, CgArrowsMergeAltH, CgArrowsMergeAltV, CgArrowsScrollH, CgArrowsScrollV, CgArrowsShrinkH, CgArrowsShrinkV, CgArrowsVAlt, CgArrowsV, CgAssign, CgAsterisk, CgAtlasian, CgAttachment, CgAttribution, CgAwards, CgBackspace, CgBandAid, CgBatteryEmpty, CgBatteryFull, CgBattery, CgBee, CgBell, CgBitbucket, CgBlock, CgBmw, CgBoard, CgBolt, CgBookmark, CgBorderAll, CgBorderBottom, CgBorderLeft, CgBorderRight, CgBorderStyleDashed, CgBorderStyleDotted, CgBorderStyleSolid, CgBorderTop, CgBot, CgBowl, CgBox, CgBoy, CgBrackets, CgBriefcase, CgBrowse, CgBrowser, CgBrush, CgBulb, CgCPlusPlus, CgCalculator, CgCalendarDates, CgCalendarDue, CgCalendarNext, CgCalendarToday, CgCalendarTwo, CgCalendar, CgCalibrate, CgCamera, CgCap, CgCaptions, CgCardClubs, CgCardDiamonds, CgCardHearts, CgCardSpades, CgCarousel, CgCast, CgChanel, CgChart, CgCheckO, CgCheckR, CgCheck, CgChevronDoubleDownO, CgChevronDoubleDownR, CgChevronDoubleDown, CgChevronDoubleLeftO, CgChevronDoubleLeftR, CgChevronDoubleLeft, CgChevronDoubleRightO, CgChevronDoubleRightR, CgChevronDoubleRight, CgChevronDoubleUpO, CgChevronDoubleUpR, CgChevronDoubleUp, CgChevronDownO, CgChevronDownR, CgChevronDown, CgChevronLeftO, CgChevronLeftR, CgChevronLeft, CgChevronRightO, CgChevronRightR, CgChevronRight, CgChevronUpO, CgChevronUpR, CgChevronUp, CgCircleci, CgClapperBoard, CgClipboard, CgCloseO, CgCloseR, CgClose, CgCloud, CgCodeClimate, CgCodeSlash, CgCode, CgCoffee, CgCollage, CgColorBucket, CgColorPicker, CgComedyCentral, CgComment, CgCommunity, CgComponents, CgCompressLeft, CgCompressRight, CgCompressV, CgCompress, CgController, CgCopy, CgCopyright, CgCornerDoubleDownLeft, CgCornerDoubleDownRight, CgCornerDoubleLeftDown, CgCornerDoubleLeftUp, CgCornerDoubleRightDown, CgCornerDoubleRightUp, CgCornerDoubleUpLeft, CgCornerDoubleUpRight, CgCornerDownLeft, CgCornerDownRight, CgCornerLeftDown, CgCornerLeftUp, CgCornerRightDown, CgCornerRightUp, CgCornerUpLeft, CgCornerUpRight, CgCreditCard, CgCrop, CgCross, CgCrowdfire, CgCrown, CgDanger, CgDarkMode, CgData, CgDatabase, CgDebug, CgDesignmodo, CgDesktop, CgDetailsLess, CgDetailsMore, CgDialpad, CgDice1, CgDice2, CgDice3, CgDice4, CgDice5, CgDice6, CgDigitalocean, CgDisc, CgDisplayFlex, CgDisplayFullwidth, CgDisplayGrid, CgDisplaySpacing, CgDistributeHorizontal, CgDistributeVertical, CgDockBottom, CgDockLeft, CgDockRight, CgDockWindow, CgDolby, CgDollar, CgDribbble, CgDrive, CgDropInvert, CgDropOpacity, CgDrop, CgDuplicate, CgEditBlackPoint, CgEditContrast, CgEditExposure, CgEditFade, CgEditFlipH, CgEditFlipV, CgEditHighlight, CgEditMarkup, CgEditMask, CgEditNoise, CgEditShadows, CgEditStraight, CgEditUnmask, CgEject, CgEnter, CgErase, CgEreader, CgEricsson, CgEthernet, CgEuro, CgEventbrite, CgExpand, CgExport, CgExtensionAdd, CgExtensionAlt, CgExtensionRemove, CgExtension, CgExternal, CgEyeAlt, CgEye, CgFacebook, CgFeed, CgFigma, CgFileAdd, CgFileDocument, CgFileRemove, CgFile, CgFilm, CgFilters, CgFlagAlt, CgFlag, CgFolderAdd, CgFolderRemove, CgFolder, CgFontHeight, CgFontSpacing, CgFormatBold, CgFormatCenter, CgFormatColor, CgFormatHeading, CgFormatIndentDecrease, CgFormatIndentIncrease, CgFormatItalic, CgFormatJustify, CgFormatLeft, CgFormatLineHeight, CgFormatRight, CgFormatSeparator, CgFormatSlash, CgFormatStrike, CgFormatText, CgFormatUnderline, CgFormatUppercase, CgFramer, CgGames, CgGenderFemale, CgGenderMale, CgGhostCharacter, CgGhost, CgGift, CgGirl, CgGitBranch, CgGitCommit, CgGitFork, CgGitPull, CgGitter, CgGlassAlt, CgGlass, CgGlobeAlt, CgGlobe, CgGoogleTasks, CgGoogle, CgGym, CgHashtag, CgHeadset, CgHeart, CgHello, CgHomeAlt, CgHomeScreen, CgHome, CgIcecream, CgIfDesign, CgImage, CgImport, CgInbox, CgIndieHackers, CgInfinity, CgInfo, CgInpicture, CgInsertAfterO, CgInsertAfterR, CgInsertAfter, CgInsertBeforeO, CgInsertBeforeR, CgInsertBefore, CgInsights, CgInstagram, CgInternal, CgKey, CgKeyboard, CgKeyhole, CgLaptop, CgLastpass, CgLayoutGridSmall, CgLayoutGrid, CgLayoutList, CgLayoutPin, CgLinear, CgLink, CgListTree, CgList, CgLivePhoto, CgLoadbarAlt, CgLoadbarDoc, CgLoadbarSound, CgLoadbar, CgLockUnlock, CgLock, CgLogIn, CgLogOff, CgLogOut, CgLoupe, CgMagnet, CgMailForward, CgMailOpen, CgMailReply, CgMail, CgMathDivide, CgMathEqual, CgMathMinus, CgMathPercent, CgMathPlus, CgMaximizeAlt, CgMaximize, CgMaze, CgMediaLive, CgMediaPodcast, CgMenuBoxed, CgMenuCake, CgMenuCheese, CgMenuGridO, CgMenuGridR, CgMenuHotdog, CgMenuLeftAlt, CgMenuLeft, CgMenuMotion, CgMenuOreos, CgMenuRightAlt, CgMenuRight, CgMenuRound, CgMenu, CgMergeHorizontal, CgMergeVertical, CgMic, CgMicrobit, CgMicrosoft, CgMiniPlayer, CgMinimizeAlt, CgMinimize, CgModem, CgMonday, CgMoon, CgMoreAlt, CgMoreO, CgMoreR, CgMoreVerticalAlt, CgMoreVerticalO, CgMoreVerticalR, CgMoreVertical, CgMore, CgMouse, CgMoveDown, CgMoveLeft, CgMoveRight, CgMoveTask, CgMoveUp, CgMusicNote, CgMusicSpeaker, CgMusic, CgNametag, CgNotes, CgNotifications, CgNpm, CgOculus, CgOpenCollective, CgOptions, CgOrganisation, CgOverflow, CgPacman, CgPassword, CgPathBack, CgPathCrop, CgPathDivide, CgPathExclude, CgPathFront, CgPathIntersect, CgPathOutline, CgPathTrim, CgPathUnite, CgPatreon, CgPaypal, CgPen, CgPentagonBottomLeft, CgPentagonBottomRight, CgPentagonDown, CgPentagonLeft, CgPentagonRight, CgPentagonTopLeft, CgPentagonTopRight, CgPentagonUp, CgPerformance, CgPexels, CgPhone, CgPhotoscan, CgPiano, CgPill, CgPinAlt, CgPinBottom, CgPinTop, CgPin, CgPlayBackwards, CgPlayButtonO, CgPlayButtonR, CgPlayButton, CgPlayForwards, CgPlayListAdd, CgPlayListCheck, CgPlayListRemove, CgPlayListSearch, CgPlayList, CgPlayPauseO, CgPlayPauseR, CgPlayPause, CgPlayStopO, CgPlayStopR, CgPlayStop, CgPlayTrackNextO, CgPlayTrackNextR, CgPlayTrackNext, CgPlayTrackPrevO, CgPlayTrackPrevR, CgPlayTrackPrev, CgPlug, CgPocket, CgPokemon, CgPolaroid, CgPoll, CgPresentation, CgPrinter, CgProductHunt, CgProfile, CgPullClear, CgPushChevronDownO, CgPushChevronDownR, CgPushChevronDown, CgPushChevronLeftO, CgPushChevronLeftR, CgPushChevronLeft, CgPushChevronRightO, CgPushChevronRightR, CgPushChevronRight, CgPushChevronUpO, CgPushChevronUpR, CgPushChevronUp, CgPushDown, CgPushLeft, CgPushRight, CgPushUp, CgQr, CgQuoteO, CgQuote, CgRadioCheck, CgRadioChecked, CgRatio, CgRead, CgReadme, CgRecord, CgRedo, CgRemote, CgRemoveR, CgRemove, CgRename, CgReorder, CgRepeat, CgRing, CgRowFirst, CgRowLast, CgRuler, CgSandClock, CgScan, CgScreenMirror, CgScreenShot, CgScreenWide, CgScreen, CgScrollH, CgScrollV, CgSearchFound, CgSearchLoading, CgSearch, CgSelectO, CgSelectR, CgSelect, CgServer, CgServerless, CgShapeCircle, CgShapeHalfCircle, CgShapeHexagon, CgShapeRhombus, CgShapeSquare, CgShapeTriangle, CgShapeZigzag, CgShare, CgShield, CgShoppingBag, CgShoppingCart, CgShortcut, CgShutterstock, CgSidebarOpen, CgSidebarRight, CgSidebar, CgSignal, CgSize, CgSketch, CgSlack, CgSleep, CgSmartHomeBoiler, CgSmartHomeCooker, CgSmartHomeHeat, CgSmartHomeLight, CgSmartHomeRefrigerator, CgSmartHomeWashMachine, CgSmartphoneChip, CgSmartphoneRam, CgSmartphoneShake, CgSmartphone, CgSmileMouthOpen, CgSmileNeutral, CgSmileNoMouth, CgSmileNone, CgSmileSad, CgSmileUpside, CgSmile, CgSoftwareDownload, CgSoftwareUpload, CgSortAz, CgSortZa, CgSpaceBetweenV, CgSpaceBetween, CgSpectrum, CgSpinnerAlt, CgSpinnerTwoAlt, CgSpinnerTwo, CgSpinner, CgSquare, CgStack, CgStark, CgStopwatch, CgStories, CgStudio, CgStyle, CgSun, CgSupport, CgSwapVertical, CgSwap, CgSweden, CgSwiss, CgSync, CgTab, CgTag, CgTally, CgTapDouble, CgTapSingle, CgTemplate, CgTennis, CgTerminal, CgTerrain, CgThermometer, CgThermostat, CgTikcode, CgTime, CgTimelapse, CgTimer, CgToday, CgToggleOff, CgToggleOn, CgToggleSquareOff, CgToggleSquare, CgToolbarBottom, CgToolbarLeft, CgToolbarRight, CgToolbarTop, CgToolbox, CgTouchpad, CgTrack, CgTranscript, CgTrashEmpty, CgTrash, CgTree, CgTrees, CgTrello, CgTrendingDown, CgTrending, CgTrophy, CgTv, CgTwilio, CgTwitter, CgUiKit, CgUmbrella, CgUnavailable, CgUnblock, CgUndo, CgUnfold, CgUnsplash, CgUsbC, CgUsb, CgUserAdd, CgUserList, CgUserRemove, CgUser, CgUserlane, CgViewCols, CgViewComfortable, CgViewDay, CgViewGrid, CgViewList, CgViewMonth, CgViewSplit, CgVinyl, CgVoicemailO, CgVoicemailR, CgVoicemail, CgVolume, CgWebcam, CgWebsite, CgWindows, CgWorkAlt, CgYinyang, CgYoutube, CgZeit, CgZoomIn, CgZoomOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgAbstract", function() { return CgAbstract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgAddR", function() { return CgAddR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgAdd", function() { return CgAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgAdidas", function() { return CgAdidas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgAirplane", function() { return CgAirplane; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgAlarm", function() { return CgAlarm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgAlbum", function() { return CgAlbum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgAlignBottom", function() { return CgAlignBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgAlignCenter", function() { return CgAlignCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgAlignLeft", function() { return CgAlignLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgAlignMiddle", function() { return CgAlignMiddle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgAlignRight", function() { return CgAlignRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgAlignTop", function() { return CgAlignTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgAnchor", function() { return CgAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgAppleWatch", function() { return CgAppleWatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrangeBack", function() { return CgArrangeBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrangeFront", function() { return CgArrangeFront; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowAlignH", function() { return CgArrowAlignH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowAlignV", function() { return CgArrowAlignV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowBottomLeftO", function() { return CgArrowBottomLeftO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowBottomLeftR", function() { return CgArrowBottomLeftR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowBottomLeft", function() { return CgArrowBottomLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowBottomRightO", function() { return CgArrowBottomRightO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowBottomRightR", function() { return CgArrowBottomRightR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowBottomRight", function() { return CgArrowBottomRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowDownO", function() { return CgArrowDownO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowDownR", function() { return CgArrowDownR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowDown", function() { return CgArrowDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowLeftO", function() { return CgArrowLeftO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowLeftR", function() { return CgArrowLeftR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowLeft", function() { return CgArrowLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowLongDownC", function() { return CgArrowLongDownC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowLongDownE", function() { return CgArrowLongDownE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowLongDownL", function() { return CgArrowLongDownL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowLongDownR", function() { return CgArrowLongDownR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowLongDown", function() { return CgArrowLongDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowLongLeftC", function() { return CgArrowLongLeftC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowLongLeftE", function() { return CgArrowLongLeftE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowLongLeftL", function() { return CgArrowLongLeftL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowLongLeftR", function() { return CgArrowLongLeftR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowLongLeft", function() { return CgArrowLongLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowLongRightC", function() { return CgArrowLongRightC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowLongRightE", function() { return CgArrowLongRightE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowLongRightL", function() { return CgArrowLongRightL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowLongRightR", function() { return CgArrowLongRightR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowLongRight", function() { return CgArrowLongRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowLongUpC", function() { return CgArrowLongUpC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowLongUpE", function() { return CgArrowLongUpE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowLongUpL", function() { return CgArrowLongUpL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowLongUpR", function() { return CgArrowLongUpR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowLongUp", function() { return CgArrowLongUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowRightO", function() { return CgArrowRightO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowRightR", function() { return CgArrowRightR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowRight", function() { return CgArrowRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowTopLeftO", function() { return CgArrowTopLeftO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowTopLeftR", function() { return CgArrowTopLeftR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowTopLeft", function() { return CgArrowTopLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowTopRightO", function() { return CgArrowTopRightO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowTopRightR", function() { return CgArrowTopRightR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowTopRight", function() { return CgArrowTopRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowUpO", function() { return CgArrowUpO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowUpR", function() { return CgArrowUpR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowUp", function() { return CgArrowUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowsBreakeH", function() { return CgArrowsBreakeH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowsBreakeV", function() { return CgArrowsBreakeV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowsExchangeAltV", function() { return CgArrowsExchangeAltV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowsExchangeAlt", function() { return CgArrowsExchangeAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowsExchangeV", function() { return CgArrowsExchangeV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowsExchange", function() { return CgArrowsExchange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowsExpandDownLeft", function() { return CgArrowsExpandDownLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowsExpandDownRight", function() { return CgArrowsExpandDownRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowsExpandLeftAlt", function() { return CgArrowsExpandLeftAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowsExpandLeft", function() { return CgArrowsExpandLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowsExpandRightAlt", function() { return CgArrowsExpandRightAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowsExpandRight", function() { return CgArrowsExpandRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowsExpandUpLeft", function() { return CgArrowsExpandUpLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowsExpandUpRight", function() { return CgArrowsExpandUpRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowsHAlt", function() { return CgArrowsHAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowsH", function() { return CgArrowsH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowsMergeAltH", function() { return CgArrowsMergeAltH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowsMergeAltV", function() { return CgArrowsMergeAltV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowsScrollH", function() { return CgArrowsScrollH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowsScrollV", function() { return CgArrowsScrollV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowsShrinkH", function() { return CgArrowsShrinkH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowsShrinkV", function() { return CgArrowsShrinkV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowsVAlt", function() { return CgArrowsVAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgArrowsV", function() { return CgArrowsV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgAssign", function() { return CgAssign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgAsterisk", function() { return CgAsterisk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgAtlasian", function() { return CgAtlasian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgAttachment", function() { return CgAttachment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgAttribution", function() { return CgAttribution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgAwards", function() { return CgAwards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgBackspace", function() { return CgBackspace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgBandAid", function() { return CgBandAid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgBatteryEmpty", function() { return CgBatteryEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgBatteryFull", function() { return CgBatteryFull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgBattery", function() { return CgBattery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgBee", function() { return CgBee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgBell", function() { return CgBell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgBitbucket", function() { return CgBitbucket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgBlock", function() { return CgBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgBmw", function() { return CgBmw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgBoard", function() { return CgBoard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgBolt", function() { return CgBolt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgBookmark", function() { return CgBookmark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgBorderAll", function() { return CgBorderAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgBorderBottom", function() { return CgBorderBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgBorderLeft", function() { return CgBorderLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgBorderRight", function() { return CgBorderRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgBorderStyleDashed", function() { return CgBorderStyleDashed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgBorderStyleDotted", function() { return CgBorderStyleDotted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgBorderStyleSolid", function() { return CgBorderStyleSolid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgBorderTop", function() { return CgBorderTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgBot", function() { return CgBot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgBowl", function() { return CgBowl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgBox", function() { return CgBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgBoy", function() { return CgBoy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgBrackets", function() { return CgBrackets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgBriefcase", function() { return CgBriefcase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgBrowse", function() { return CgBrowse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgBrowser", function() { return CgBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgBrush", function() { return CgBrush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgBulb", function() { return CgBulb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCPlusPlus", function() { return CgCPlusPlus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCalculator", function() { return CgCalculator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCalendarDates", function() { return CgCalendarDates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCalendarDue", function() { return CgCalendarDue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCalendarNext", function() { return CgCalendarNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCalendarToday", function() { return CgCalendarToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCalendarTwo", function() { return CgCalendarTwo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCalendar", function() { return CgCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCalibrate", function() { return CgCalibrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCamera", function() { return CgCamera; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCap", function() { return CgCap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCaptions", function() { return CgCaptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCardClubs", function() { return CgCardClubs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCardDiamonds", function() { return CgCardDiamonds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCardHearts", function() { return CgCardHearts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCardSpades", function() { return CgCardSpades; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCarousel", function() { return CgCarousel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCast", function() { return CgCast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgChanel", function() { return CgChanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgChart", function() { return CgChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCheckO", function() { return CgCheckO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCheckR", function() { return CgCheckR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCheck", function() { return CgCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgChevronDoubleDownO", function() { return CgChevronDoubleDownO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgChevronDoubleDownR", function() { return CgChevronDoubleDownR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgChevronDoubleDown", function() { return CgChevronDoubleDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgChevronDoubleLeftO", function() { return CgChevronDoubleLeftO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgChevronDoubleLeftR", function() { return CgChevronDoubleLeftR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgChevronDoubleLeft", function() { return CgChevronDoubleLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgChevronDoubleRightO", function() { return CgChevronDoubleRightO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgChevronDoubleRightR", function() { return CgChevronDoubleRightR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgChevronDoubleRight", function() { return CgChevronDoubleRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgChevronDoubleUpO", function() { return CgChevronDoubleUpO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgChevronDoubleUpR", function() { return CgChevronDoubleUpR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgChevronDoubleUp", function() { return CgChevronDoubleUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgChevronDownO", function() { return CgChevronDownO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgChevronDownR", function() { return CgChevronDownR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgChevronDown", function() { return CgChevronDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgChevronLeftO", function() { return CgChevronLeftO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgChevronLeftR", function() { return CgChevronLeftR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgChevronLeft", function() { return CgChevronLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgChevronRightO", function() { return CgChevronRightO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgChevronRightR", function() { return CgChevronRightR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgChevronRight", function() { return CgChevronRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgChevronUpO", function() { return CgChevronUpO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgChevronUpR", function() { return CgChevronUpR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgChevronUp", function() { return CgChevronUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCircleci", function() { return CgCircleci; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgClapperBoard", function() { return CgClapperBoard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgClipboard", function() { return CgClipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCloseO", function() { return CgCloseO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCloseR", function() { return CgCloseR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgClose", function() { return CgClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCloud", function() { return CgCloud; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCodeClimate", function() { return CgCodeClimate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCodeSlash", function() { return CgCodeSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCode", function() { return CgCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCoffee", function() { return CgCoffee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCollage", function() { return CgCollage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgColorBucket", function() { return CgColorBucket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgColorPicker", function() { return CgColorPicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgComedyCentral", function() { return CgComedyCentral; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgComment", function() { return CgComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCommunity", function() { return CgCommunity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgComponents", function() { return CgComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCompressLeft", function() { return CgCompressLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCompressRight", function() { return CgCompressRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCompressV", function() { return CgCompressV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCompress", function() { return CgCompress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgController", function() { return CgController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCopy", function() { return CgCopy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCopyright", function() { return CgCopyright; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCornerDoubleDownLeft", function() { return CgCornerDoubleDownLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCornerDoubleDownRight", function() { return CgCornerDoubleDownRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCornerDoubleLeftDown", function() { return CgCornerDoubleLeftDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCornerDoubleLeftUp", function() { return CgCornerDoubleLeftUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCornerDoubleRightDown", function() { return CgCornerDoubleRightDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCornerDoubleRightUp", function() { return CgCornerDoubleRightUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCornerDoubleUpLeft", function() { return CgCornerDoubleUpLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCornerDoubleUpRight", function() { return CgCornerDoubleUpRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCornerDownLeft", function() { return CgCornerDownLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCornerDownRight", function() { return CgCornerDownRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCornerLeftDown", function() { return CgCornerLeftDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCornerLeftUp", function() { return CgCornerLeftUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCornerRightDown", function() { return CgCornerRightDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCornerRightUp", function() { return CgCornerRightUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCornerUpLeft", function() { return CgCornerUpLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCornerUpRight", function() { return CgCornerUpRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCreditCard", function() { return CgCreditCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCrop", function() { return CgCrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCross", function() { return CgCross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCrowdfire", function() { return CgCrowdfire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgCrown", function() { return CgCrown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgDanger", function() { return CgDanger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgDarkMode", function() { return CgDarkMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgData", function() { return CgData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgDatabase", function() { return CgDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgDebug", function() { return CgDebug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgDesignmodo", function() { return CgDesignmodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgDesktop", function() { return CgDesktop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgDetailsLess", function() { return CgDetailsLess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgDetailsMore", function() { return CgDetailsMore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgDialpad", function() { return CgDialpad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgDice1", function() { return CgDice1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgDice2", function() { return CgDice2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgDice3", function() { return CgDice3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgDice4", function() { return CgDice4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgDice5", function() { return CgDice5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgDice6", function() { return CgDice6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgDigitalocean", function() { return CgDigitalocean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgDisc", function() { return CgDisc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgDisplayFlex", function() { return CgDisplayFlex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgDisplayFullwidth", function() { return CgDisplayFullwidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgDisplayGrid", function() { return CgDisplayGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgDisplaySpacing", function() { return CgDisplaySpacing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgDistributeHorizontal", function() { return CgDistributeHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgDistributeVertical", function() { return CgDistributeVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgDockBottom", function() { return CgDockBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgDockLeft", function() { return CgDockLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgDockRight", function() { return CgDockRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgDockWindow", function() { return CgDockWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgDolby", function() { return CgDolby; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgDollar", function() { return CgDollar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgDribbble", function() { return CgDribbble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgDrive", function() { return CgDrive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgDropInvert", function() { return CgDropInvert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgDropOpacity", function() { return CgDropOpacity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgDrop", function() { return CgDrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgDuplicate", function() { return CgDuplicate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgEditBlackPoint", function() { return CgEditBlackPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgEditContrast", function() { return CgEditContrast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgEditExposure", function() { return CgEditExposure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgEditFade", function() { return CgEditFade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgEditFlipH", function() { return CgEditFlipH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgEditFlipV", function() { return CgEditFlipV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgEditHighlight", function() { return CgEditHighlight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgEditMarkup", function() { return CgEditMarkup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgEditMask", function() { return CgEditMask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgEditNoise", function() { return CgEditNoise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgEditShadows", function() { return CgEditShadows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgEditStraight", function() { return CgEditStraight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgEditUnmask", function() { return CgEditUnmask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgEject", function() { return CgEject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgEnter", function() { return CgEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgErase", function() { return CgErase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgEreader", function() { return CgEreader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgEricsson", function() { return CgEricsson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgEthernet", function() { return CgEthernet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgEuro", function() { return CgEuro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgEventbrite", function() { return CgEventbrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgExpand", function() { return CgExpand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgExport", function() { return CgExport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgExtensionAdd", function() { return CgExtensionAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgExtensionAlt", function() { return CgExtensionAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgExtensionRemove", function() { return CgExtensionRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgExtension", function() { return CgExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgExternal", function() { return CgExternal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgEyeAlt", function() { return CgEyeAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgEye", function() { return CgEye; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgFacebook", function() { return CgFacebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgFeed", function() { return CgFeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgFigma", function() { return CgFigma; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgFileAdd", function() { return CgFileAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgFileDocument", function() { return CgFileDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgFileRemove", function() { return CgFileRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgFile", function() { return CgFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgFilm", function() { return CgFilm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgFilters", function() { return CgFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgFlagAlt", function() { return CgFlagAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgFlag", function() { return CgFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgFolderAdd", function() { return CgFolderAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgFolderRemove", function() { return CgFolderRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgFolder", function() { return CgFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgFontHeight", function() { return CgFontHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgFontSpacing", function() { return CgFontSpacing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgFormatBold", function() { return CgFormatBold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgFormatCenter", function() { return CgFormatCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgFormatColor", function() { return CgFormatColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgFormatHeading", function() { return CgFormatHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgFormatIndentDecrease", function() { return CgFormatIndentDecrease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgFormatIndentIncrease", function() { return CgFormatIndentIncrease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgFormatItalic", function() { return CgFormatItalic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgFormatJustify", function() { return CgFormatJustify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgFormatLeft", function() { return CgFormatLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgFormatLineHeight", function() { return CgFormatLineHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgFormatRight", function() { return CgFormatRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgFormatSeparator", function() { return CgFormatSeparator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgFormatSlash", function() { return CgFormatSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgFormatStrike", function() { return CgFormatStrike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgFormatText", function() { return CgFormatText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgFormatUnderline", function() { return CgFormatUnderline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgFormatUppercase", function() { return CgFormatUppercase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgFramer", function() { return CgFramer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgGames", function() { return CgGames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgGenderFemale", function() { return CgGenderFemale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgGenderMale", function() { return CgGenderMale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgGhostCharacter", function() { return CgGhostCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgGhost", function() { return CgGhost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgGift", function() { return CgGift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgGirl", function() { return CgGirl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgGitBranch", function() { return CgGitBranch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgGitCommit", function() { return CgGitCommit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgGitFork", function() { return CgGitFork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgGitPull", function() { return CgGitPull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgGitter", function() { return CgGitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgGlassAlt", function() { return CgGlassAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgGlass", function() { return CgGlass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgGlobeAlt", function() { return CgGlobeAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgGlobe", function() { return CgGlobe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgGoogleTasks", function() { return CgGoogleTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgGoogle", function() { return CgGoogle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgGym", function() { return CgGym; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgHashtag", function() { return CgHashtag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgHeadset", function() { return CgHeadset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgHeart", function() { return CgHeart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgHello", function() { return CgHello; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgHomeAlt", function() { return CgHomeAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgHomeScreen", function() { return CgHomeScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgHome", function() { return CgHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgIcecream", function() { return CgIcecream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgIfDesign", function() { return CgIfDesign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgImage", function() { return CgImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgImport", function() { return CgImport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgInbox", function() { return CgInbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgIndieHackers", function() { return CgIndieHackers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgInfinity", function() { return CgInfinity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgInfo", function() { return CgInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgInpicture", function() { return CgInpicture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgInsertAfterO", function() { return CgInsertAfterO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgInsertAfterR", function() { return CgInsertAfterR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgInsertAfter", function() { return CgInsertAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgInsertBeforeO", function() { return CgInsertBeforeO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgInsertBeforeR", function() { return CgInsertBeforeR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgInsertBefore", function() { return CgInsertBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgInsights", function() { return CgInsights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgInstagram", function() { return CgInstagram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgInternal", function() { return CgInternal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgKey", function() { return CgKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgKeyboard", function() { return CgKeyboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgKeyhole", function() { return CgKeyhole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgLaptop", function() { return CgLaptop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgLastpass", function() { return CgLastpass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgLayoutGridSmall", function() { return CgLayoutGridSmall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgLayoutGrid", function() { return CgLayoutGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgLayoutList", function() { return CgLayoutList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgLayoutPin", function() { return CgLayoutPin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgLinear", function() { return CgLinear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgLink", function() { return CgLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgListTree", function() { return CgListTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgList", function() { return CgList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgLivePhoto", function() { return CgLivePhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgLoadbarAlt", function() { return CgLoadbarAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgLoadbarDoc", function() { return CgLoadbarDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgLoadbarSound", function() { return CgLoadbarSound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgLoadbar", function() { return CgLoadbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgLockUnlock", function() { return CgLockUnlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgLock", function() { return CgLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgLogIn", function() { return CgLogIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgLogOff", function() { return CgLogOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgLogOut", function() { return CgLogOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgLoupe", function() { return CgLoupe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMagnet", function() { return CgMagnet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMailForward", function() { return CgMailForward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMailOpen", function() { return CgMailOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMailReply", function() { return CgMailReply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMail", function() { return CgMail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMathDivide", function() { return CgMathDivide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMathEqual", function() { return CgMathEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMathMinus", function() { return CgMathMinus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMathPercent", function() { return CgMathPercent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMathPlus", function() { return CgMathPlus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMaximizeAlt", function() { return CgMaximizeAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMaximize", function() { return CgMaximize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMaze", function() { return CgMaze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMediaLive", function() { return CgMediaLive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMediaPodcast", function() { return CgMediaPodcast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMenuBoxed", function() { return CgMenuBoxed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMenuCake", function() { return CgMenuCake; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMenuCheese", function() { return CgMenuCheese; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMenuGridO", function() { return CgMenuGridO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMenuGridR", function() { return CgMenuGridR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMenuHotdog", function() { return CgMenuHotdog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMenuLeftAlt", function() { return CgMenuLeftAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMenuLeft", function() { return CgMenuLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMenuMotion", function() { return CgMenuMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMenuOreos", function() { return CgMenuOreos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMenuRightAlt", function() { return CgMenuRightAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMenuRight", function() { return CgMenuRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMenuRound", function() { return CgMenuRound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMenu", function() { return CgMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMergeHorizontal", function() { return CgMergeHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMergeVertical", function() { return CgMergeVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMic", function() { return CgMic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMicrobit", function() { return CgMicrobit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMicrosoft", function() { return CgMicrosoft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMiniPlayer", function() { return CgMiniPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMinimizeAlt", function() { return CgMinimizeAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMinimize", function() { return CgMinimize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgModem", function() { return CgModem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMonday", function() { return CgMonday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMoon", function() { return CgMoon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMoreAlt", function() { return CgMoreAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMoreO", function() { return CgMoreO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMoreR", function() { return CgMoreR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMoreVerticalAlt", function() { return CgMoreVerticalAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMoreVerticalO", function() { return CgMoreVerticalO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMoreVerticalR", function() { return CgMoreVerticalR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMoreVertical", function() { return CgMoreVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMore", function() { return CgMore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMouse", function() { return CgMouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMoveDown", function() { return CgMoveDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMoveLeft", function() { return CgMoveLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMoveRight", function() { return CgMoveRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMoveTask", function() { return CgMoveTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMoveUp", function() { return CgMoveUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMusicNote", function() { return CgMusicNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMusicSpeaker", function() { return CgMusicSpeaker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgMusic", function() { return CgMusic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgNametag", function() { return CgNametag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgNotes", function() { return CgNotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgNotifications", function() { return CgNotifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgNpm", function() { return CgNpm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgOculus", function() { return CgOculus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgOpenCollective", function() { return CgOpenCollective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgOptions", function() { return CgOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgOrganisation", function() { return CgOrganisation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgOverflow", function() { return CgOverflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPacman", function() { return CgPacman; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPassword", function() { return CgPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPathBack", function() { return CgPathBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPathCrop", function() { return CgPathCrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPathDivide", function() { return CgPathDivide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPathExclude", function() { return CgPathExclude; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPathFront", function() { return CgPathFront; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPathIntersect", function() { return CgPathIntersect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPathOutline", function() { return CgPathOutline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPathTrim", function() { return CgPathTrim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPathUnite", function() { return CgPathUnite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPatreon", function() { return CgPatreon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPaypal", function() { return CgPaypal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPen", function() { return CgPen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPentagonBottomLeft", function() { return CgPentagonBottomLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPentagonBottomRight", function() { return CgPentagonBottomRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPentagonDown", function() { return CgPentagonDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPentagonLeft", function() { return CgPentagonLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPentagonRight", function() { return CgPentagonRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPentagonTopLeft", function() { return CgPentagonTopLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPentagonTopRight", function() { return CgPentagonTopRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPentagonUp", function() { return CgPentagonUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPerformance", function() { return CgPerformance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPexels", function() { return CgPexels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPhone", function() { return CgPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPhotoscan", function() { return CgPhotoscan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPiano", function() { return CgPiano; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPill", function() { return CgPill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPinAlt", function() { return CgPinAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPinBottom", function() { return CgPinBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPinTop", function() { return CgPinTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPin", function() { return CgPin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPlayBackwards", function() { return CgPlayBackwards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPlayButtonO", function() { return CgPlayButtonO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPlayButtonR", function() { return CgPlayButtonR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPlayButton", function() { return CgPlayButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPlayForwards", function() { return CgPlayForwards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPlayListAdd", function() { return CgPlayListAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPlayListCheck", function() { return CgPlayListCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPlayListRemove", function() { return CgPlayListRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPlayListSearch", function() { return CgPlayListSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPlayList", function() { return CgPlayList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPlayPauseO", function() { return CgPlayPauseO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPlayPauseR", function() { return CgPlayPauseR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPlayPause", function() { return CgPlayPause; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPlayStopO", function() { return CgPlayStopO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPlayStopR", function() { return CgPlayStopR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPlayStop", function() { return CgPlayStop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPlayTrackNextO", function() { return CgPlayTrackNextO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPlayTrackNextR", function() { return CgPlayTrackNextR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPlayTrackNext", function() { return CgPlayTrackNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPlayTrackPrevO", function() { return CgPlayTrackPrevO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPlayTrackPrevR", function() { return CgPlayTrackPrevR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPlayTrackPrev", function() { return CgPlayTrackPrev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPlug", function() { return CgPlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPocket", function() { return CgPocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPokemon", function() { return CgPokemon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPolaroid", function() { return CgPolaroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPoll", function() { return CgPoll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPresentation", function() { return CgPresentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPrinter", function() { return CgPrinter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgProductHunt", function() { return CgProductHunt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgProfile", function() { return CgProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPullClear", function() { return CgPullClear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPushChevronDownO", function() { return CgPushChevronDownO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPushChevronDownR", function() { return CgPushChevronDownR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPushChevronDown", function() { return CgPushChevronDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPushChevronLeftO", function() { return CgPushChevronLeftO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPushChevronLeftR", function() { return CgPushChevronLeftR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPushChevronLeft", function() { return CgPushChevronLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPushChevronRightO", function() { return CgPushChevronRightO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPushChevronRightR", function() { return CgPushChevronRightR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPushChevronRight", function() { return CgPushChevronRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPushChevronUpO", function() { return CgPushChevronUpO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPushChevronUpR", function() { return CgPushChevronUpR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPushChevronUp", function() { return CgPushChevronUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPushDown", function() { return CgPushDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPushLeft", function() { return CgPushLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPushRight", function() { return CgPushRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgPushUp", function() { return CgPushUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgQr", function() { return CgQr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgQuoteO", function() { return CgQuoteO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgQuote", function() { return CgQuote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgRadioCheck", function() { return CgRadioCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgRadioChecked", function() { return CgRadioChecked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgRatio", function() { return CgRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgRead", function() { return CgRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgReadme", function() { return CgReadme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgRecord", function() { return CgRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgRedo", function() { return CgRedo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgRemote", function() { return CgRemote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgRemoveR", function() { return CgRemoveR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgRemove", function() { return CgRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgRename", function() { return CgRename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgReorder", function() { return CgReorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgRepeat", function() { return CgRepeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgRing", function() { return CgRing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgRowFirst", function() { return CgRowFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgRowLast", function() { return CgRowLast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgRuler", function() { return CgRuler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSandClock", function() { return CgSandClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgScan", function() { return CgScan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgScreenMirror", function() { return CgScreenMirror; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgScreenShot", function() { return CgScreenShot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgScreenWide", function() { return CgScreenWide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgScreen", function() { return CgScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgScrollH", function() { return CgScrollH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgScrollV", function() { return CgScrollV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSearchFound", function() { return CgSearchFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSearchLoading", function() { return CgSearchLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSearch", function() { return CgSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSelectO", function() { return CgSelectO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSelectR", function() { return CgSelectR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSelect", function() { return CgSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgServer", function() { return CgServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgServerless", function() { return CgServerless; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgShapeCircle", function() { return CgShapeCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgShapeHalfCircle", function() { return CgShapeHalfCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgShapeHexagon", function() { return CgShapeHexagon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgShapeRhombus", function() { return CgShapeRhombus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgShapeSquare", function() { return CgShapeSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgShapeTriangle", function() { return CgShapeTriangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgShapeZigzag", function() { return CgShapeZigzag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgShare", function() { return CgShare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgShield", function() { return CgShield; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgShoppingBag", function() { return CgShoppingBag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgShoppingCart", function() { return CgShoppingCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgShortcut", function() { return CgShortcut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgShutterstock", function() { return CgShutterstock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSidebarOpen", function() { return CgSidebarOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSidebarRight", function() { return CgSidebarRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSidebar", function() { return CgSidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSignal", function() { return CgSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSize", function() { return CgSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSketch", function() { return CgSketch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSlack", function() { return CgSlack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSleep", function() { return CgSleep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSmartHomeBoiler", function() { return CgSmartHomeBoiler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSmartHomeCooker", function() { return CgSmartHomeCooker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSmartHomeHeat", function() { return CgSmartHomeHeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSmartHomeLight", function() { return CgSmartHomeLight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSmartHomeRefrigerator", function() { return CgSmartHomeRefrigerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSmartHomeWashMachine", function() { return CgSmartHomeWashMachine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSmartphoneChip", function() { return CgSmartphoneChip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSmartphoneRam", function() { return CgSmartphoneRam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSmartphoneShake", function() { return CgSmartphoneShake; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSmartphone", function() { return CgSmartphone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSmileMouthOpen", function() { return CgSmileMouthOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSmileNeutral", function() { return CgSmileNeutral; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSmileNoMouth", function() { return CgSmileNoMouth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSmileNone", function() { return CgSmileNone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSmileSad", function() { return CgSmileSad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSmileUpside", function() { return CgSmileUpside; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSmile", function() { return CgSmile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSoftwareDownload", function() { return CgSoftwareDownload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSoftwareUpload", function() { return CgSoftwareUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSortAz", function() { return CgSortAz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSortZa", function() { return CgSortZa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSpaceBetweenV", function() { return CgSpaceBetweenV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSpaceBetween", function() { return CgSpaceBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSpectrum", function() { return CgSpectrum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSpinnerAlt", function() { return CgSpinnerAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSpinnerTwoAlt", function() { return CgSpinnerTwoAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSpinnerTwo", function() { return CgSpinnerTwo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSpinner", function() { return CgSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSquare", function() { return CgSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgStack", function() { return CgStack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgStark", function() { return CgStark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgStopwatch", function() { return CgStopwatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgStories", function() { return CgStories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgStudio", function() { return CgStudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgStyle", function() { return CgStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSun", function() { return CgSun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSupport", function() { return CgSupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSwapVertical", function() { return CgSwapVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSwap", function() { return CgSwap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSweden", function() { return CgSweden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSwiss", function() { return CgSwiss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgSync", function() { return CgSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgTab", function() { return CgTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgTag", function() { return CgTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgTally", function() { return CgTally; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgTapDouble", function() { return CgTapDouble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgTapSingle", function() { return CgTapSingle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgTemplate", function() { return CgTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgTennis", function() { return CgTennis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgTerminal", function() { return CgTerminal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgTerrain", function() { return CgTerrain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgThermometer", function() { return CgThermometer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgThermostat", function() { return CgThermostat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgTikcode", function() { return CgTikcode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgTime", function() { return CgTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgTimelapse", function() { return CgTimelapse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgTimer", function() { return CgTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgToday", function() { return CgToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgToggleOff", function() { return CgToggleOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgToggleOn", function() { return CgToggleOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgToggleSquareOff", function() { return CgToggleSquareOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgToggleSquare", function() { return CgToggleSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgToolbarBottom", function() { return CgToolbarBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgToolbarLeft", function() { return CgToolbarLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgToolbarRight", function() { return CgToolbarRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgToolbarTop", function() { return CgToolbarTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgToolbox", function() { return CgToolbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgTouchpad", function() { return CgTouchpad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgTrack", function() { return CgTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgTranscript", function() { return CgTranscript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgTrashEmpty", function() { return CgTrashEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgTrash", function() { return CgTrash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgTree", function() { return CgTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgTrees", function() { return CgTrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgTrello", function() { return CgTrello; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgTrendingDown", function() { return CgTrendingDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgTrending", function() { return CgTrending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgTrophy", function() { return CgTrophy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgTv", function() { return CgTv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgTwilio", function() { return CgTwilio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgTwitter", function() { return CgTwitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgUiKit", function() { return CgUiKit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgUmbrella", function() { return CgUmbrella; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgUnavailable", function() { return CgUnavailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgUnblock", function() { return CgUnblock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgUndo", function() { return CgUndo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgUnfold", function() { return CgUnfold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgUnsplash", function() { return CgUnsplash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgUsbC", function() { return CgUsbC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgUsb", function() { return CgUsb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgUserAdd", function() { return CgUserAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgUserList", function() { return CgUserList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgUserRemove", function() { return CgUserRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgUser", function() { return CgUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgUserlane", function() { return CgUserlane; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgViewCols", function() { return CgViewCols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgViewComfortable", function() { return CgViewComfortable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgViewDay", function() { return CgViewDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgViewGrid", function() { return CgViewGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgViewList", function() { return CgViewList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgViewMonth", function() { return CgViewMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgViewSplit", function() { return CgViewSplit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgVinyl", function() { return CgVinyl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgVoicemailO", function() { return CgVoicemailO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgVoicemailR", function() { return CgVoicemailR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgVoicemail", function() { return CgVoicemail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgVolume", function() { return CgVolume; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgWebcam", function() { return CgWebcam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgWebsite", function() { return CgWebsite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgWindows", function() { return CgWindows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgWorkAlt", function() { return CgWorkAlt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgYinyang", function() { return CgYinyang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgYoutube", function() { return CgYoutube; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgZeit", function() { return CgZeit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgZoomIn", function() { return CgZoomIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CgZoomOut", function() { return CgZoomOut; });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ "./node_modules/react-icons/lib/esm/index.js");
// THIS FILE IS AUTO GENERATED

function CgAbstract (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M5 5H19V19H16L16 8H5V5Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M10 19C12.7614 19 15 16.7614 15 14C15 11.2386 12.7614 9 10 9C7.23858 9 5 11.2386 5 14C5 16.7614 7.23858 19 10 19ZM10 16C11.1046 16 12 15.1046 12 14C12 12.8954 11.1046 12 10 12C8.89543 12 8 12.8954 8 14C8 15.1046 8.89543 16 10 16Z","fill":"currentColor"}}]})(props);
};
function CgAddR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12 6C12.5523 6 13 6.44772 13 7V11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H11V7C11 6.44772 11.4477 6 12 6Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M5 22C3.34315 22 2 20.6569 2 19V5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5ZM4 19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4H5C4.44772 4 4 4.44772 4 5V19Z","fill":"currentColor"}}]})(props);
};
function CgAdd (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7Z","fill":"currentColor"}}]})(props);
};
function CgAdidas (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M1.3294 19L0.731323 17.9641L5.06145 15.4641L7.1029 19H1.3294Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15.1858 19H9.4123L5.7935 12.7321L10.1236 10.2321L15.1858 19Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M23.2687 19H17.4952L10.8557 7.5L15.1858 5L23.2687 19Z","fill":"currentColor"}}]})(props);
};
function CgAirplane (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z","fill":"currentColor"}}]})(props);
};
function CgAlarm (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M5.45887 2L1 6.01478L2.33826 7.50107L6.79713 3.48629L5.45887 2Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11 8H13V12H16V14H11V8Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M18.5411 2L23 6.01478L21.6617 7.50107L17.2029 3.48629L18.5411 2Z","fill":"currentColor"}}]})(props);
};
function CgAlbum (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M2 19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5C3.34315 2 2 3.34315 2 5V19ZM20 19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44772 4 5 4H10V12.0111L12.395 12.0112L14.0001 9.86419L15.6051 12.0112H18.0001L18 4H19C19.5523 4 20 4.44772 20 5V19ZM16 4H12V9.33585L14.0001 6.66046L16 9.33571V4Z","fill":"currentColor"}}]})(props);
};
function CgAlignBottom (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M13 10H17V16H13V10Z","fill":"currentColor","fillOpacity":"0.5"}},{"tag":"path","attr":{"d":"M11 4H7V16H11V4Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M18 18H6V20H18V18Z","fill":"currentColor"}}]})(props);
};
function CgAlignCenter (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M9 13H15V17H9V13Z","fill":"currentColor","fillOpacity":"0.5"}},{"tag":"path","attr":{"d":"M6 7H18V11H6V7Z","fill":"currentColor"}}]})(props);
};
function CgAlignLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M8 13H14V17H8V13Z","fill":"currentColor","fillOpacity":"0.5"}},{"tag":"path","attr":{"d":"M6 6H4V18H6V6Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M20 7H8V11H20V7Z","fill":"currentColor"}}]})(props);
};
function CgAlignMiddle (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M13 9H17V15H13V9Z","fill":"currentColor","fillOpacity":"0.5"}},{"tag":"path","attr":{"d":"M7 6H11V18H7V6Z","fill":"currentColor"}}]})(props);
};
function CgAlignRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M15.9991 13.0039L9.99907 12.9911L9.99054 16.9911L15.9905 17.0039L15.9991 13.0039Z","fill":"currentColor","fillOpacity":"0.5"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M19.978 18.0021L20.0036 6.00214L18.0036 5.99788L17.978 17.9979L19.978 18.0021Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3.9964 10.9851L15.9964 11.0107L16.0049 7.0107L4.00493 6.98512L3.9964 10.9851Z","fill":"currentColor"}}]})(props);
};
function CgAlignTop (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M13.0352 7.98797L13.0374 13.988L17.0374 13.9865L17.0352 7.98653L13.0352 7.98797Z","fill":"currentColor","fillOpacity":"0.5"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M17.9996 4.01189L5.99963 4.01837L6.00038 6.01837L18.0004 6.01189L17.9996 4.01189Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M11.0374 19.9864L11.0321 7.98637L7.03207 7.98813L7.03736 19.9881L11.0374 19.9864Z","fill":"currentColor"}}]})(props);
};
function CgAnchor (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M15 6C15 7.30622 14.1652 8.41746 13 8.82929V16.874C14.7252 16.4299 16 14.8638 16 13H18C18 15.973 15.8377 18.441 13 18.917V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V18.917C8.16229 18.441 6 15.973 6 13H8C8 14.8638 9.27477 16.4299 11 16.874V8.82929C9.83481 8.41746 9 7.30622 9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6ZM12 7C12.5523 7 13 6.55228 13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6C11 6.55228 11.4477 7 12 7Z","fill":"currentColor"}}]})(props);
};
function CgAppleWatch (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M16.4975 5.02988C16.4973 5.07798 16.4959 5.12581 16.4934 5.17335C17.662 5.58332 18.5 6.69628 18.5 8.00496V9.00493H19.5V13.0049H18.5V16.005C18.5 17.3129 17.663 18.4254 16.4953 18.8359C16.4984 18.8919 16.5 18.9482 16.5 19.005C16.5 20.6618 15.1569 22.005 13.5 22.005H9.5C7.84315 22.005 6.5 20.6618 6.5 19.005C6.5 18.9482 6.50158 18.8919 6.50468 18.8359C5.33705 18.4254 4.5 17.3129 4.5 16.005V8.00496C4.5 6.69767 5.33618 5.58568 6.50286 5.17465C6.49907 5.11032 6.4973 5.04546 6.49763 4.98011C6.50587 3.32328 7.85569 1.98683 9.51252 1.99508L13.5125 2.01499C15.1693 2.02324 16.5058 3.37305 16.4975 5.02988ZM8.49764 5.00496H14.4975C14.4922 4.45954 14.0498 4.01769 13.5025 4.01496L9.50257 3.99505C8.95029 3.99231 8.50035 4.43779 8.4976 4.99006L8.49764 5.00496ZM15.7049 7.02596L11.4846 7.00496H7.5C6.94772 7.00496 6.5 7.45267 6.5 8.00496V16.005C6.5 16.5568 6.94696 17.0042 7.4986 17.005H15.5014C16.053 17.0042 16.5 16.5568 16.5 16.005V8.00496C16.5 7.52289 16.1589 7.12049 15.7049 7.02596ZM8.5 19.005C8.5 19.5572 8.94772 20.005 9.5 20.005H13.5C14.0523 20.005 14.5 19.5572 14.5 19.005H8.5Z","fill":"currentColor"}}]})(props);
};
function CgArrangeBack (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3 3H11V7H17V13H21V21H13V17H7V11H3V3ZM15 13H13V15H9V11H11V9H15V13Z","fill":"currentColor"}}]})(props);
};
function CgArrangeFront (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3 3H11V7H17V13H21V21H13V17H7V11H3V3ZM15 9H9V15H15V9Z","fill":"currentColor"}}]})(props);
};
function CgArrowAlignH (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M13 7H11V17H13V7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5.99996 7.75732L7.41418 9.17154L5.58572 11L9.99996 11V13L5.58579 13L7.41418 14.8284L5.99996 16.2426L1.75732 12L5.99996 7.75732Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M18 16.2427L16.5858 14.8285L18.4143 13H14V11L18.4142 11L16.5858 9.17161L18 7.75739L22.2427 12L18 16.2427Z","fill":"currentColor"}}]})(props);
};
function CgArrowAlignV (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M7 11L7 13H17V11H7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7.75732 18L9.17154 16.5858L11 18.4143V14H13V18.4142L14.8284 16.5858L16.2426 18L12 22.2427L7.75732 18Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16.2427 5.99996L14.8285 7.41418L13 5.58572V9.99996H11L11 5.58579L9.17161 7.41418L7.75739 5.99996L12 1.75732L16.2427 5.99996Z","fill":"currentColor"}}]})(props);
};
function CgArrowBottomLeftO (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M10 10.0367L8.00002 10.0367L8 16.0367L14 16.0367L14 14.0367L11.4143 14.0366L16.7438 8.7071L15.3296 7.29289L10 12.6224L10 10.0367Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z","fill":"currentColor"}}]})(props);
};
function CgArrowBottomLeftR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M10 10.0367H8V16.0367H14V14.0367H11.4142L16.7438 8.70712L15.3296 7.2929L10 12.6225V10.0367Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z","fill":"currentColor"}}]})(props);
};
function CgArrowBottomLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M18.2426 7.17154L16.8284 5.75732L7.75739 14.8283L7.75739 10.2427H5.75739L5.75739 18.2427H13.7574V16.2427L9.17144 16.2427L18.2426 7.17154Z","fill":"currentColor"}}]})(props);
};
function CgArrowBottomRightO (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M14.0367 10.0367H16.0367V16.0367H10.0367V14.0367H12.6225L7.29297 8.70713L8.70718 7.29291L14.0367 12.6225L14.0367 10.0367Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z","fill":"currentColor"}}]})(props);
};
function CgArrowBottomRightR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M14.0367 10.0367H16.0367V16.0367H10.0367V14.0367H12.6225L7.29297 8.70713L8.70718 7.29292L14.0367 12.6225L14.0367 10.0367Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z","fill":"currentColor"}}]})(props);
};
function CgArrowBottomRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M5.75739 7.17154L7.1716 5.75732L16.2426 14.8283L16.2426 10.2427H18.2426L18.2426 18.2427H10.2426V16.2427L14.8285 16.2427L5.75739 7.17154Z","fill":"currentColor"}}]})(props);
};
function CgArrowDownO (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M14.8285 12.0259L16.2427 13.4402L12 17.6828L7.7574 13.4402L9.17161 12.0259L11 13.8544V6.31724H13V13.8544L14.8285 12.0259Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M19.7782 19.7782C15.4824 24.0739 8.51759 24.0739 4.22183 19.7782C-0.0739417 15.4824 -0.0739417 8.51759 4.22183 4.22183C8.51759 -0.0739419 15.4824 -0.0739419 19.7782 4.22183C24.0739 8.51759 24.0739 15.4824 19.7782 19.7782ZM18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364C2.12132 14.8492 2.12132 9.15076 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.364 5.63604C21.8787 9.15076 21.8787 14.8492 18.364 18.364Z","fill":"currentColor"}}]})(props);
};
function CgArrowDownR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M14.8284 12.0259L16.2426 13.4402L12 17.6828L7.75733 13.4402L9.17155 12.0259L11 13.8544V6.31724H13V13.8544L14.8284 12.0259Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z","fill":"currentColor"}}]})(props);
};
function CgArrowDown (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M11.0001 3.67157L13.0001 3.67157L13.0001 16.4999L16.2426 13.2574L17.6568 14.6716L12 20.3284L6.34314 14.6716L7.75735 13.2574L11.0001 16.5001L11.0001 3.67157Z","fill":"currentColor"}}]})(props);
};
function CgArrowLeftO (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M11.9481 14.8285L10.5339 16.2427L6.29122 12L10.5339 7.7574L11.9481 9.17161L10.1196 11H17.6568V13H10.1196L11.9481 14.8285Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M4.22183 19.7782C-0.0739419 15.4824 -0.0739419 8.51759 4.22183 4.22183C8.51759 -0.0739419 15.4824 -0.0739419 19.7782 4.22183C24.0739 8.51759 24.0739 15.4824 19.7782 19.7782C15.4824 24.0739 8.51759 24.0739 4.22183 19.7782ZM5.63604 18.364C2.12132 14.8492 2.12132 9.15076 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.364 5.63604C21.8787 9.15076 21.8787 14.8492 18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364Z","fill":"currentColor"}}]})(props);
};
function CgArrowLeftR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M11.9481 14.8285L10.5339 16.2427L6.29126 12L10.5339 7.7574L11.9481 9.17161L10.1197 11H17.6568V13H10.1197L11.9481 14.8285Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M23 19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19ZM19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21Z","fill":"currentColor"}}]})(props);
};
function CgArrowLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z","fill":"currentColor"}}]})(props);
};
function CgArrowLongDownC (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M10.9991 6.84976C9.83339 6.43819 8.99813 5.32671 8.99813 4.02014C8.99813 2.36329 10.3413 1.02014 11.9981 1.02014C13.655 1.02014 14.9981 2.36329 14.9981 4.02014C14.9981 5.32601 14.1638 6.43701 12.9991 6.84911L13.0121 19.1375L14.8244 17.315L16.2426 18.7253L12.0119 22.9799L7.75739 18.7491L9.16763 17.3309L11.0122 19.1652L10.9991 6.84976ZM11.9981 5.02014C11.4458 5.02014 10.9981 4.57243 10.9981 4.02014C10.9981 3.46786 11.4458 3.02014 11.9981 3.02014C12.5504 3.02014 12.9981 3.46786 12.9981 4.02014C12.9981 4.57243 12.5504 5.02014 11.9981 5.02014Z","fill":"currentColor"}}]})(props);
};
function CgArrowLongDownE (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M14.998 1.02014H8.99801V7.02014H10.9991L11.012 19.1652L9.16751 17.3309L7.75726 18.7491L12.0118 22.9799L16.2427 18.7253L14.8246 17.315L13.012 19.1378L12.9991 7.02014H14.998V1.02014ZM10.998 3.02014H12.998V5.02014H10.998V3.02014Z","fill":"currentColor"}}]})(props);
};
function CgArrowLongDownL (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M8.99801 0.972107V2.97211H11.9983L10.998 2.97299L11.0124 19.2135L9.16751 17.379L7.75726 18.7972L12.0118 23.0279L16.2427 18.7734L14.8246 17.3632L13.0124 19.1856L12.998 2.97211H14.998V0.972107H8.99801Z","fill":"currentColor"}}]})(props);
};
function CgArrowLongDownR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M16.2416 4.64146L11.9989 0.398819L7.75629 4.64146L11.0003 7.88551L11.013 19.7865L9.16846 17.9523L7.75821 19.3704L12.0127 23.6012L16.2437 19.3466L14.8255 17.9363L13.013 19.7591L13.0003 7.8827L16.2416 4.64146ZM10.5847 4.64146L11.9989 3.22725L13.4131 4.64146L11.9989 6.05567L10.5847 4.64146Z","fill":"currentColor"}}]})(props);
};
function CgArrowLongDown (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M13.0125 19.162L14.8246 17.3398L16.2427 18.7501L12.012 23.0046L7.75726 18.7739L9.16751 17.3557L11.0126 19.1905L10.998 0.997021L12.998 0.995422L13.0125 19.162Z","fill":"currentColor"}}]})(props);
};
function CgArrowLongLeftC (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M5.27 7.75737L1.0202 11.9928L5.25576 16.2426L6.67236 14.8308L4.85801 13.0103L17.1463 13.0525C17.5532 14.219 18.6604 15.0583 19.9663 15.0642C21.6231 15.0717 22.9723 13.7346 22.9798 12.0777C22.9872 10.4209 21.6501 9.07172 19.9933 9.06427C18.6867 9.05841 17.5715 9.88865 17.1547 11.0525L4.83934 11.0102L6.68182 9.17397L5.27 7.75737ZM18.9798 12.0598C18.9823 11.5075 19.432 11.0618 19.9843 11.0643C20.5366 11.0667 20.9823 11.5165 20.9798 12.0687C20.9773 12.621 20.5276 13.0667 19.9753 13.0642C19.423 13.0618 18.9773 12.612 18.9798 12.0598Z","fill":"currentColor"}}]})(props);
};
function CgArrowLongLeftE (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M5.26323 7.75737L1.01343 11.9928L5.24893 16.2426L6.66553 14.8308L4.85123 13.0104L16.9685 13.0519L16.9596 15.0507L22.9595 15.0777L22.9865 9.07773L16.9865 9.05079L16.9775 11.0519L4.83252 11.0103L6.67505 9.17397L5.26323 7.75737ZM20.9775 11.0687L20.9685 13.0687L18.9685 13.0597L18.9775 11.0597L20.9775 11.0687Z","fill":"currentColor"}}]})(props);
};
function CgArrowLongLeftL (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M5.20837 7.75725L0.969116 12.0033L5.21515 16.2428L6.62823 14.8274L4.80949 13.0116L21.0229 13.0298L21.0189 15.0297L23.0189 15.0338L23.0309 9.03377L21.0309 9.02976L21.0249 12.019L21.0261 11.0298L4.78543 11.0115L6.62371 9.17033L5.20837 7.75725Z","fill":"currentColor"}}]})(props);
};
function CgArrowLongLeftR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M4.64872 7.72528L0.398926 11.9608L4.63443 16.2105L6.05103 14.7987L4.23673 12.9783L16.1027 13.019L19.3585 16.2747L23.6011 12.0321L19.3585 7.78945L16.1289 11.019L4.21801 10.9782L6.06055 9.14188L4.64872 7.72528ZM17.9443 12.0321L19.3585 10.6179L20.7727 12.0321L19.3585 13.4463L17.9443 12.0321Z","fill":"currentColor"}}]})(props);
};
function CgArrowLongLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z","fill":"currentColor"}}]})(props);
};
function CgArrowLongRightC (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M18.73 7.75739L22.9798 11.9929L18.7443 16.2426L17.3277 14.8308L19.142 13.0103L6.85364 13.0525C6.44678 14.219 5.33954 15.0584 4.03368 15.0642C2.37684 15.0717 1.02767 13.7346 1.02023 12.0777C1.01279 10.4209 2.34989 9.07173 4.00673 9.06429C5.31328 9.05842 6.4285 9.88867 6.84531 11.0525L19.1607 11.0103L17.3182 9.17398L18.73 7.75739ZM5.02019 12.0598C5.01771 11.5075 4.56799 11.0618 4.01571 11.0643C3.46343 11.0667 3.01773 11.5165 3.02021 12.0687C3.02269 12.621 3.47242 13.0667 4.02469 13.0642C4.57697 13.0618 5.02267 12.612 5.02019 12.0598Z","fill":"currentColor"}}]})(props);
};
function CgArrowLongRightE (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M22.9865 11.9929L18.7511 16.2426L17.3345 14.8308L19.1488 13.0104L7.0314 13.0519L7.04038 15.0507L1.04044 15.0777L1.01349 9.07773L7.01343 9.05079L7.02242 11.0519L19.1674 11.0103L17.3249 9.17398L18.7367 7.75739L22.9865 11.9929ZM3.02245 11.0687L3.03143 13.0687L5.03141 13.0597L5.02243 11.0597L3.02245 11.0687Z","fill":"currentColor"}}]})(props);
};
function CgArrowLongRightL (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M18.9164 7.75739L23.1662 11.9929L18.9305 16.2426L17.5139 14.8308L19.3325 13.0061L2.8338 13.0285V15.0299H0.833801V9.02988H2.8338V11.0285L19.3429 11.0061L17.5046 9.17398L18.9164 7.75739Z","fill":"currentColor"}}]})(props);
};
function CgArrowLongRightR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M19.3514 7.72525L23.6012 11.9607L19.3655 16.2105L17.9489 14.7987L19.7633 12.9781L7.89744 13.0188L4.64151 16.2748L0.398865 12.0321L4.64151 7.78947L7.87093 11.0189L19.782 10.9781L17.9395 9.14185L19.3514 7.72525ZM4.64151 13.4463L6.05572 12.0321L4.64151 10.6179L3.22729 12.0321L4.64151 13.4463Z","fill":"currentColor"}}]})(props);
};
function CgArrowLongRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z","fill":"currentColor"}}]})(props);
};
function CgArrowLongUpC (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M7.75751 5.23078L12.0321 1.02029L16.2425 5.29492L14.8177 6.69842L13.0141 4.86736L12.9427 17.1555C14.1054 17.5732 14.9345 18.6881 14.9283 19.994C14.9204 21.6508 13.5709 22.9876 11.9141 22.9797C10.2572 22.9718 8.92049 21.6223 8.92836 19.9655C8.93456 18.6589 9.77508 17.5514 10.9427 17.1454L11.0142 4.83017L9.161 6.65563L7.75751 5.23078ZM11.9331 18.9797C11.3808 18.9771 10.931 19.4227 10.9283 19.975C10.9257 20.5273 11.3713 20.9771 11.9236 20.9797C12.4759 20.9823 12.9257 20.5367 12.9283 19.9845C12.9309 19.4322 12.4853 18.9824 11.9331 18.9797Z","fill":"currentColor"}}]})(props);
};
function CgArrowLongUpE (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12.0321 1.01318L16.2425 5.28781L14.8177 6.69131L13.014 4.86019L12.9436 16.9774L14.9425 16.9869L14.914 22.9868L8.91412 22.9583L8.9426 16.9584L10.9436 16.9679L11.0142 4.82318L9.16107 6.64852L7.75757 5.22367L12.0321 1.01318ZM10.9236 20.9678L12.9236 20.9773L12.9331 18.9773L10.9331 18.9678L10.9236 20.9678Z","fill":"currentColor"}}]})(props);
};
function CgArrowLongUpL (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12.0321 1.01865L16.2425 5.29327L14.8177 6.69677L13.0192 4.87094L12.9676 20.9813H14.9644V22.9813H8.96441V20.9813H10.9676L11.0194 4.82354L9.16107 6.65399L7.75757 5.22914L12.0321 1.01865Z","fill":"currentColor"}}]})(props);
};
function CgArrowLongUpR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M7.79337 4.60945L12.0679 0.398956L16.2785 4.67358L14.8536 6.07708L13.0499 4.24596L12.9809 16.1324L16.2068 19.3584L11.9642 23.601L7.72156 19.3584L10.981 16.0989L11.0501 4.20883L9.19686 6.0343L7.79337 4.60945ZM11.9642 20.7726L13.3784 19.3584L11.9642 17.9442L10.55 19.3584L11.9642 20.7726Z","fill":"currentColor"}}]})(props);
};
function CgArrowLongUp (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12.0321 1.01712L7.75751 5.22761L9.161 6.65246L11.0197 4.82165L10.9644 22.9768L12.9644 22.9829L13.0195 4.86974L14.8177 6.69525L16.2425 5.29175L12.0321 1.01712Z","fill":"currentColor"}}]})(props);
};
function CgArrowRightO (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12.0519 14.8285L13.4661 16.2427L17.7088 12L13.4661 7.7574L12.0519 9.17161L13.8804 11H6.34321V13H13.8803L12.0519 14.8285Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183C15.4824 -0.0739417 8.51759 -0.0739417 4.22183 4.22183C-0.0739417 8.51759 -0.0739417 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782ZM18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364Z","fill":"currentColor"}}]})(props);
};
function CgArrowRightR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12.0519 14.8285L13.4661 16.2427L17.7087 12L13.4661 7.7574L12.0519 9.17161L13.8803 11H6.34318V13H13.8803L12.0519 14.8285Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5C2.79086 1 1 2.79086 1 5V19ZM5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z","fill":"currentColor"}}]})(props);
};
function CgArrowRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z","fill":"currentColor"}}]})(props);
};
function CgArrowTopLeftO (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M10 13.9633H8V7.96331H14V9.96331H11.4142L16.7438 15.2929L15.3296 16.7071L10 11.3775L10 13.9633Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12ZM21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z","fill":"currentColor"}}]})(props);
};
function CgArrowTopLeftR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M10 13.9633H8V7.96331H14V9.96331H11.4142L16.7438 15.2929L15.3296 16.7071L10 11.3775L10 13.9633Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5C2.79086 1 1 2.79086 1 5V19ZM5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z","fill":"currentColor"}}]})(props);
};
function CgArrowTopLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M13.4747 5.49475L13.4793 7.49475L8.92175 7.50541L18.5253 17.0896L17.1125 18.5052L7.48259 8.89473L7.49339 13.5088L5.49339 13.5134L5.47467 5.51345L13.4747 5.49475Z","fill":"currentColor"}}]})(props);
};
function CgArrowTopRightO (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M14 13.9633H16V7.96331H10V9.96331H12.5858L7.25623 15.2929L8.67044 16.7071L14 11.3775L14 13.9633Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z","fill":"currentColor"}}]})(props);
};
function CgArrowTopRightR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M14 13.9633H16V7.96331H10V9.96331H12.5858L7.25623 15.2929L8.67044 16.7071L14 11.3775V13.9633Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M23 19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19ZM19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21Z","fill":"currentColor"}}]})(props);
};
function CgArrowTopRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M10.5253 5.49475L10.5206 7.49475L15.0782 7.50541L5.47473 17.0896L6.88752 18.5052L16.5173 8.89479L16.5065 13.5088L18.5065 13.5134L18.5253 5.51345L10.5253 5.49475Z","fill":"currentColor"}}]})(props);
};
function CgArrowUpO (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M14.8285 11.9481L16.2427 10.5339L12 6.29122L7.7574 10.5339L9.17161 11.9481L11 10.1196V17.6568H13V10.1196L14.8285 11.9481Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M19.7782 4.22183C15.4824 -0.0739415 8.51759 -0.0739422 4.22183 4.22183C-0.0739415 8.51759 -0.0739422 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183ZM18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604Z","fill":"currentColor"}}]})(props);
};
function CgArrowUpR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M14.8543 11.9741L16.2686 10.5599L12.0259 6.31724L7.78327 10.5599L9.19749 11.9741L11.0259 10.1457V17.6828H13.0259V10.1457L14.8543 11.9741Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5C2.79086 1 1 2.79086 1 5V19ZM5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z","fill":"currentColor"}}]})(props);
};
function CgArrowUp (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M17.6568 8.96219L16.2393 10.3731L12.9843 7.10285L12.9706 20.7079L10.9706 20.7059L10.9843 7.13806L7.75404 10.3532L6.34314 8.93572L12.0132 3.29211L17.6568 8.96219Z","fill":"currentColor"}}]})(props);
};
function CgArrowsBreakeH (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M9.24268 7H11.2427V11.0001H11.2477V13.0001H11.2427V17H9.24268V13.0001L4.82846 13L6.65685 14.8284L5.24264 16.2426L1 12L5.24264 7.75732L6.65685 9.17154L4.82839 11H9.24264L9.24268 7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15.2527 7.00012H13.2527V11.0001H13.2477V13.0001H13.2527V17.0001H15.2527V13.0001L19.667 13L17.8385 14.8285L19.2527 16.2427L23.4954 12L19.2527 7.75739L17.8385 9.17161L19.6669 11H15.2527L15.2527 7.00012Z","fill":"currentColor"}}]})(props);
};
function CgArrowsBreakeV (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M16.2427 5.24264L14.8285 6.65685L13 4.82839L13.0001 9.24268H17.0001V11.2427H7.00012V9.24268H11.0001L11 4.82846L9.17161 6.65685L7.75739 5.24264L12 1L16.2427 5.24264Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7 15.2527V13.2527H17V15.2527H13.0001L13 19.6669L14.8284 17.8385L16.2426 19.2527L12 23.4954L7.75732 19.2527L9.17154 17.8385L11 19.667V15.2527L7 15.2527Z","fill":"currentColor"}}]})(props);
};
function CgArrowsExchangeAltV (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12.9841 4.99255C12.9841 4.44027 13.4318 3.99255 13.9841 3.99255C14.3415 3.99255 14.6551 4.18004 14.8319 4.46202L17.5195 7.14964C17.9101 7.54016 17.9101 8.17333 17.5195 8.56385C17.129 8.95438 16.4958 8.95438 16.1053 8.56385L14.9841 7.44263V14.9926C14.9841 15.5448 14.5364 15.9926 13.9841 15.9926C13.4318 15.9926 12.9841 15.5448 12.9841 14.9926V5.042C12.984 5.03288 12.984 5.02376 12.9841 5.01464V4.99255Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11.0159 19.0074C11.0159 19.5597 10.5682 20.0074 10.0159 20.0074C9.6585 20.0074 9.3449 19.82 9.16807 19.538L6.48045 16.8504C6.08993 16.4598 6.08993 15.8267 6.48045 15.4361C6.87098 15.0456 7.50414 15.0456 7.89467 15.4361L9.01589 16.5574V9.00745C9.01589 8.45516 9.46361 8.00745 10.0159 8.00745C10.5682 8.00745 11.0159 8.45516 11.0159 9.00745V18.958C11.016 18.9671 11.016 18.9762 11.0159 18.9854V19.0074Z","fill":"currentColor"}}]})(props);
};
function CgArrowsExchangeAlt (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M4.99255 11.0159C4.44027 11.0159 3.99255 10.5682 3.99255 10.0159C3.99255 9.6585 4.18004 9.3449 4.46202 9.16807L7.14964 6.48045C7.54016 6.08993 8.17333 6.08993 8.56385 6.48045C8.95438 6.87098 8.95438 7.50414 8.56385 7.89467L7.44263 9.0159L14.9926 9.01589C15.5448 9.01589 15.9926 9.46361 15.9926 10.0159C15.9926 10.5682 15.5448 11.0159 14.9926 11.0159L5.042 11.0159C5.03288 11.016 5.02376 11.016 5.01464 11.0159H4.99255Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M19.0074 12.9841C19.5597 12.9841 20.0074 13.4318 20.0074 13.9841C20.0074 14.3415 19.82 14.6551 19.538 14.8319L16.8504 17.5195C16.4598 17.9101 15.8267 17.9101 15.4361 17.5195C15.0456 17.129 15.0456 16.4958 15.4361 16.1053L16.5574 14.9841H9.00745C8.45516 14.9841 8.00745 14.5364 8.00745 13.9841C8.00745 13.4318 8.45516 12.9841 9.00745 12.9841L18.958 12.9841C18.9671 12.984 18.9762 12.984 18.9854 12.9841H19.0074Z","fill":"currentColor"}}]})(props);
};
function CgArrowsExchangeV (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12.9842 15C12.9842 15.5523 13.4319 16 13.9842 16C14.3416 16 14.6552 15.8125 14.832 15.5305L17.5196 12.8429C17.9101 12.4524 17.9101 11.8192 17.5196 11.4287C17.1291 11.0382 16.4959 11.0382 16.1054 11.4287L14.9842 12.5499L14.9842 5C14.9842 4.44771 14.5364 4 13.9842 4C13.4319 4 12.9842 4.44772 12.9842 5L12.9842 14.9506C12.984 14.9597 12.984 14.9688 12.9842 14.9779V15Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11.016 9C11.016 8.44771 10.5682 8 10.016 8C9.65856 8 9.34496 8.18748 9.16813 8.46947L6.48052 11.1571C6.08999 11.5476 6.08999 12.1808 6.48051 12.5713C6.87104 12.9618 7.5042 12.9618 7.89473 12.5713L9.01596 11.4501L9.01596 19C9.01596 19.5523 9.46367 20 10.016 20C10.5682 20 11.016 19.5523 11.016 19L11.016 9.04945C11.0161 9.04033 11.0161 9.03121 11.016 9.02208V9Z","fill":"currentColor"}}]})(props);
};
function CgArrowsExchange (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M4.99255 12.9841C4.44027 12.9841 3.99255 13.4318 3.99255 13.9841C3.99255 14.3415 4.18004 14.6551 4.46202 14.8319L7.14964 17.5195C7.54016 17.9101 8.17333 17.9101 8.56385 17.5195C8.95438 17.129 8.95438 16.4958 8.56385 16.1053L7.44263 14.9841H14.9926C15.5448 14.9841 15.9926 14.5364 15.9926 13.9841C15.9926 13.4318 15.5448 12.9841 14.9926 12.9841L5.042 12.9841C5.03288 12.984 5.02376 12.984 5.01464 12.9841H4.99255Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M19.0074 11.0159C19.5597 11.0159 20.0074 10.5682 20.0074 10.0159C20.0074 9.6585 19.82 9.3449 19.538 9.16807L16.8504 6.48045C16.4598 6.08993 15.8267 6.08993 15.4361 6.48045C15.0456 6.87098 15.0456 7.50414 15.4361 7.89467L16.5574 9.01589L9.00745 9.01589C8.45516 9.01589 8.00745 9.46361 8.00745 10.0159C8.00745 10.5682 8.45516 11.0159 9.00745 11.0159L18.958 11.0159C18.9671 11.016 18.9762 11.016 18.9854 11.0159H19.0074Z","fill":"currentColor"}}]})(props);
};
function CgArrowsExpandDownLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M13 5C13 3.89543 13.8954 3 15 3H19C20.1046 3 21 3.89543 21 5V9C21 10.1046 20.1046 11 19 11H15C13.8954 11 13 10.1046 13 9V5ZM15 5H19V9H15V5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5 13H3V21H11V19H6.41424L11.7782 13.6361C12.1687 13.2456 12.1687 12.6124 11.7782 12.2219C11.3876 11.8314 10.7545 11.8314 10.3639 12.2219L5 17.5858V13Z","fill":"currentColor"}}]})(props);
};
function CgArrowsExpandDownRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M11 5C11 3.89543 10.1046 3 9 3H5C3.89543 3 3 3.89543 3 5V9C3 10.1046 3.89543 11 5 11H9C10.1046 11 11 10.1046 11 9V5ZM9 5H5V9H9V5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M19 13H21V21H13V19H17.5858L12.2218 13.6361C11.8313 13.2456 11.8313 12.6124 12.2218 12.2219C12.6124 11.8314 13.2455 11.8314 13.6361 12.2219L19 17.5858V13Z","fill":"currentColor"}}]})(props);
};
function CgArrowsExpandLeftAlt (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M10.1005 2.10052V4.10052H5.51471L11.293 9.87878L9.87875 11.293L4.10046 5.51471L4.10046 10.1005H2.10046L2.10046 2.10052H10.1005Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M21.8995 13.8995H19.8995V18.4853L14.1212 12.707L12.707 14.1213L18.4853 19.8995H13.8995V21.8995H21.8995V13.8995Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16.2426 9.1716L14.8284 7.75739L7.7573 14.8285L9.17151 16.2427L16.2426 9.1716Z","fill":"currentColor"}}]})(props);
};
function CgArrowsExpandLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M10.1005 4.10052V2.10052H2.10046L2.10046 10.1005H4.10046L4.10046 5.51471L9.87875 11.293L11.293 9.87878L5.51471 4.10052H10.1005Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M19.8995 13.8995H21.8995V21.8995H13.8995V19.8995H18.4853L12.7071 14.1212L14.1213 12.707L19.8995 18.4853V13.8995Z","fill":"currentColor"}}]})(props);
};
function CgArrowsExpandRightAlt (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M13.8995 2.10052V4.10052H18.4852L12.707 9.87878L14.1212 11.293L19.8995 5.51471V10.1005H21.8995V2.10052H13.8995Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5.51468 19.8995H10.1005V21.8995H2.10046V13.8995H4.10046V18.4853L9.87872 12.707L11.2929 14.1213L5.51468 19.8995Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M9.17154 7.75739L7.75732 9.1716L14.8284 16.2427L16.2426 14.8285L9.17154 7.75739Z","fill":"currentColor"}}]})(props);
};
function CgArrowsExpandRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M13.8995 4.10052V2.10052H21.8995V10.1005H19.8995V5.51477L14.1213 11.293L12.7071 9.87878L18.4854 4.10052H13.8995Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M4.10046 13.8995H2.10046V21.8995H10.1005V19.8995H5.51468L11.2929 14.1212L9.87872 12.707L4.10046 18.4853V13.8995Z","fill":"currentColor"}}]})(props);
};
function CgArrowsExpandUpLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M5 11H3L3 3L11 3V5L6.41419 5L11.7781 10.3639C12.1686 10.7545 12.1686 11.3876 11.7781 11.7782C11.3876 12.1687 10.7544 12.1687 10.3639 11.7782L5 6.41424L5 11Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M19 13C20.1046 13 21 13.8954 21 15V19C21 20.1046 20.1046 21 19 21H15C13.8954 21 13 20.1046 13 19V15C13 13.8954 13.8954 13 15 13H19ZM19 15V19H15V15H19Z","fill":"currentColor"}}]})(props);
};
function CgArrowsExpandUpRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M13 5V3L21 3V11H19V6.41424L13.6361 11.7782C13.2456 12.1687 12.6124 12.1687 12.2219 11.7782C11.8314 11.3876 11.8314 10.7545 12.2219 10.3639L17.5858 5L13 5Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M5 13C3.89543 13 3 13.8954 3 15L3 19C3 20.1046 3.89543 21 5 21H9C10.1046 21 11 20.1046 11 19V15C11 13.8954 10.1046 13 9 13H5ZM5 15L5 19H9V15H5Z","fill":"currentColor"}}]})(props);
};
function CgArrowsHAlt (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M4.24267 7.75735L5.65688 9.17157L3.82842 11H20.1716L18.3431 9.17157L19.7573 7.75735L24 12L19.7572 16.2426L18.343 14.8284L20.1714 13H3.82845L5.65685 14.8284L4.24264 16.2426L0 12L4.24267 7.75735Z","fill":"currentColor"}}]})(props);
};
function CgArrowsH (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M5.65698 9.17157L4.24276 7.75735L0.00012207 12L4.24276 16.2426L5.65698 14.8284L3.82858 13H10.0001V11H3.82851L5.65698 9.17157Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14.0001 11V13H20.1716L18.3432 14.8284L19.7574 16.2426L24.0001 12L19.7574 7.75735L18.3432 9.17157L20.1717 11H14.0001Z","fill":"currentColor"}}]})(props);
};
function CgArrowsMergeAltH (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M1.5033 6H3.5033V11H7.6749L5.84644 9.17154L7.26066 7.75732L11.5033 12L7.26066 16.2426L5.84644 14.8284L7.67483 13H3.5033V18H1.5033V6Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M20.4967 6H22.4967V18H20.4967V13H16.3251L18.1536 14.8285L16.7393 16.2427L12.4967 12L16.7393 7.75739L18.1536 9.17161L16.3252 11H20.4967V6Z","fill":"currentColor"}}]})(props);
};
function CgArrowsMergeAltV (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M18 1.5033V3.5033L13 3.5033V7.6749L14.8285 5.84644L16.2427 7.26066L12 11.5033L7.75739 7.26066L9.17161 5.84644L11 7.67483V3.5033L6 3.5033V1.5033L18 1.5033Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M18 20.4967V22.4967H6V20.4967H11V16.3251L9.17154 18.1536L7.75732 16.7393L12 12.4967L16.2426 16.7393L14.8284 18.1536L13 16.3252V20.4967H18Z","fill":"currentColor"}}]})(props);
};
function CgArrowsScrollH (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M15.3052 12L18.1299 9.17526L16.7157 7.76105L13.891 10.5858L13.8873 10.5821L12.4731 11.9963L12.4768 12L12.4731 12.0037L13.8873 13.4179L13.891 13.4142L16.7157 16.239L18.1299 14.8248L15.3052 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M10.1091 10.5858L10.1128 10.5821L11.527 11.9963L11.5233 12L11.527 12.0037L10.1128 13.4179L10.1091 13.4142L7.28433 16.239L5.87012 14.8248L8.69487 12L5.87012 9.17526L7.28433 7.76105L10.1091 10.5858Z","fill":"currentColor"}}]})(props);
};
function CgArrowsScrollV (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M13.4142 10.1091L13.4179 10.1128L12.0037 11.527L12 11.5233L11.9963 11.527L10.5821 10.1128L10.5858 10.1091L7.76105 7.28433L9.17526 5.87012L12 8.69486L14.8247 5.87012L16.239 7.28433L13.4142 10.1091Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12 15.3052L14.8247 18.1299L16.239 16.7157L13.4142 13.891L13.4179 13.8873L12.0037 12.4731L12 12.4767L11.9963 12.4731L10.5821 13.8873L10.5858 13.891L7.76105 16.7157L9.17526 18.1299L12 15.3052Z","fill":"currentColor"}}]})(props);
};
function CgArrowsShrinkH (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M1 7H3V17H1V7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M8.44769 7.75732L9.86191 9.17154L8.03344 11H15.9664L14.138 9.17154L15.5522 7.75732L19.7948 12L15.5522 16.2426L14.138 14.8284L15.9664 13H8.03354L9.86194 14.8284L8.44773 16.2426L4.20505 12L8.44769 7.75732Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M23 7H21V17H23V7Z","fill":"currentColor"}}]})(props);
};
function CgArrowsShrinkV (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M17 1V3L7 3V1L17 1Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16.2427 8.44772L14.8285 9.86194L13 8.03347L13 15.9665L14.8285 14.138L16.2427 15.5522L12 19.7949L7.75742 15.5522L9.17163 14.138L11 15.9664L11 8.03357L9.17163 9.86194L7.75742 8.44772L12 4.20508L16.2427 8.44772Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M17 23V21H7V23H17Z","fill":"currentColor"}}]})(props);
};
function CgArrowsVAlt (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M9.1716 6.45504L7.75739 5.04083L12 0.798187L16.2426 5.04083L14.8284 6.45504L13.0001 4.62667V19.3733L14.8284 17.5449L16.2426 18.9592L12 23.2018L7.75739 18.9592L9.1716 17.5449L11.0001 19.3734V4.62658L9.1716 6.45504Z","fill":"currentColor"}}]})(props);
};
function CgArrowsV (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M7.75739 5.04077L9.1716 6.45498L11.0001 4.62652V10H13.0001V4.62661L14.8284 6.45498L16.2426 5.04077L12 0.798126L7.75739 5.04077Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16.2426 18.9593L14.8284 17.545L13.0001 19.3734V14H11.0001V19.3735L9.1716 17.545L7.75739 18.9593L12 23.2019L16.2426 18.9593Z","fill":"currentColor"}}]})(props);
};
function CgAssign (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M6 6H10V4H4V10H6V6Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M10 18H6V14H4V20H10V18Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14 6H18V10H20V4H14V6Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14 18H18V14H20V20H14V18Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5Z","fill":"currentColor"}}]})(props);
};
function CgAsterisk (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M11 6H13V10.079L16.3413 7.73938L17.4885 9.37768L13.7434 12L17.4885 14.6223L16.3413 16.2606L13 13.921V18H11V13.921L7.65864 16.2606L6.51148 14.6223L10.2565 12L6.51147 9.37769L7.65863 7.73938L11 10.079V6Z","fill":"currentColor"}}]})(props);
};
function CgAtlasian (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"opacity":"0.8","d":"M8.50705 11.5562C8.19028 11.1038 7.78219 11.1585 7.59556 11.6783L5 18.9075H10.1778C10.6982 16.85 10.2481 14.0427 9.08063 12.3754L8.50705 11.5562Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12.8745 7.12641C11.6074 8.93603 11.1992 12.0835 11.9627 14.1565L13.7126 18.9074H18.9644L14.3673 6.42648C14.1764 5.90823 13.7649 5.85485 13.4481 6.30726L12.8745 7.12641Z","fill":"currentColor"}}]})(props);
};
function CgAttachment (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M14 0C16.7614 0 19 2.23858 19 5V17C19 20.866 15.866 24 12 24C8.13401 24 5 20.866 5 17V9H7V17C7 19.7614 9.23858 22 12 22C14.7614 22 17 19.7614 17 17V5C17 3.34315 15.6569 2 14 2C12.3431 2 11 3.34315 11 5V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V6H15V17C15 18.6569 13.6569 20 12 20C10.3431 20 9 18.6569 9 17V5C9 2.23858 11.2386 0 14 0Z","fill":"currentColor"}}]})(props);
};
function CgAttribution (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M6 8C6.74028 8 7.38663 7.5978 7.73244 7H14C15.1046 7 16 7.89543 16 9C16 10.1046 15.1046 11 14 11H10C7.79086 11 6 12.7909 6 15C6 17.2091 7.79086 19 10 19H16.2676C16.6134 19.5978 17.2597 20 18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C17.2597 16 16.6134 16.4022 16.2676 17H10C8.89543 17 8 16.1046 8 15C8 13.8954 8.89543 13 10 13H14C16.2091 13 18 11.2091 18 9C18 6.79086 16.2091 5 14 5H7.73244C7.38663 4.4022 6.74028 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8Z","fill":"currentColor"}}]})(props);
};
function CgAwards (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M19 9C19 11.3787 17.8135 13.4804 16 14.7453V22H13.4142L12 20.5858L10.5858 22H8V14.7453C6.18652 13.4804 5 11.3787 5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9ZM17 9C17 11.7614 14.7614 14 12 14C9.23858 14 7 11.7614 7 9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9ZM10 19.7573L12 17.7573L14 19.7574V15.7101C13.3663 15.8987 12.695 16 12 16C11.305 16 10.6337 15.8987 10 15.7101V19.7573Z","fill":"currentColor"}}]})(props);
};
function CgBackspace (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M17.7427 8.46448L19.1569 9.87869L17.0356 12L19.157 14.1214L17.7428 15.5356L15.6214 13.4142L13.5 15.5355L12.0858 14.1213L14.2072 12L12.0859 9.87878L13.5002 8.46457L15.6214 10.5858L17.7427 8.46448Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M8.58579 19L2.29289 12.7071C1.90237 12.3166 1.90237 11.6834 2.29289 11.2929L8.58579 5H22.5857V19H8.58579ZM9.41421 7L4.41421 12L9.41421 17H20.5857V7H9.41421Z","fill":"currentColor"}}]})(props);
};
function CgBandAid (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M11.9389 9.76478C11.7055 10.2653 11.1105 10.4819 10.61 10.2485C10.1094 10.0151 9.89288 9.42008 10.1263 8.91954C10.3597 8.419 10.9547 8.20244 11.4552 8.43585C11.9558 8.66925 12.1723 9.26423 11.9389 9.76478Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M8.9195 13.8737C9.42004 14.1071 10.015 13.8905 10.2484 13.39C10.4818 12.8895 10.2653 12.2945 9.76474 12.0611C9.2642 11.8277 8.66922 12.0442 8.43581 12.5448C8.20241 13.0453 8.41896 13.6403 8.9195 13.8737Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M13.8737 15.0805C13.6403 15.581 13.0453 15.7976 12.5447 15.5642C12.0442 15.3308 11.8276 14.7358 12.061 14.2352C12.2944 13.7347 12.8894 13.5181 13.39 13.7516C13.8905 13.985 14.1071 14.5799 13.8737 15.0805Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14.2352 11.9389C14.7357 12.1723 15.3307 11.9558 15.5641 11.4552C15.7975 10.9547 15.581 10.3597 15.0804 10.1263C14.5799 9.89292 13.9849 10.1095 13.7515 10.61C13.5181 11.1106 13.7347 11.7055 14.2352 11.9389Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M17.0714 1.12432C14.0682 -0.276119 10.4983 1.02321 9.09783 4.02645L4.02641 14.9021C2.62598 17.9054 3.92531 21.4753 6.92855 22.8757C9.93179 24.2761 13.5017 22.9768 14.9021 19.9736L19.9735 9.09787C21.374 6.09463 20.0746 2.52475 17.0714 1.12432ZM13.9347 17.3157L17.3157 10.0653L10.0652 6.6843L6.68427 13.9348L13.9347 17.3157ZM13.0895 19.1283L5.83903 15.7474C4.90541 17.7495 5.77163 20.1295 7.77379 21.0631C9.77595 21.9967 12.1559 21.1305 13.0895 19.1283ZM16.2262 2.93693C18.2283 3.87055 19.0945 6.25047 18.1609 8.25264L10.9104 4.87169C11.8441 2.86953 14.224 2.00331 16.2262 2.93693Z","fill":"currentColor"}}]})(props);
};
function CgBatteryEmpty (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M18 6H5C3.34315 6 2 7.34315 2 9V15C2 16.6569 3.34315 18 5 18H18C19.6569 18 21 16.6569 21 15C21.5523 15 22 14.5523 22 14V10C22 9.44772 21.5523 9 21 9C21 7.34315 19.6569 6 18 6ZM18 8H5C4.44772 8 4 8.44772 4 9V15C4 15.5523 4.44772 16 5 16H18C18.5523 16 19 15.5523 19 15V9C19 8.44772 18.5523 8 18 8Z","fill":"currentColor"}}]})(props);
};
function CgBatteryFull (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M6 15C5.44772 15 5 14.5523 5 14V10C5 9.44772 5.44772 9 6 9H17C17.5523 9 18 9.44772 18 10V14C18 14.5523 17.5523 15 17 15H6Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M18 6H5C3.34315 6 2 7.34315 2 9V15C2 16.6569 3.34315 18 5 18H18C19.6569 18 21 16.6569 21 15C21.5523 15 22 14.5523 22 14V10C22 9.44772 21.5523 9 21 9C21 7.34315 19.6569 6 18 6ZM18 8H5C4.44772 8 4 8.44772 4 9V15C4 15.5523 4.44772 16 5 16H18C18.5523 16 19 15.5523 19 15V9C19 8.44772 18.5523 8 18 8Z","fill":"currentColor"}}]})(props);
};
function CgBattery (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M6 15C5.44772 15 5 14.5523 5 14V10C5 9.44772 5.44772 9 6 9H12V15H6Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M18 6H5C3.34315 6 2 7.34315 2 9V15C2 16.6569 3.34315 18 5 18H18C19.6569 18 21 16.6569 21 15C21.5523 15 22 14.5523 22 14V10C22 9.44772 21.5523 9 21 9C21 7.34315 19.6569 6 18 6ZM18 8H5C4.44772 8 4 8.44772 4 9V15C4 15.5523 4.44772 16 5 16H18C18.5523 16 19 15.5523 19 15V9C19 8.44772 18.5523 8 18 8Z","fill":"currentColor"}}]})(props);
};
function CgBee (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M17.9513 15.571C17.7695 17.2187 16.9205 18.6654 15.6805 19.635C15.332 20.4692 14.7092 21.1601 13.9247 21.5951C13.7025 22.4574 12.9196 23.0944 11.9879 23.0944C11.0562 23.0944 10.2733 22.4574 10.0511 21.5951C9.26672 21.1602 8.64392 20.4693 8.29547 19.6353C7.05955 18.6691 6.21203 17.229 6.02621 15.5883C4.93527 16.4161 3.37955 16.4118 2.28618 15.4944C1.01696 14.4294 0.851409 12.5371 1.91641 11.2679L6.00966 6.38975C6.27125 3.31753 8.84785 0.905579 11.9878 0.905579C15.1166 0.905579 17.6861 3.30046 17.9631 6.35711L22.0837 11.2679C23.1487 12.5371 22.9831 14.4294 21.7139 15.4944C20.613 16.4182 19.0433 16.4161 17.9513 15.571ZM15.6254 12.9056L13.9472 10.9056H10.0529L8.37467 12.9056H15.6254ZM17.9878 12.6095L19.0195 13.839C19.3745 14.2621 20.0053 14.3173 20.4283 13.9623C20.8514 13.6073 20.9066 12.9765 20.5516 12.5535L17.9878 9.49803V12.6095ZM15.9878 8.90558V6.90558C15.9878 4.69644 14.1969 2.90558 11.9878 2.90558C9.77865 2.90558 7.98779 4.69644 7.98779 6.90558V8.90558H15.9878ZM4.98059 13.839L5.98779 12.6387V9.52726L3.4485 12.5535C3.0935 12.9765 3.14869 13.6073 3.57176 13.9623C3.99483 14.3173 4.62559 14.2621 4.98059 13.839ZM11.9878 18.9056C9.77865 18.9056 7.98779 17.1147 7.98779 14.9056H15.9878C15.9878 17.1147 14.1969 18.9056 11.9878 18.9056Z","fill":"currentColor"}}]})(props);
};
function CgBell (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M14 3V3.28988C16.8915 4.15043 19 6.82898 19 10V17H20V19H4V17H5V10C5 6.82898 7.10851 4.15043 10 3.28988V3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3ZM7 17H17V10C17 7.23858 14.7614 5 12 5C9.23858 5 7 7.23858 7 10V17ZM14 21V20H10V21C10 22.1046 10.8954 23 12 23C13.1046 23 14 22.1046 14 21Z","fill":"currentColor"}}]})(props);
};
function CgBitbucket (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M4.5831 4.63507C4.03082 4.63507 3.66768 5.07472 3.77202 5.61706L6.22804 18.383C6.33238 18.9253 6.86468 19.3649 7.41696 19.3649H16.583C17.1353 19.3649 17.6676 18.9253 17.7719 18.383L20.2279 5.61706C20.3323 5.07472 19.9691 4.63507 19.4168 4.63507H4.5831ZM13.5449 14.3649L14.4549 9.63507H9.54504L10.455 14.3649H13.5449Z","fill":"currentColor"}}]})(props);
};
function CgBlock (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M8.46457 14.1213C8.07404 14.5118 8.07404 15.145 8.46457 15.5355C8.85509 15.926 9.48825 15.926 9.87878 15.5355L15.5356 9.87862C15.9262 9.4881 15.9262 8.85493 15.5356 8.46441C15.1451 8.07388 14.5119 8.07388 14.1214 8.46441L8.46457 14.1213Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M6.34315 17.6569C9.46734 20.781 14.5327 20.781 17.6569 17.6569C20.781 14.5327 20.781 9.46734 17.6569 6.34315C14.5327 3.21895 9.46734 3.21895 6.34315 6.34315C3.21895 9.46734 3.21895 14.5327 6.34315 17.6569ZM16.2426 16.2426C13.8995 18.5858 10.1005 18.5858 7.75736 16.2426C5.41421 13.8995 5.41421 10.1005 7.75736 7.75736C10.1005 5.41421 13.8995 5.41421 16.2426 7.75736C18.5858 10.1005 18.5858 13.8995 16.2426 16.2426Z","fill":"currentColor"}}]})(props);
};
function CgBmw (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM5 12C5 15.866 8.13401 19 12 19V12H19C19 8.13401 15.866 5 12 5V12H5Z","fill":"currentColor"}}]})(props);
};
function CgBoard (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M6 4C3.79086 4 2 5.79086 2 8V16C2 18.2091 3.79086 20 6 20H18C20.2091 20 22 18.2091 22 16V8C22 5.79086 20.2091 4 18 4H6ZM14 6H10V18H14V6ZM16 6V18H18C19.1046 18 20 17.1046 20 16V8C20 6.89543 19.1046 6 18 6H16ZM6 18H8V6H6C4.89543 6 4 6.89543 4 8V16C4 17.1046 4.89543 18 6 18Z","fill":"currentColor"}}]})(props);
};
function CgBolt (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z","fill":"currentColor"}}]})(props);
};
function CgBookmark (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M19 20H17.1717L12.7072 15.5354C12.3166 15.1449 11.6835 15.1449 11.2929 15.5354L6.82843 20L5 20V7C5 5.34315 6.34315 4 8 4H16C17.6569 4 19 5.34314 19 7V20ZM17 7C17 6.44772 16.5523 6 16 6H8C7.44772 6 7 6.44772 7 7V17L9.87873 14.1212C11.0503 12.9497 12.9498 12.9497 14.1214 14.1212L17 16.9999V7Z","fill":"currentColor"}}]})(props);
};
function CgBorderAll (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M6.5 6.5H17.5V17.5H6.5V6.5Z","stroke":"currentColor","strokeWidth":"3"}}]})(props);
};
function CgBorderBottom (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M8 8H16V15H19V5H5V15H8V8Z","fill":"currentColor","fillOpacity":"0.3"}},{"tag":"path","attr":{"d":"M5 17H19V20H5V17Z","fill":"currentColor"}}]})(props);
};
function CgBorderLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M16 8V16H9L9 19H19L19 5L9 5V8H16Z","fill":"currentColor","fillOpacity":"0.3"}},{"tag":"path","attr":{"d":"M7 5L7 19H4L4 5L7 5Z","fill":"currentColor"}}]})(props);
};
function CgBorderRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M8 16V8H15V5L5 5L5 19H15L15 16H8Z","fill":"currentColor","fillOpacity":"0.3"}},{"tag":"path","attr":{"d":"M17 19L17 5L20 5L20 19H17Z","fill":"currentColor"}}]})(props);
};
function CgBorderStyleDashed (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M4 11H8V13H4V11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M10 11H14V13H10V11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M20 11H16V13H20V11Z","fill":"currentColor"}}]})(props);
};
function CgBorderStyleDotted (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M3 11H1V13H3V11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7 11H5V13H7V11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M9 11H11V13H9V11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15 11H13V13H15V11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M17 11H19V13H17V11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M23 11H21V13H23V11Z","fill":"currentColor"}}]})(props);
};
function CgBorderStyleSolid (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M2 11H22V13H2V11Z","fill":"currentColor"}}]})(props);
};
function CgBorderTop (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M8 16H16V9L19 9L19 19L5 19L5 9L8 9V16Z","fill":"currentColor","fillOpacity":"0.3"}},{"tag":"path","attr":{"d":"M5 7L19 7V4L5 4L5 7Z"}}]})(props);
};
function CgBot (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M14.1254 13H10.1254V15H14.1254V13Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M8.12537 13C9.22994 13 10.1254 12.1046 10.1254 11C10.1254 9.89543 9.22994 9 8.12537 9C7.0208 9 6.12537 9.89543 6.12537 11C6.12537 12.1046 7.0208 13 8.12537 13ZM8.12537 11.5C8.40151 11.5 8.62537 11.2761 8.62537 11C8.62537 10.7239 8.40151 10.5 8.12537 10.5C7.84922 10.5 7.62537 10.7239 7.62537 11C7.62537 11.2761 7.84922 11.5 8.12537 11.5Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M18.1254 11C18.1254 12.1046 17.2299 13 16.1254 13C15.0208 13 14.1254 12.1046 14.1254 11C14.1254 9.89543 15.0208 9 16.1254 9C17.2299 9 18.1254 9.89543 18.1254 11ZM16.6254 11C16.6254 11.2761 16.4015 11.5 16.1254 11.5C15.8492 11.5 15.6254 11.2761 15.6254 11C15.6254 10.7239 15.8492 10.5 16.1254 10.5C16.4015 10.5 16.6254 10.7239 16.6254 11Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M2.74884 14.6663C3.73056 16.6421 5.76939 18 8.12537 18H16.1254C18.5654 18 20.6652 16.5435 21.6029 14.4525C22.3722 13.9093 22.8746 13.0133 22.8746 12C22.8746 10.9867 22.3722 10.0907 21.6029 9.54753C20.6652 7.45651 18.5654 6 16.1254 6H8.12537C5.76939 6 3.73056 7.3579 2.74884 9.33375C1.78448 9.83263 1.12537 10.8393 1.12537 12C1.12537 13.1607 1.78448 14.1674 2.74884 14.6663ZM8.12537 8H16.1254C17.5088 8 18.7282 8.70234 19.4465 9.76991C19.7227 10.4593 19.8746 11.2119 19.8746 12C19.8746 12.7881 19.7227 13.5407 19.4465 14.2301C18.7282 15.2977 17.5088 16 16.1254 16H8.12537C5.91623 16 4.12537 14.2091 4.12537 12C4.12537 9.79086 5.91623 8 8.12537 8Z","fill":"currentColor"}}]})(props);
};
function CgBowl (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M20.5468 3.67162C20.1563 3.28109 19.5231 3.28109 19.1326 3.67162L13.7687 9.03555H2V11.0356H2.00842C2.22563 16.3663 6.61591 20.6213 12 20.6213C17.3841 20.6213 21.7744 16.3663 21.9916 11.0356H22V9.03555H16.5971L20.5468 5.08583C20.9374 4.69531 20.9374 4.06214 20.5468 3.67162ZM14.1762 11.0356C14.1806 11.0356 14.1851 11.0356 14.1896 11.0356H19.9895C19.7739 15.2613 16.2793 18.6213 12 18.6213C7.72066 18.6213 4.22609 15.2613 4.01054 11.0356H14.1762Z","fill":"currentColor"}}]})(props);
};
function CgBox (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M10 12C9.44769 12 9 12.4477 9 13C9 13.5523 9.44769 14 10 14H14C14.5522 14 15 13.5523 15 13C15 12.4477 14.5522 12 14 12H10Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M4 2C2.34314 2 1 3.34314 1 5V19C1 20.6569 2.34314 22 4 22H20C21.6569 22 23 20.6569 23 19V5C23 3.34314 21.6569 2 20 2H4ZM20 4H4C3.44769 4 3 4.44769 3 5V8H21V5C21 4.44769 20.5522 4 20 4ZM3 19V10H21V19C21 19.5523 20.5522 20 20 20H4C3.44769 20 3 19.5523 3 19Z","fill":"currentColor"}}]})(props);
};
function CgBoy (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M9 14C9.55228 14 10 13.5523 10 13C10 12.4477 9.55228 12 9 12C8.44771 12 8 12.4477 8 13C8 13.5523 8.44771 14 9 14Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16 13C16 13.5523 15.5523 14 15 14C14.4477 14 14 13.5523 14 13C14 12.4477 14.4477 12 15 12C15.5523 12 16 12.4477 16 13Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 11.1637 19.8717 10.3574 19.6337 9.59973C18.7991 9.82556 17.9212 9.94604 17.0152 9.94604C13.2921 9.94604 10.0442 7.91139 8.32277 4.89334C5.75469 6.22486 4 8.90751 4 12C4 16.4183 7.58172 20 12 20Z","fill":"currentColor"}}]})(props);
};
function CgBrackets (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M11 7V9H9V15H11V17H7V7H11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15 15H13V17H17V7H13V9H15V15Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5Z","fill":"currentColor"}}]})(props);
};
function CgBriefcase (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M14 11H10V13H14V11Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z","fill":"currentColor"}}]})(props);
};
function CgBrowse (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M14.364 13.1214C15.2876 14.045 15.4831 15.4211 14.9504 16.5362L16.4853 18.0711C16.8758 18.4616 16.8758 19.0948 16.4853 19.4853C16.0948 19.8758 15.4616 19.8758 15.0711 19.4853L13.5361 17.9504C12.421 18.4831 11.045 18.2876 10.1213 17.364C8.94975 16.1924 8.94975 14.2929 10.1213 13.1214C11.2929 11.9498 13.1924 11.9498 14.364 13.1214ZM12.9497 15.9498C13.3403 15.5593 13.3403 14.9261 12.9497 14.5356C12.5592 14.145 11.9261 14.145 11.5355 14.5356C11.145 14.9261 11.145 15.5593 11.5355 15.9498C11.9261 16.3403 12.5592 16.3403 12.9497 15.9498Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M8 5H16V7H8V5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16 9H8V11H16V9Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M4 4C4 2.34315 5.34315 1 7 1H17C18.6569 1 20 2.34315 20 4V20C20 21.6569 18.6569 23 17 23H7C5.34315 23 4 21.6569 4 20V4ZM7 3H17C17.5523 3 18 3.44772 18 4V20C18 20.5523 17.5523 21 17 21H7C6.44772 21 6 20.5523 6 20V4C6 3.44772 6.44771 3 7 3Z","fill":"currentColor"}}]})(props);
};
function CgBrowser (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M4 8C4.55228 8 5 7.55228 5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M8 7C8 7.55228 7.55228 8 7 8C6.44772 8 6 7.55228 6 7C6 6.44772 6.44772 6 7 6C7.55228 6 8 6.44772 8 7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M10 8C10.5523 8 11 7.55228 11 7C11 6.44772 10.5523 6 10 6C9.44771 6 9 6.44772 9 7C9 7.55228 9.44771 8 10 8Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3 3C1.34315 3 0 4.34315 0 6V18C0 19.6569 1.34315 21 3 21H21C22.6569 21 24 19.6569 24 18V6C24 4.34315 22.6569 3 21 3H3ZM21 5H3C2.44772 5 2 5.44772 2 6V9H22V6C22 5.44772 21.5523 5 21 5ZM2 18V11H22V18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18Z","fill":"currentColor"}}]})(props);
};
function CgBrush (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M15 11H18C18.5523 11 19 11.4477 19 12V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V12C5 11.4477 5.44772 11 6 11H9V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V11ZM13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V13H7V18C7 18.5523 7.44772 19 8 19H9V16H11V19H13V16H15V19H16C16.5523 19 17 18.5523 17 18V13H13V6Z","fill":"currentColor"}}]})(props);
};
function CgBulb (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M4 9C4 11.9611 5.60879 14.5465 8 15.9297V15.9999C8 18.2091 9.79086 19.9999 12 19.9999C14.2091 19.9999 16 18.2091 16 15.9999V15.9297C18.3912 14.5465 20 11.9611 20 9C20 4.58172 16.4183 1 12 1C7.58172 1 4 4.58172 4 9ZM16 13.4722C17.2275 12.3736 18 10.777 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 10.777 6.7725 12.3736 8 13.4722L10 13.4713V16C10 17.1045 10.8954 17.9999 12 17.9999C13.1045 17.9999 14 17.1045 14 15.9999V13.4713L16 13.4722Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M10 21.0064V21C10.5883 21.3403 11.2714 21.5351 12 21.5351C12.7286 21.5351 13.4117 21.3403 14 21V21.0064C14 22.111 13.1046 23.0064 12 23.0064C10.8954 23.0064 10 22.111 10 21.0064Z","fill":"currentColor"}}]})(props);
};
function CgCPlusPlus (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12.207 16.278C11.1241 17.343 9.63879 18 8 18C4.68629 18 2 15.3137 2 12C2 8.68629 4.68629 6 8 6C9.67492 6 11.1896 6.6863 12.278 7.79303L13.6923 6.37878C12.2418 4.91014 10.2272 4 8 4C3.58172 4 0 7.58172 0 12C0 16.4183 3.58172 20 8 20C10.1911 20 12.1764 19.1192 13.6212 17.6923L12.207 16.278Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15 9H13V11H11V13H13V15H15V13H17V11H15V9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M20 9H22V11H24V13H22V15H20V13H18V11H20V9Z","fill":"currentColor"}}]})(props);
};
function CgCalculator (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M17 5H7V7H17V5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7 9H9V11H7V9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M9 13H7V15H9V13Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7 17H9V19H7V17Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M13 9H11V11H13V9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11 13H13V15H11V13Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M13 17H11V19H13V17Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15 9H17V11H15V9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M17 13H15V19H17V13Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3 3C3 1.89543 3.89543 1 5 1H19C20.1046 1 21 1.89543 21 3V21C21 22.1046 20.1046 23 19 23H5C3.89543 23 3 22.1046 3 21V3ZM5 3H19V21H5V3Z","fill":"currentColor"}}]})(props);
};
function CgCalendarDates (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12C9 12.5523 8.55228 13 8 13Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M8 17C7.44772 17 7 16.5523 7 16C7 15.4477 7.44772 15 8 15C8.55228 15 9 15.4477 9 16C9 16.5523 8.55228 17 8 17Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11 16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16 17C15.4477 17 15 16.5523 15 16C15 15.4477 15.4477 15 16 15C16.5523 15 17 15.4477 17 16C17 16.5523 16.5523 17 16 17Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9H16C16.5523 9 17 8.55228 17 8C17 7.44772 16.5523 7 16 7H8Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM18 5H6C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V6C19 5.44772 18.5523 5 18 5Z","fill":"currentColor"}}]})(props);
};
function CgCalendarDue (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M7 8C7 7.44772 7.44772 7 8 7H16C16.5523 7 17 7.44772 17 8C17 8.55228 16.5523 9 16 9H8C7.44772 9 7 8.55228 7 8Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12 16C13.1046 16 14 15.1046 14 14C14 12.8954 13.1046 12 12 12C10.8954 12 10 12.8954 10 14C10 15.1046 10.8954 16 12 16Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM18 5H6C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V6C19 5.44772 18.5523 5 18 5Z","fill":"currentColor"}}]})(props);
};
function CgCalendarNext (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M11.7249 16.5461L16.2249 13.9481L11.7249 11.35V12.9481H7.7749V14.9481H11.7249V16.5461Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9H16C16.5523 9 17 8.55228 17 8C17 7.44772 16.5523 7 16 7H8Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM18 5H6C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V6C19 5.44772 18.5523 5 18 5Z","fill":"currentColor"}}]})(props);
};
function CgCalendarToday (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M15 17C16.1046 17 17 16.1046 17 15C17 13.8954 16.1046 13 15 13C13.8954 13 13 13.8954 13 15C13 16.1046 13.8954 17 15 17Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM5 18V7H19V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18Z","fill":"currentColor"}}]})(props);
};
function CgCalendarTwo (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9H16C16.5523 9 17 8.55228 17 8C17 7.44772 16.5523 7 16 7H8Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5Z","fill":"currentColor"}}]})(props);
};
function CgCalendar (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M8 9C7.44772 9 7 9.44771 7 10C7 10.5523 7.44772 11 8 11H16C16.5523 11 17 10.5523 17 10C17 9.44771 16.5523 9 16 9H8Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM5 18V7H19V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18Z","fill":"currentColor"}}]})(props);
};
function CgCalibrate (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12.0503 5C14.51 5 16.7393 5.98676 18.3638 7.58602L14.1208 11.8291C13.5824 11.3154 12.8531 11 12.0503 11C11.1963 11 10.4256 11.3568 9.87927 11.9295L5.63623 7.68651C7.26871 6.0282 9.53941 5 12.0503 5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12.0503 19C13.7071 19 15.0503 17.6569 15.0503 16C15.0503 14.3431 13.7071 13 12.0503 13C10.3934 13 9.05029 14.3431 9.05029 16C9.05029 17.6569 10.3934 19 12.0503 19Z","fill":"currentColor"}}]})(props);
};
function CgCamera (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M4 4.5V6.5H12V7.5H3C1.34315 7.5 0 8.84315 0 10.5V16.5C0 18.1569 1.34315 19.5 3 19.5H15C16.5731 19.5 17.8634 18.2892 17.9898 16.7487L24 17.5V9.5L17.9898 10.2513C17.8634 8.71078 16.5731 7.5 15 7.5H14V5.5C14 4.94772 13.5523 4.5 13 4.5H4ZM18 12.2656V14.7344L22 15.2344V11.7656L18 12.2656ZM16 10.5C16 9.94772 15.5523 9.5 15 9.5H3C2.44772 9.5 2 9.94772 2 10.5V16.5C2 17.0523 2.44772 17.5 3 17.5H15C15.5523 17.5 16 17.0523 16 16.5V10.5Z","fill":"currentColor"}}]})(props);
};
function CgCap (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M8 18V20H16V18H8Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M13.988 3.2203C13.9959 3.14796 14 3.07446 14 3C14 1.89543 13.1046 1 12 1C10.8954 1 10 1.89543 10 3C10 3.07446 10.0041 3.14796 10.012 3.2203C5.99799 4.12533 3 7.71255 3 12C3 12.3883 3.02459 12.7709 3.0723 13.1462C1.86949 13.5369 1 14.6669 1 16V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V16C23 14.6669 22.1305 13.5369 20.9277 13.1462C20.9754 12.7709 21 12.3883 21 12C21 7.71255 18.002 4.12533 13.988 3.2203ZM12 5C8.13401 5 5 8.13401 5 12C5 12.3402 5.02412 12.674 5.07063 13H18.9294C18.9759 12.674 19 12.3402 19 12C19 8.13401 15.866 5 12 5ZM3 16C3 15.4477 3.44772 15 4 15H20C20.5523 15 21 15.4477 21 16V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V16Z","fill":"currentColor"}}]})(props);
};
function CgCaptions (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M11 8V10H8V14H11V16H6V8H11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M18 8V10H15V14H18V16H13V8H18Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M2 5C2 4.44772 2.44772 4 3 4H21C21.5523 4 22 4.44772 22 5V19C22 19.5523 21.5523 20 21 20H3C2.44772 20 2 19.5523 2 19V5ZM4 18V6H20V18H4Z","fill":"currentColor"}}]})(props);
};
function CgCardClubs (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11 13C11 14.1046 10.1046 15 9 15C7.89543 15 7 14.1046 7 13C7 11.8954 7.89543 11 9 11C10.1046 11 11 11.8954 11 13Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15 15C16.1046 15 17 14.1046 17 13C17 11.8954 16.1046 11 15 11C13.8954 11 13 11.8954 13 13C13 14.1046 13.8954 15 15 15Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3 4C3 2.34315 4.34315 1 6 1H18C19.6569 1 21 2.34315 21 4V20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V4ZM6 3H18C18.5523 3 19 3.44772 19 4V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V4C5 3.44772 5.44772 3 6 3Z","fill":"currentColor"}}]})(props);
};
function CgCardDiamonds (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12 7.75736L7.75736 12L12 16.2426L16.2426 12L12 7.75736Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3 4C3 2.34315 4.34315 1 6 1H18C19.6569 1 21 2.34315 21 4V20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V4ZM6 3H18C18.5523 3 19 3.44772 19 4V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V4C5 3.44772 5.44772 3 6 3Z","fill":"currentColor"}}]})(props);
};
function CgCardHearts (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M9.14648 12.2929C8.36544 11.5118 8.36544 10.2455 9.14648 9.46444C9.92753 8.68339 11.1939 8.68339 11.9749 9.46444L12 9.48955L12.0251 9.46449C12.8061 8.68345 14.0725 8.68345 14.8535 9.46449C15.6346 10.2455 15.6346 11.5119 14.8535 12.2929L12.0251 15.1213L12 15.0962L11.9749 15.1213L9.14648 12.2929Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3 4C3 2.34315 4.34315 1 6 1H18C19.6569 1 21 2.34315 21 4V20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V4ZM6 3H18C18.5523 3 19 3.44772 19 4V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V4C5 3.44772 5.44772 3 6 3Z","fill":"currentColor"}}]})(props);
};
function CgCardSpades (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M9.14648 11.7071C8.36544 12.4882 8.36544 13.7545 9.14648 14.5356C9.92753 15.3166 11.1939 15.3166 11.9749 14.5356L12 14.5104L12.0251 14.5355C12.8061 15.3166 14.0725 15.3166 14.8535 14.5355C15.6346 13.7545 15.6346 12.4881 14.8535 11.7071L12.0251 8.87865L12 8.90377L11.9749 8.87871L9.14648 11.7071Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3 20C3 21.6569 4.34315 23 6 23H18C19.6569 23 21 21.6569 21 20V4C21 2.34315 19.6569 1 18 1H6C4.34315 1 3 2.34315 3 4V20ZM6 21H18C18.5523 21 19 20.5523 19 20V4C19 3.44772 18.5523 3 18 3H6C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21Z","fill":"currentColor"}}]})(props);
};
function CgCarousel (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M4 3C2.34315 3 1 4.34315 1 6V10C1 11.6569 2.34315 13 4 13H20C21.6569 13 23 11.6569 23 10V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V10C3 10.5523 3.44772 11 4 11H20C20.5523 11 21 10.5523 21 10V6C21 5.44771 20.5523 5 20 5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7 20C7 19.4477 7.44772 19 8 19H16C16.5523 19 17 19.4477 17 20C17 20.5523 16.5523 21 16 21H8C7.44772 21 7 20.5523 7 20Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5 15C4.44772 15 4 15.4477 4 16C4 16.5523 4.44772 17 5 17H19C19.5523 17 20 16.5523 20 16C20 15.4477 19.5523 15 19 15H5Z","fill":"currentColor"}}]})(props);
};
function CgCast (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M20 6H4V8H2V6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H15V18H20V6Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M2 13C5.86599 13 9 16.134 9 20H7C7 17.2386 4.76142 15 2 15V13Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M2 17C3.65685 17 5 18.3431 5 20H2V17Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M2 9C8.07513 9 13 13.9249 13 20H11C11 15.0294 6.97056 11 2 11V9Z","fill":"currentColor"}}]})(props);
};
function CgChanel (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M6.07178 3.17291C4.32593 3.5202 2.72229 4.37738 1.46362 5.63605L3.59332 7.76575C4.43079 6.92835 5.4978 6.35803 6.65936 6.12695C7.53564 5.95264 8.43604 5.9773 9.29523 6.19452C9.0791 6.45056 8.87671 6.71936 8.68927 6.99988C7.70032 8.47992 7.17249 10.22 7.17249 12C7.17249 13.78 7.70032 15.5201 8.68927 17.0001C8.87671 17.2806 9.07916 17.5494 9.29529 17.8055C8.4361 18.0227 7.53564 18.0474 6.65936 17.873C5.4978 17.642 4.43079 17.0717 3.59332 16.2343L1.46362 18.364C2.72229 19.6226 4.32593 20.4798 6.07178 20.8271C7.81757 21.1743 9.6272 20.9961 11.2717 20.3149C11.5201 20.212 11.7632 20.0983 12.0001 19.9744C12.2369 20.0983 12.4799 20.212 12.7283 20.3149C14.3729 20.9961 16.1825 21.1743 17.9283 20.8271C19.6741 20.4798 21.2778 19.6226 22.5364 18.364L20.4067 16.2343C19.5693 17.0717 18.5023 17.642 17.3407 17.873C16.4644 18.0474 15.564 18.0227 14.7048 17.8055C14.9209 17.5494 15.1234 17.2806 15.3108 17.0001C16.2997 15.5201 16.8276 13.78 16.8276 12C16.8276 10.22 16.2997 8.47992 15.3108 6.99988C15.1234 6.71936 14.921 6.45056 14.7048 6.19452C15.564 5.9773 16.4644 5.95264 17.3407 6.12695C18.5023 6.35803 19.5693 6.92835 20.4067 7.76575L22.5364 5.63605C21.2778 4.37738 19.6741 3.5202 17.9283 3.17291C16.1825 2.82568 14.3729 3.00391 12.7283 3.68506C12.4799 3.78796 12.2369 3.90167 12.0001 4.02564C11.7632 3.90167 11.5201 3.78796 11.2717 3.68506C9.6272 3.00391 7.81757 2.82568 6.07178 3.17291ZM12.0001 7.7049C11.6994 7.99695 11.4288 8.32117 11.1935 8.67316C10.5356 9.6579 10.1844 10.8157 10.1844 12C10.1844 13.1843 10.5356 14.3421 11.1935 15.3268C11.4288 15.6788 11.6994 16.0031 12.0001 16.2951C12.3007 16.0031 12.5713 15.6788 12.8065 15.3268C13.4645 14.3421 13.8157 13.1843 13.8157 12C13.8157 10.8157 13.4645 9.6579 12.8065 8.67316C12.5713 8.32117 12.3007 7.99695 12.0001 7.7049Z","fill":"currentColor"}}]})(props);
};
function CgChart (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M22.775 8C22.9242 8.65461 23 9.32542 23 10H14V1C14.6746 1 15.3454 1.07584 16 1.22504C16.4923 1.33724 16.9754 1.49094 17.4442 1.68508C18.5361 2.13738 19.5282 2.80031 20.364 3.63604C21.1997 4.47177 21.8626 5.46392 22.3149 6.55585C22.5091 7.02455 22.6628 7.5077 22.775 8ZM20.7082 8C20.6397 7.77018 20.5593 7.54361 20.4672 7.32122C20.1154 6.47194 19.5998 5.70026 18.9497 5.05025C18.2997 4.40024 17.5281 3.88463 16.6788 3.53284C16.4564 3.44073 16.2298 3.36031 16 3.2918V8H20.7082Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 14C1 9.02944 5.02944 5 10 5C10.6746 5 11.3454 5.07584 12 5.22504V12H18.775C18.9242 12.6546 19 13.3254 19 14C19 18.9706 14.9706 23 10 23C5.02944 23 1 18.9706 1 14ZM16.8035 14H10V7.19648C6.24252 7.19648 3.19648 10.2425 3.19648 14C3.19648 17.7575 6.24252 20.8035 10 20.8035C13.7575 20.8035 16.8035 17.7575 16.8035 14Z","fill":"currentColor"}}]})(props);
};
function CgCheckO (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M10.2426 16.3137L6 12.071L7.41421 10.6568L10.2426 13.4853L15.8995 7.8284L17.3137 9.24262L10.2426 16.3137Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z","fill":"currentColor"}}]})(props);
};
function CgCheckR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M10.2426 16.3137L6 12.071L7.41421 10.6568L10.2426 13.4853L15.8995 7.8284L17.3137 9.24262L10.2426 16.3137Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z","fill":"currentColor"}}]})(props);
};
function CgCheck (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M10.5858 13.4142L7.75735 10.5858L6.34314 12L10.5858 16.2427L17.6568 9.1716L16.2426 7.75739L10.5858 13.4142Z","fill":"currentColor"}}]})(props);
};
function CgChevronDoubleDownO (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M7.75732 8.46448L9.17154 7.05026L12 9.87869L14.8284 7.05029L16.2426 8.46451L12 12.7071L7.75732 8.46448Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M9.17154 11.2929L7.75732 12.7071L11.9999 16.9498L16.2426 12.7071L14.8284 11.2929L12 14.1213L9.17154 11.2929Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z","fill":"currentColor"}}]})(props);
};
function CgChevronDoubleDownR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M7.75732 8.46448L9.17154 7.05026L12 9.87869L14.8284 7.05029L16.2426 8.46451L12 12.7071L7.75732 8.46448Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M9.17154 11.2929L7.75732 12.7071L11.9999 16.9498L16.2426 12.7071L14.8284 11.2929L12 14.1213L9.17154 11.2929Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z","fill":"currentColor"}}]})(props);
};
function CgChevronDoubleDown (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M7.75735 5.63605L6.34314 7.05026L12 12.7071L17.6569 7.05029L16.2427 5.63608L12 9.87872L7.75735 5.63605Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M6.34314 12.7071L7.75735 11.2929L12 15.5356L16.2427 11.2929L17.6569 12.7071L12 18.364L6.34314 12.7071Z","fill":"currentColor"}}]})(props);
};
function CgChevronDoubleLeftO (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12.7071 9.1716L11.2929 7.75739L7.05024 12L11.2929 16.2426L12.7071 14.8284L9.87869 12L12.7071 9.1716Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15.5355 7.75739L16.9497 9.1716L14.1213 12L16.9497 14.8284L15.5355 16.2426L11.2929 12L15.5355 7.75739Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z","fill":"currentColor"}}]})(props);
};
function CgChevronDoubleLeftR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12.7071 9.1716L11.2929 7.75739L7.05024 12L11.2929 16.2426L12.7071 14.8284L9.87869 12L12.7071 9.1716Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15.5355 7.75739L16.9497 9.1716L14.1213 12L16.9497 14.8284L15.5355 16.2426L11.2929 12L15.5355 7.75739Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z","fill":"currentColor"}}]})(props);
};
function CgChevronDoubleLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M18.3639 7.75735L16.9497 6.34314L11.2929 12L16.9497 17.6568L18.3639 16.2426L14.1213 12L18.3639 7.75735Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11.2929 6.34314L12.7071 7.75735L8.46447 12L12.7071 16.2426L11.2929 17.6568L5.63605 12L11.2929 6.34314Z","fill":"currentColor"}}]})(props);
};
function CgChevronDoubleRightO (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M8.46448 7.75739L7.05026 9.1716L9.87869 12L7.05029 14.8284L8.46451 16.2426L12.7071 12L8.46448 7.75739Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11.2929 9.1716L12.7071 7.75739L16.9498 12L12.7071 16.2426L11.2929 14.8284L14.1213 12L11.2929 9.1716Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12ZM3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z","fill":"currentColor"}}]})(props);
};
function CgChevronDoubleRightR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M8.46448 7.75739L7.05026 9.1716L9.87869 12L7.05029 14.8284L8.46451 16.2426L12.7071 12L8.46448 7.75739Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11.2929 9.1716L12.7071 7.75739L16.9498 12L12.7071 16.2426L11.2929 14.8284L14.1213 12L11.2929 9.1716Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M23 5C23 2.79086 21.2091 1 19 1H5C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z","fill":"currentColor"}}]})(props);
};
function CgChevronDoubleRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M5.63605 7.75735L7.05026 6.34314L12.7071 12L7.05029 17.6568L5.63608 16.2426L9.87869 12L5.63605 7.75735Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12.7071 6.34314L11.2929 7.75735L15.5356 12L11.2929 16.2426L12.7072 17.6568L18.364 12L12.7071 6.34314Z","fill":"currentColor"}}]})(props);
};
function CgChevronDoubleUpO (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M14.8284 12.7071L16.2426 11.2929L12 7.05027L7.75739 11.2929L9.1716 12.7071L12 9.87869L14.8284 12.7071Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14.8284 16.9497L16.2426 15.5355L12 11.2929L7.75739 15.5355L9.1716 16.9497L12 14.1213L14.8284 16.9497Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12ZM3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z","fill":"currentColor"}}]})(props);
};
function CgChevronDoubleUpR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M14.8284 12.4813L16.2426 11.067L12 6.82444L7.75732 11.0671L9.17154 12.4813L12 9.65286L14.8284 12.4813Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14.8284 16.7239L16.2426 15.3097L12 11.0671L7.75732 15.3097L9.17154 16.7239L12 13.8955L14.8284 16.7239Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M23 4.77411C23 2.56497 21.2091 0.774109 19 0.774109H5C2.79086 0.774109 1 2.56497 1 4.77411V18.7741C1 20.9832 2.79086 22.7741 5 22.7741H19C21.2091 22.7741 23 20.9832 23 18.7741V4.77411ZM19 2.77411H5C3.89543 2.77411 3 3.66954 3 4.77411V18.7741C3 19.8787 3.89543 20.7741 5 20.7741H19C20.1046 20.7741 21 19.8787 21 18.7741V4.77411C21 3.66954 20.1046 2.77411 19 2.77411Z","fill":"currentColor"}}]})(props);
};
function CgChevronDoubleUp (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M17.6569 11.2929L16.2427 12.7071L12 8.46444L7.75735 12.7071L6.34314 11.2929L12 5.63605L17.6569 11.2929Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M17.6569 16.9497L16.2427 18.3639L12 14.1213L7.75735 18.364L6.34314 16.9498L12 11.2929L17.6569 16.9497Z","fill":"currentColor"}}]})(props);
};
function CgChevronDownO (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M7.75745 10.5858L9.17166 9.17154L12.0001 12L14.8285 9.17157L16.2427 10.5858L12.0001 14.8284L7.75745 10.5858Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z","fill":"currentColor"}}]})(props);
};
function CgChevronDownR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M7.75739 10.5858L9.1716 9.17154L12 12L14.8284 9.17157L16.2426 10.5858L12 14.8284L7.75739 10.5858Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z","fill":"currentColor"}}]})(props);
};
function CgChevronDown (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z","fill":"currentColor"}}]})(props);
};
function CgChevronLeftO (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12 7.75739L13.4142 9.1716L10.5858 12L13.4142 14.8285L12 16.2427L7.75736 12L12 7.75739Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z","fill":"currentColor"}}]})(props);
};
function CgChevronLeftR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M13 7.75739L14.4142 9.1716L11.5858 12L14.4142 14.8284L13 16.2426L8.75736 12L13 7.75739Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M19 1C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5C1 2.79086 2.79086 1 5 1H19ZM21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19L3 5C3 3.89543 3.89543 3 5 3L19 3C20.1046 3 21 3.89543 21 5Z","fill":"currentColor"}}]})(props);
};
function CgChevronLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M16.2426 6.34317L14.8284 4.92896L7.75739 12L14.8285 19.0711L16.2427 17.6569L10.5858 12L16.2426 6.34317Z","fill":"currentColor"}}]})(props);
};
function CgChevronRightO (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M11.0858 7.75739L15.3284 12L11.0858 16.2427L9.67157 14.8285L12.5 12L9.67157 9.1716L11.0858 7.75739Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z","fill":"currentColor"}}]})(props);
};
function CgChevronRightR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M16.4853 12.0451L12.2426 7.80249L10.8284 9.2167L13.6568 12.0451L10.8284 14.8736L12.2426 16.2878L16.4853 12.0451Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 4C1 2.34315 2.34315 1 4 1H20C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z","fill":"currentColor"}}]})(props);
};
function CgChevronRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z","fill":"currentColor"}}]})(props);
};
function CgChevronUpO (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M14.8285 14.8284L16.2427 13.4142L12.0001 9.17161L7.75745 13.4142L9.17166 14.8285L12.0001 12L14.8285 14.8284Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z","fill":"currentColor"}}]})(props);
};
function CgChevronUpR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M14.8285 14.8284L16.2427 13.4142L12.0001 9.17161L7.75745 13.4142L9.17166 14.8285L12.0001 12L14.8285 14.8284Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5C2.79086 1 1 2.79086 1 5V19ZM5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z","fill":"currentColor"}}]})(props);
};
function CgChevronUp (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M17.6569 16.2427L19.0711 14.8285L12.0001 7.75739L4.92896 14.8285L6.34317 16.2427L12.0001 10.5858L17.6569 16.2427Z","fill":"currentColor"}}]})(props);
};
function CgCircleci (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM4.14355 13.5165C4.85219 17.2096 8.10023 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C8.0886 4 4.83283 6.80704 4.13728 10.5165L6.72824 10.5071C7.37819 8.20738 9.49236 6.52222 12.0001 6.52222C15.0254 6.52222 17.4779 8.9747 17.4779 12C17.4779 15.0253 15.0254 17.4778 12.0001 17.4778C9.49752 17.4778 7.3869 15.7995 6.73228 13.5071L4.14355 13.5165ZM9.52234 12C9.52234 13.3684 10.6317 14.4778 12.0001 14.4778C13.3685 14.4778 14.4779 13.3684 14.4779 12C14.4779 10.6316 13.3685 9.52222 12.0001 9.52222C10.6317 9.52222 9.52234 10.6316 9.52234 12Z","fill":"currentColor"}}]})(props);
};
function CgClapperBoard (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M20.1702 3L20.1663 3.00453C21.7458 3.09084 23 4.39896 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6C1 4.34315 2.34315 3 4 3H20.1702ZM10.4764 5H16.4764L13.089 9H7.08899L10.4764 5ZM5.08899 9L8.47644 5H4C3.44772 5 3 5.44772 3 6V9H5.08899ZM3 11V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V11H3ZM21 9V6C21 5.44771 20.5523 5 20 5H18.4764L15.089 9H21Z","fill":"currentColor"}}]})(props);
};
function CgClipboard (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H15.9595C16.5118 13 16.9595 12.5523 16.9595 12C16.9595 11.4477 16.5118 11 15.9595 11H8Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M8.04053 15.0665C7.48824 15.0665 7.04053 15.5142 7.04053 16.0665C7.04053 16.6188 7.48824 17.0665 8.04053 17.0665H16C16.5523 17.0665 17 16.6188 17 16.0665C17 15.5142 16.5523 15.0665 16 15.0665H8.04053Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM7 5H5L5 19H19V5H17V6C17 7.65685 15.6569 9 14 9H10C8.34315 9 7 7.65685 7 6V5ZM9 5V6C9 6.55228 9.44772 7 10 7H14C14.5523 7 15 6.55228 15 6V5H9Z","fill":"currentColor"}}]})(props);
};
function CgCloseO (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M16.3394 9.32245C16.7434 8.94589 16.7657 8.31312 16.3891 7.90911C16.0126 7.50509 15.3798 7.48283 14.9758 7.85938L12.0497 10.5866L9.32245 7.66048C8.94589 7.25647 8.31312 7.23421 7.90911 7.61076C7.50509 7.98731 7.48283 8.62008 7.85938 9.0241L10.5866 11.9502L7.66048 14.6775C7.25647 15.054 7.23421 15.6868 7.61076 16.0908C7.98731 16.4948 8.62008 16.5171 9.0241 16.1405L11.9502 13.4133L14.6775 16.3394C15.054 16.7434 15.6868 16.7657 16.0908 16.3891C16.4948 16.0126 16.5171 15.3798 16.1405 14.9758L13.4133 12.0497L16.3394 9.32245Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z","fill":"currentColor"}}]})(props);
};
function CgCloseR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M16.3956 7.75734C16.7862 8.14786 16.7862 8.78103 16.3956 9.17155L13.4142 12.153L16.0896 14.8284C16.4802 15.2189 16.4802 15.8521 16.0896 16.2426C15.6991 16.6331 15.0659 16.6331 14.6754 16.2426L12 13.5672L9.32458 16.2426C8.93405 16.6331 8.30089 16.6331 7.91036 16.2426C7.51984 15.8521 7.51984 15.2189 7.91036 14.8284L10.5858 12.153L7.60436 9.17155C7.21383 8.78103 7.21383 8.14786 7.60436 7.75734C7.99488 7.36681 8.62805 7.36681 9.01857 7.75734L12 10.7388L14.9814 7.75734C15.372 7.36681 16.0051 7.36681 16.3956 7.75734Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M4 1C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4C23 2.34315 21.6569 1 20 1H4ZM20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3Z","fill":"currentColor"}}]})(props);
};
function CgClose (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z","fill":"currentColor"}}]})(props);
};
function CgCloud (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M14.738 19.9964C14.8186 19.9988 14.8994 20 14.9806 20C19.3989 20 22.9806 16.4183 22.9806 12C22.9806 7.58172 19.3989 4 14.9806 4C12.4542 4 10.2013 5.17108 8.73522 7H7.51941C3.92956 7 1.01941 9.91015 1.01941 13.5C1.01941 17.0899 3.92956 20 7.51941 20H14.5194C14.5926 20 14.6654 19.9988 14.738 19.9964ZM16.6913 17.721C19.0415 16.9522 20.9806 14.6815 20.9806 12C20.9806 8.68629 18.2943 6 14.9806 6C11.6669 6 8.98059 8.68629 8.98059 12H6.98059C6.98059 10.9391 7.1871 9.92643 7.56211 9H7.51941C5.03413 9 3.01941 11.0147 3.01941 13.5C3.01941 15.9853 5.03413 18 7.51941 18H14.5194C15.0691 18 15.9041 17.9014 16.6913 17.721Z","fill":"currentColor"}}]})(props);
};
function CgCodeClimate (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M9.49506 8.1109L3.1311 14.4749L4.54532 15.8891L9.49506 10.9393L14.4448 15.8891L15.859 14.4749L9.49506 8.1109Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14.5049 8.11092L12.5317 10.0842L13.9503 11.494L14.5049 10.9393L19.4547 15.8891L20.8689 14.4749L14.5049 8.11092Z","fill":"currentColor"}}]})(props);
};
function CgCodeSlash (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M13.325 3.05011L8.66741 20.4323L10.5993 20.9499L15.2568 3.56775L13.325 3.05011Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7.61197 18.3608L8.97136 16.9124L8.97086 16.8933L3.87657 12.1121L8.66699 7.00798L7.20868 5.63928L1.04956 12.2017L7.61197 18.3608Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16.388 18.3608L15.0286 16.9124L15.0291 16.8933L20.1234 12.1121L15.333 7.00798L16.7913 5.63928L22.9504 12.2017L16.388 18.3608Z","fill":"currentColor"}}]})(props);
};
function CgCode (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M9.95263 16.9123L8.59323 18.3608L2.03082 12.2016L8.18994 5.63922L9.64826 7.00791L4.85783 12.112L9.95212 16.8932L9.95263 16.9123Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14.0474 16.9123L15.4068 18.3608L21.9692 12.2016L15.8101 5.63922L14.3517 7.00791L19.1422 12.112L14.0479 16.8932L14.0474 16.9123Z","fill":"currentColor"}}]})(props);
};
function CgCoffee (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M6 2.5C5.44772 2.5 5 2.94772 5 3.5V5.5C5 6.05228 5.44772 6.5 6 6.5C6.55228 6.5 7 6.05228 7 5.5V3.5C7 2.94772 6.55228 2.5 6 2.5Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M13 21.5C15.973 21.5 18.441 19.3377 18.917 16.5H19C21.2091 16.5 23 14.7091 23 12.5C23 10.2909 21.2091 8.5 19 8.5V7.5H1V15.5C1 18.8137 3.68629 21.5 7 21.5H13ZM3 9.5V15.5C3 17.7091 4.79086 19.5 7 19.5H13C15.2091 19.5 17 17.7091 17 15.5V9.5H3ZM21 12.5C21 13.6046 20.1046 14.5 19 14.5V10.5C20.1046 10.5 21 11.3954 21 12.5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M9 3.5C9 2.94772 9.44771 2.5 10 2.5C10.5523 2.5 11 2.94772 11 3.5V5.5C11 6.05228 10.5523 6.5 10 6.5C9.44771 6.5 9 6.05228 9 5.5V3.5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14 2.5C13.4477 2.5 13 2.94772 13 3.5V5.5C13 6.05228 13.4477 6.5 14 6.5C14.5523 6.5 15 6.05228 15 5.5V3.5C15 2.94772 14.5523 2.5 14 2.5Z","fill":"currentColor"}}]})(props);
};
function CgCollage (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M4 5C4 3.34315 5.34315 2 7 2H17C18.6569 2 20 3.34315 20 5V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V5ZM13 4H17C17.5523 4 18 4.44772 18 5V13H13V4ZM13 15V20H17C17.5523 20 18 19.5523 18 19V15H13ZM11 4H7C6.44771 4 6 4.44772 6 5V8H11V4ZM6 19V10H11V20H7C6.44772 20 6 19.5523 6 19Z","fill":"currentColor"}}]})(props);
};
function CgColorBucket (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M8.20348 2.00378C9.46407 2.00378 10.5067 3.10742 10.6786 4.54241L19.1622 13.0259L11.384 20.8041C10.2124 21.9757 8.31291 21.9757 7.14134 20.8041L2.8987 16.5615C1.72713 15.3899 1.72713 13.4904 2.8987 12.3188L5.70348 9.51404V4.96099C5.70348 3.32777 6.82277 2.00378 8.20348 2.00378ZM8.70348 4.96099V6.51404L7.70348 7.51404V4.96099C7.70348 4.63435 7.92734 4.36955 8.20348 4.36955C8.47963 4.36955 8.70348 4.63435 8.70348 4.96099ZM8.70348 10.8754V9.34247L4.31291 13.733C3.92239 14.1236 3.92239 14.7567 4.31291 15.1473L8.55555 19.3899C8.94608 19.7804 9.57924 19.7804 9.96977 19.3899L16.3337 13.0259L10.7035 7.39569V10.8754C10.7035 10.9184 10.7027 10.9612 10.7012 11.0038H8.69168C8.69941 10.9625 8.70348 10.9195 8.70348 10.8754Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16.8586 16.8749C15.687 18.0465 15.687 19.946 16.8586 21.1175C18.0302 22.2891 19.9297 22.2891 21.1013 21.1175C22.2728 19.946 22.2728 18.0465 21.1013 16.8749L18.9799 14.7536L16.8586 16.8749Z","fill":"currentColor"}}]})(props);
};
function CgColorPicker (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M20.3847 2.87868C19.2132 1.70711 17.3137 1.70711 16.1421 2.87868L14.0202 5.00052L13.313 4.29332C12.9225 3.9028 12.2894 3.9028 11.8988 4.29332C11.5083 4.68385 11.5083 5.31701 11.8988 5.70754L17.5557 11.3644C17.9462 11.7549 18.5794 11.7549 18.9699 11.3644C19.3604 10.9739 19.3604 10.3407 18.9699 9.95018L18.2629 9.24316L20.3847 7.12132C21.5563 5.94975 21.5563 4.05025 20.3847 2.87868Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M11.9297 7.09116L4.1515 14.8693C3.22786 15.793 3.03239 17.169 3.5651 18.2842L1.99994 19.8493L3.41415 21.2635L4.97931 19.6984C6.09444 20.2311 7.4705 20.0356 8.39414 19.112L16.1723 11.3338L11.9297 7.09116ZM13.3439 11.3338L11.9297 9.91959L5.56571 16.2835C5.17518 16.6741 5.17518 17.3072 5.56571 17.6978C5.95623 18.0883 6.5894 18.0883 6.97992 17.6978L13.3439 11.3338Z","fill":"currentColor"}}]})(props);
};
function CgComedyCentral (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M10.5445 19C14.4105 19 17.5445 15.866 17.5445 12C17.5445 8.13401 14.4105 5 10.5445 5C8.61148 5 6.86148 5.7835 5.59473 7.05025L3.47343 4.92896L3.45544 4.94694C5.26649 3.12672 7.7739 2 10.5445 2C16.0673 2 20.5445 6.47715 20.5445 12C20.5445 17.5228 16.0673 22 10.5445 22C7.78307 22 5.28308 20.8807 3.47343 19.0711L5.59475 16.9498C6.8615 18.2165 8.61149 19 10.5445 19Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M10.5445 14C11.1376 14 11.6704 13.7418 12.0367 13.3317L14.1594 15.4544C13.249 16.4068 11.966 17 10.5445 17C7.78305 17 5.54447 14.7614 5.54447 12C5.54447 9.23858 7.78305 7 10.5445 7C11.966 7 13.249 7.59323 14.1594 8.54563L12.0367 10.6683C11.6704 10.2582 11.1376 10 10.5445 10C9.4399 10 8.54447 10.8954 8.54447 12C8.54447 13.1046 9.4399 14 10.5445 14Z","fill":"currentColor"}}]})(props);
};
function CgComment (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M17 9H7V7H17V9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7 13H17V11H7V13Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M2 18V2H22V18H16V22H14C11.7909 22 10 20.2091 10 18H2ZM12 16V18C12 19.1046 12.8954 20 14 20V16H20V4H4V16H12Z","fill":"currentColor"}}]})(props);
};
function CgCommunity (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 17.456C11.2389 17.8053 10.3922 18 9.5 18C6.18629 18 3.5 15.3137 3.5 12C3.5 8.68629 6.18629 6 9.5 6C10.3922 6 11.2389 6.19474 12 6.54404C12.7611 6.19474 13.6078 6 14.5 6C17.8137 6 20.5 8.68629 20.5 12C20.5 15.3137 17.8137 18 14.5 18C13.6078 18 12.7611 17.8053 12 17.456ZM10.0003 15.969C9.83637 15.9895 9.66942 16 9.5 16C7.29086 16 5.5 14.2091 5.5 12C5.5 9.79086 7.29086 8 9.5 8C9.66942 8 9.83637 8.01053 10.0003 8.03098C9.06656 9.08871 8.5 10.4782 8.5 12C8.5 13.5218 9.06656 14.9113 10.0003 15.969ZM13.9998 8.03098C14.1636 8.01054 14.3306 8 14.5 8C16.7091 8 18.5 9.79086 18.5 12C18.5 14.2091 16.7091 16 14.5 16C14.3306 16 14.1636 15.9895 13.9998 15.969C14.9334 14.9113 15.5 13.5218 15.5 12C15.5 10.4782 14.9334 9.08872 13.9998 8.03098ZM12 8.87732C12.9145 9.61038 13.5 10.7368 13.5 12C13.5 13.2632 12.9145 14.3896 12 15.1227C11.0855 14.3896 10.5 13.2632 10.5 12C10.5 10.7368 11.0855 9.61038 12 8.87732Z","fill":"currentColor"}}]})(props);
};
function CgComponents (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M7.7572 6.3431L11.9998 2.10046L16.2425 6.3431L11.9998 10.5857L7.7572 6.3431ZM10.5856 6.3431L11.9998 4.92889L13.4141 6.3431L11.9998 7.75732L10.5856 6.3431Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M2.10046 11.9999L6.3431 7.75726L10.5857 11.9999L6.3431 16.2425L2.10046 11.9999ZM4.92889 11.9999L6.3431 10.5857L7.75732 11.9999L6.3431 13.4141L4.92889 11.9999Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M13.4142 11.9999L17.6568 16.2425L21.8995 11.9999L17.6568 7.75726L13.4142 11.9999ZM17.6568 10.5857L16.2426 11.9999L17.6568 13.4141L19.071 11.9999L17.6568 10.5857Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M7.7572 17.6569L11.9998 13.4142L16.2425 17.6569L11.9998 21.8995L7.7572 17.6569ZM10.5856 17.6569L11.9998 16.2427L13.4141 17.6569L11.9998 19.0711L10.5856 17.6569Z","fill":"currentColor"}}]})(props);
};
function CgCompressLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M7.97867 9.45703L4.40883 9.45423L4.40726 11.4542L11.4073 11.4597L11.4127 4.45972L9.41274 4.45815L9.40992 8.05978L3.09616 1.76935L1.68457 3.18618L7.97867 9.45703Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M19.5615 14.5521L19.5535 12.5521L12.5536 12.58L12.5814 19.5799L14.5814 19.572L14.5671 15.9706L20.9105 22.2307L22.3153 20.8071L15.9914 14.5663L19.5615 14.5521Z","fill":"currentColor"}}]})(props);
};
function CgCompressRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M14.567 8.02947L20.9105 1.76929L22.3153 3.19282L15.9916 9.43352L19.5614 9.44772L19.5534 11.4477L12.5535 11.4199L12.5813 4.41992L14.5813 4.42788L14.567 8.02947Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7.97879 14.5429L4.40886 14.5457L4.40729 12.5457L11.4073 12.5402L11.4128 19.5402L9.41277 19.5417L9.40995 15.9402L3.09623 22.2306L1.68463 20.8138L7.97879 14.5429Z","fill":"currentColor"}}]})(props);
};
function CgCompressV (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M13.0338 7.3559L15.4999 4.85376L16.9244 6.25768L12.0107 11.2432L7.02515 6.32948L8.42907 4.90505L11.0329 7.47139L11.0834 0.843506L13.0833 0.858735L13.0338 7.3559Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15.5627 18.532L16.9749 17.1159L12.0184 12.1729L7.07543 17.1295L8.49159 18.5418L11.0762 15.95L11.1019 23.1566L13.1019 23.1495L13.0765 16.0528L15.5627 18.532Z","fill":"currentColor"}}]})(props);
};
function CgCompress (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M19.0954 8.42986L17.6711 7.02576L12.7568 12.0107L17.7417 16.925L19.1458 15.5007L16.644 13.0344L23.1411 13.0847L23.1565 11.0848L16.5286 11.0334L19.0954 8.42986Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5.46742 15.5618L6.88341 16.9742L11.827 12.0183L6.87102 7.07476L5.45857 8.49074L8.04995 11.0756L0.843506 11.1004L0.850384 13.1004L7.94701 13.076L5.46742 15.5618Z","fill":"currentColor"}}]})(props);
};
function CgController (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M14.8284 6.34313L16.2426 4.92892L12 0.686279L7.75735 4.92892L9.17156 6.34313L12 3.51471L14.8284 6.34313Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M4.92892 16.2426L6.34313 14.8284L3.51471 12L6.34313 9.17156L4.92892 7.75735L0.686279 12L4.92892 16.2426Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7.75735 19.0711L12 23.3137L16.2426 19.0711L14.8284 17.6568L12 20.4853L9.17156 17.6568L7.75735 19.0711Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M17.6568 9.17156L20.4853 12L17.6568 14.8284L19.0711 16.2426L23.3137 12L19.0711 7.75735L17.6568 9.17156Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z","fill":"currentColor"}}]})(props);
};
function CgCopy (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M13 7H7V5H13V7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M13 11H7V9H13V11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7 15H13V13H7V15Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3 19V1H17V5H21V23H7V19H3ZM15 17V3H5V17H15ZM17 7V19H9V21H19V7H17Z","fill":"currentColor"}}]})(props);
};
function CgCopyright (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M13.392 10.4362L14.8106 9.0176C14.1031 8.38476 13.169 8 12.145 8C9.93588 8 8.14502 9.79086 8.14502 12C8.14502 14.2091 9.93588 16 12.145 16C13.2563 16 14.2617 15.5468 14.9866 14.8152L13.674 13.5026L13.4646 13.503C13.1124 13.8124 12.6506 14 12.145 14C11.0405 14 10.145 13.1046 10.145 12C10.145 10.8954 11.0405 10 12.145 10C12.6166 10 13.0501 10.1632 13.392 10.4362Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3ZM12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5Z","fill":"currentColor"}}]})(props);
};
function CgCornerDoubleDownLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M11.2952 7.69432L16.1357 2.6377L21.1924 7.47821L19.8094 8.92296L17.3474 6.56617L17.5094 12.6C17.5805 15.25 15.49 17.456 12.8399 17.5271L6.91369 17.6863L9.20765 19.9335L7.80805 21.3622L2.80768 16.4636L7.70628 11.4632L9.13495 12.8628L6.75759 15.2896L12.7755 15.128C14.1005 15.0924 15.1458 13.9895 15.1102 12.6645L14.9519 6.76668L12.74 9.07732L11.2952 7.69432Z","fill":"currentColor"}}]})(props);
};
function CgCornerDoubleDownRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12.6004 7.67915L7.63814 2.74194L2.70093 7.7042L4.11871 9.11483L6.52249 6.69886L6.5075 12.7348C6.50092 15.3857 8.64461 17.5401 11.2956 17.5467L17.224 17.5614L14.9855 19.8638L16.4195 21.258L21.299 16.239L16.2801 11.3595L14.8859 12.7934L17.3217 15.1616L11.3015 15.1467C9.97605 15.1434 8.9042 14.0662 8.9075 12.7407L8.92214 6.84077L11.1898 9.09694L12.6004 7.67915Z","fill":"currentColor"}}]})(props);
};
function CgCornerDoubleLeftDown (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M21.299 7.7609L16.2801 12.6405L14.8859 11.2065L17.3217 8.83829L11.3015 8.85324C9.97605 8.85653 8.9042 9.93371 8.9075 11.2592L8.92214 17.1591L11.1898 14.903L12.6004 16.3208L7.63814 21.258L2.70093 16.2957L4.11871 14.8851L6.52249 17.3011L6.5075 11.2652C6.50092 8.61419 8.64461 6.45983 11.2956 6.45325L17.224 6.43853L14.9855 4.1361L16.4195 2.74194L21.299 7.7609Z","fill":"currentColor"}}]})(props);
};
function CgCornerDoubleLeftUp (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M7.78372 9.25045L6.36951 7.83624L10.6121 3.59363L14.8548 7.83627L13.4406 9.25048L10.6121 6.42205L7.78372 9.25045Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M13.4406 13.4932L14.8548 12.0789L10.6121 7.83628L6.36951 12.0789L7.78372 13.4931L9.63052 11.6463V16.4063C9.63052 18.6155 11.4214 20.4063 13.6305 20.4063H17.6305V18.4063H13.6305C12.526 18.4063 11.6305 17.5109 11.6305 16.4063V11.6831L13.4406 13.4932Z","fill":"currentColor"}}]})(props);
};
function CgCornerDoubleRightDown (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M7.69438 12.7048L2.63776 7.86424L7.47827 2.80762L8.92302 4.19062L6.56623 6.65263L12.6002 6.49061C15.2502 6.41945 17.4561 8.51002 17.5273 11.16L17.6864 17.0862L19.9335 14.7924L21.3622 16.192L16.4636 21.1924L11.4632 16.2938L12.8628 14.8651L15.2897 17.2426L15.1281 11.2245C15.0926 9.89945 13.9896 8.85417 12.6646 8.88974L6.76674 9.04811L9.07738 11.26L7.69438 12.7048Z","fill":"currentColor"}}]})(props);
};
function CgCornerDoubleRightUp (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M16.2163 9.25045L17.6305 7.83624L13.3879 3.59363L9.14526 7.83627L10.5595 9.25048L13.3879 6.42205L16.2163 9.25045Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M10.5595 13.4932L9.14526 12.0789L13.3879 7.83628L17.6305 12.0789L16.2163 13.4931L14.3695 11.6463V16.4063C14.3695 18.6155 12.5786 20.4063 10.3695 20.4063H6.36951V18.4063H10.3695C11.4741 18.4063 12.3695 17.5109 12.3695 16.4063V11.6831L10.5595 13.4932Z","fill":"currentColor"}}]})(props);
};
function CgCornerDoubleUpLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M9.25045 7.78369L7.83624 6.36948L3.59363 10.6121L7.83627 14.8547L9.25048 13.4405L6.42205 10.6121L9.25045 7.78369Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M13.4932 13.4405L12.0789 14.8547L7.83627 10.6121L12.0789 6.36948L13.4931 7.78369L11.6463 9.63049L16.4063 9.63049C18.6155 9.63049 20.4063 11.4214 20.4063 13.6305L20.4063 17.6305L18.4063 17.6305L18.4063 13.6305C18.4063 12.5259 17.5109 11.6305 16.4063 11.6305L11.6831 11.6305L13.4932 13.4405Z","fill":"currentColor"}}]})(props);
};
function CgCornerDoubleUpRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M14.7495 7.78369L16.1638 6.36948L20.4064 10.6121L16.1637 14.8547L14.7495 13.4405L17.5779 10.6121L14.7495 7.78369Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M10.5068 13.4405L11.9211 14.8547L16.1637 10.6121L11.9211 6.36948L10.5069 7.78369L12.3537 9.63049L7.59366 9.63049C5.38452 9.63049 3.59366 11.4214 3.59366 13.6305L3.59366 17.6305L5.59366 17.6305L5.59366 13.6305C5.59366 12.5259 6.48909 11.6305 7.59366 11.6305L12.3169 11.6305L10.5068 13.4405Z","fill":"currentColor"}}]})(props);
};
function CgCornerDownLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M17.1495 13.4005C18.2541 13.4005 19.1495 12.5051 19.1495 11.4005V3.40051H21.1495V11.4005C21.1495 13.6097 19.3587 15.4005 17.1495 15.4005H6.84398L10.6286 19.1852L9.21443 20.5994L2.85046 14.2354L9.21443 7.87146L10.6286 9.28567L6.5138 13.4005H17.1495Z","fill":"currentColor"}}]})(props);
};
function CgCornerDownRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M6.85046 13.4005C5.74589 13.4005 4.85046 12.5051 4.85046 11.4005V3.40051H2.85046V11.4005C2.85046 13.6097 4.64132 15.4005 6.85046 15.4005H17.156L13.3714 19.1852L14.7856 20.5994L21.1495 14.2354L14.7856 7.87146L13.3714 9.28567L17.4862 13.4005H6.85046Z","fill":"currentColor"}}]})(props);
};
function CgCornerLeftDown (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M10.6013 6.84996C10.6023 5.74539 11.4986 4.85079 12.6032 4.85181L20.6032 4.8592L20.605 2.8592L12.605 2.85181C10.3959 2.84977 8.60335 4.63897 8.60131 6.84811L8.59179 17.1538L4.81054 13.3656L3.39502 14.7785L9.7531 21.1483L16.1229 14.7902L14.71 13.3747L10.5915 17.4856L10.6013 6.84996Z","fill":"currentColor"}}]})(props);
};
function CgCornerLeftUp (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M14.71 10.6254L16.1229 9.20989L9.7531 2.85181L3.39502 9.22164L4.81054 10.6346L8.59179 6.84631L8.60131 17.152C8.60335 19.3611 10.3959 21.1503 12.605 21.1483L20.605 21.1409L20.6032 19.1409L12.6032 19.1483C11.4986 19.1493 10.6023 18.2547 10.6013 17.1501L10.5915 6.51446L14.71 10.6254Z","fill":"currentColor"}}]})(props);
};
function CgCornerRightDown (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M13.3987 6.84996C13.3977 5.74539 12.5014 4.85079 11.3969 4.85181L3.39687 4.8592L3.39502 2.8592L11.395 2.85181C13.6042 2.84977 15.3967 4.63897 15.3987 6.84811L15.4082 17.1538L19.1895 13.3656L20.605 14.7785L14.2469 21.1483L7.87709 14.7902L9.28999 13.3747L13.4085 17.4856L13.3987 6.84996Z","fill":"currentColor"}}]})(props);
};
function CgCornerRightUp (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M9.28999 10.6254L7.87709 9.20989L14.2469 2.85181L20.605 9.22164L19.1895 10.6346L15.4082 6.84631L15.3987 17.152C15.3967 19.3611 13.6042 21.1503 11.395 21.1483L3.39502 21.1409L3.39687 19.1409L11.3969 19.1483C12.5014 19.1493 13.3977 18.2547 13.3987 17.1501L13.4085 6.51446L9.28999 10.6254Z","fill":"currentColor"}}]})(props);
};
function CgCornerUpLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M10.6276 14.7219L9.21641 16.1391L2.83875 9.78892L9.18897 3.41125L10.6062 4.82242L6.82971 8.61526L17.1353 8.59304C19.3445 8.58828 21.1392 10.3753 21.144 12.5844L21.1612 20.5844L19.1612 20.5887L19.144 12.5887C19.1416 11.4841 18.2442 10.5907 17.1396 10.593L6.50391 10.616L10.6276 14.7219Z","fill":"currentColor"}}]})(props);
};
function CgCornerUpRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M13.3724 14.7219L14.7835 16.1391L21.1612 9.78892L14.811 3.41125L13.3937 4.82242L17.1702 8.61526L6.86461 8.59304C4.65547 8.58828 2.86076 10.3753 2.85599 12.5844L2.83875 20.5844L4.83874 20.5887L4.85599 12.5887C4.85837 11.4841 5.75573 10.5907 6.8603 10.593L17.496 10.616L13.3724 14.7219Z","fill":"currentColor"}}]})(props);
};
function CgCreditCard (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M4 9C4 8.44772 4.44772 8 5 8H9C9.55228 8 10 8.44772 10 9C10 9.55228 9.55228 10 9 10H5C4.44772 10 4 9.55228 4 9Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M4 3C1.79086 3 0 4.79086 0 7V17C0 19.2091 1.79086 21 4 21H20C22.2091 21 24 19.2091 24 17V7C24 4.79086 22.2091 3 20 3H4ZM20 5H4C2.89543 5 2 5.89543 2 7V14H22V7C22 5.89543 21.1046 5 20 5ZM22 16H2V17C2 18.1046 2.89543 19 4 19H20C21.1046 19 22 18.1046 22 17V16Z","fill":"currentColor"}}]})(props);
};
function CgCrop (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M7.93164 9.00891V16H15V20.0089H17V16H20.9316V14H17V7.00891H9.93164V3H7.93164V7.00891H4V9.00891H7.93164ZM9.93164 9.00891V14H15V9.00891H9.93164Z","fill":"currentColor"}}]})(props);
};
function CgCross (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V9H7C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11H11V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18V11H17C17.5523 11 18 10.5523 18 10C18 9.44772 17.5523 9 17 9H13V6Z","fill":"currentColor"}}]})(props);
};
function CgCrowdfire (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M2 12C2 6.47715 6.47715 2 12 2V4H20V12H22C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM18 12H16V8H12V6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12Z","fill":"currentColor"}}]})(props);
};
function CgCrown (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M2.5 6.09143L7.21997 10.8114L12.0005 6.03088L16.7811 10.8114L21.5 6.09245V14.9691C21.5 16.626 20.1569 17.9691 18.5 17.9691H5.5C3.84314 17.9691 2.5 16.626 2.5 14.9691V6.09143ZM19.5 10.9087V14.9691C19.5 15.5214 19.0523 15.9691 18.5 15.9691H5.5C4.94771 15.9691 4.5 15.5214 4.5 14.9691V10.9077L7.21997 13.6277L12.0005 8.84717L16.7811 13.6277L19.5 10.9087Z","fill":"currentColor"}}]})(props);
};
function CgDanger (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12 6C12.5523 6 13 6.44772 13 7V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V7C11 6.44772 11.4477 6 12 6Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z","fill":"currentColor"}}]})(props);
};
function CgDarkMode (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z","fill":"currentColor"}}]})(props);
};
function CgData (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 8.88916C13.6569 8.88916 15 10.2323 15 11.8892C15 13.1954 14.1652 14.3066 13 14.7185V19.8892H11V14.7185C9.83481 14.3066 9 13.1954 9 11.8892C9 10.2323 10.3431 8.88916 12 8.88916ZM12 10.8892C12.5523 10.8892 13 11.3369 13 11.8892C13 12.4414 12.5523 12.8892 12 12.8892C11.4477 12.8892 11 12.4414 11 11.8892C11 11.3369 11.4477 10.8892 12 10.8892Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7.05019 6.93938C5.78348 8.20612 5 9.9561 5 11.8891C5 14.0666 5.99426 16.0119 7.55355 17.2957L8.97712 15.8721C7.7757 14.9589 7 13.5146 7 11.8891C7 10.5084 7.55962 9.25841 8.46441 8.35359L7.05019 6.93938Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15.5355 8.35348C16.4403 9.25831 17 10.5083 17 11.8891C17 13.5146 16.2243 14.959 15.0228 15.8722L16.4463 17.2958C18.0057 16.012 19 14.0666 19 11.8891C19 9.95604 18.2165 8.20602 16.9497 6.93927L15.5355 8.35348Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M1 11.8891C1 8.85152 2.23119 6.10155 4.22176 4.11095L5.63598 5.52516C4.00733 7.15383 3 9.40381 3 11.8891C3 14.3743 4.00733 16.6243 5.63597 18.2529L4.22175 19.6672C2.23119 17.6766 1 14.9266 1 11.8891Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M19.7781 19.6673C21.7688 17.6767 23 14.9266 23 11.8891C23 8.85147 21.7688 6.10145 19.7781 4.11084L18.3639 5.52505C19.9926 7.15374 21 9.40376 21 11.8891C21 14.3744 19.9926 16.6244 18.3639 18.2531L19.7781 19.6673Z","fill":"currentColor"}}]})(props);
};
function CgDatabase (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M5 9V7H7V9H5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M9 9H19V7H9V9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5 15V17H7V15H5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M19 17H9V15H19V17Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6ZM4 5H20C20.5523 5 21 5.44772 21 6V11H3V6C3 5.44772 3.44772 5 4 5ZM3 13V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V13H3Z","fill":"currentColor"}}]})(props);
};
function CgDebug (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M10 11C10 10.4477 10.4477 10 11 10H13C13.5523 10 14 10.4477 14 11C14 11.5523 13.5523 12 13 12H11C10.4477 12 10 11.5523 10 11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11 14C10.4477 14 10 14.4477 10 15C10 15.5523 10.4477 16 11 16H13C13.5523 16 14 15.5523 14 15C14 14.4477 13.5523 14 13 14H11Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M9.09447 4.74918C8.41606 4.03243 8 3.0648 8 2H10C10 3.10457 10.8954 4 12 4C13.1046 4 14 3.10457 14 2H16C16 3.0648 15.5839 4.03243 14.9055 4.74918C16.1782 5.45491 17.1673 6.6099 17.6586 8H19C19.5523 8 20 8.44772 20 9C20 9.55229 19.5523 10 19 10H18V12H19C19.5523 12 20 12.4477 20 13C20 13.5523 19.5523 14 19 14H18V16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H17.6586C16.8349 20.3304 14.6124 22 12 22C9.38756 22 7.16508 20.3304 6.34141 18H5C4.44772 18 4 17.5523 4 17C4 16.4477 4.44772 16 5 16H6V14H5C4.44772 14 4 13.5523 4 13C4 12.4477 4.44772 12 5 12H6V10H5C4.44772 10 4 9.55229 4 9C4 8.44772 4.44772 8 5 8H6.34141C6.83274 6.6099 7.82181 5.45491 9.09447 4.74918ZM8 16V10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10V16C16 18.2091 14.2091 20 12 20C9.79086 20 8 18.2091 8 16Z","fill":"currentColor"}}]})(props);
};
function CgDesignmodo (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M7 4.05444C4.23858 4.05444 2 6.29302 2 9.05444C2 11.8159 4.23858 14.0544 7 14.0544C9.76142 14.0544 12 11.8159 12 9.05444C12 6.29302 9.76142 4.05444 7 4.05444ZM5 9.05444C5 10.159 5.89543 11.0544 7 11.0544C8.10457 11.0544 9 10.159 9 9.05444C9 7.94987 8.10457 7.05444 7 7.05444C5.89543 7.05444 5 7.94987 5 9.05444Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M22 10.5544H17V7.55444H22V10.5544Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11.5503 16.9457C12.6786 16.9457 13.6977 16.4786 14.4249 15.7272C14.4097 15.7429 14.3943 15.7585 14.3788 15.774L16.5001 17.8954C15.2334 19.1621 13.4834 19.9457 11.5503 19.9457C9.61734 19.9457 7.86734 19.1622 6.60059 17.8954L8.72191 15.7741C9.44576 16.498 10.4458 16.9457 11.5503 16.9457Z","fill":"currentColor"}}]})(props);
};
function CgDesktop (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M8 15C7.44772 15 7 15.4477 7 16C7 16.5523 7.44772 17 8 17C8.55228 17 9 16.5523 9 16C9 15.4477 8.55228 15 8 15Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16 15C15.4477 15 15 15.4477 15 16C15 16.5523 15.4477 17 16 17C16.5523 17 17 16.5523 17 16C17 15.4477 16.5523 15 16 15Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V7H21V6C21 5.44772 20.5523 5 20 5ZM3 18V9H21V18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z","fill":"currentColor"}}]})(props);
};
function CgDetailsLess (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M3 9C2.44772 9 2 9.44772 2 10C2 10.5523 2.44772 11 3 11H21C21.5523 11 22 10.5523 22 10C22 9.44772 21.5523 9 21 9H3Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M3 13C2.44772 13 2 13.4477 2 14C2 14.5523 2.44772 15 3 15H15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13H3Z","fill":"currentColor"}}]})(props);
};
function CgDetailsMore (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M2 8C2 7.44772 2.44772 7 3 7H21C21.5523 7 22 7.44772 22 8C22 8.55228 21.5523 9 21 9H3C2.44772 9 2 8.55228 2 8Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M3 15C2.44772 15 2 15.4477 2 16C2 16.5523 2.44772 17 3 17H15C15.5523 17 16 16.5523 16 16C16 15.4477 15.5523 15 15 15H3Z","fill":"currentColor"}}]})(props);
};
function CgDialpad (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M5.5 3H8.5V6H5.5V3Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5.5 8H8.5V11H5.5V8Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5.5 13V16H8.5V13H5.5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M10.5 3H13.5V6H10.5V3Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M10.5 8V11H13.5V8H10.5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M10.5 13H13.5V16H10.5V13Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M10.5 18V21H13.5V18H10.5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15.5 3H18.5V6H15.5V3Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15.5 8V11H18.5V8H15.5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15.5 13H18.5V16H15.5V13Z","fill":"currentColor"}}]})(props);
};
function CgDice1 (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 4C1 2.34315 2.34315 1 4 1H20C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z","fill":"currentColor"}}]})(props);
};
function CgDice2 (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M17.2 14.9431C16.0954 14.9431 15.2 15.8385 15.2 16.9431C15.2 18.0477 16.0954 18.9431 17.2 18.9431C18.3045 18.9431 19.2 18.0477 19.2 16.9431C19.2 15.8385 18.3045 14.9431 17.2 14.9431Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5.05518 7.05518C5.05518 5.95061 5.95061 5.05518 7.05518 5.05518C8.15975 5.05518 9.05518 5.95061 9.05518 7.05518C9.05518 8.15975 8.15975 9.05518 7.05518 9.05518C5.95061 9.05518 5.05518 8.15975 5.05518 7.05518Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M4 1C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4C23 2.34315 21.6569 1 20 1H4ZM20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3Z","fill":"currentColor"}}]})(props);
};
function CgDice3 (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16.9451 14.8921C15.8405 14.8921 14.9451 15.7875 14.9451 16.8921C14.9451 17.9967 15.8405 18.8921 16.9451 18.8921C18.0496 18.8921 18.9451 17.9967 18.9451 16.8921C18.9451 15.7875 18.0496 14.8921 16.9451 14.8921Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5.05518 7.05518C5.05518 5.95061 5.95061 5.05518 7.05518 5.05518C8.15975 5.05518 9.05518 5.95061 9.05518 7.05518C9.05518 8.15975 8.15975 9.05518 7.05518 9.05518C5.95061 9.05518 5.05518 8.15975 5.05518 7.05518Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 4C1 2.34315 2.34315 1 4 1H20C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z","fill":"currentColor"}}]})(props);
};
function CgDice4 (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M16.9451 5.05518C15.8405 5.05518 14.9451 5.95061 14.9451 7.05518C14.9451 8.15975 15.8405 9.05518 16.9451 9.05518C18.0496 9.05518 18.9451 8.15975 18.9451 7.05518C18.9451 5.95061 18.0496 5.05518 16.9451 5.05518Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14.9451 16.8921C14.9451 15.7875 15.8405 14.8921 16.9451 14.8921C18.0496 14.8921 18.9451 15.7875 18.9451 16.8921C18.9451 17.9967 18.0496 18.8921 16.9451 18.8921C15.8405 18.8921 14.9451 17.9967 14.9451 16.8921Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7.05518 14.8921C5.95061 14.8921 5.05518 15.7875 5.05518 16.8921C5.05518 17.9967 5.95061 18.8921 7.05518 18.8921C8.15975 18.8921 9.05518 17.9967 9.05518 16.8921C9.05518 15.7875 8.15975 14.8921 7.05518 14.8921Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5.05518 7.05518C5.05518 5.95061 5.95061 5.05518 7.05518 5.05518C8.15975 5.05518 9.05518 5.95061 9.05518 7.05518C9.05518 8.15975 8.15975 9.05518 7.05518 9.05518C5.95061 9.05518 5.05518 8.15975 5.05518 7.05518Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M4 1C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4C23 2.34315 21.6569 1 20 1H4ZM20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3Z","fill":"currentColor"}}]})(props);
};
function CgDice5 (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M14.9451 7.05518C14.9451 5.95061 15.8405 5.05518 16.9451 5.05518C18.0496 5.05518 18.9451 5.95061 18.9451 7.05518C18.9451 8.15975 18.0496 9.05518 16.9451 9.05518C15.8405 9.05518 14.9451 8.15975 14.9451 7.05518Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16.9451 14.8921C15.8405 14.8921 14.9451 15.7875 14.9451 16.8921C14.9451 17.9967 15.8405 18.8921 16.9451 18.8921C18.0496 18.8921 18.9451 17.9967 18.9451 16.8921C18.9451 15.7875 18.0496 14.8921 16.9451 14.8921Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5.05518 16.8921C5.05518 15.7875 5.95061 14.8921 7.05518 14.8921C8.15975 14.8921 9.05518 15.7875 9.05518 16.8921C9.05518 17.9967 8.15975 18.8921 7.05518 18.8921C5.95061 18.8921 5.05518 17.9967 5.05518 16.8921Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7.05518 5.05518C5.95061 5.05518 5.05518 5.95061 5.05518 7.05518C5.05518 8.15975 5.95061 9.05518 7.05518 9.05518C8.15975 9.05518 9.05518 8.15975 9.05518 7.05518C9.05518 5.95061 8.15975 5.05518 7.05518 5.05518Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 4C1 2.34315 2.34315 1 4 1H20C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z","fill":"currentColor"}}]})(props);
};
function CgDice6 (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M16.9451 5.05518C15.8405 5.05518 14.9451 5.95061 14.9451 7.05518C14.9451 8.15975 15.8405 9.05518 16.9451 9.05518C18.0496 9.05518 18.9451 8.15975 18.9451 7.05518C18.9451 5.95061 18.0496 5.05518 16.9451 5.05518Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14.9451 16.8921C14.9451 15.7875 15.8405 14.8921 16.9451 14.8921C18.0496 14.8921 18.9451 15.7875 18.9451 16.8921C18.9451 17.9967 18.0496 18.8921 16.9451 18.8921C15.8405 18.8921 14.9451 17.9967 14.9451 16.8921Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7.05518 14.8921C5.95061 14.8921 5.05518 15.7875 5.05518 16.8921C5.05518 17.9967 5.95061 18.8921 7.05518 18.8921C8.15975 18.8921 9.05518 17.9967 9.05518 16.8921C9.05518 15.7875 8.15975 14.8921 7.05518 14.8921Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5.05518 7.05518C5.05518 5.95061 5.95061 5.05518 7.05518 5.05518C8.15975 5.05518 9.05518 5.95061 9.05518 7.05518C9.05518 8.15975 8.15975 9.05518 7.05518 9.05518C5.95061 9.05518 5.05518 8.15975 5.05518 7.05518Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16.9451 9.97363C15.8405 9.97363 14.9451 10.8691 14.9451 11.9736C14.9451 13.0782 15.8405 13.9736 16.9451 13.9736C18.0496 13.9736 18.9451 13.0782 18.9451 11.9736C18.9451 10.8691 18.0496 9.97363 16.9451 9.97363Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5.05518 11.9736C5.05518 10.8691 5.95061 9.97363 7.05518 9.97363C8.15975 9.97363 9.05518 10.8691 9.05518 11.9736C9.05518 13.0782 8.15975 13.9736 7.05518 13.9736C5.95061 13.9736 5.05518 13.0782 5.05518 11.9736Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M4 1C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4C23 2.34315 21.6569 1 20 1H4ZM20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3Z","fill":"currentColor"}}]})(props);
};
function CgDigitalocean (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12 6C8.68629 6 6 8.68629 6 12H1C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23V18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7 18V13H12V18H7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M3 18V22H7V18H3Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M3 18H1V16H3V18Z","fill":"currentColor"}}]})(props);
};
function CgDisc (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5 12C5 8.13401 8.13401 5 12 5V7C9.23858 7 7 9.23858 7 12H5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12 17C14.7614 17 17 14.7614 17 12H19C19 15.866 15.866 19 12 19V17Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z","fill":"currentColor"}}]})(props);
};
function CgDisplayFlex (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M6 17V7H8V17H6Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16 7V17H18V7H16Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M2 3H22V21H2V3ZM4 5V19H20V5H4Z","fill":"currentColor"}}]})(props);
};
function CgDisplayFullwidth (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M2 5H22V3H2V5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M2 21H22V19H2V21Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M2 7V17H22V7H2ZM4 9H20V15H4V9Z","fill":"currentColor"}}]})(props);
};
function CgDisplayGrid (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M7 7V11H11V7H7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M13 7H17V11H13V7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M13 13V17H17V13H13Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7 13H11V17H7V13Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3 3H21V21H3V3ZM5 5V19H19V5H5Z","fill":"currentColor"}}]})(props);
};
function CgDisplaySpacing (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M3 21V3H5V21H3Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M7 3H17V21H7V3ZM9 5V19H15V5H9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M19 3V21H21V3H19Z","fill":"currentColor"}}]})(props);
};
function CgDistributeHorizontal (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M11 9H13V15H11V9Z","stroke":"currentColor","strokeOpacity":"0.5","strokeWidth":"2"}},{"tag":"path","attr":{"d":"M5 5V19H7V5H5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M17 5V19H19V5H17Z","fill":"currentColor"}}]})(props);
};
function CgDistributeVertical (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M9 11H15V13H9V11Z","stroke":"currentColor","strokeOpacity":"0.5","strokeWidth":"2"}},{"tag":"path","attr":{"d":"M19 7H5V5H19V7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M19 19H5V17H19V19Z","fill":"currentColor"}}]})(props);
};
function CgDockBottom (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M2 20V4H22V20H2ZM4 6H20V14H4V6Z","fill":"currentColor"}}]})(props);
};
function CgDockLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M2 4H22V20H2V4ZM8 6H20V18H8V6Z","fill":"currentColor"}}]})(props);
};
function CgDockRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M2 4H22V20H2V4ZM16 18V6H4V18H16Z","fill":"currentColor"}}]})(props);
};
function CgDockWindow (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M2 20V4H22V20H2ZM20 6H6V16L20 16V6Z","fill":"currentColor"}}]})(props);
};
function CgDolby (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M0 4V20H24V4H0ZM10 12C10 9.79086 8.20914 8 6 8H4V16H6C8.20914 16 10 14.2091 10 12ZM18 16H20V8H18C15.7909 8 14 9.79086 14 12C14 14.2091 15.7909 16 18 16Z","fill":"currentColor"}}]})(props);
};
function CgDollar (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M11 19V22H13V19H14C16.2091 19 18 17.2091 18 15C18 12.7909 16.2091 11 14 11H13V7H15V9H17V5H13V2H11V5H10C7.79086 5 6 6.79086 6 9C6 11.2091 7.79086 13 10 13H11V17H9V15H7V19H11ZM13 17H14C15.1046 17 16 16.1046 16 15C16 13.8954 15.1046 13 14 13H13V17ZM11 11V7H10C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11H11Z","fill":"currentColor"}}]})(props);
};
function CgDribbble (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 11.9554V12.0446C1.01066 14.7301 1.98363 17.1885 3.59196 19.0931C4.05715 19.6439 4.57549 20.1485 5.13908 20.5987C5.70631 21.0519 6.31937 21.4501 6.97019 21.7853C7.90271 22.2656 8.91275 22.6165 9.97659 22.8143C10.5914 22.9286 11.2243 22.9918 11.8705 22.9993C11.9136 22.9998 11.9567 23 11.9999 23C15.6894 23 18.9547 21.1836 20.9502 18.3962C21.3681 17.8125 21.7303 17.1861 22.0291 16.525C22.6528 15.1448 22.9999 13.613 22.9999 12C22.9999 8.73978 21.5816 5.81084 19.3283 3.79653C18.8064 3.32998 18.2397 2.91249 17.6355 2.55132C15.9873 1.56615 14.0597 1 11.9999 1C11.888 1 11.7764 1.00167 11.6653 1.00499C9.99846 1.05479 8.42477 1.47541 7.0239 2.18719C6.07085 2.67144 5.19779 3.29045 4.42982 4.01914C3.7166 4.69587 3.09401 5.4672 2.58216 6.31302C2.22108 6.90969 1.91511 7.54343 1.6713 8.20718C1.24184 9.37631 1.00523 10.6386 1 11.9554ZM20.4812 15.0186C20.8171 14.075 20.9999 13.0588 20.9999 12C20.9999 9.54265 20.0151 7.31533 18.4186 5.6912C17.5975 7.05399 16.5148 8.18424 15.2668 9.0469C15.7351 10.2626 15.9886 11.5603 16.0045 12.8778C16.7692 13.0484 17.5274 13.304 18.2669 13.6488C19.0741 14.0252 19.8141 14.487 20.4812 15.0186ZM15.8413 14.8954C16.3752 15.0321 16.904 15.22 17.4217 15.4614C18.222 15.8346 18.9417 16.3105 19.5723 16.8661C18.0688 19.2008 15.5151 20.7953 12.5788 20.9817C13.5517 20.0585 14.3709 18.9405 14.972 17.6514C15.3909 16.7531 15.678 15.8272 15.8413 14.8954ZM13.9964 12.6219C13.9583 11.7382 13.7898 10.8684 13.5013 10.0408C10.6887 11.2998 7.36584 11.3765 4.35382 9.97197C4.01251 9.81281 3.68319 9.63837 3.36632 9.44983C3.12787 10.2584 2.99991 11.1142 2.99991 12C2.99991 13.9462 3.61763 15.748 4.6677 17.2203C6.83038 14.1875 10.3685 12.4987 13.9964 12.6219ZM6.047 18.7502C7.77258 16.059 10.7714 14.5382 13.8585 14.6191C13.723 15.3586 13.4919 16.093 13.1594 16.8062C12.3777 18.4825 11.1453 19.805 9.67385 20.6965C8.31043 20.3328 7.07441 19.6569 6.047 18.7502ZM11.9999 3C13.7846 3 15.4479 3.51946 16.847 4.41543C16.2113 5.54838 15.3593 6.4961 14.368 7.23057C13.3472 5.57072 11.8752 4.16433 10.027 3.21692C10.6619 3.07492 11.3222 3 11.9999 3ZM8.80619 4.84582C10.4462 5.61056 11.7474 6.80659 12.6379 8.23588C10.3464 9.24654 7.64722 9.30095 5.19906 8.15936C4.83384 7.98905 4.48541 7.79735 4.15458 7.58645C4.91365 6.24006 6.00929 5.10867 7.32734 4.30645C7.82672 4.44058 8.32138 4.61975 8.80619 4.84582Z","fill":"currentColor"}}]})(props);
};
function CgDrive (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14 12C14 11.4477 14.4477 11 15 11C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13C14.4477 13 14 12.5523 14 12Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M2 8C0.895431 8 0 8.89543 0 10V14C0 15.1046 0.89543 16 2 16H22C23.1046 16 24 15.1046 24 14V10C24 8.89543 23.1046 8 22 8H2ZM22 10H2L2 14H22V10Z","fill":"currentColor"}}]})(props);
};
function CgDropInvert (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12.0001 1.13611L5.63604 7.50002C2.12132 11.0147 2.12132 16.7132 5.63604 20.2279C7.39343 21.9853 9.69679 22.864 12.0001 22.864C12.288 22.864 12.5759 22.8502 12.8627 22.8228C14.8706 22.6306 16.8264 21.7657 18.3641 20.2279C21.8788 16.7132 21.8788 11.0147 18.3641 7.50002L12.0001 1.13611ZM7.05025 8.91423L12 3.96448L12.0001 20.864C10.2086 20.864 8.41711 20.1806 7.05025 18.8137C4.31658 16.0801 4.31658 11.6479 7.05025 8.91423Z","fill":"currentColor"}}]})(props);
};
function CgDropOpacity (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M15.9451 21.9559C12.5884 23.5927 8.42477 23.0167 5.63598 20.2279C2.12126 16.7132 2.12126 11.0147 5.63598 7.49995L11.9999 1.13599L18.3639 7.49995C19.2521 8.38814 19.9158 9.41578 20.3551 10.5124C21.6543 13.7553 20.9906 17.6012 18.364 20.2278C17.6381 20.9538 16.8189 21.5298 15.9451 21.9559ZM7.05019 8.91416L11.9999 3.96441L16.9497 8.91416C18.274 10.2385 18.9568 11.9615 18.998 13.6968H5.00192C5.04309 11.9615 5.72585 10.2385 7.05019 8.91416Z","fill":"currentColor"}}]})(props);
};
function CgDrop (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M6.34315 19.5208C3.21895 16.3966 3.21895 11.3312 6.34315 8.20705L12 2.5502L17.6569 8.20705C20.781 11.3312 20.781 16.3966 17.6569 19.5208C14.5327 22.645 9.46734 22.645 6.34315 19.5208Z","stroke":"currentColor","strokeWidth":"2"}}]})(props);
};
function CgDuplicate (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M19 5H7V3H21V17H19V5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M9 13V11H11V13H13V15H11V17H9V15H7V13H9Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3 7H17V21H3V7ZM5 9H15V19H5V9Z","fill":"currentColor"}}]})(props);
};
function CgEditBlackPoint (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12ZM12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19Z","fill":"currentColor"}}]})(props);
};
function CgEditContrast (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12 18C10.4633 18 9.06151 17.4223 8 16.4722C6.7725 15.3736 6 13.777 6 12C6 10.223 6.7725 8.62643 8 7.52779C9.06151 6.57771 10.4633 6 12 6V18Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z","fill":"currentColor"}}]})(props);
};
function CgEditExposure (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11 7V9H9V11H11V13H13V11H15V9H13V7H11ZM9 15V17H15V15H9Z","fill":"currentColor"}}]})(props);
};
function CgEditFade (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M8 12C8 10.5194 8.8044 9.22675 10 8.53513V15.4649C8.8044 14.7733 8 13.4806 8 12Z","stroke":"currentColor","strokeOpacity":"0.3","strokeWidth":"4"}},{"tag":"path","attr":{"d":"M14 15.4649V8.53513C15.1956 9.22675 16 10.5194 16 12C16 13.4806 15.1956 14.7733 14 15.4649Z","stroke":"currentColor","strokeOpacity":"0.6","strokeWidth":"4"}},{"tag":"path","attr":{"d":"M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z","stroke":"currentColor","strokeWidth":"2"}}]})(props);
};
function CgEditFlipH (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M18 7C18.5523 7 19 7.44772 19 8V16C19 16.5523 18.5523 17 18 17H15V19H18C19.6569 19 21 17.6569 21 16V8C21 6.34315 19.6569 5 18 5H15V7H18Z","fill":"currentColor","fillOpacity":"0.5"}},{"tag":"path","attr":{"d":"M13 3H11V21H13V3Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5 8C5 7.44772 5.44772 7 6 7H9V5H6C4.34315 5 3 6.34315 3 8V16C3 17.6569 4.34315 19 6 19H9V17H6C5.44772 17 5 16.5523 5 16V8Z","fill":"currentColor"}}]})(props);
};
function CgEditFlipV (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M17 18C17 18.5523 16.5523 19 16 19L8 19C7.44772 19 7 18.5523 7 18L7 15L5 15L5 18C5 19.6569 6.34315 21 8 21L16 21C17.6569 21 19 19.6569 19 18V15L17 15V18Z","fill":"currentColor","fillOpacity":"0.5"}},{"tag":"path","attr":{"d":"M16 5C16.5523 5 17 5.44772 17 6V9H19V6C19 4.34315 17.6569 3 16 3L8 3C6.34315 3 5 4.34315 5 6V9H7V6C7 5.44772 7.44772 5 8 5L16 5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M21 13V11L3 11V13H21Z","fill":"currentColor"}}]})(props);
};
function CgEditHighlight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12 6C10.7785 6 9.64223 6.36502 8.69435 6.99194H12V7.99194H7.53501C7.00911 8.57742 6.59669 9.26689 6.33237 10.0258H12V11.0258H6.07869C6.02692 11.3428 6 11.6683 6 12C6 12.3379 6.02793 12.6693 6.08161 12.9919H12V13.9919H6.33857C6.60189 14.7404 7.00941 15.4208 7.52779 16H12V17H8.68221C9.63251 17.6318 10.7733 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z","fill":"currentColor"}}]})(props);
};
function CgEditMarkup (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM18.5793 19.531C20.6758 17.698 22 15.0036 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.9616 3.28743 17.6225 5.33317 19.4535L6.99999 10.9738H9.17026L12 6.07251L14.8297 10.9738H17L18.5793 19.531ZM16.0919 21.1272L15.2056 12.9738H8.79438L7.90814 21.1272C9.15715 21.688 10.5421 22 12 22C13.4579 22 14.8428 21.688 16.0919 21.1272Z","fill":"currentColor"}}]})(props);
};
function CgEditMask (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 22C6.47716 22 2 17.5228 2 12C2 6.47717 6.47716 2 12 2C17.5228 2 22 6.47717 22 12C22 17.5228 17.5228 22 12 22ZM9.0307 19.4308C9.01047 19.29 9 19.1462 9 19C9 17.3431 10.3431 16 12 16C13.6569 16 15 17.3431 15 19C15 19.1462 14.9895 19.29 14.9693 19.4308C16.9993 18.6189 18.619 16.9993 19.4308 14.9692C19.2901 14.9895 19.1463 15 19 15C17.3431 15 16 13.6569 16 12C16 10.3431 17.3431 9 19 9C19.0637 9 19.127 9.00195 19.1897 9.00586C19.271 9.01099 19.3514 9.01929 19.4308 9.03076C18.6189 7.00073 16.9993 5.3811 14.9693 4.56921C14.9895 4.70996 15 4.85376 15 5C15 6.65686 13.6569 8 12 8C10.3431 8 9 6.65686 9 5C9 4.85376 9.01048 4.70996 9.03072 4.56921C7.0007 5.3811 5.38106 7.00073 4.56915 9.03076C4.64857 9.01929 4.729 9.01099 4.8103 9.00586C4.87303 9.00195 4.93628 9 5 9C6.65686 9 8 10.3431 8 12C8 13.6569 6.65686 15 5 15C4.8537 15 4.70985 14.9895 4.56915 14.9692C5.38104 16.9993 7.00069 18.6189 9.0307 19.4308Z","fill":"currentColor"}}]})(props);
};
function CgEditNoise (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M10.4044 17.7657C10.419 17.7803 10.4329 17.7953 10.446 17.8108C10.1948 17.7439 9.95005 17.661 9.71293 17.5634C9.95429 17.5106 10.2167 17.578 10.4044 17.7657Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M8.43574 16.705C8.40862 16.7321 8.37994 16.7567 8.34999 16.7788C7.95661 16.4775 7.60163 16.1285 7.29364 15.7406C7.31765 15.7068 7.3448 15.6746 7.37508 15.6443C7.66797 15.3514 8.14285 15.3514 8.43574 15.6443C8.72863 15.9372 8.72863 16.4121 8.43574 16.705Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M6.37104 13.6475C6.59701 13.8735 6.64864 14.2077 6.52594 14.4832C6.38527 14.1723 6.27034 13.8472 6.18387 13.5107C6.25129 13.5454 6.31455 13.591 6.37104 13.6475Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M6.37104 10.6753C6.29401 10.7523 6.2044 10.8091 6.10883 10.8456C6.18637 10.4523 6.30234 10.0728 6.45268 9.71119C6.66079 10.004 6.63357 10.4128 6.37104 10.6753Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7.37508 8.70669C7.28995 8.62156 7.22957 8.52106 7.19392 8.41413C7.45907 8.06093 7.76228 7.73793 8.09747 7.45124C8.22139 7.48394 8.33858 7.54887 8.43574 7.64603C8.72863 7.93892 8.72863 8.41379 8.43574 8.70669C8.14285 8.99958 7.66797 8.99958 7.37508 8.70669Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M9.34371 6.76662C9.31335 6.73627 9.28614 6.70396 9.26208 6.6701C9.6881 6.45171 10.1437 6.28277 10.6212 6.17088C10.6397 6.38399 10.5675 6.60352 10.4044 6.76662C10.1115 7.05952 9.6366 7.05952 9.34371 6.76662Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M13.2872 17.8734C13.5967 17.8055 13.8973 17.7136 14.1868 17.6C13.9165 17.4914 13.5957 17.5466 13.3766 17.7657C13.3429 17.7993 13.3131 17.8354 13.2872 17.8734Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15.5312 16.8608C15.935 16.5658 16.3005 16.2216 16.619 15.8369C16.6005 15.8133 16.5803 15.7906 16.5586 15.7688C16.2657 15.4759 15.7908 15.4759 15.4979 15.7688C15.205 16.0617 15.205 16.5366 15.4979 16.8295C15.5088 16.8403 15.5199 16.8508 15.5312 16.8608Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M17.3654 14.6921C17.5637 14.2953 17.7194 13.8735 17.8264 13.4326C17.6636 13.451 17.5058 13.5227 17.3809 13.6475C17.0933 13.9351 17.0881 14.3982 17.3654 14.6921Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M17.8911 10.8934C17.8032 10.4272 17.6613 9.98016 17.4722 9.55885C17.4507 9.57609 17.4299 9.59469 17.4099 9.61465C17.117 9.90755 17.117 10.3824 17.4099 10.6753C17.5439 10.8093 17.7159 10.882 17.8911 10.8934Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16.7556 8.35985C16.4971 8.02355 16.2038 7.71542 15.8811 7.44086C15.7407 7.46881 15.6068 7.5372 15.4979 7.64603C15.205 7.93892 15.205 8.41379 15.4979 8.70669C15.7908 8.99958 16.2657 8.99958 16.5586 8.70669C16.658 8.60729 16.7237 8.48694 16.7556 8.35985Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14.4373 6.76662C14.4906 6.71331 14.5342 6.65397 14.5681 6.59079C14.1273 6.38127 13.6569 6.22392 13.1649 6.12671C13.1317 6.35331 13.2022 6.59223 13.3766 6.76662C13.6695 7.05952 14.1444 7.05952 14.4373 6.76662Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12.5257 7.64603C12.8186 7.93892 12.8186 8.41379 12.5257 8.70669C12.2328 8.99958 11.7579 8.99958 11.465 8.70669C11.1721 8.41379 11.1721 7.93892 11.465 7.64603C11.7579 7.35313 12.2328 7.35313 12.5257 7.64603Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M10.4044 9.61465C10.6973 9.90755 10.6973 10.3824 10.4044 10.6753C10.1115 10.9682 9.6366 10.9682 9.34371 10.6753C9.05081 10.3824 9.05081 9.90755 9.34371 9.61465C9.6366 9.32176 10.1115 9.32176 10.4044 9.61465Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M8.43574 12.7967C8.72863 12.5038 8.72863 12.0289 8.43574 11.736C8.14285 11.4431 7.66797 11.4431 7.37508 11.736C7.08218 12.0289 7.08218 12.5038 7.37508 12.7967C7.66797 13.0895 8.14285 13.0895 8.43574 12.7967Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M10.4044 13.6475C10.6973 13.9404 10.6973 14.4153 10.4044 14.7082C10.1115 15.001 9.6366 15.001 9.34371 14.7082C9.05081 14.4153 9.05081 13.9404 9.34371 13.6475C9.6366 13.3546 10.1115 13.3546 10.4044 13.6475Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12.5257 12.7967C12.8186 12.5038 12.8186 12.0289 12.5257 11.736C12.2328 11.4431 11.7579 11.4431 11.465 11.736C11.1721 12.0289 11.1721 12.5038 11.465 12.7967C11.7579 13.0895 12.2328 13.0895 12.5257 12.7967Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14.4373 9.61465C14.7302 9.90755 14.7302 10.3824 14.4373 10.6753C14.1444 10.9682 13.6695 10.9682 13.3766 10.6753C13.0837 10.3824 13.0837 9.90755 13.3766 9.61465C13.6695 9.32176 14.1444 9.32176 14.4373 9.61465Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16.5586 12.7681C16.8515 12.4752 16.8515 12.0003 16.5586 11.7074C16.2657 11.4145 15.7908 11.4145 15.4979 11.7074C15.205 12.0003 15.205 12.4752 15.4979 12.7681C15.7908 13.061 16.2657 13.061 16.5586 12.7681Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14.423 13.6902C14.7159 13.9831 14.7159 14.458 14.423 14.7509C14.1301 15.0438 13.6552 15.0438 13.3623 14.7509C13.0694 14.458 13.0694 13.9831 13.3623 13.6902C13.6552 13.3973 14.1301 13.3973 14.423 13.6902Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12.3159 16.705C12.6088 16.4121 12.6088 15.9372 12.3159 15.6443C12.023 15.3514 11.5482 15.3514 11.2553 15.6443C10.9624 15.9372 10.9624 16.4121 11.2553 16.705C11.5482 16.9979 12.023 16.9979 12.3159 16.705Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z","fill":"currentColor"}}]})(props);
};
function CgEditShadows (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M15.3056 6.99194C14.3578 6.36502 13.2215 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C13.2267 18 14.3675 17.6318 15.3178 17H12V16H16.4722C16.9906 15.4208 17.3981 14.7404 17.6614 13.9919H12V12.9919H17.9184C17.9721 12.6693 18 12.3379 18 12C18 11.6683 17.9731 11.3428 17.9213 11.0258H12V10.0258H17.6676C17.4033 9.26689 16.9909 8.57742 16.465 7.99194H12V6.99194H15.3056Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z","fill":"currentColor"}}]})(props);
};
function CgEditStraight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12 4C15.866 4 19 7.13401 19 11H5C5 7.13401 8.13401 4 12 4Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5 13H1V11H5V13Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M19 13C19 16.866 15.866 20 12 20C8.13401 20 5 16.866 5 13H19Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M19 13V11H23V13H19Z","fill":"currentColor"}}]})(props);
};
function CgEditUnmask (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M15 5C15 6.65685 13.6569 8 12 8C10.3431 8 9 6.65685 9 5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12 22C13.6569 22 15 20.6569 15 19C15 17.3431 13.6569 16 12 16C10.3431 16 9 17.3431 9 19C9 20.6569 10.3431 22 12 22Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M22 12C22 13.6569 20.6569 15 19 15C17.3431 15 16 13.6569 16 12C16 10.3431 17.3431 9 19 9C20.6569 9 22 10.3431 22 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5 15C6.65685 15 8 13.6569 8 12C8 10.3431 6.65685 9 5 9C3.34315 9 2 10.3431 2 12C2 13.6569 3.34315 15 5 15Z","fill":"currentColor"}}]})(props);
};
function CgEject (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M16.9498 14.3948L18.364 12.9805L12 6.61658L5.63605 12.9805L7.05026 14.3948L12 9.445L16.9498 14.3948Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M6.00014 17.3835H18.0001V15.3835H6.00014V17.3835Z","fill":"currentColor"}}]})(props);
};
function CgEnter (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M20 5H8V9H6V3H22V21H6V15H8V19H20V5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M13.0743 16.9498L11.6601 15.5356L14.1957 13H2V11H14.1956L11.6601 8.46451L13.0743 7.05029L18.024 12L13.0743 16.9498Z","fill":"currentColor"}}]})(props);
};
function CgErase (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3.49997 12.8995C2.71892 13.6805 2.71892 14.9468 3.49997 15.7279L7.35785 19.5858H4.08576C3.53347 19.5858 3.08576 20.0335 3.08576 20.5858C3.08576 21.1381 3.53347 21.5858 4.08576 21.5858H20.0858C20.638 21.5858 21.0858 21.1381 21.0858 20.5858C21.0858 20.0335 20.638 19.5858 20.0858 19.5858H10.9558L20.4705 10.071C21.2516 9.28999 21.2516 8.02366 20.4705 7.24261L16.2279 2.99997C15.4468 2.21892 14.1805 2.21892 13.3995 2.99997L3.49997 12.8995ZM7.82579 11.4021L4.91418 14.3137L9.15683 18.5563L12.0684 15.6447L7.82579 11.4021ZM9.24 9.98787L13.4826 14.2305L19.0563 8.65683L14.8137 4.41418L9.24 9.98787Z","fill":"currentColor"}}]})(props);
};
function CgEreader (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M16 7C15.4477 7 15 7.44772 15 8C15 8.55228 15.4477 9 16 9H19C19.5523 9 20 8.55228 20 8C20 7.44772 19.5523 7 19 7H16Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15 12C15 11.4477 15.4477 11 16 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H16C15.4477 13 15 12.5523 15 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16 15C15.4477 15 15 15.4477 15 16C15 16.5523 15.4477 17 16 17H19C19.5523 17 20 16.5523 20 16C20 15.4477 19.5523 15 19 15H16Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3 3C1.34315 3 0 4.34315 0 6V18C0 19.6569 1.34315 21 3 21H21C22.6569 21 24 19.6569 24 18V6C24 4.34315 22.6569 3 21 3H3ZM21 5H13V19H21C21.5523 19 22 18.5523 22 18V6C22 5.44772 21.5523 5 21 5ZM3 5H11V19H3C2.44772 19 2 18.5523 2 18V6C2 5.44772 2.44772 5 3 5Z","fill":"currentColor"}}]})(props);
};
function CgEricsson (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M7.71689 5.72315C6.71581 6.18996 6.2827 7.37992 6.74951 8.381C7.21632 9.38208 8.40628 9.81519 9.40736 9.34838L20.2831 4.27696C21.2841 3.81015 21.7172 2.62019 21.2504 1.61911C20.7836 0.618028 19.5937 0.184918 18.5926 0.651729L7.71689 5.72315Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M4.74951 15.381C4.2827 14.3799 4.71581 13.19 5.71689 12.7231L16.5926 7.65173C17.5937 7.18492 18.7836 7.61803 19.2504 8.61911C19.7172 9.62019 19.2841 10.8101 18.2831 11.277L7.40736 16.3484C6.40628 16.8152 5.21632 16.3821 4.74951 15.381Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M2.74951 22.381C2.2827 21.3799 2.71581 20.19 3.71689 19.7231L14.5926 14.6517C15.5937 14.1849 16.7836 14.618 17.2504 15.6191C17.7172 16.6202 17.2841 17.8101 16.2831 18.277L5.40736 23.3484C4.40628 23.8152 3.21632 23.3821 2.74951 22.381Z","fill":"currentColor"}}]})(props);
};
function CgEthernet (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M4 0.5V20.5H11V23.5H13V20.5H20V0.5H4ZM18 2.5H6V8.5H10V14.5H14V8.5H18V2.5ZM6 18.5V10.5H8V16.5H16V10.5H18V18.5H6Z","fill":"currentColor"}}]})(props);
};
function CgEuro (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M18.5535 15.5355C17.6487 16.4404 16.3987 17 15.018 17C13.1416 17 11.5066 15.9664 10.6513 14.4374H13.0323L13.7284 12.5625H10.0493C10.0286 12.3779 10.018 12.1902 10.018 12C10.018 11.8098 10.0286 11.6221 10.0493 11.4374H14.3362L15.0324 9.5625H10.6514C11.5066 8.0336 13.1416 7 15.018 7C16.3987 7 17.6487 7.55964 18.5535 8.46447L19.9677 7.05025C18.701 5.7835 16.951 5 15.018 5C12.0092 5 9.44381 6.89827 8.45407 9.5625H6.03241L5.33624 11.4374H8.04028C8.02552 11.623 8.018 11.8106 8.018 12C8.018 12.1894 8.02552 12.3769 8.04027 12.5625H4.72845L4.03229 14.4374H8.45404C9.44377 17.1017 12.0092 19 15.018 19C16.951 19 18.701 18.2165 19.9677 16.9497L18.5535 15.5355Z","fill":"currentColor"}}]})(props);
};
function CgEventbrite (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M14.6734 17.4378C12.3057 18.5419 9.5858 17.9679 7.85444 16.2039L21.8647 9.67074C21.7105 9.02969 21.4902 8.39446 21.2008 7.77376C18.8667 2.76836 12.9169 0.602811 7.91152 2.93687C2.90612 5.27092 0.740567 11.2207 3.07462 16.2261C5.40868 21.2315 11.3585 23.3971 16.3639 21.063C19.016 19.8263 20.8708 17.5746 21.6815 14.986H17.3424C16.7484 16.0235 15.8393 16.8941 14.6734 17.4378ZM9.60199 6.5621C7.23436 7.66615 5.92572 10.1185 6.16403 12.5786L16.4208 7.79583C14.6894 6.03194 11.9696 5.45805 9.60199 6.5621Z","fill":"currentColor"}}]})(props);
};
function CgExpand (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12.3062 16.5933L12.2713 18.593L5.2724 18.4708L5.39457 11.4719L7.39426 11.5068L7.33168 15.092L15.2262 7.46833L11.6938 7.40668L11.7287 5.40698L18.7277 5.52915L18.6055 12.5281L16.6058 12.4932L16.6693 8.85507L8.72095 16.5307L12.3062 16.5933Z","fill":"currentColor"}}]})(props);
};
function CgExport (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M16.9498 5.96781L15.5356 7.38203L13 4.84646V17.0421H11V4.84653L8.46451 7.38203L7.05029 5.96781L12 1.01807L16.9498 5.96781Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5 20.9819V10.9819H9V8.98193H3V22.9819H21V8.98193H15V10.9819H19V20.9819H5Z","fill":"currentColor"}}]})(props);
};
function CgExtensionAdd (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M16 4H18V6H20V8H18V10H16V8H14V6H16V4Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 12V6H4V20H18V12H12ZM6 8H10V12H6V8ZM10 14V18H6V14H10ZM16 14V18H12V14H16Z","fill":"currentColor"}}]})(props);
};
function CgExtensionAlt (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M5 5V19H13V13H19V5H5ZM11 7H7V11H11V7ZM11 13H7V17H11V13ZM13 11H17V7H13V11Z","fill":"currentColor"}}]})(props);
};
function CgExtensionRemove (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 11V5H4V19H18V11H12ZM6 7H10V11H6V7ZM10 13V17H6V13H10ZM16 13V17H12V13H16Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M20 7H14V9H20V7Z","fill":"currentColor"}}]})(props);
};
function CgExtension (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M13 3H21V11H13V3ZM15 5H19V9H15V5Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M17 21V13H11V7H3V21H17ZM9 9H5V13H9V9ZM5 19L5 15H9V19H5ZM11 19V15H15V19H11Z","fill":"currentColor"}}]})(props);
};
function CgExternal (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M15.6396 7.02527H12.0181V5.02527H19.0181V12.0253H17.0181V8.47528L12.1042 13.3892L10.6899 11.975L15.6396 7.02527Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M10.9819 6.97473H4.98193V18.9747H16.9819V12.9747H14.9819V16.9747H6.98193V8.97473H10.9819V6.97473Z","fill":"currentColor"}}]})(props);
};
function CgEyeAlt (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 3C6.40848 3 1.71018 6.82432 0.378052 12C1.71018 17.1757 6.40848 21 12 21C17.5915 21 22.2898 17.1757 23.6219 12C22.2898 6.82432 17.5915 3 12 3ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z","fill":"currentColor"}}]})(props);
};
function CgEye (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 3C17.5915 3 22.2898 6.82432 23.6219 12C22.2898 17.1757 17.5915 21 12 21C6.40848 21 1.71018 17.1757 0.378052 12C1.71018 6.82432 6.40848 3 12 3ZM12 19C7.52443 19 3.73132 16.0581 2.45723 12C3.73132 7.94186 7.52443 5 12 5C16.4756 5 20.2687 7.94186 21.5428 12C20.2687 16.0581 16.4756 19 12 19Z","fill":"currentColor"}}]})(props);
};
function CgFacebook (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z","fill":"currentColor"}}]})(props);
};
function CgFeed (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12.552 8C11.9997 8 11.552 8.44772 11.552 9C11.552 9.55228 11.9997 10 12.552 10H16.552C17.1043 10 17.552 9.55228 17.552 9C17.552 8.44772 17.1043 8 16.552 8H12.552Z","fill":"currentColor","fillOpacity":"0.5"}},{"tag":"path","attr":{"d":"M12.552 17C11.9997 17 11.552 17.4477 11.552 18C11.552 18.5523 11.9997 19 12.552 19H16.552C17.1043 19 17.552 18.5523 17.552 18C17.552 17.4477 17.1043 17 16.552 17H12.552Z","fill":"currentColor","fillOpacity":"0.5"}},{"tag":"path","attr":{"d":"M12.552 5C11.9997 5 11.552 5.44772 11.552 6C11.552 6.55228 11.9997 7 12.552 7H20.552C21.1043 7 21.552 6.55228 21.552 6C21.552 5.44772 21.1043 5 20.552 5H12.552Z","fill":"currentColor","fillOpacity":"0.8"}},{"tag":"path","attr":{"d":"M12.552 14C11.9997 14 11.552 14.4477 11.552 15C11.552 15.5523 11.9997 16 12.552 16H20.552C21.1043 16 21.552 15.5523 21.552 15C21.552 14.4477 21.1043 14 20.552 14H12.552Z","fill":"currentColor","fillOpacity":"0.8"}},{"tag":"path","attr":{"d":"M3.448 4.00208C2.89571 4.00208 2.448 4.44979 2.448 5.00208V10.0021C2.448 10.5544 2.89571 11.0021 3.448 11.0021H8.448C9.00028 11.0021 9.448 10.5544 9.448 10.0021V5.00208C9.448 4.44979 9.00028 4.00208 8.448 4.00208H3.448Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M3.448 12.9979C2.89571 12.9979 2.448 13.4456 2.448 13.9979V18.9979C2.448 19.5502 2.89571 19.9979 3.448 19.9979H8.448C9.00028 19.9979 9.448 19.5502 9.448 18.9979V13.9979C9.448 13.4456 9.00028 12.9979 8.448 12.9979H3.448Z","fill":"currentColor"}}]})(props);
};
function CgFigma (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M8.5 2C6.84315 2 5.5 3.34315 5.5 5C5.5 6.65685 6.84315 8 8.5 8H15.5C17.1569 8 18.5 6.65685 18.5 5C18.5 3.34315 17.1569 2 15.5 2H8.5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15.5 9C13.8431 9 12.5 10.3431 12.5 12C12.5 13.6569 13.8431 15 15.5 15C17.1569 15 18.5 13.6569 18.5 12C18.5 10.3431 17.1569 9 15.5 9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5.5 12C5.5 10.3431 6.84315 9 8.5 9H11.5V15H8.5C6.84315 15 5.5 13.6569 5.5 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M8.5 16C6.84315 16 5.5 17.3431 5.5 19C5.5 20.6569 6.84315 22 8.5 22C10.1569 22 11.5 20.6569 11.5 19V16H8.5Z","fill":"currentColor"}}]})(props);
};
function CgFileAdd (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M10 18V16H8V14H10V12H12V14H14V16H12V18H10Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z","fill":"currentColor"}}]})(props);
};
function CgFileDocument (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M7 18H17V16H7V18Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M17 14H7V12H17V14Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7 10H11V8H7V10Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z","fill":"currentColor"}}]})(props);
};
function CgFileRemove (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M9 15H15V13H9V15Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z","fill":"currentColor"}}]})(props);
};
function CgFile (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3 5C3 3.34315 4.34315 2 6 2H14C17.866 2 21 5.13401 21 9V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V5ZM13 4H6C5.44772 4 5 4.44772 5 5V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V9H13V4ZM18.584 7C17.9413 5.52906 16.6113 4.4271 15 4.10002V7H18.584Z","fill":"currentColor"}}]})(props);
};
function CgFilm (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9C6.55228 9 7 8.55228 7 8C7 7.44772 6.55228 7 6 7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M17 8C17 7.44772 17.4477 7 18 7C18.5523 7 19 7.44772 19 8C19 8.55228 18.5523 9 18 9C17.4477 9 17 8.55228 17 8Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13C6.55228 13 7 12.5523 7 12C7 11.4477 6.55228 11 6 11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M6 15C5.44772 15 5 15.4477 5 16C5 16.5523 5.44772 17 6 17C6.55228 17 7 16.5523 7 16C7 15.4477 6.55228 15 6 15Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M17 16C17 15.4477 17.4477 15 18 15C18.5523 15 19 15.4477 19 16C19 16.5523 18.5523 17 18 17C17.4477 17 17 16.5523 17 16Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z","fill":"currentColor"}}]})(props);
};
function CgFilters (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M4.70834 15.4397C5.92663 16.2928 7.3222 16.7038 8.70461 16.7063C9.17977 18.0045 10.0433 19.1753 11.2616 20.0284C14.4284 22.2458 18.7932 21.4762 21.0107 18.3093C23.2281 15.1425 22.4585 10.7777 19.2916 8.56024C18.0734 7.70719 16.6778 7.29621 15.2954 7.29371C14.8202 5.99552 13.9567 4.82467 12.7384 3.97161C9.57158 1.75417 5.20676 2.52381 2.98931 5.69064C0.771871 8.85748 1.54151 13.2223 4.70834 15.4397ZM5.8555 13.8014C6.6016 14.3239 7.44081 14.6142 8.28736 14.6875C8.20112 13.1725 8.60464 11.6187 9.54254 10.2793C10.4804 8.9398 11.8025 8.0292 13.2556 7.59209C12.8972 6.82166 12.3374 6.13235 11.5913 5.60992C9.32924 4.02603 6.21151 4.57577 4.62762 6.8378C3.04373 9.09982 3.59347 12.2176 5.8555 13.8014ZM18.1445 10.1985C17.3984 9.67611 16.5592 9.38581 15.7126 9.31251C15.7989 10.8275 15.3953 12.3813 14.4574 13.7207C13.5195 15.0602 12.1975 15.9708 10.7444 16.4079C11.1028 17.1783 11.6626 17.8676 12.4087 18.3901C14.6707 19.9739 17.7885 19.4242 19.3724 17.1622C20.9562 14.9002 20.4065 11.7824 18.1445 10.1985Z","fill":"currentColor"}}]})(props);
};
function CgFlagAlt (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12.4388 7L14.8387 4H7V10H14.8387L12.4388 7ZM19 12H7V22H5V2H19L15 7L19 12Z","fill":"currentColor"}}]})(props);
};
function CgFlag (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M4 21H6V11H12V13H20V5H13V3H4V21ZM12 5H6V9H13V11H18V7H12V5Z","fill":"currentColor"}}]})(props);
};
function CgFolderAdd (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M11 14.5V16.5H13V14.5H15V12.5H13V10.5H11V12.5H9V14.5H11Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M4 1.5C2.89543 1.5 2 2.39543 2 3.5V4.5C2 4.55666 2.00236 4.61278 2.00698 4.66825C0.838141 5.07811 0 6.19118 0 7.5V19.5C0 21.1569 1.34315 22.5 3 22.5H21C22.6569 22.5 24 21.1569 24 19.5V7.5C24 5.84315 22.6569 4.5 21 4.5H11.874C11.4299 2.77477 9.86384 1.5 8 1.5H4ZM9.73244 4.5C9.38663 3.9022 8.74028 3.5 8 3.5H4V4.5H9.73244ZM3 6.5C2.44772 6.5 2 6.94772 2 7.5V19.5C2 20.0523 2.44772 20.5 3 20.5H21C21.5523 20.5 22 20.0523 22 19.5V7.5C22 6.94772 21.5523 6.5 21 6.5H3Z","fill":"currentColor"}}]})(props);
};
function CgFolderRemove (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M9 14.5V12.5H15V14.5H9Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M4 1.5C2.89543 1.5 2 2.39543 2 3.5V4.5C2 4.55666 2.00236 4.61278 2.00698 4.66825C0.838141 5.07811 0 6.19118 0 7.5V19.5C0 21.1569 1.34315 22.5 3 22.5H21C22.6569 22.5 24 21.1569 24 19.5V7.5C24 5.84315 22.6569 4.5 21 4.5H11.874C11.4299 2.77477 9.86384 1.5 8 1.5H4ZM9.73244 4.5C9.38663 3.9022 8.74028 3.5 8 3.5H4V4.5H9.73244ZM3 6.5C2.44772 6.5 2 6.94772 2 7.5V19.5C2 20.0523 2.44772 20.5 3 20.5H21C21.5523 20.5 22 20.0523 22 19.5V7.5C22 6.94772 21.5523 6.5 21 6.5H3Z","fill":"currentColor"}}]})(props);
};
function CgFolder (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M4 1.5C2.89543 1.5 2 2.39543 2 3.5V4.5C2 4.55666 2.00236 4.61278 2.00698 4.66825C0.838141 5.07811 0 6.19118 0 7.5V19.5C0 21.1569 1.34315 22.5 3 22.5H21C22.6569 22.5 24 21.1569 24 19.5V7.5C24 5.84315 22.6569 4.5 21 4.5H11.874C11.4299 2.77477 9.86384 1.5 8 1.5H4ZM9.73244 4.5C9.38663 3.9022 8.74028 3.5 8 3.5H4V4.5H9.73244ZM3 6.5C2.44772 6.5 2 6.94772 2 7.5V19.5C2 20.0523 2.44772 20.5 3 20.5H21C21.5523 20.5 22 20.0523 22 19.5V7.5C22 6.94772 21.5523 6.5 21 6.5H3Z","fill":"currentColor"}}]})(props);
};
function CgFontHeight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M21 5V3H3V5H21Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M21 19V21H3V19H21Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12.0001 7.37636C11.602 7.35207 11.2112 7.56874 11.0325 7.95204L7.65154 15.2025C7.41815 15.7031 7.6347 16.2981 8.13522 16.5315C8.63577 16.7649 9.23074 16.5484 9.46417 16.0477L9.95278 14.9999H14.0473L14.5359 16.0477C14.7693 16.5484 15.3643 16.7649 15.8648 16.5315C16.3654 16.2981 16.5819 15.7031 16.3485 15.2025L12.9676 7.95204C12.7888 7.56874 12.3981 7.35207 12.0001 7.37636ZM13.1147 12.9999H10.8854L12.0001 10.6095L13.1147 12.9999Z","fill":"currentColor"}}]})(props);
};
function CgFontSpacing (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M19 21H21V3H19L19 21Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5 21H3V3H5L5 21Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M9.46416 16.0479L9.95281 14.9999H14.0473L14.5359 16.0478C14.7693 16.5484 15.3643 16.7649 15.8649 16.5315C16.3654 16.2981 16.582 15.7031 16.3485 15.2026L12.9676 7.95213C12.7888 7.56877 12.398 7.35199 11.9999 7.37637C11.6019 7.35214 11.2112 7.5689 11.0325 7.95216L7.65155 15.2026C7.41814 15.7032 7.6347 16.2981 8.13524 16.5315C8.63578 16.7649 9.23076 16.5484 9.46416 16.0479ZM12.0001 10.6096L10.8854 12.9999H13.1147L12.0001 10.6096Z","fill":"currentColor"}}]})(props);
};
function CgFormatBold (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12.946 10.7833L11.2754 12.209L13.4476 12.533C14.8919 12.7485 16 13.9957 16 15.5C16 13.8431 14.6569 12.5 13 12.5H9H8V11.5H9H11C12.6283 11.5 13.9536 10.2028 13.9988 8.58539C13.9743 9.4647 13.5724 10.2488 12.946 10.7833Z","stroke":"currentColor","strokeWidth":"2"}}]})(props);
};
function CgFormatCenter (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M4 13C3.44772 13 3 13.4477 3 14C3 14.5523 3.44772 15 4 15H20C20.5523 15 21 14.5523 21 14C21 13.4477 20.5523 13 20 13H4Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M6 10C6 9.44772 6.44772 9 7 9H17C17.5523 9 18 9.44772 18 10C18 10.5523 17.5523 11 17 11H7C6.44772 11 6 10.5523 6 10Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7 17C6.44772 17 6 17.4477 6 18C6 18.5523 6.44772 19 7 19H17C17.5523 19 18 18.5523 18 18C18 17.4477 17.5523 17 17 17H7Z","fill":"currentColor"}}]})(props);
};
function CgFormatColor (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12.9479 3.20946C12.7721 2.83236 12.391 2.61645 11.9997 2.63269C11.6086 2.61666 11.2278 2.83255 11.0521 3.20948L5.1354 15.8978C4.90199 16.3983 5.11855 16.9933 5.61909 17.2267C6.11963 17.4601 6.71461 17.2436 6.94801 16.743L8.39869 13.632H15.6013L17.052 16.743C17.2854 17.2435 17.8804 17.4601 18.3809 17.2267C18.8814 16.9933 19.098 16.3983 18.8646 15.8978L12.9479 3.20946ZM14.6687 11.632L12 5.909L9.33131 11.632H14.6687Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M6 19.3682C5.44772 19.3682 5 19.816 5 20.3682C5 20.9205 5.44772 21.3682 6 21.3682H18C18.5523 21.3682 19 20.9205 19 20.3682C19 19.816 18.5523 19.3682 18 19.3682H6Z","fill":"currentColor"}}]})(props);
};
function CgFormatHeading (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M6 19V5H8V11H16V5H18V19H16V13H8V19H6Z","fill":"currentColor"}}]})(props);
};
function CgFormatIndentDecrease (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M20 7H4V5H20V7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M20 11H12V9H20V11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12 15H20V13H12V15Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M9 9L4 12L9 15V9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M4 17V19H20V17H4Z","fill":"currentColor"}}]})(props);
};
function CgFormatIndentIncrease (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M20 7H4V5H20V7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M20 11H12V9H20V11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12 15H20V13H12V15Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M4 15L9 12L4 9V15Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M4 17V19H20V17H4Z","fill":"currentColor"}}]})(props);
};
function CgFormatItalic (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M11.4903 5.45801H17.4903L16.7788 7.32716H14.7788L11.2212 16.6729H13.2212L12.5097 18.5421H6.5097L7.22122 16.6729H9.22122L12.7788 7.32716H10.7788L11.4903 5.45801Z","fill":"currentColor"}}]})(props);
};
function CgFormatJustify (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M4 9C3.44772 9 3 9.44772 3 10C3 10.5523 3.44772 11 4 11H20C20.5523 11 21 10.5523 21 10C21 9.44772 20.5523 9 20 9H4Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M3 14C3 13.4477 3.44772 13 4 13H20C20.5523 13 21 13.4477 21 14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18C21 17.4477 20.5523 17 20 17H4Z","fill":"currentColor"}}]})(props);
};
function CgFormatLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M4 9C3.44772 9 3 9.44772 3 10C3 10.5523 3.44772 11 4 11H12C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9H4Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M3 14C3 13.4477 3.44772 13 4 13H20C20.5523 13 21 13.4477 21 14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H12C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17H4Z","fill":"currentColor"}}]})(props);
};
function CgFormatLineHeight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M5.09668 6.99707H7.17358L4.17358 3.99707L1.17358 6.99707H3.09668V17.0031H1.15881L4.15881 20.0031L7.15881 17.0031H5.09668V6.99707Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M22.8412 7H8.84119V5H22.8412V7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M22.8412 11H8.84119V9H22.8412V11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M8.84119 15H22.8412V13H8.84119V15Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M22.8412 19H8.84119V17H22.8412V19Z","fill":"currentColor"}}]})(props);
};
function CgFormatRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M20 5C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6C3 5.44772 3.44772 5 4 5H20Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M20 9C20.5523 9 21 9.44772 21 10C21 10.5523 20.5523 11 20 11H12C11.4477 11 11 10.5523 11 10C11 9.44772 11.4477 9 12 9H20Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M21 14C21 13.4477 20.5523 13 20 13H4C3.44772 13 3 13.4477 3 14C3 14.5523 3.44772 15 4 15H20C20.5523 15 21 14.5523 21 14Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M20 17C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H12C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17H20Z","fill":"currentColor"}}]})(props);
};
function CgFormatSeparator (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"g","attr":{"opacity":"0.5"},"child":[{"tag":"path","attr":{"d":"M16 5C16.5523 5 17 4.55229 17 4C17 3.44772 16.5523 3 16 3H8C7.44771 3 7 3.44772 7 4C7 4.55228 7.44771 5 8 5L16 5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16 7C16.5523 7 17 7.44772 17 8C17 8.55229 16.5523 9 16 9H8C7.44771 9 7 8.55229 7 8C7 7.44772 7.44771 7 8 7H16Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M17 12C17 12.5523 16.5523 13 16 13L8 13C7.44771 13 7 12.5523 7 12C7 11.4477 7.44771 11 8 11L16 11C16.5523 11 17 11.4477 17 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16 21C16.5523 21 17 20.5523 17 20C17 19.4477 16.5523 19 16 19L8 19C7.44771 19 7 19.4477 7 20C7 20.5523 7.44771 21 8 21H16Z","fill":"currentColor"}}]},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M21 16C21 16.5523 20.5523 17 20 17L4 17C3.44772 17 3 16.5523 3 16C3 15.4477 3.44772 15 4 15L20 15C20.5523 15 21 15.4477 21 16Z","fill":"currentColor"}}]})(props);
};
function CgFormatSlash (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M14.526 6.10576C15.0265 6.33917 15.2667 6.88343 15.0625 7.3214L9.88541 18.4237C9.68118 18.8616 9.10985 19.0275 8.60931 18.7941C8.10877 18.5607 7.86857 18.0164 8.0728 17.5784L13.2499 6.47616C13.4541 6.03819 14.0254 5.87235 14.526 6.10576Z","fill":"currentColor"}}]})(props);
};
function CgFormatStrike (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M13 7H17V5H7V7H11V10H13V7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11 19V14H13V19H11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5 13H19V11H5V13Z","fill":"currentColor"}}]})(props);
};
function CgFormatText (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M6.5 3H3V6.5H4V4H6.5V3Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M8.5 4V3H11V4H8.5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M13 4H15.5V3H13V4Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M17.5 3V4H20V6.5H21V3H17.5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M21 8.5H20V11H21V8.5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M21 13H20V15.5H21V13Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M21 17.5H20V20H17.5V21H21V17.5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15.5 21V20H13V21H15.5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11 21V20H8.5V21H11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M6.5 21V20H4V17.5H3V21H6.5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M3 15.5H4V13H3V15.5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M3 11H4V8.5H3V11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11 9.5H7V7.5H17V9.5H13V16.5H11V9.5Z","fill":"currentColor"}}]})(props);
};
function CgFormatUnderline (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M6 10V4H8V10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10V4H18V10C18 13.3137 15.3137 16 12 16C8.68629 16 6 13.3137 6 10Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7 18C6.44772 18 6 18.4477 6 19C6 19.5523 6.44771 20 7 20H17C17.5523 20 18 19.5523 18 19C18 18.4477 17.5523 18 17 18H7Z","fill":"currentColor"}}]})(props);
};
function CgFormatUppercase (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M13 9H10V17H8V9H5V7H13V9ZM18 13H16V17H14V13H12V11H18V13Z","fill":"currentColor"}}]})(props);
};
function CgFramer (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12 21L12 9L6 9L6 15L12 21Z","fill":"currentColor","fillOpacity":"0.5"}},{"tag":"path","attr":{"d":"M18 9V3H6L12 9H6V15H18L12 9H18Z","fill":"currentColor"}}]})(props);
};
function CgGames (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M15.4695 11.2929C15.0789 10.9024 14.4458 10.9024 14.0553 11.2929C13.6647 11.6834 13.6647 12.3166 14.0553 12.7071C14.4458 13.0976 15.0789 13.0976 15.4695 12.7071C15.86 12.3166 15.86 11.6834 15.4695 11.2929Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16.1766 9.17156C16.5671 8.78103 17.2003 8.78103 17.5908 9.17156C17.9813 9.56208 17.9813 10.1952 17.5908 10.5858C17.2003 10.9763 16.5671 10.9763 16.1766 10.5858C15.7861 10.1952 15.7861 9.56208 16.1766 9.17156Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M19.7121 11.2929C19.3216 10.9024 18.6885 10.9024 18.2979 11.2929C17.9074 11.6834 17.9074 12.3166 18.2979 12.7071C18.6885 13.0976 19.3216 13.0976 19.7121 12.7071C20.1027 12.3166 20.1027 11.6834 19.7121 11.2929Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16.1766 13.4142C16.5671 13.0237 17.2003 13.0237 17.5908 13.4142C17.9813 13.8048 17.9813 14.4379 17.5908 14.8284C17.2003 15.219 16.5671 15.219 16.1766 14.8284C15.7861 14.4379 15.7861 13.8048 16.1766 13.4142Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M6 13H4V11H6V9H8V11H10V13H8V15H6V13Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M7 5C3.13401 5 0 8.13401 0 12C0 15.866 3.13401 19 7 19H17C20.866 19 24 15.866 24 12C24 8.13401 20.866 5 17 5H7ZM17 7H7C4.23858 7 2 9.23858 2 12C2 14.7614 4.23858 17 7 17H17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7Z","fill":"currentColor"}}]})(props);
};
function CgGenderFemale (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 3C9.23858 3 7 5.23858 7 8C7 10.419 8.71776 12.4367 11 12.9V15H8V17H11V21H13V17H16V15H13V12.9C15.2822 12.4367 17 10.419 17 8C17 5.23858 14.7614 3 12 3ZM9 8C9 9.65685 10.3431 11 12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8Z","fill":"currentColor"}}]})(props);
};
function CgGenderMale (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12.1888 7L12.1909 5L19.1909 5.00746L19.1834 12.0075L17.1834 12.0053L17.1873 8.41678L14.143 11.4611C15.4612 13.4063 15.2587 16.0743 13.5355 17.7975C11.5829 19.7501 8.41709 19.7501 6.46447 17.7975C4.51184 15.8449 4.51184 12.6791 6.46447 10.7264C8.16216 9.02873 10.777 8.80709 12.7141 10.0615L15.7718 7.00382L12.1888 7ZM7.87868 12.1406C9.05025 10.9691 10.9497 10.9691 12.1213 12.1406C13.2929 13.3122 13.2929 15.2117 12.1213 16.3833C10.9497 17.5549 9.05025 17.5549 7.87868 16.3833C6.70711 15.2117 6.70711 13.3122 7.87868 12.1406Z","fill":"currentColor"}}]})(props);
};
function CgGhostCharacter (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M10.9759 9C10.9759 9.55228 10.5282 10 9.97589 10C9.42361 10 8.97589 9.55228 8.97589 9C8.97589 8.44771 9.42361 8 9.97589 8C10.5282 8 10.9759 8.44771 10.9759 9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M13.9712 10C14.5235 10 14.9712 9.55228 14.9712 9C14.9712 8.44771 14.5235 8 13.9712 8C13.4189 8 12.9712 8.44771 12.9712 9C12.9712 9.55228 13.4189 10 13.9712 10Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M19 20.9999V10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10V21L7.82846 21L9.24264 19.5858L10.6569 21L13.3433 21L14.7574 19.5858L16.1717 21L19 20.9999ZM17 10C17 7.23858 14.7614 5 12 5C9.23858 5 7 7.23858 7 10V19L9.24264 16.7573L12 19.5147L14.7574 16.7573L17 18.9999V10Z","fill":"currentColor"}}]})(props);
};
function CgGhost (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M3 4H15V8H3V4Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M21 8H17V4H21V8Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M3 10H21V14H3V10Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11 16H3V20H11V16Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M13 16V20H21V16H13Z","fill":"currentColor"}}]})(props);
};
function CgGift (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M17.5354 2.87868C16.3638 1.70711 14.4644 1.70711 13.2928 2.87868L11.8786 4.29289C11.8183 4.35317 11.7611 4.41538 11.707 4.47931C11.653 4.41539 11.5958 4.3532 11.5355 4.29293L10.1213 2.87871C8.94975 1.70714 7.05025 1.70714 5.87868 2.87871C4.70711 4.05029 4.70711 5.94978 5.87868 7.12136L6.75732 8H1V14H3V22H21V14H23V8H16.6567L17.5354 7.12132C18.707 5.94975 18.707 4.05025 17.5354 2.87868ZM14.707 7.12132L16.1212 5.70711C16.5117 5.31658 16.5117 4.68342 16.1212 4.29289C15.7307 3.90237 15.0975 3.90237 14.707 4.29289L13.2928 5.70711C12.9023 6.09763 12.9023 6.7308 13.2928 7.12132C13.6833 7.51184 14.3165 7.51184 14.707 7.12132ZM10.1213 5.70714L8.70711 4.29293C8.31658 3.9024 7.68342 3.9024 7.29289 4.29293C6.90237 4.68345 6.90237 5.31662 7.29289 5.70714L8.70711 7.12136C9.09763 7.51188 9.7308 7.51188 10.1213 7.12136C10.5118 6.73083 10.5118 6.09767 10.1213 5.70714ZM21 10V12H3V10H21ZM12.9167 14H19V20H12.9167V14ZM11.0834 14V20H5V14H11.0834Z","fill":"currentColor"}}]})(props);
};
function CgGirl (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M10 12C10 12.5523 9.55228 13 9 13C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11C9.55228 11 10 11.4477 10 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15 13C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11C14.4477 11 14 11.4477 14 12C14 12.5523 14.4477 13 15 13Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12.0244 2.00003L12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.74235 17.9425 2.43237 12.788 2.03059L12.7886 2.0282C12.5329 2.00891 12.278 1.99961 12.0244 2.00003ZM12 20C16.4183 20 20 16.4183 20 12C20 11.3014 19.9105 10.6237 19.7422 9.97775C16.1597 10.2313 12.7359 8.52461 10.7605 5.60246C9.31322 7.07886 7.2982 7.99666 5.06879 8.00253C4.38902 9.17866 4 10.5439 4 12C4 16.4183 7.58172 20 12 20ZM11.9785 4.00003L12.0236 4.00003L12 4L11.9785 4.00003Z","fill":"currentColor"}}]})(props);
};
function CgGitBranch (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M9 3C7.89543 3 7 3.89543 7 5C7 5.74028 7.4022 6.38663 8 6.73244V17.2676C7.4022 17.6134 7 18.2597 7 19C7 20.1046 7.89543 21 9 21C9.74028 21 10.3866 20.5978 10.7324 20H11.9585C14.1676 20 15.9585 18.2091 15.9585 16V14.7324C16.5563 14.3866 16.9585 13.7403 16.9585 13C16.9585 11.8954 16.0631 11 14.9585 11C13.8539 11 12.9585 11.8954 12.9585 13C12.9585 13.7403 13.3607 14.3866 13.9585 14.7324V16C13.9585 17.1046 13.0631 18 11.9585 18H10.7324C10.5568 17.6964 10.3036 17.4432 10 17.2676V6.73244C10.5978 6.38663 11 5.74028 11 5C11 3.89543 10.1046 3 9 3Z","fill":"currentColor"}}]})(props);
};
function CgGitCommit (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M11 4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4V9.17071C14.1652 9.58254 15 10.6938 15 12C15 13.3062 14.1652 14.4175 13 14.8293V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V14.8293C9.83481 14.4175 9 13.3062 9 12C9 10.6938 9.83481 9.58254 11 9.17071V4ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z","fill":"currentColor"}}]})(props);
};
function CgGitFork (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M7 5C7 3.89543 7.89543 3 9 3C10.1046 3 11 3.89543 11 5C11 5.74028 10.5978 6.38663 10 6.73244V14.0396H11.7915C12.8961 14.0396 13.7915 13.1441 13.7915 12.0396V10.7838C13.1823 10.4411 12.7708 9.78837 12.7708 9.03955C12.7708 7.93498 13.6662 7.03955 14.7708 7.03955C15.8753 7.03955 16.7708 7.93498 16.7708 9.03955C16.7708 9.77123 16.3778 10.4111 15.7915 10.7598V12.0396C15.7915 14.2487 14.0006 16.0396 11.7915 16.0396H10V17.2676C10.5978 17.6134 11 18.2597 11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 18.2597 7.4022 17.6134 8 17.2676V6.73244C7.4022 6.38663 7 5.74028 7 5Z","fill":"currentColor"}}]})(props);
};
function CgGitPull (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M7 5C7 3.89543 7.89543 3 9 3C10.1046 3 11 3.89543 11 5C11 5.34168 10.9143 5.66336 10.7633 5.9447H11.3438C13.5529 5.9447 15.3438 7.73556 15.3438 9.9447V11.2244C15.9301 11.5731 16.323 12.213 16.323 12.9447C16.323 14.0493 15.4276 14.9447 14.323 14.9447C13.2184 14.9447 12.323 14.0493 12.323 12.9447C12.323 12.1959 12.7345 11.5432 13.3438 11.2004V9.9447C13.3438 8.84013 12.4483 7.9447 11.3438 7.9447H10V17.2676C10.5978 17.6134 11 18.2597 11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 18.2597 7.4022 17.6134 8 17.2676V6.73244C7.4022 6.38663 7 5.74028 7 5Z","fill":"currentColor"}}]})(props);
};
function CgGitter (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M5 1.5H7V14.5H5V1.5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M9 4.5H11V22.5H9V4.5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15 4.5H13V22.5H15V4.5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M17 4.5H19V14.5H17V4.5Z","fill":"currentColor"}}]})(props);
};
function CgGlassAlt (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M5 2H19L17.3602 18.398C17.1557 20.4428 15.4351 22 13.38 22H10.62C8.56494 22 6.84428 20.4428 6.6398 18.398L5 2ZM7.50998 7L7.20998 4H16.79L16.49 7H7.50998ZM7.70998 9L8.62988 18.199C8.73212 19.2214 9.59245 20 10.62 20H13.38C14.4076 20 15.2679 19.2214 15.3701 18.199L16.29 9H7.70998Z","fill":"currentColor"}}]})(props);
};
function CgGlass (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M17 10C17 12.419 15.2822 14.4367 13 14.9V17H15V19H9V17H11V14.9C8.71776 14.4367 7 12.419 7 10V5H17V10ZM15 7H9V10C9 11.6569 10.3431 13 12 13C13.6569 13 15 11.6569 15 10V7Z","fill":"currentColor"}}]})(props);
};
function CgGlobeAlt (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM14.8055 18.4151C17.1228 17.4003 18.7847 15.1667 18.9806 12.525C18.1577 12.9738 17.12 13.3418 15.9371 13.598C15.7882 15.4676 15.3827 17.1371 14.8055 18.4151ZM9.1945 5.58487C7.24725 6.43766 5.76275 8.15106 5.22208 10.244C5.4537 10.4638 5.84813 10.7341 6.44832 11.0008C6.89715 11.2003 7.42053 11.3798 8.00537 11.5297C8.05853 9.20582 8.50349 7.11489 9.1945 5.58487ZM10.1006 13.9108C10.2573 15.3675 10.5852 16.6202 10.9992 17.5517C11.2932 18.2133 11.5916 18.6248 11.8218 18.8439C11.9037 18.9219 11.9629 18.9634 12 18.9848C12.0371 18.9634 12.0963 18.9219 12.1782 18.8439C12.4084 18.6248 12.7068 18.2133 13.0008 17.5517C13.4148 16.6202 13.7427 15.3675 13.8994 13.9108C13.2871 13.9692 12.6516 14 12 14C11.3484 14 10.7129 13.9692 10.1006 13.9108ZM8.06286 13.598C8.21176 15.4676 8.61729 17.1371 9.1945 18.4151C6.8772 17.4003 5.21525 15.1666 5.01939 12.525C5.84231 12.9738 6.88001 13.3418 8.06286 13.598ZM13.9997 11.8896C13.369 11.9609 12.6993 12 12 12C11.3008 12 10.631 11.9609 10.0003 11.8896C10.0135 9.66408 10.4229 7.74504 10.9992 6.44832C11.2932 5.78673 11.5916 5.37516 11.8218 5.15605C11.9037 5.07812 11.9629 5.03659 12 5.01516C12.0371 5.03659 12.0963 5.07812 12.1782 5.15605C12.4084 5.37516 12.7068 5.78673 13.0008 6.44832C13.5771 7.74504 13.9865 9.66408 13.9997 11.8896ZM15.9946 11.5297C15.9415 9.20582 15.4965 7.11489 14.8055 5.58487C16.7528 6.43766 18.2373 8.15107 18.7779 10.244C18.5463 10.4638 18.1519 10.7341 17.5517 11.0008C17.1029 11.2003 16.5795 11.3798 15.9946 11.5297Z","fill":"currentColor"}}]})(props);
};
function CgGlobe (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M6.85327 8C6.85327 5.23858 9.09185 3 11.8533 3C14.6147 3 16.8533 5.23858 16.8533 8C16.8533 10.7614 14.6147 13 11.8533 13C9.09185 13 6.85327 10.7614 6.85327 8ZM11.8533 11C10.1964 11 8.85327 9.65685 8.85327 8C8.85327 6.34315 10.1964 5 11.8533 5C13.5101 5 14.8533 6.34315 14.8533 8C14.8533 9.65685 13.5101 11 11.8533 11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5 12.1294C6.25216 14.2031 8.4189 15.6624 10.9414 15.9486V18H8.85327V20H14.8533V18H12.9414V15.9266C16.8449 15.3958 19.8532 12.0492 19.8532 8.00001C19.8532 6.43638 19.4046 4.97752 18.6291 3.74512L16.9253 4.79326C17.513 5.72084 17.8532 6.82069 17.8532 8.00001C17.8532 11.3137 15.167 14 11.8532 14C9.66611 14 7.75231 12.8298 6.70381 11.0813L5 12.1294Z","fill":"currentColor"}}]})(props);
};
function CgGoogleTasks (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M16.7679 5.71447C17.4779 4.86832 18.7394 4.75795 19.5856 5.46796C20.4317 6.17796 20.5421 7.43947 19.8321 8.28562L10.833 19.0102C10.123 19.8564 8.86153 19.9668 8.01538 19.2568C7.16923 18.5468 7.05886 17.2852 7.76886 16.4391L16.7679 5.71447Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M3 12.7396C3 11.6351 3.89543 10.7396 5 10.7396C6.10457 10.7396 7 11.6351 7 12.7396C7 13.8442 6.10457 14.7396 5 14.7396C3.89543 14.7396 3 13.8442 3 12.7396Z","fill":"currentColor"}}]})(props);
};
function CgGoogle (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M6 12C6 15.3137 8.68629 18 12 18C14.6124 18 16.8349 16.3304 17.6586 14H12V10H21.8047V14H21.8C20.8734 18.5645 16.8379 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.445 2 18.4831 3.742 20.2815 6.39318L17.0039 8.68815C15.9296 7.06812 14.0895 6 12 6C8.68629 6 6 8.68629 6 12Z","fill":"currentColor"}}]})(props);
};
function CgGym (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M20.2739 9.86883L16.8325 4.95392L18.4708 3.80676L21.9122 8.72167L20.2739 9.86883Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M18.3901 12.4086L16.6694 9.95121L8.47783 15.687L10.1985 18.1444L8.56023 19.2916L3.97162 12.7383L5.60992 11.5912L7.33068 14.0487L15.5222 8.31291L13.8015 5.8554L15.4398 4.70825L20.0284 11.2615L18.3901 12.4086Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M20.7651 7.08331L22.4034 5.93616L21.2562 4.29785L19.6179 5.445L20.7651 7.08331Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7.16753 19.046L3.72607 14.131L2.08777 15.2782L5.52923 20.1931L7.16753 19.046Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M4.38208 18.5549L2.74377 19.702L1.59662 18.0637L3.23492 16.9166L4.38208 18.5549Z","fill":"currentColor"}}]})(props);
};
function CgHashtag (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M8 4V8H4V10H8V14H4V16H8V20H10V16H14V20H16V16H20V14H16V10H20V8H16V4H14V8H10V4H8ZM14 14V10H10V14H14Z","fill":"currentColor"}}]})(props);
};
function CgHeadset (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z","fill":"currentColor"}}]})(props);
};
function CgHeart (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12.0122 5.57169L10.9252 4.48469C8.77734 2.33681 5.29493 2.33681 3.14705 4.48469C0.999162 6.63258 0.999162 10.115 3.14705 12.2629L11.9859 21.1017L11.9877 21.0999L12.014 21.1262L20.8528 12.2874C23.0007 10.1395 23.0007 6.65711 20.8528 4.50923C18.705 2.36134 15.2226 2.36134 13.0747 4.50923L12.0122 5.57169ZM11.9877 18.2715L16.9239 13.3352L18.3747 11.9342L18.3762 11.9356L19.4386 10.8732C20.8055 9.50635 20.8055 7.29028 19.4386 5.92344C18.0718 4.55661 15.8557 4.55661 14.4889 5.92344L12.0133 8.39904L12.006 8.3918L12.005 8.39287L9.51101 5.89891C8.14417 4.53207 5.92809 4.53207 4.56126 5.89891C3.19442 7.26574 3.19442 9.48182 4.56126 10.8487L7.10068 13.3881L7.10248 13.3863L11.9877 18.2715Z","fill":"currentColor"}}]})(props);
};
function CgHello (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M17.5 12C17.5 13.576 16.8371 14.9972 15.7749 16C14.7899 16.9299 13.4615 17.5 12 17.5C10.5385 17.5 9.21007 16.9299 8.22506 16C7.16289 14.9972 6.5 13.576 6.5 12H17.5Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 7C1 3.68629 3.68629 1 7 1H17C20.3137 1 23 3.68629 23 7V17C23 20.3137 20.3137 23 17 23H1V7ZM3.75 12C3.75 7.44365 7.44365 3.75 12 3.75C16.5563 3.75 20.25 7.44365 20.25 12C20.25 16.5563 16.5563 20.25 12 20.25C7.44365 20.25 3.75 16.5563 3.75 12Z","fill":"currentColor"}}]})(props);
};
function CgHomeAlt (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M6 22.8787C4.34315 22.8787 3 21.5355 3 19.8787V9.87866C3 9.84477 3.00169 9.81126 3.00498 9.77823H3C3 9.20227 3.2288 8.64989 3.63607 8.24262L9.87868 2.00002C11.0502 0.828445 12.9497 0.828445 14.1213 2.00002L20.3639 8.24264C20.7712 8.6499 21 9.20227 21 9.77823H20.995C20.9983 9.81126 21 9.84477 21 9.87866V19.8787C21 21.5355 19.6569 22.8787 18 22.8787H6ZM12.7071 3.41423L19 9.70713V19.8787C19 20.4309 18.5523 20.8787 18 20.8787H15V15.8787C15 14.2218 13.6569 12.8787 12 12.8787C10.3431 12.8787 9 14.2218 9 15.8787V20.8787H6C5.44772 20.8787 5 20.4309 5 19.8787V9.7072L11.2929 3.41423C11.6834 3.02371 12.3166 3.02371 12.7071 3.41423Z","fill":"currentColor"}}]})(props);
};
function CgHomeScreen (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M10 5C10 5.55228 9.55228 6 9 6C8.44771 6 8 5.55228 8 5C8 4.44772 8.44771 4 9 4C9.55228 4 10 4.44772 10 5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M9 9C9.55228 9 10 8.55228 10 8C10 7.44772 9.55228 7 9 7C8.44771 7 8 7.44772 8 8C8 8.55228 8.44771 9 9 9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M10 19C10 19.5523 9.55228 20 9 20C8.44771 20 8 19.5523 8 19C8 18.4477 8.44771 18 9 18C9.55228 18 10 18.4477 10 19Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M9 12C9.55228 12 10 11.5523 10 11C10 10.4477 9.55228 10 9 10C8.44771 10 8 10.4477 8 11C8 11.5523 8.44771 12 9 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M13 5C13 5.55228 12.5523 6 12 6C11.4477 6 11 5.55228 11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M13 19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19C11 18.4477 11.4477 18 12 18C12.5523 18 13 18.4477 13 19Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15 6C15.5523 6 16 5.55228 16 5C16 4.44772 15.5523 4 15 4C14.4477 4 14 4.44772 14 5C14 5.55228 14.4477 6 15 6Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16 8C16 8.55228 15.5523 9 15 9C14.4477 9 14 8.55228 14 8C14 7.44772 14.4477 7 15 7C15.5523 7 16 7.44772 16 8Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15 20C15.5523 20 16 19.5523 16 19C16 18.4477 15.5523 18 15 18C14.4477 18 14 18.4477 14 19C14 19.5523 14.4477 20 15 20Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M8 1C6.34315 1 5 2.34315 5 4V20C5 21.6569 6.34315 23 8 23H16C17.6569 23 19 21.6569 19 20V4C19 2.34315 17.6569 1 16 1H8ZM16 3H8C7.44771 3 7 3.44772 7 4V20C7 20.5523 7.44772 21 8 21H16C16.5523 21 17 20.5523 17 20V4C17 3.44772 16.5523 3 16 3Z","fill":"currentColor"}}]})(props);
};
function CgHome (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M21 8.77217L14.0208 1.79299C12.8492 0.621414 10.9497 0.621413 9.77817 1.79299L3 8.57116V23.0858H10V17.0858C10 15.9812 10.8954 15.0858 12 15.0858C13.1046 15.0858 14 15.9812 14 17.0858V23.0858H21V8.77217ZM11.1924 3.2072L5 9.39959V21.0858H8V17.0858C8 14.8767 9.79086 13.0858 12 13.0858C14.2091 13.0858 16 14.8767 16 17.0858V21.0858H19V9.6006L12.6066 3.2072C12.2161 2.81668 11.5829 2.81668 11.1924 3.2072Z","fill":"currentColor"}}]})(props);
};
function CgIcecream (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M15 17H19V8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8V17H9V20C9 21.6569 10.3431 23 12 23C13.6569 23 15 21.6569 15 20V17ZM17 15V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V15H11V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V15H17Z","fill":"currentColor"}}]})(props);
};
function CgIfDesign (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M10 5H14V19H10V5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5 19V10H9V19H5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15 5H19V9H15V5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M19 10H15V14H19V10Z","fill":"currentColor"}}]})(props);
};
function CgImage (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M7 7C5.34315 7 4 8.34315 4 10C4 11.6569 5.34315 13 7 13C8.65685 13 10 11.6569 10 10C10 8.34315 8.65685 7 7 7ZM6 10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3 3C1.34315 3 0 4.34315 0 6V18C0 19.6569 1.34315 21 3 21H21C22.6569 21 24 19.6569 24 18V6C24 4.34315 22.6569 3 21 3H3ZM21 5H3C2.44772 5 2 5.44772 2 6V18C2 18.5523 2.44772 19 3 19H7.31374L14.1924 12.1214C15.364 10.9498 17.2635 10.9498 18.435 12.1214L22 15.6863V6C22 5.44772 21.5523 5 21 5ZM21 19H10.1422L15.6066 13.5356C15.9971 13.145 16.6303 13.145 17.0208 13.5356L21.907 18.4217C21.7479 18.7633 21.4016 19 21 19Z","fill":"currentColor"}}]})(props);
};
function CgImport (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M5 9.98193V19.9819H19V9.98193H15V7.98193H21V21.9819H3V7.98193H9V9.98193H5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M13.0001 2H11.0001V14.0531L8.46451 11.5175L7.05029 12.9317L12 17.8815L16.9498 12.9317L15.5356 11.5175L13.0001 14.053V2Z","fill":"currentColor"}}]})(props);
};
function CgInbox (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V20C22 21.1046 21.1046 22 20 22H8.1477C8.09893 22.0036 8.04968 22.0054 8 22.0054H4C2.89543 22.0054 2 21.1099 2 20.0054V5ZM5 4H19C19.5523 4 20 4.44771 20 5V14H16C14.8954 14 14 14.8954 14 16V17H10V16.0054C10 14.9008 9.10457 14.0054 8 14.0054H4V5C4 4.44772 4.44771 4 5 4Z","fill":"currentColor"}}]})(props);
};
function CgIndieHackers (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M4 6H7V18H4V6Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M10 6H13V10.5H17V6H20V18H17V13.5H13V18H10V6Z","fill":"currentColor"}}]})(props);
};
function CgInfinity (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M8.12132 9.87868L10.2044 11.9617L10.2106 11.9555L11.6631 13.408L11.6693 13.4142L13.7907 15.5355C15.7433 17.4882 18.9091 17.4882 20.8617 15.5355C22.8144 13.5829 22.8144 10.4171 20.8617 8.46447C18.9091 6.51184 15.7433 6.51184 13.7907 8.46447L13.0773 9.17786L14.4915 10.5921L15.2049 9.87868C16.3764 8.70711 18.2759 8.70711 19.4475 9.87868C20.6191 11.0503 20.6191 12.9497 19.4475 14.1213C18.2759 15.2929 16.3764 15.2929 15.2049 14.1213L13.1326 12.0491L13.1263 12.0554L9.53553 8.46447C7.58291 6.51184 4.41709 6.51184 2.46447 8.46447C0.511845 10.4171 0.511845 13.5829 2.46447 15.5355C4.41709 17.4882 7.58291 17.4882 9.53553 15.5355L10.2488 14.8222L8.83463 13.408L8.12132 14.1213C6.94975 15.2929 5.05025 15.2929 3.87868 14.1213C2.70711 12.9497 2.70711 11.0503 3.87868 9.87868C5.05025 8.70711 6.94975 8.70711 8.12132 9.87868Z","fill":"currentColor"}}]})(props);
};
function CgInfo (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M11 10.9794C11 10.4271 11.4477 9.97937 12 9.97937C12.5523 9.97937 13 10.4271 13 10.9794V16.9794C13 17.5317 12.5523 17.9794 12 17.9794C11.4477 17.9794 11 17.5317 11 16.9794V10.9794Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12 6.05115C11.4477 6.05115 11 6.49886 11 7.05115C11 7.60343 11.4477 8.05115 12 8.05115C12.5523 8.05115 13 7.60343 13 7.05115C13 6.49886 12.5523 6.05115 12 6.05115Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z","fill":"currentColor"}}]})(props);
};
function CgInpicture (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M20 12H14V17H20V12Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 6C1 4.89543 1.89543 4 3 4H21C22.1046 4 23 4.89543 23 6V18C23 19.1046 22.1046 20 21 20H3C1.89543 20 1 19.1046 1 18V6ZM3 6H21V18H3L3 6Z","fill":"currentColor"}}]})(props);
};
function CgInsertAfterO (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M9 8C8.44772 8 8 8.44772 8 9C8 9.55229 8.44772 10 9 10H11V12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12V10H15C15.5523 10 16 9.55229 16 9C16 8.44772 15.5523 8 15 8H13V6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V8H9Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M4 9C4 4.58172 7.58172 1 12 1C16.4183 1 20 4.58172 20 9C20 13.4183 16.4183 17 12 17C7.58172 17 4 13.4183 4 9ZM12 15C8.68629 15 6 12.3137 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 12.3137 15.3137 15 12 15Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5 20C4.44772 20 4 20.4477 4 21C4 21.5523 4.44772 22 5 22H19C19.5523 22 20 21.5523 20 21C20 20.4477 19.5523 20 19 20H5Z","fill":"currentColor"}}]})(props);
};
function CgInsertAfterR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M9 8C8.44772 8 8 8.44772 8 9C8 9.55229 8.44772 10 9 10H11V12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12V10H15C15.5523 10 16 9.55229 16 9C16 8.44772 15.5523 8 15 8H13V6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V8H9Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M4 4C4 2.34315 5.34315 1 7 1H17C18.6569 1 20 2.34315 20 4V14C20 15.6569 18.6569 17 17 17H7C5.34315 17 4 15.6569 4 14V4ZM7 3H17C17.5523 3 18 3.44772 18 4V14C18 14.5523 17.5523 15 17 15H7C6.44772 15 6 14.5523 6 14V4C6 3.44772 6.44772 3 7 3Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5 20C4.44772 20 4 20.4477 4 21C4 21.5523 4.44772 22 5 22H19C19.5523 22 20 21.5523 20 21C20 20.4477 19.5523 20 19 20H5Z","fill":"currentColor"}}]})(props);
};
function CgInsertAfter (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12 4C12.5523 4 13 4.44772 13 5V8H16C16.5523 8 17 8.44772 17 9C17 9.55228 16.5523 10 16 10H13V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V10H8C7.44772 10 7 9.55228 7 9C7 8.44772 7.44772 8 8 8H11V5C11 4.44772 11.4477 4 12 4Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M3 19C3 18.4477 3.44772 18 4 18H20C20.5523 18 21 18.4477 21 19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19Z","fill":"currentColor"}}]})(props);
};
function CgInsertBeforeO (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M5 3C4.44772 3 4 2.55228 4 2C4 1.44772 4.44772 1 5 1H19C19.5523 1 20 1.44772 20 2C20 2.55228 19.5523 3 19 3H5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M9 15C8.44772 15 8 14.5523 8 14C8 13.4477 8.44772 13 9 13H11V11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11V13H15C15.5523 13 16 13.4477 16 14C16 14.5523 15.5523 15 15 15H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V15H9Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M4 14C4 18.4183 7.58172 22 12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 6 12 6C7.58172 6 4 9.58172 4 14ZM12 8C8.68629 8 6 10.6863 6 14C6 17.3137 8.68629 20 12 20C15.3137 20 18 17.3137 18 14C18 10.6863 15.3137 8 12 8Z","fill":"currentColor"}}]})(props);
};
function CgInsertBeforeR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M5 3C4.44772 3 4 2.55228 4 2C4 1.44772 4.44772 1 5 1H19C19.5523 1 20 1.44772 20 2C20 2.55228 19.5523 3 19 3H5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M9 15C8.44772 15 8 14.5523 8 14C8 13.4477 8.44772 13 9 13H11V11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11V13H15C15.5523 13 16 13.4477 16 14C16 14.5523 15.5523 15 15 15H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V15H9Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M4 19C4 20.6569 5.34315 22 7 22H17C18.6569 22 20 20.6569 20 19V9C20 7.34315 18.6569 6 17 6H7C5.34315 6 4 7.34315 4 9V19ZM17 20C17.5523 20 18 19.5523 18 19V9C18 8.44772 17.5523 8 17 8H7C6.44772 8 6 8.44772 6 9V19C6 19.5523 6.44772 20 7 20H17Z","fill":"currentColor"}}]})(props);
};
function CgInsertBefore (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M3 5C3 5.55228 3.44772 6 4 6H20C20.5523 6 21 5.55228 21 5C21 4.44772 20.5523 4 20 4H4C3.44772 4 3 4.44772 3 5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12 20C12.5523 20 13 19.5523 13 19V16H16C16.5523 16 17 15.5523 17 15C17 14.4477 16.5523 14 16 14H13V11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11V14H8C7.44772 14 7 14.4477 7 15C7 15.5523 7.44772 16 8 16H11V19C11 19.5523 11.4477 20 12 20Z","fill":"currentColor"}}]})(props);
};
function CgInsights (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M15 8H19V20H5V10H9V4H15V8ZM13 6H11V18H13V6ZM15 10V18H17V10H15ZM9 12V18H7V12H9Z","fill":"currentColor"}}]})(props);
};
function CgInstagram (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z","fill":"currentColor"}}]})(props);
};
function CgInternal (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M20.7084 4.41165L10.4586 14.6986H14.0488V16.6986H7.04883V9.69861H9.04883V13.2799L19.2916 3L20.7084 4.41165Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11 4.70581V6.70581H5V18.7058H17V12.7058H19V20.7058H3V4.70581H11Z","fill":"currentColor"}}]})(props);
};
function CgKey (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M6 8C4.34315 8 3 9.34315 3 11V13C3 14.6569 4.34315 16 6 16C7.65685 16 9 14.6569 9 13H15V15H17V13H18V15H20V11H9C9 9.34315 7.65685 8 6 8ZM7 13V11C7 10.4477 6.55228 10 6 10C5.44772 10 5 10.4477 5 11V13C5 13.5523 5.44772 14 6 14C6.55228 14 7 13.5523 7 13Z","fill":"currentColor"}}]})(props);
};
function CgKeyboard (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M9 15C8.44772 15 8 15.4477 8 16C8 16.5523 8.44772 17 9 17H15C15.5523 17 16 16.5523 16 16C16 15.4477 15.5523 15 15 15H9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16 9C16.5523 9 17 8.55228 17 8C17 7.44772 16.5523 7 16 7C15.4477 7 15 7.44772 15 8C15 8.55228 15.4477 9 16 9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5Z","fill":"currentColor"}}]})(props);
};
function CgKeyhole (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M13 12.8293C14.1652 12.4175 15 11.3062 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.3062 9.83481 12.4175 11 12.8293V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V12.8293ZM11 10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z","fill":"currentColor"}}]})(props);
};
function CgLaptop (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3 6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V14C21 15.1046 20.1046 16 19 16H5C3.89543 16 3 15.1046 3 14V6ZM5 6H19V14H5V6Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M2 18C1.44772 18 1 18.4477 1 19C1 19.5523 1.44772 20 2 20H22C22.5523 20 23 19.5523 23 19C23 18.4477 22.5523 18 22 18H2Z","fill":"currentColor"}}]})(props);
};
function CgLastpass (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M21 6C20.4477 6 20 6.44771 20 7V17C20 17.5523 20.4477 18 21 18C21.5523 18 22 17.5523 22 17V7C22 6.44772 21.5523 6 21 6Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12 12C12 13.1046 11.1046 14 10 14C8.89543 14 8 13.1046 8 12C8 10.8954 8.89543 10 10 10C11.1046 10 12 10.8954 12 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16 14C17.1046 14 18 13.1046 18 12C18 10.8954 17.1046 10 16 10C14.8954 10 14 10.8954 14 12C14 13.1046 14.8954 14 16 14Z","fill":"currentColor"}}]})(props);
};
function CgLayoutGridSmall (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M7 7H9V9H7V7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11 7H13V9H11V7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M17 7H15V9H17V7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7 11H9V13H7V11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M13 11H11V13H13V11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15 11H17V13H15V11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M9 15H7V17H9V15Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11 15H13V17H11V15Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M17 15H15V17H17V15Z","fill":"currentColor"}}]})(props);
};
function CgLayoutGrid (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M11 7H7V11H11V7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11 13H7V17H11V13Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M13 13H17V17H13V13Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M17 7H13V11H17V7Z","fill":"currentColor"}}]})(props);
};
function CgLayoutList (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M9 7H7V9H9V7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7 13V11H9V13H7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7 15V17H9V15H7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11 15V17H17V15H11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M17 13V11H11V13H17Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M17 7V9H11V7H17Z","fill":"currentColor"}}]})(props);
};
function CgLayoutPin (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M16.9307 4.01587H14.7655C14.3582 2.84239 13.2428 2 11.9307 2C10.6185 2 9.50313 2.84239 9.09581 4.01587H6.93066C5.27381 4.01587 3.93066 5.35901 3.93066 7.01587V9.21205C2.80183 9.64283 2 10.7357 2 12.0159C2 13.296 2.80183 14.3889 3.93066 14.8197V17.0159C3.93066 18.6727 5.27381 20.0159 6.93066 20.0159H9.08467C9.48247 21.2064 10.6064 22.0645 11.9307 22.0645C13.255 22.0645 14.3789 21.2064 14.7767 20.0159H16.9307C18.5875 20.0159 19.9307 18.6727 19.9307 17.0159V14.8446C21.095 14.4322 21.929 13.3214 21.929 12.0159C21.929 10.7103 21.095 9.5995 19.9307 9.18718V7.01587C19.9307 5.35901 18.5875 4.01587 16.9307 4.01587ZM5.93066 14.8687V17.0159C5.93066 17.5682 6.37838 18.0159 6.93066 18.0159H9.11902C9.54426 16.8761 10.6427 16.0645 11.9307 16.0645C13.2187 16.0645 14.3171 16.8761 14.7423 18.0159H16.9307C17.4829 18.0159 17.9307 17.5682 17.9307 17.0159V14.8458C16.7646 14.4344 15.929 13.3227 15.929 12.0159C15.929 10.709 16.7646 9.59732 17.9307 9.18597V7.01587C17.9307 6.46358 17.4829 6.01587 16.9307 6.01587H14.7543C14.338 7.17276 13.2309 8 11.9307 8C10.6304 8 9.52331 7.17276 9.10703 6.01587H6.93066C6.37838 6.01587 5.93066 6.46358 5.93066 7.01587V9.16302C7.13193 9.55465 8 10.6839 8 12.0159C8 13.3479 7.13193 14.4771 5.93066 14.8687Z","fill":"currentColor"}}]})(props);
};
function CgLinear (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M3.03509 12.9431C3.24245 14.9227 4.10472 16.8468 5.62188 18.364C7.13904 19.8811 9.0631 20.7434 11.0428 20.9508L3.03509 12.9431Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M3 11.4938L12.4921 20.9858C13.2976 20.9407 14.0981 20.7879 14.8704 20.5273L3.4585 9.11548C3.19793 9.88771 3.0451 10.6883 3 11.4938Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M3.86722 8.10999L15.8758 20.1186C16.4988 19.8201 17.0946 19.4458 17.6493 18.9956L4.99021 6.33659C4.54006 6.89125 4.16573 7.487 3.86722 8.10999Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5.66301 5.59517C9.18091 2.12137 14.8488 2.135 18.3498 5.63604C21.8508 9.13708 21.8645 14.8049 18.3907 18.3228L5.66301 5.59517Z","fill":"currentColor"}}]})(props);
};
function CgLink (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z","fill":"currentColor"}}]})(props);
};
function CgListTree (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M9 1H1V9H9V6H11V20H15V23H23V15H15V18H13V6H15V9H23V1H15V4H9V1ZM21 3H17V7H21V3ZM17 17H21V21H17V17Z","fill":"currentColor"}}]})(props);
};
function CgList (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M20 4H4C3.44771 4 3 4.44772 3 5V19C3 19.5523 3.44772 20 4 20H20C20.5523 20 21 19.5523 21 19V5C21 4.44771 20.5523 4 20 4ZM4 2C2.34315 2 1 3.34315 1 5V19C1 20.6569 2.34315 22 4 22H20C21.6569 22 23 20.6569 23 19V5C23 3.34315 21.6569 2 20 2H4ZM6 7H8V9H6V7ZM11 7C10.4477 7 10 7.44772 10 8C10 8.55228 10.4477 9 11 9H17C17.5523 9 18 8.55228 18 8C18 7.44772 17.5523 7 17 7H11ZM8 11H6V13H8V11ZM10 12C10 11.4477 10.4477 11 11 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H11C10.4477 13 10 12.5523 10 12ZM8 15H6V17H8V15ZM10 16C10 15.4477 10.4477 15 11 15H17C17.5523 15 18 15.4477 18 16C18 16.5523 17.5523 17 17 17H11C10.4477 17 10 16.5523 10 16Z","fill":"currentColor"}}]})(props);
};
function CgLivePhoto (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12.9805 21.9525C12.6579 21.9839 12.3308 22 12 22C11.6692 22 11.3421 21.9839 11.0194 21.9525L11.2132 19.9619C11.4715 19.9871 11.7339 20 12 20C12.2661 20 12.5285 19.9871 12.7868 19.9619L12.9805 21.9525Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M9.09617 21.5719L9.67608 19.6578C9.17124 19.5048 8.68725 19.3031 8.22951 19.058L7.28519 20.821C7.8578 21.1277 8.46374 21.3803 9.09617 21.5719Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5.65597 19.7304L6.92562 18.1851C6.5202 17.852 6.14801 17.4798 5.81491 17.0744L4.2696 18.344C4.68539 18.8501 5.1499 19.3146 5.65597 19.7304Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M3.17901 16.7148L4.94204 15.7705C4.69686 15.3127 4.49516 14.8288 4.34221 14.3239L2.42813 14.9038C2.61974 15.5363 2.87231 16.1422 3.17901 16.7148Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M2.04746 12.9805L4.03806 12.7868C4.01292 12.5285 4 12.2661 4 12C4 11.7339 4.01292 11.4715 4.03806 11.2132L2.04746 11.0195C2.01607 11.3421 2 11.6692 2 12C2 12.3308 2.01607 12.6579 2.04746 12.9805Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M2.42813 9.09617L4.34221 9.67608C4.49517 9.17124 4.69686 8.68725 4.94204 8.22951L3.17901 7.28519C2.87231 7.8578 2.61974 8.46374 2.42813 9.09617Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M4.2696 5.65597L5.81491 6.92562C6.14801 6.5202 6.5202 6.14801 6.92562 5.81491L5.65597 4.2696C5.14991 4.68539 4.68539 5.1499 4.2696 5.65597Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7.2852 3.17901L8.22951 4.94204C8.68726 4.69686 9.17124 4.49516 9.67608 4.34221L9.09617 2.42813C8.46374 2.61974 7.8578 2.87231 7.2852 3.17901Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11.0195 2.04746C11.3421 2.01607 11.6692 2 12 2C12.3308 2 12.6579 2.01607 12.9805 2.04746L12.7868 4.03806C12.5285 4.01292 12.2661 4 12 4C11.7339 4 11.4715 4.01292 11.2132 4.03806L11.0195 2.04746Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14.9038 2.42813L14.3239 4.34221C14.8288 4.49517 15.3127 4.69686 15.7705 4.94204L16.7148 3.17901C16.1422 2.87231 15.5363 2.61974 14.9038 2.42813Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M18.344 4.2696L17.0744 5.81491C17.4798 6.14801 17.852 6.5202 18.1851 6.92562L19.7304 5.65597C19.3146 5.14991 18.8501 4.68539 18.344 4.2696Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M20.821 7.2852L19.058 8.22951C19.3031 8.68726 19.5048 9.17124 19.6578 9.67608L21.5719 9.09617C21.3803 8.46374 21.1277 7.8578 20.821 7.2852Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M21.9525 11.0195L19.9619 11.2132C19.9871 11.4715 20 11.7339 20 12C20 12.2661 19.9871 12.5285 19.9619 12.7868L21.9525 12.9806C21.9839 12.6579 22 12.3308 22 12C22 11.6692 21.9839 11.3421 21.9525 11.0195Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M21.5719 14.9038L19.6578 14.3239C19.5048 14.8288 19.3031 15.3127 19.058 15.7705L20.821 16.7148C21.1277 16.1422 21.3803 15.5363 21.5719 14.9038Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M19.7304 18.344L18.1851 17.0744C17.852 17.4798 17.4798 17.852 17.0744 18.1851L18.344 19.7304C18.8501 19.3146 19.3146 18.8501 19.7304 18.344Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16.7148 20.821L15.7705 19.058C15.3127 19.3031 14.8288 19.5048 14.3239 19.6578L14.9038 21.5719C15.5363 21.3803 16.1422 21.1277 16.7148 20.821Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12ZM12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6ZM8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12Z","fill":"currentColor"}}]})(props);
};
function CgLoadbarAlt (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"rect","attr":{"opacity":"0.3","x":"3","y":"10","width":"18","height":"4","rx":"2","fill":"currentColor"}},{"tag":"rect","attr":{"x":"7","y":"10","width":"10","height":"4","rx":"2","fill":"currentColor"}}]})(props);
};
function CgLoadbarDoc (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M17 5H7C6.44772 5 6 5.44772 6 6V18C6 18.5523 6.44772 19 7 19H17C17.5523 19 18 18.5523 18 18V6C18 5.44772 17.5523 5 17 5ZM7 3C5.34315 3 4 4.34315 4 6V18C4 19.6569 5.34315 21 7 21H17C18.6569 21 20 19.6569 20 18V6C20 4.34315 18.6569 3 17 3H7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M8 7H16V9H8V7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M8 11H16V13H8V11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M8 15H13V17H8V15Z","fill":"currentColor"}}]})(props);
};
function CgLoadbarSound (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M11 6H13V18H11V6Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7 13H9V18H7V13Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15 9H17V18H15V9Z","fill":"currentColor"}}]})(props);
};
function CgLoadbar (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"rect","attr":{"x":"3","y":"10","width":"18","height":"4","rx":"2","fill":"currentColor"}}]})(props);
};
function CgLockUnlock (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M19 7H17C17 4.79086 15.2091 3 13 3C10.7909 3 9 4.79086 9 7V10H18C19.6569 10 21 11.3431 21 13V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V13C3 11.3431 4.34315 10 6 10H7V7C7 3.68629 9.68629 1 13 1C16.3137 1 19 3.68629 19 7ZM18 12H6C5.44772 12 5 12.4477 5 13V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V13C19 12.4477 18.5523 12 18 12Z","fill":"currentColor"}}]})(props);
};
function CgLock (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M18 10.5C19.6569 10.5 21 11.8431 21 13.5V19.5C21 21.1569 19.6569 22.5 18 22.5H6C4.34315 22.5 3 21.1569 3 19.5V13.5C3 11.8431 4.34315 10.5 6 10.5V7.5C6 4.18629 8.68629 1.5 12 1.5C15.3137 1.5 18 4.18629 18 7.5V10.5ZM12 3.5C14.2091 3.5 16 5.29086 16 7.5V10.5H8V7.5C8 5.29086 9.79086 3.5 12 3.5ZM18 12.5H6C5.44772 12.5 5 12.9477 5 13.5V19.5C5 20.0523 5.44772 20.5 6 20.5H18C18.5523 20.5 19 20.0523 19 19.5V13.5C19 12.9477 18.5523 12.5 18 12.5Z","fill":"currentColor"}}]})(props);
};
function CgLogIn (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M15.4857 20H19.4857C20.5903 20 21.4857 19.1046 21.4857 18V6C21.4857 4.89543 20.5903 4 19.4857 4H15.4857V6H19.4857V18H15.4857V20Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M10.1582 17.385L8.73801 15.9768L12.6572 12.0242L3.51428 12.0242C2.96199 12.0242 2.51428 11.5765 2.51428 11.0242C2.51429 10.4719 2.962 10.0242 3.51429 10.0242L12.6765 10.0242L8.69599 6.0774L10.1042 4.6572L16.4951 10.9941L10.1582 17.385Z","fill":"currentColor"}}]})(props);
};
function CgLogOff (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M13 4.00894C13.0002 3.45665 12.5527 3.00876 12.0004 3.00854C11.4481 3.00833 11.0002 3.45587 11 4.00815L10.9968 12.0116C10.9966 12.5639 11.4442 13.0118 11.9965 13.012C12.5487 13.0122 12.9966 12.5647 12.9968 12.0124L13 4.00894Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M4 12.9917C4 10.7826 4.89541 8.7826 6.34308 7.33488L7.7573 8.7491C6.67155 9.83488 6 11.3349 6 12.9917C6 16.3054 8.68629 18.9917 12 18.9917C15.3137 18.9917 18 16.3054 18 12.9917C18 11.3348 17.3284 9.83482 16.2426 8.74903L17.6568 7.33481C19.1046 8.78253 20 10.7825 20 12.9917C20 17.41 16.4183 20.9917 12 20.9917C7.58172 20.9917 4 17.41 4 12.9917Z","fill":"currentColor"}}]})(props);
};
function CgLogOut (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M8.51428 20H4.51428C3.40971 20 2.51428 19.1046 2.51428 18V6C2.51428 4.89543 3.40971 4 4.51428 4H8.51428V6H4.51428V18H8.51428V20Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M13.8418 17.385L15.262 15.9768L11.3428 12.0242L20.4857 12.0242C21.038 12.0242 21.4857 11.5765 21.4857 11.0242C21.4857 10.4719 21.038 10.0242 20.4857 10.0242L11.3236 10.0242L15.304 6.0774L13.8958 4.6572L7.5049 10.9941L13.8418 17.385Z","fill":"currentColor"}}]})(props);
};
function CgLoupe (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M11 11V8H13V11H16V13H13V16H11V13H8V11H11Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3 12C3 16.9706 7.02944 21 12 21H18C19.6569 21 21 19.6569 21 18V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5Z","fill":"currentColor"}}]})(props);
};
function CgMagnet (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M8 2.5H4V5.5H8V2.5Z","fill":"currentColor","fillOpacity":"0.5"}},{"tag":"path","attr":{"d":"M20 2.5H16V5.5H20V2.5Z","fill":"currentColor","fillOpacity":"0.5"}},{"tag":"path","attr":{"d":"M8 7.5H4V13.5C4 17.9183 7.58172 21.5 12 21.5C16.4183 21.5 20 17.9183 20 13.5V7.5H16V13.5C16 15.7091 14.2091 17.5 12 17.5C9.79086 17.5 8 15.7091 8 13.5V7.5Z","fill":"currentColor"}}]})(props);
};
function CgMailForward (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M13.6378 15.529L15.052 16.9432L20.0018 11.9934L15.052 7.0437L13.6378 8.45791L16.1363 10.9564H7.99823C5.78909 10.9564 3.99823 12.7472 3.99823 14.9564V16.9564H5.99823V14.9564C5.99823 13.8518 6.89366 12.9564 7.99823 12.9564H16.2104L13.6378 15.529Z","fill":"currentColor"}}]})(props);
};
function CgMailOpen (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3.05002 10.0151C2.79178 9.30708 2.94668 8.48233 3.51474 7.91427L9.8787 1.55031C11.0503 0.378738 12.9498 0.378738 14.1213 1.55031L20.4853 7.91427C21.0534 8.48239 21.2083 9.30727 20.9499 10.0154C20.9824 10.1139 20.9999 10.2191 20.9999 10.3285V21.3285C20.9999 22.4331 20.1045 23.3285 18.9999 23.3285H4.99994C3.89537 23.3285 2.99994 22.4331 2.99994 21.3285V10.3285C2.99994 10.219 3.01752 10.1137 3.05002 10.0151ZM4.92896 9.32848L11.2929 2.96452C11.6834 2.574 12.3166 2.574 12.7071 2.96452L19.0711 9.32848H19.0408V9.3588L12.7071 15.6924C12.3166 16.083 11.6834 16.083 11.2929 15.6924L4.92896 9.32848ZM18.9999 12.2281L14.1213 17.1067C12.9498 18.2782 11.0503 18.2782 9.8787 17.1067L4.99994 12.2279L4.99994 21.3285H18.9999V12.2281Z","fill":"currentColor"}}]})(props);
};
function CgMailReply (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M10.3623 15.529L8.94804 16.9432L3.99829 11.9934L8.94804 7.0437L10.3623 8.45791L7.86379 10.9564H16.0018C18.2109 10.9564 20.0018 12.7472 20.0018 14.9564V16.9564H18.0018V14.9564C18.0018 13.8518 17.1063 12.9564 16.0018 12.9564H7.78965L10.3623 15.529Z","fill":"currentColor"}}]})(props);
};
function CgMail (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z","fill":"currentColor"}}]})(props);
};
function CgMathDivide (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12 19C13.1046 19 14 18.1046 14 17C14 15.8954 13.1046 15 12 15C10.8954 15 10 15.8954 10 17C10 18.1046 10.8954 19 12 19Z","fill":"currentColor"}}]})(props);
};
function CgMathEqual (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M5 9C4.44772 9 4 9.44771 4 10C4 10.5523 4.44772 11 5 11H19C19.5523 11 20 10.5523 20 10C20 9.44771 19.5523 9 19 9H5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5 13C4.44772 13 4 13.4477 4 14C4 14.5523 4.44772 15 5 15H19C19.5523 15 20 14.5523 20 14C20 13.4477 19.5523 13 19 13H5Z","fill":"currentColor"}}]})(props);
};
function CgMathMinus (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z","fill":"currentColor"}}]})(props);
};
function CgMathPercent (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M16.2426 6.34319C16.6331 5.95266 17.2663 5.95266 17.6568 6.34319C18.0474 6.73371 18.0474 7.36688 17.6568 7.7574L7.75734 17.6569C7.36681 18.0474 6.73365 18.0474 6.34313 17.6569C5.9526 17.2664 5.9526 16.6332 6.34313 16.2427L16.2426 6.34319Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M9.87866 9.87872C9.09761 10.6598 7.83128 10.6598 7.05023 9.87872C6.26918 9.09767 6.26918 7.83134 7.05023 7.05029C7.83128 6.26924 9.09761 6.26924 9.87866 7.05029C10.6597 7.83134 10.6597 9.09767 9.87866 9.87872Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14.1213 16.9498C14.9023 17.7308 16.1687 17.7308 16.9497 16.9498C17.7308 16.1687 17.7308 14.9024 16.9497 14.1214C16.1687 13.3403 14.9023 13.3403 14.1213 14.1214C13.3403 14.9024 13.3403 16.1687 14.1213 16.9498Z","fill":"currentColor"}}]})(props);
};
function CgMathPlus (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z","fill":"currentColor"}}]})(props);
};
function CgMaximizeAlt (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M3 3H9V5H6.46173L11.3047 9.84298L9.8905 11.2572L5 6.3667V9H3V3Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M3 21H9V19H6.3764L11.3046 14.0718L9.89038 12.6576L5 17.548V15H3V21Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15 21H21V15H19V17.5244L14.1332 12.6576L12.719 14.0718L17.6472 19H15V21Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M21 3H15V5H17.5619L12.7189 9.84301L14.1331 11.2572L19 6.39032V9H21V3Z","fill":"currentColor"}}]})(props);
};
function CgMaximize (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M3 3H9V5H5V9H3V3Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M3 21H9V19H5V15H3V21Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15 21H21V15H19V19H15V21Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M21 3H15V5H19V9H21V3Z","fill":"currentColor"}}]})(props);
};
function CgMaze (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M11.3709 9.59273L8.77816 7L1 14.7782L3.59272 17.3709L11.3709 9.59273Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15.2218 7L23 14.7782L20.424 17.3542L15.2218 12.152L10.0197 17.3542L7.44367 14.7782L15.2218 7Z","fill":"currentColor"}}]})(props);
};
function CgMediaLive (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12ZM13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z","fill":"currentColor"}}]})(props);
};
function CgMediaPodcast (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M5.6361 20.364C4.00738 18.7353 3 16.4853 3 14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14C21 16.4853 19.9926 18.7353 18.364 20.3639L19.7782 21.7782C21.7688 19.7875 23 17.0376 23 14C23 7.92487 18.0751 3 12 3C5.92487 3 1 7.92487 1 14C1 17.0376 2.23124 19.7876 4.22189 21.7782L5.6361 20.364Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16.9498 18.9497C18.2165 17.683 19 15.933 19 14C19 10.134 15.866 7 12 7C8.13401 7 5 10.134 5 14C5 15.933 5.78353 17.6831 7.05031 18.9498L8.46453 17.5356C7.55967 16.6308 7 15.3807 7 14C7 11.2386 9.23858 9 12 9C14.7614 9 17 11.2386 17 14C17 15.3807 16.4404 16.6307 15.5356 17.5355L16.9498 18.9497Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14.1213 16.1213C14.6642 15.5784 15 14.8284 15 14C15 12.3431 13.6569 11 12 11C10.3431 11 9 12.3431 9 14C9 14.8285 9.33581 15.5785 9.87874 16.1214L11.293 14.7072C11.112 14.5262 11 14.2762 11 14C11 13.4477 11.4477 13 12 13C12.5523 13 13 13.4477 13 14C13 14.2761 12.8881 14.5261 12.7071 14.7071L14.1213 16.1213Z","fill":"currentColor"}}]})(props);
};
function CgMenuBoxed (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M8.01562 6.98193C7.46334 6.98193 7.01562 7.43285 7.01562 7.98513C7.01562 8.53742 7.46334 8.98833 8.01563 8.98833H15.9659C16.5182 8.98833 16.9659 8.53742 16.9659 7.98513C16.9659 7.43285 16.5182 6.98193 15.9659 6.98193H8.01562Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7.01562 12C7.01562 11.4477 7.46334 10.9968 8.01562 10.9968H15.9659C16.5182 10.9968 16.9659 11.4477 16.9659 12C16.9659 12.5523 16.5182 13.0032 15.9659 13.0032H8.01563C7.46334 13.0032 7.01562 12.5523 7.01562 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M8.0249 15.0122C7.47262 15.0122 7.0249 15.4631 7.0249 16.0154C7.0249 16.5677 7.47262 17.0186 8.0249 17.0186H15.9752C16.5275 17.0186 16.9752 16.5677 16.9752 16.0154C16.9752 15.4631 16.5275 15.0122 15.9752 15.0122H8.0249Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5Z","fill":"currentColor"}}]})(props);
};
function CgMenuCake (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5 10C4.44772 10 4 10.4477 4 11C4 11.5523 4.44772 12 5 12H19C19.5523 12 20 11.5523 20 11C20 10.4477 19.5523 10 19 10H5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M4 15C4 14.4477 4.44772 14 5 14H19C19.5523 14 20 14.4477 20 15C20 15.5523 19.5523 16 19 16H5C4.44772 16 4 15.5523 4 15Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5 18C4.44772 18 4 18.4477 4 19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19C20 18.4477 19.5523 18 19 18H5Z","fill":"currentColor"}}]})(props);
};
function CgMenuCheese (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H10.2625L7.61456 15.6479L4.96662 13H4C3.44772 13 3 12.5523 3 12Z","fill":"currentColor"}}]})(props);
};
function CgMenuGridO (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M6 20C7.10457 20 8 19.1046 8 18C8 16.8954 7.10457 16 6 16C4.89543 16 4 16.8954 4 18C4 19.1046 4.89543 20 6 20Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20Z","fill":"currentColor"}}]})(props);
};
function CgMenuGridR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M4 4H8V8H4V4Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M4 10H8V14H4V10Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M8 16H4V20H8V16Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M10 4H14V8H10V4Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14 10H10V14H14V10Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M10 16H14V20H10V16Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M20 4H16V8H20V4Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16 10H20V14H16V10Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M20 16H16V20H20V16Z","fill":"currentColor"}}]})(props);
};
function CgMenuHotdog (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M7 6C5.34315 6 4 7.34315 4 9H20C20 7.34315 18.6569 6 17 6H7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7 18C5.34315 18 4 16.6569 4 15H20C20 16.6569 18.6569 18 17 18H7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H3Z","fill":"currentColor"}}]})(props);
};
function CgMenuLeftAlt (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H13C13.5523 13 14 12.5523 14 12C14 11.4477 13.5523 11 13 11H5Z","fill":"currentColor"}}]})(props);
};
function CgMenuLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M2 5.99519C2 5.44556 2.44556 5 2.99519 5H11.0048C11.5544 5 12 5.44556 12 5.99519C12 6.54482 11.5544 6.99039 11.0048 6.99039H2.99519C2.44556 6.99039 2 6.54482 2 5.99519Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M2 11.9998C2 11.4501 2.44556 11.0046 2.99519 11.0046H21.0048C21.5544 11.0046 22 11.4501 22 11.9998C22 12.5494 21.5544 12.9949 21.0048 12.9949H2.99519C2.44556 12.9949 2 12.5494 2 11.9998Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M2.99519 17.0096C2.44556 17.0096 2 17.4552 2 18.0048C2 18.5544 2.44556 19 2.99519 19H15.0048C15.5544 19 16 18.5544 16 18.0048C16 17.4552 15.5544 17.0096 15.0048 17.0096H2.99519Z","fill":"currentColor"}}]})(props);
};
function CgMenuMotion (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12 5C11.4477 5 11 5.44772 11 6C11 6.55228 11.4477 7 12 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7 12C7 11.4477 7.44772 11 8 11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H8C7.44772 13 7 12.5523 7 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M3 18C3 17.4477 3.44772 17 4 17H12C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19H4C3.44772 19 3 18.5523 3 18Z","fill":"currentColor"}}]})(props);
};
function CgMenuOreos (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M7 3C5.34315 3 4 4.34315 4 6H20C20 4.34315 18.6569 3 17 3H7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7 11C5.34315 11 4 9.65685 4 8H20C20 9.65685 18.6569 11 17 11H7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7 13C5.34315 13 4 14.3431 4 16H20C20 14.3431 18.6569 13 17 13H7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7 21C5.34315 21 4 19.6569 4 18H20C20 19.6569 18.6569 21 17 21H7Z","fill":"currentColor"}}]})(props);
};
function CgMenuRightAlt (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11 11C10.4477 11 10 11.4477 10 12C10 12.5523 10.4477 13 11 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H11Z","fill":"currentColor"}}]})(props);
};
function CgMenuRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M22 18.0048C22 18.5544 21.5544 19 21.0048 19H12.9952C12.4456 19 12 18.5544 12 18.0048C12 17.4552 12.4456 17.0096 12.9952 17.0096H21.0048C21.5544 17.0096 22 17.4552 22 18.0048Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M22 12.0002C22 12.5499 21.5544 12.9954 21.0048 12.9954H2.99519C2.44556 12.9954 2 12.5499 2 12.0002C2 11.4506 2.44556 11.0051 2.99519 11.0051H21.0048C21.5544 11.0051 22 11.4506 22 12.0002Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M21.0048 6.99039C21.5544 6.99039 22 6.54482 22 5.99519C22 5.44556 21.5544 5 21.0048 5H8.99519C8.44556 5 8 5.44556 8 5.99519C8 6.54482 8.44556 6.99039 8.99519 6.99039H21.0048Z","fill":"currentColor"}}]})(props);
};
function CgMenuRound (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M8 6.9834C7.44772 6.9834 7 7.43111 7 7.9834C7 8.53568 7.44772 8.9834 8 8.9834H16C16.5523 8.9834 17 8.53568 17 7.9834C17 7.43111 16.5523 6.9834 16 6.9834H8Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7 12C7 11.4477 7.44772 11 8 11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H8C7.44772 13 7 12.5523 7 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M8 15.017C7.44772 15.017 7 15.4647 7 16.017C7 16.5693 7.44772 17.017 8 17.017H16C16.5523 17.017 17 16.5693 17 16.017C17 15.4647 16.5523 15.017 16 15.017H8Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z","fill":"currentColor"}}]})(props);
};
function CgMenu (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z","fill":"currentColor"}}]})(props);
};
function CgMergeHorizontal (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12 8.9757L16.2426 4.73306L14.8284 3.31885L12 6.14727L9.17157 3.31885L7.75736 4.73306L12 8.9757Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5 11.9998C5 11.4475 5.44772 10.9997 6 10.9997H18C18.5523 10.9997 19 11.4475 19 11.9998C19 12.552 18.5523 12.9998 18 12.9998H6C5.44772 12.9998 5 12.552 5 11.9998Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12 15.0242L7.75736 19.2668L9.17157 20.681L12 17.8526L14.8284 20.681L16.2426 19.2668L12 15.0242Z","fill":"currentColor"}}]})(props);
};
function CgMergeVertical (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M8.97576 12L4.73312 7.75736L3.31891 9.17157L6.14734 12L3.31891 14.8284L4.73312 16.2426L8.97576 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11.9998 19C11.4475 19 10.9998 18.5523 10.9998 18V6C10.9998 5.44772 11.4475 5 11.9998 5C12.5521 5 12.9998 5.44772 12.9998 6V18C12.9998 18.5523 12.5521 19 11.9998 19Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15.0242 12L19.2669 16.2426L20.6811 14.8284L17.8527 12L20.6811 9.17157L19.2669 7.75736L15.0242 12Z","fill":"currentColor"}}]})(props);
};
function CgMic (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M9 4C9 2.34315 10.3431 1 12 1C13.6569 1 15 2.34315 15 4V12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12V4ZM13 4V12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12V4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M18 12C18 14.973 15.8377 17.441 13 17.917V21H17V23H7V21H11V17.917C8.16229 17.441 6 14.973 6 12V9H8V12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12V9H18V12Z","fill":"currentColor"}}]})(props);
};
function CgMicrobit (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M7 14C8.10457 14 9 13.1046 9 12C9 10.8954 8.10457 10 7 10C5.89543 10 5 10.8954 5 12C5 13.1046 5.89543 14 7 14Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M19 12C19 13.1046 18.1046 14 17 14C15.8954 14 15 13.1046 15 12C15 10.8954 15.8954 10 17 10C18.1046 10 19 10.8954 19 12Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M7 5C3.13401 5 0 8.13401 0 12C0 15.866 3.13401 19 7 19H17C20.866 19 24 15.866 24 12C24 8.13401 20.866 5 17 5H7ZM17 8H7C4.79086 8 3 9.79086 3 12C3 14.2091 4.79086 16 7 16H17C19.2091 16 21 14.2091 21 12C21 9.79086 19.2091 8 17 8Z","fill":"currentColor"}}]})(props);
};
function CgMicrosoft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M3 3H11V11H3V3Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M3 13H11V21H3V13Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M13 3H21V11H13V3Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M13 13H21V21H13V13Z","fill":"currentColor"}}]})(props);
};
function CgMiniPlayer (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM6 5H18C18.5523 5 19 5.44772 19 6V12.2676C18.7058 12.0974 18.3643 12 18 12H14C12.8954 12 12 12.8954 12 14V18C12 18.3643 12.0974 18.7058 12.2676 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5Z","fill":"currentColor"}}]})(props);
};
function CgMinimizeAlt (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M20.0735 2L21.4877 3.41421L15.6378 9.26416H18.1824V11.2642H12.1824V5.26416H14.1824V7.89111L20.0735 2Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11.1824 12.2642V18.2642H9.1824V15.8422L3.41421 21.6104L2 20.1962L7.93203 14.2642H5.1824V12.2642H11.1824Z","fill":"currentColor"}}]})(props);
};
function CgMinimize (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M9 9H3V7H7V3H9V9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M9 15H3V17H7V21H9V15Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M21 15H15V21H17V17H21V15Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15 9.00012H21V7.00012H17V3.00012H15V9.00012Z","fill":"currentColor"}}]})(props);
};
function CgModem (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M18 16.6341C18 17.1864 17.5523 17.6341 17 17.6341C16.4477 17.6341 16 17.1864 16 16.6341C16 16.0819 16.4477 15.6341 17 15.6341C17.5523 15.6341 18 16.0819 18 16.6341Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M5.86603 3.13414C5.38773 2.858 4.77614 3.02187 4.5 3.50017C4.22386 3.97846 4.38773 4.59005 4.86603 4.86619L18.3205 12.6341H2V16.6341C2 18.8433 3.79086 20.6341 6 20.6341H18C20.2091 20.6341 22 18.8433 22 16.6341V12.6341L5.86603 3.13414ZM20 14.6341H4V16.6341C4 17.7387 4.89543 18.6341 6 18.6341H18C19.1046 18.6341 20 17.7387 20 16.6341V14.6341Z","fill":"currentColor"}}]})(props);
};
function CgMonday (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M6.77857 6.13915C7.7289 4.78193 9.59953 4.45209 10.9568 5.40242C12.314 6.35275 12.6438 8.22339 11.6935 9.58061L5.95771 17.7721C5.00738 19.1293 3.13674 19.4592 1.77953 18.5089C0.422312 17.5585 0.0924684 15.6879 1.0428 14.3307L6.77857 6.13915Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15.2678 6.22811C16.2182 4.8709 18.0888 4.54105 19.446 5.49138C20.8032 6.44172 21.1331 8.31235 20.1827 9.66957L14.447 17.8611C13.4966 19.2183 11.626 19.5481 10.2688 18.5978C8.91158 17.6475 8.58173 15.7768 9.53207 14.4196L15.2678 6.22811Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M20.5 18.8596C22.1569 18.8596 23.5 17.5165 23.5 15.8596C23.5 14.2028 22.1569 12.8596 20.5 12.8596C18.8431 12.8596 17.5 14.2028 17.5 15.8596C17.5 17.5165 18.8431 18.8596 20.5 18.8596Z","fill":"currentColor"}}]})(props);
};
function CgMoon (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12.2256 2.00253C9.59172 1.94346 6.93894 2.9189 4.92893 4.92891C1.02369 8.83415 1.02369 15.1658 4.92893 19.071C8.83418 22.9763 15.1658 22.9763 19.0711 19.071C21.0811 17.061 22.0565 14.4082 21.9975 11.7743C21.9796 10.9772 21.8669 10.1818 21.6595 9.40643C21.0933 9.9488 20.5078 10.4276 19.9163 10.8425C18.5649 11.7906 17.1826 12.4053 15.9301 12.6837C14.0241 13.1072 12.7156 12.7156 12 12C11.2844 11.2844 10.8928 9.97588 11.3163 8.0699C11.5947 6.81738 12.2094 5.43511 13.1575 4.08368C13.5724 3.49221 14.0512 2.90664 14.5935 2.34046C13.8182 2.13305 13.0228 2.02041 12.2256 2.00253ZM17.6569 17.6568C18.9081 16.4056 19.6582 14.8431 19.9072 13.2186C16.3611 15.2643 12.638 15.4664 10.5858 13.4142C8.53361 11.362 8.73568 7.63895 10.7814 4.09281C9.1569 4.34184 7.59434 5.09193 6.34315 6.34313C3.21895 9.46732 3.21895 14.5326 6.34315 17.6568C9.46734 20.781 14.5327 20.781 17.6569 17.6568Z","fill":"currentColor"}}]})(props);
};
function CgMoreAlt (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14Z","fill":"currentColor"}}]})(props);
};
function CgMoreO (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M7 14C8.10457 14 9 13.1046 9 12C9 10.8954 8.10457 10 7 10C5.89543 10 5 10.8954 5 12C5 13.1046 5.89543 14 7 14Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M17 14C18.1046 14 19 13.1046 19 12C19 10.8954 18.1046 10 17 10C15.8954 10 15 10.8954 15 12C15 13.1046 15.8954 14 17 14Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z","fill":"currentColor"}}]})(props);
};
function CgMoreR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M7 14C8.10457 14 9 13.1046 9 12C9 10.8954 8.10457 10 7 10C5.89543 10 5 10.8954 5 12C5 13.1046 5.89543 14 7 14Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M17 14C18.1046 14 19 13.1046 19 12C19 10.8954 18.1046 10 17 10C15.8954 10 15 10.8954 15 12C15 13.1046 15.8954 14 17 14Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M0 5C0 3.34315 1.34315 2 3 2H21C22.6569 2 24 3.34315 24 5V19C24 20.6569 22.6569 22 21 22H3C1.34315 22 0 20.6569 0 19V5ZM3 4H21C21.5523 4 22 4.44772 22 5V19C22 19.5523 21.5523 20 21 20H3C2.44772 20 2 19.5523 2 19V5C2 4.44772 2.44771 4 3 4Z","fill":"currentColor"}}]})(props);
};
function CgMoreVerticalAlt (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z","fill":"currentColor"}}]})(props);
};
function CgMoreVerticalO (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12 9C13.1046 9 14 8.10457 14 7C14 5.89543 13.1046 5 12 5C10.8954 5 10 5.89543 10 7C10 8.10457 10.8954 9 12 9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12 19C13.1046 19 14 18.1046 14 17C14 15.8954 13.1046 15 12 15C10.8954 15 10 15.8954 10 17C10 18.1046 10.8954 19 12 19Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z","fill":"currentColor"}}]})(props);
};
function CgMoreVerticalR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12 9C13.1046 9 14 8.10457 14 7C14 5.89543 13.1046 5 12 5C10.8954 5 10 5.89543 10 7C10 8.10457 10.8954 9 12 9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12 19C13.1046 19 14 18.1046 14 17C14 15.8954 13.1046 15 12 15C10.8954 15 10 15.8954 10 17C10 18.1046 10.8954 19 12 19Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M2 3C2 1.34315 3.34315 0 5 0H19C20.6569 0 22 1.34315 22 3V21C22 22.6569 20.6569 24 19 24H5C3.34315 24 2 22.6569 2 21V3ZM5 2H19C19.5523 2 20 2.44771 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2Z","fill":"currentColor"}}]})(props);
};
function CgMoreVertical (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4C11 4.55228 11.4477 5 12 5ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13ZM12 21C12.5523 21 13 20.5523 13 20C13 19.4477 12.5523 19 12 19C11.4477 19 11 19.4477 11 20C11 20.5523 11.4477 21 12 21ZM15 4C15 5.65685 13.6569 7 12 7C10.3431 7 9 5.65685 9 4C9 2.34315 10.3431 1 12 1C13.6569 1 15 2.34315 15 4ZM15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12ZM12 23C13.6569 23 15 21.6569 15 20C15 18.3431 13.6569 17 12 17C10.3431 17 9 18.3431 9 20C9 21.6569 10.3431 23 12 23Z","fill":"currentColor"}}]})(props);
};
function CgMore (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M5 15C6.65685 15 8 13.6569 8 12C8 10.3431 6.65685 9 5 9C3.34315 9 2 10.3431 2 12C2 13.6569 3.34315 15 5 15ZM5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M22 12C22 13.6569 20.6569 15 19 15C17.3431 15 16 13.6569 16 12C16 10.3431 17.3431 9 19 9C20.6569 9 22 10.3431 22 12ZM20 12C20 12.5523 19.5523 13 19 13C18.4477 13 18 12.5523 18 12C18 11.4477 18.4477 11 19 11C19.5523 11 20 11.4477 20 12Z","fill":"currentColor"}}]})(props);
};
function CgMouse (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12 5C11.4477 5 11 5.44772 11 6V10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10V6C13 5.44772 12.5523 5 12 5Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M4 8C4 3.58172 7.58172 0 12 0C16.4183 0 20 3.58172 20 8V16C20 20.4183 16.4183 24 12 24C7.58172 24 4 20.4183 4 16V8ZM18 8V16C18 19.3137 15.3137 22 12 22C8.68629 22 6 19.3137 6 16V8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8Z","fill":"currentColor"}}]})(props);
};
function CgMoveDown (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M7 5H9V13H7V5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15 5H17V13H15V5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11.0001 5H13.0001V14.9999H16.0355L12.0356 19.071L8.03564 14.9999H11.0001V5Z","fill":"currentColor"}}]})(props);
};
function CgMoveLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M19.071 17V15H11.071V17H19.071Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M19.071 9V7H11.071V9H19.071Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M19.071 12.9999V10.9999H9.07109V7.96454L5 11.9644L9.07109 15.9644V12.9999H19.071Z","fill":"currentColor"}}]})(props);
};
function CgMoveRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M5 17V15H13V17H5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5 9V7H13V9H5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5 12.9999V10.9999H14.9999V7.96454L19.071 11.9644L14.9999 15.9644V12.9999H5Z","fill":"currentColor"}}]})(props);
};
function CgMoveTask (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M18.9641 7H10.9641V9H18.9641V7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M6 8.82864V15.1714L9.9642 12L6 8.82864Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M18.9641 11H10.9641V13H18.9641V11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M10.9641 15H18.9641V17H10.9641V15Z","fill":"currentColor"}}]})(props);
};
function CgMoveUp (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M17 19.071H15V11.071H17V19.071Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M9 19.071H7V11.071H9V19.071Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12.9999 19.071H10.9999V9.07109H7.96454L11.9644 5L15.9644 9.07109H12.9999V19.071Z","fill":"currentColor"}}]})(props);
};
function CgMusicNote (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 8.95439L17.6352 7.82736C19.0102 7.55235 20 6.34501 20 4.94274C20 3.08637 18.3017 1.69406 16.4813 2.05813L12.4117 2.87206C11.0094 3.15252 10 4.38376 10 5.8138V13.8895C9.41165 13.5492 8.72857 13.3544 8 13.3544C5.79086 13.3544 4 15.1453 4 17.3544C4 19.5635 5.79086 21.3544 8 21.3544C10.2091 21.3544 12 19.5635 12 17.3544V8.95439ZM16.8736 4.01929L12.8039 4.83322C12.3365 4.92671 12 5.33712 12 5.8138V6.91479L17.2429 5.8662C17.6831 5.77816 18 5.39165 18 4.94274C18 4.34846 17.4563 3.90274 16.8736 4.01929ZM10 17.3544C10 16.2498 9.10457 15.3544 8 15.3544C6.89543 15.3544 6 16.2498 6 17.3544C6 18.459 6.89543 19.3544 8 19.3544C9.10457 19.3544 10 18.459 10 17.3544Z","fill":"currentColor"}}]})(props);
};
function CgMusicSpeaker (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 18.939C14.2091 18.939 16 17.1482 16 14.939C16 12.7299 14.2091 10.939 12 10.939C9.79086 10.939 8 12.7299 8 14.939C8 17.1482 9.79086 18.939 12 18.939ZM12 16.939C13.1046 16.939 14 16.0436 14 14.939C14 13.8345 13.1046 12.939 12 12.939C10.8954 12.939 10 13.8345 10 14.939C10 16.0436 10.8954 16.939 12 16.939Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12 9.04401C13.1046 9.04401 14 8.14858 14 7.04401C14 5.93944 13.1046 5.04401 12 5.04401C10.8954 5.04401 10 5.93944 10 7.04401C10 8.14858 10.8954 9.04401 12 9.04401Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M7 1C5.34315 1 4 2.34315 4 4V20C4 21.6569 5.34315 23 7 23H17C18.6569 23 20 21.6569 20 20V4C20 2.34315 18.6569 1 17 1H7ZM17 3H7C6.44772 3 6 3.44772 6 4V20C6 20.5523 6.44772 21 7 21H17C17.5523 21 18 20.5523 18 20V4C18 3.44772 17.5523 3 17 3Z","fill":"currentColor"}}]})(props);
};
function CgMusic (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M22 6.00086C22 3.54932 19.8148 1.6746 17.3918 2.04737L10.3918 3.1243C8.44044 3.4245 7 5.1035 7 7.07778V15.8407C6.54537 15.6248 6.0368 15.5039 5.5 15.5039C3.567 15.5039 2 17.0709 2 19.0039C2 20.9369 3.567 22.5039 5.5 22.5039C7.43296 22.5039 8.99994 20.937 9 19.004V7.07778C9 6.09064 9.72022 5.25114 10.6959 5.10104L17.6959 4.02412C18.9074 3.83773 20 4.77509 20 6.00086V12.8407C19.5454 12.6248 19.0368 12.5039 18.5 12.5039C16.567 12.5039 15 14.0709 15 16.0039C15 17.9369 16.567 19.5039 18.5 19.5039C20.433 19.5039 21.9999 17.937 22 16.004V6.00086ZM20 16.0039C20 15.1755 19.3284 14.5039 18.5 14.5039C17.6716 14.5039 17 15.1755 17 16.0039C17 16.8323 17.6716 17.5039 18.5 17.5039C19.3284 17.5039 19.9999 16.8323 20 16.0039ZM7 19.0039C7 18.1755 6.32843 17.5039 5.5 17.5039C4.67157 17.5039 4 18.1755 4 19.0039C4 19.8323 4.67157 20.5039 5.5 20.5039C6.32839 20.5039 6.99994 19.8323 7 19.0039Z","fill":"currentColor"}}]})(props);
};
function CgNametag (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M4 14V20H10V18H6V14H4Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M9 9V15H15V9H9ZM13 11H11V13H13V11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M4 10V4H10V6H6V10H4Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M20 10V4H14V6H18V10H20Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M20 14V20H14V18H18V14H20Z","fill":"currentColor"}}]})(props);
};
function CgNotes (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M6 6C6 5.44772 6.44772 5 7 5H17C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7H7C6.44771 7 6 6.55228 6 6Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M6 10C6 9.44771 6.44772 9 7 9H17C17.5523 9 18 9.44771 18 10C18 10.5523 17.5523 11 17 11H7C6.44771 11 6 10.5523 6 10Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44771 15 7 15H17C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13H7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M6 18C6 17.4477 6.44772 17 7 17H11C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H7C6.44772 19 6 18.5523 6 18Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M2 4C2 2.34315 3.34315 1 5 1H19C20.6569 1 22 2.34315 22 4V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V4ZM5 3H19C19.5523 3 20 3.44771 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44771 3 5 3Z","fill":"currentColor"}}]})(props);
};
function CgNotifications (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M20 7C20 8.65685 18.6569 10 17 10C15.3431 10 14 8.65685 14 7C14 5.34315 15.3431 4 17 4C18.6569 4 20 5.34315 20 7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12 6H4V20H18V12H16V18H6V8H12V6Z","fill":"currentColor"}}]})(props);
};
function CgNpm (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M5 21C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5ZM6 18V6H18V18H15V9H12V18H6Z","fill":"currentColor"}}]})(props);
};
function CgOculus (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M16 10H8C6.89543 10 6 10.8954 6 12C6 13.1046 6.89543 14 8 14H16C17.1046 14 18 13.1046 18 12C18 10.8954 17.1046 10 16 10ZM8 6C4.68629 6 2 8.68629 2 12C2 15.3137 4.68629 18 8 18H16C19.3137 18 22 15.3137 22 12C22 8.68629 19.3137 6 16 6H8Z","fill":"currentColor"}}]})(props);
};
function CgOpenCollective (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M16.6818 15.7529L18.8116 17.8827C20.1752 16.3052 21 14.249 21 12.0001C21 9.78747 20.2016 7.76133 18.8771 6.19409L16.7444 8.32671C17.5315 9.34177 18 10.6162 18 12.0001C18 13.4203 17.5066 14.7253 16.6818 15.7529Z","fill":"currentColor","fillOpacity":"0.5"}},{"tag":"path","attr":{"d":"M15.6734 16.7445C14.6583 17.5315 13.3839 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C13.4202 6 14.7252 6.49344 15.7528 7.31823L17.8826 5.18843C16.3051 3.82482 14.2489 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C14.2126 21 16.2387 20.2016 17.806 18.8771L15.6734 16.7445Z","fill":"currentColor"}}]})(props);
};
function CgOptions (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M7 3C8.86384 3 10.4299 4.27477 10.874 6H19V8H10.874C10.4299 9.72523 8.86384 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3ZM7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M17 20C15.1362 20 13.5701 18.7252 13.126 17H5V15H13.126C13.5701 13.2748 15.1362 12 17 12C19.2091 12 21 13.7909 21 16C21 18.2091 19.2091 20 17 20ZM17 18C18.1046 18 19 17.1046 19 16C19 14.8954 18.1046 14 17 14C15.8954 14 15 14.8954 15 16C15 17.1046 15.8954 18 17 18Z","fill":"currentColor"}}]})(props);
};
function CgOrganisation (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M17 15H19V17H17V15Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M19 11H17V13H19V11Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M13 7H23V21H1V3H13V7ZM8 5H11V7H8V5ZM11 19V17H8V19H11ZM11 15V13H8V15H11ZM11 11V9H8V11H11ZM21 19V9H13V11H15V13H13V15H15V17H13V19H21ZM3 19V17H6V19H3ZM3 15H6V13H3V15ZM6 11V9H3V11H6ZM3 7H6V5H3V7Z","fill":"currentColor"}}]})(props);
};
function CgOverflow (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"opacity":"0.2","d":"M22 11C22 13.6522 20.9464 16.1957 19.0711 18.0711C17.1957 19.9464 14.6522 21 12 21C9.34784 21 6.8043 19.9464 4.92893 18.0711C3.05357 16.1957 2 13.6522 2 11L22 11Z","fill":"currentColor"}},{"tag":"path","attr":{"opacity":"0.3","d":"M20 11C20 13.1217 19.1571 15.1566 17.6569 16.6569C16.1566 18.1571 14.1217 19 12 19C9.87827 19 7.84344 18.1571 6.34315 16.6569C4.84286 15.1566 4 13.1217 4 11L20 11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M20 11C20 8.87827 19.1571 6.84344 17.6569 5.34315C16.1566 3.84285 14.1217 3 12 3C9.87827 3 7.84344 3.84285 6.34315 5.34315C4.84286 6.84344 4 8.87827 4 11L20 11Z","fill":"currentColor"}}]})(props);
};
function CgPacman (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M14.0636 8C14.6159 8 15.0636 7.55228 15.0636 7C15.0636 6.44772 14.6159 6 14.0636 6C13.5113 6 13.0636 6.44772 13.0636 7C13.0636 7.55228 13.5113 8 14.0636 8Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M13 3C15.1523 3 17.1281 3.7555 18.6768 5.01576L20.124 6.46299L18.8288 7.75818L18.828 7.75738L14.5854 12L18.2236 15.6383L18.2224 15.6396L20.1273 17.5445L18.7144 18.9575L18.7122 18.9553C17.1583 20.2329 15.1687 21 13 21C8.02944 21 4 16.9706 4 12C4 7.02944 8.02944 3 13 3ZM11.7569 12L17.2893 17.5323C16.1044 18.4523 14.6162 19 13 19C9.13401 19 6 15.866 6 12C6 8.13401 9.13401 5 13 5C14.6162 5 16.1045 5.54772 17.2893 6.46768L11.7569 12Z","fill":"currentColor"}}]})(props);
};
function CgPassword (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M6 12C6 12.5523 5.55228 13 5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11C5.55228 11 6 11.4477 6 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M9 13C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11C8.44771 11 8 11.4477 8 12C8 12.5523 8.44771 13 9 13Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14 12C14 12.5523 13.5523 13 13 13C12.4477 13 12 12.5523 12 12C12 11.4477 12.4477 11 13 11C13.5523 11 14 11.4477 14 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M20 11H16V13H20V11Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M2 6C0.895431 6 0 6.89543 0 8V16C0 17.1046 0.89543 18 2 18H22C23.1046 18 24 17.1046 24 16V8C24 6.89543 23.1046 6 22 6H2ZM22 8H2L2 16H22V8Z","fill":"currentColor"}}]})(props);
};
function CgPathBack (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M9 14H4V4H14V9H19V19H9V14ZM6 6H12V12H6V6Z","fill":"currentColor"}}]})(props);
};
function CgPathCrop (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"rect","attr":{"opacity":"0.5","x":"6","y":"6","width":"8","height":"8","stroke":"currentColor","strokeWidth":"2"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M9 9H19V19H9V9ZM15 11H17V17H11V15H15V11Z","fill":"currentColor"}}]})(props);
};
function CgPathDivide (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M5 5H15V9H9V15H5V5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M9 15V19H19V9H15V15H9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M10 10H14V14H10V10Z","fill":"currentColor"}}]})(props);
};
function CgPathExclude (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M5 5H15V9H9V15H5V5ZM9 15V19H19V9H15V15H9Z","fill":"currentColor"}}]})(props);
};
function CgPathFront (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M5 5H15V9H19V19H9V15H5V5ZM11 11V17H17V11H11Z","fill":"currentColor"}}]})(props);
};
function CgPathIntersect (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M15 5H5V15H9V19H19V9H15V5ZM13 7H7V13H9V9H13V7ZM17 17H11V15H15V11H17V17Z","fill":"currentColor"}}]})(props);
};
function CgPathOutline (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M5 5H15V9H19V19H9V15H5V5ZM7 7H13V9H9V13H7V7ZM11 17H17V11H15V15H11V17ZM13 11H11V13H13V11Z","fill":"currentColor"}}]})(props);
};
function CgPathTrim (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M5 5H15V8H8V15H5V5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M19 9H9V19H19V9Z","fill":"currentColor"}}]})(props);
};
function CgPathUnite (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M15 5H5V15H9V19H19V9H15V5Z","fill":"currentColor"}}]})(props);
};
function CgPatreon (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"opacity":"0.5","d":"M21 10C21 13.3137 18.3137 16 15 16C11.6863 16 9 13.3137 9 10C9 6.68629 11.6863 4 15 4C18.3137 4 21 6.68629 21 10Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M3 4H7V20H3V4Z","fill":"currentColor"}}]})(props);
};
function CgPaypal (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M6.47005 3.54443H14.4701C16.1089 3.54443 17.4146 4.31866 18.0963 5.51496C19.3165 6.38743 19.9427 7.91487 19.6082 9.65332C19.0865 12.365 16.425 14.5633 13.6636 14.5633H11.6636L10.5301 20.4553H6.39824L6.62891 19.2563H3.44727L6.47005 3.54443ZM8.0922 5.50842H14.0922C15.7491 5.50842 16.8385 6.82737 16.5254 8.45439C16.2124 10.0814 14.6155 11.4004 12.9587 11.4004H8.95866L7.82511 17.2923H5.82511L8.0922 5.50842Z","fill":"currentColor"}}]})(props);
};
function CgPen (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M21.2635 2.29289C20.873 1.90237 20.2398 1.90237 19.8493 2.29289L18.9769 3.16525C17.8618 2.63254 16.4857 2.82801 15.5621 3.75165L4.95549 14.3582L10.6123 20.0151L21.2189 9.4085C22.1426 8.48486 22.338 7.1088 21.8053 5.99367L22.6777 5.12132C23.0682 4.7308 23.0682 4.09763 22.6777 3.70711L21.2635 2.29289ZM16.9955 10.8035L10.6123 17.1867L7.78392 14.3582L14.1671 7.9751L16.9955 10.8035ZM18.8138 8.98525L19.8047 7.99429C20.1953 7.60376 20.1953 6.9706 19.8047 6.58007L18.3905 5.16586C18 4.77534 17.3668 4.77534 16.9763 5.16586L15.9853 6.15683L18.8138 8.98525Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M2 22.9502L4.12171 15.1717L9.77817 20.8289L2 22.9502Z","fill":"currentColor"}}]})(props);
};
function CgPentagonBottomLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M13.3301 9.23205L10 5L5 13.6603L8.33013 17.8923L13.6603 18.6603L18.6603 10L13.3301 9.23205ZM15.4512 11.5583L12.2531 11.0975L10.255 8.5583L7.40908 13.4876L9.40716 16.0268L12.6052 16.4876L15.4512 11.5583Z","fill":"currentColor"}}]})(props);
};
function CgPentagonBottomRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M10.3301 8.23205L13.6603 4L18.6603 12.6603L15.3301 16.8923L10 17.6603L5 9L10.3301 8.23205ZM8.20908 10.5583L11.4072 10.0975L13.4052 7.5583L16.2512 12.4876L14.2531 15.0268L11.055 15.4876L8.20908 10.5583Z","fill":"currentColor"}}]})(props);
};
function CgPentagonDown (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 8L7 6V16L12 18.5L17 16V6L12 8ZM15 8.95407L12 10.1541L9 8.95407V14.7639L12 16.2639L15 14.7639V8.95407Z","fill":"currentColor"}}]})(props);
};
function CgPentagonLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M16 12L18 7H8L6 12L8 17H18L16 12ZM15.0459 15L13.8459 12L15.0459 9H9.35407L8.15407 12L9.35407 15H15.0459Z","fill":"currentColor"}}]})(props);
};
function CgPentagonRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M8 12L6 7H16L18 12L16 17H6L8 12ZM8.95407 15L10.1541 12L8.95407 9H14.6459L15.8459 12L14.6459 15H8.95407Z","fill":"currentColor"}}]})(props);
};
function CgPentagonTopLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M14.3301 15.1601L11 19.3922L6 10.7319L9.33013 6.49988L14.6603 5.73193L19.6603 14.3922L14.3301 15.1601ZM16.4512 12.8339L13.2531 13.2947L11.255 15.8339L8.40908 10.9046L10.4072 8.36536L13.6052 7.90459L16.4512 12.8339Z","fill":"currentColor"}}]})(props);
};
function CgPentagonTopRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M10.3301 15.1601L5 14.3922L10 5.73193L15.3301 6.49988L18.6603 10.7319L13.6603 19.3922L10.3301 15.1601ZM13.4052 15.8339L11.4072 13.2947L8.20908 12.8339L11.055 7.90459L14.2531 8.36536L16.2512 10.9046L13.4052 15.8339Z","fill":"currentColor"}}]})(props);
};
function CgPentagonUp (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 16L17 18V8L12 6L7 8V18L12 16ZM9 15.0459L12 13.8459L15 15.0459V9.35407L12 8.15407L9 9.35407V15.0459Z","fill":"currentColor"}}]})(props);
};
function CgPerformance (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M11 9V13.1707C9.83481 13.5825 9 14.6938 9 16C9 17.6569 10.3431 19 12 19C13.6569 19 15 17.6569 15 16C15 14.6938 14.1652 13.5825 13 13.1707V9H11ZM11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12 5C15.866 5 19 8.13401 19 12V13H17V12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12V13H5V12C5 8.13401 8.13401 5 12 5Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z","fill":"currentColor"}}]})(props);
};
function CgPexels (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 5C12.7111 5 13.3875 5.14845 14 5.41604C15.7659 6.1876 17 7.94968 17 10C17 12.0503 15.7659 13.8124 14 14.584C13.3875 14.8516 12.7111 15 12 15V19H6V5H12ZM8 7V17H10V13H12L12.0032 12.9988C13.6427 13.0303 15.0746 11.6934 15.0443 9.95469L15.0375 9.56529C15.0121 8.10183 13.7882 6.94549 12.3257 7.00299L12.0203 7.00762L12 7H8Z","fill":"currentColor"}}]})(props);
};
function CgPhone (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M22 12C22 10.6868 21.7413 9.38647 21.2388 8.1731C20.7362 6.95996 19.9997 5.85742 19.0711 4.92896C18.1425 4.00024 17.0401 3.26367 15.8268 2.76123C14.6136 2.25854 13.3132 2 12 2V4C13.0506 4 14.0909 4.20703 15.0615 4.60889C16.0321 5.01099 16.914 5.60034 17.6569 6.34326C18.3997 7.08594 18.989 7.96802 19.391 8.93848C19.7931 9.90918 20 10.9495 20 12H22Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M2 10V5C2 4.44775 2.44772 4 3 4H8C8.55228 4 9 4.44775 9 5V9C9 9.55225 8.55228 10 8 10H6C6 14.4182 9.58173 18 14 18V16C14 15.4478 14.4477 15 15 15H19C19.5523 15 20 15.4478 20 16V21C20 21.5522 19.5523 22 19 22H14C7.37259 22 2 16.6274 2 10Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M17.5433 9.70386C17.8448 10.4319 18 11.2122 18 12H16.2C16.2 11.4485 16.0914 10.9023 15.8803 10.3928C15.6692 9.88306 15.3599 9.42017 14.9698 9.03027C14.5798 8.64014 14.1169 8.33081 13.6073 8.11963C13.0977 7.90869 12.5515 7.80005 12 7.80005V6C12.7879 6 13.5681 6.15527 14.2961 6.45679C15.024 6.7583 15.6855 7.2002 16.2426 7.75732C16.7998 8.31445 17.2418 8.97583 17.5433 9.70386Z","fill":"currentColor"}}]})(props);
};
function CgPhotoscan (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M9 8C9.55228 8 10 7.55228 10 7C10 6.44772 9.55228 6 9 6C8.44772 6 8 6.44772 8 7C8 7.55228 8.44772 8 9 8Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M17 3C18.1046 3 19 3.89543 19 5V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H17ZM12.4649 5H17V16H7L7 10.4649C7.58835 10.8052 8.27143 11 9 11C11.2091 11 13 9.20914 13 7C13 6.27143 12.8052 5.58835 12.4649 5ZM9 5C7.89543 5 7 5.89543 7 7C7 8.10457 7.89543 9 9 9C10.1046 9 11 8.10457 11 7C11 5.89543 10.1046 5 9 5Z","fill":"currentColor"}}]})(props);
};
function CgPiano (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M22 21C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H3C1.89543 3 1 3.89543 1 5V19C1 20.1046 1.89543 21 3 21H22ZM11 5H8.98486V13H7.98511V19H12V13H11V5ZM18.0151 19H22V5H19.0151V13H18.0151V19ZM17.0151 13H16.0151V5H14V13H13V19H17.0151V13ZM6.98511 19V13H5.98486V5H3L3 19H6.98511Z","fill":"currentColor"}}]})(props);
};
function CgPill (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12.6569 2.75736C15 0.414213 18.799 0.414214 21.1421 2.75736C23.4853 5.1005 23.4853 8.8995 21.1421 11.2426L11.2426 21.1421C8.89949 23.4853 5.1005 23.4853 2.75736 21.1421C0.414214 18.799 0.414213 15 2.75736 12.6569L12.6569 2.75736ZM19.7279 9.82843L15.4853 14.0711L9.82843 8.41421L14.0711 4.17157C15.6332 2.60948 18.1658 2.60948 19.7279 4.17157C21.29 5.73367 21.29 8.26633 19.7279 9.82843Z","fill":"currentColor"}}]})(props);
};
function CgPinAlt (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M18 9C18 11.973 15.8377 14.441 13 14.917V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V14.917C8.16229 14.441 6 11.973 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9ZM12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13Z","fill":"currentColor"}}]})(props);
};
function CgPinBottom (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M18 9C18 11.973 15.8377 14.441 13 14.917V20H16C16.5523 20 17 20.4477 17 21C17 21.5523 16.5523 22 16 22H8C7.44772 22 7 21.5523 7 21C7 20.4477 7.44772 20 8 20H11V14.917C8.16229 14.441 6 11.973 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9ZM12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13Z","fill":"currentColor"}}]})(props);
};
function CgPinTop (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12 14C13.1046 14 14 14.8954 14 16C14 17.1046 13.1046 18 12 18C10.8954 18 10 17.1046 10 16C10 14.8954 10.8954 14 12 14Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M8 5C7.44772 5 7 4.55228 7 4C7 3.44772 7.44772 3 8 3H16C16.5523 3 17 3.44772 17 4C17 4.55228 16.5523 5 16 5H13V10.083C15.8377 10.559 18 13.027 18 16C18 19.3137 15.3137 22 12 22C8.68629 22 6 19.3137 6 16C6 13.027 8.16229 10.559 11 10.083V5H8ZM12 12C14.2091 12 16 13.7909 16 16C16 18.2091 14.2091 20 12 20C9.79086 20 8 18.2091 8 16C8 13.7909 9.79086 12 12 12Z","fill":"currentColor"}}]})(props);
};
function CgPin (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z","fill":"currentColor"}}]})(props);
};
function CgPlayBackwards (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M2 7H5V17H2V7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M6 12L13.0023 7.00003V17L6 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M21.0023 7.00003L14 12L21.0023 17V7.00003Z","fill":"currentColor"}}]})(props);
};
function CgPlayButtonO (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16 12L10 16.3301V7.66987L16 12Z","fill":"currentColor"}}]})(props);
};
function CgPlayButtonR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3ZM5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16 12L10 16.3301V7.66987L16 12Z","fill":"currentColor"}}]})(props);
};
function CgPlayButton (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M15 12.3301L9 16.6603L9 8L15 12.3301Z","fill":"currentColor"}}]})(props);
};
function CgPlayForwards (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M21.0023 17H18.0023V7H21.0023V17Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M17.0023 12L10 17V7L17.0023 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M2 17L9.00232 12L2 7V17Z","fill":"currentColor"}}]})(props);
};
function CgPlayListAdd (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M2 5H14V7H2V5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M2 9H14V11H2V9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M10 13H2V15H10V13Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16 9H18V13H22V15H18V19H16V15H12V13H16V9Z","fill":"currentColor"}}]})(props);
};
function CgPlayListCheck (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M15 6H3V8H15V6Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15 10H3V12H15V10Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M3 14H11V16H3V14Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11.9905 15.025L13.4049 13.6106L15.526 15.7321L19.7687 11.4895L21.1829 12.9037L15.526 18.5606L11.9905 15.025Z","fill":"currentColor"}}]})(props);
};
function CgPlayListRemove (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M15.9644 4.63379H3.96442V6.63379H15.9644V4.63379Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15.9644 8.63379H3.96442V10.6338H15.9644V8.63379Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M3.96442 12.6338H11.9644V14.6338H3.96442V12.6338Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12.9645 13.7093L14.3787 12.295L16.5 14.4163L18.6213 12.2951L20.0355 13.7093L17.9142 15.8305L20.0356 17.9519L18.6214 19.3661L16.5 17.2447L14.3786 19.3661L12.9644 17.9519L15.0858 15.8305L12.9645 13.7093Z","fill":"currentColor"}}]})(props);
};
function CgPlayListSearch (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M15.8787 4.87866H3.87872V6.87866H15.8787V4.87866Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15.8787 8.87866H3.87872V10.8787H15.8787V8.87866Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M3.87872 12.8787H11.8787V14.8787H3.87872V12.8787Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M13.7574 12.7573C12.5858 13.9289 12.5858 15.8284 13.7574 17C14.681 17.9236 16.0571 18.1191 17.1722 17.5864L18.7071 19.1213L20.1213 17.7071L18.5864 16.1722C19.1191 15.057 18.9236 13.681 18 12.7573C16.8284 11.5858 14.9289 11.5858 13.7574 12.7573ZM15.1716 15.5858C15.5621 15.9763 16.1953 15.9763 16.5858 15.5858C16.9763 15.1952 16.9763 14.5621 16.5858 14.1716C16.1953 13.781 15.5621 13.781 15.1716 14.1716C14.7811 14.5621 14.7811 15.1952 15.1716 15.5858Z","fill":"currentColor"}}]})(props);
};
function CgPlayList (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M16 5H4V7H16V5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16 9H4V11H16V9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M4 13H12V15H4V13Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M20 16L14 13V19L20 16Z","fill":"currentColor"}}]})(props);
};
function CgPlayPauseO (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M9 9H11V15H9V9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15 15H13V9H15V15Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z","fill":"currentColor"}}]})(props);
};
function CgPlayPauseR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M9 9H11V15H9V9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15 15H13V9H15V15Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z","fill":"currentColor"}}]})(props);
};
function CgPlayPause (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M11 7H8V17H11V7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M13 17H16V7H13V17Z","fill":"currentColor"}}]})(props);
};
function CgPlayStopO (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M15 9H9V15H15V9Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z","fill":"currentColor"}}]})(props);
};
function CgPlayStopR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M15 9H9V15H15V9Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z","fill":"currentColor"}}]})(props);
};
function CgPlayStop (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M7 7H17V17H7V7Z","fill":"currentColor"}}]})(props);
};
function CgPlayTrackNextO (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM14 9C14 8.44772 14.4477 8 15 8C15.5523 8 16 8.44772 16 9V15C16 15.5523 15.5523 16 15 16C14.4477 16 14 15.5523 14 15V9ZM13 12L7 15.4641V8.5359L13 12Z","fill":"currentColor"}}]})(props);
};
function CgPlayTrackNextR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M15 9C15 8.44772 15.4477 8 16 8C16.5523 8 17 8.44772 17 9V15C17 15.5523 16.5523 16 16 16C15.4477 16 15 15.5523 15 15V9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14 12L8 15.4641V8.5359L14 12Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z","fill":"currentColor"}}]})(props);
};
function CgPlayTrackNext (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M6 17L14 12L6 7V17Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M18 7H15V12V17H18V7Z","fill":"currentColor"}}]})(props);
};
function CgPlayTrackPrevO (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M8 8C8.55228 8 9 8.44772 9 9V15C9 15.5523 8.55228 16 8 16C7.44771 16 7 15.5523 7 15V9C7 8.44772 7.44771 8 8 8ZM16 15.4641L10 12L16 8.5359V15.4641Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1Z","fill":"currentColor"}}]})(props);
};
function CgPlayTrackPrevR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M8 8C8.55228 8 9 8.44772 9 9V15C9 15.5523 8.55228 16 8 16C7.44771 16 7 15.5523 7 15V9C7 8.44772 7.44771 8 8 8ZM16 15.4641L10 12L16 8.5359V15.4641Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3ZM5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5Z","fill":"currentColor"}}]})(props);
};
function CgPlayTrackPrev (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M18 17L10 12L18 7V17Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M6 7H9V17H6V7Z","fill":"currentColor"}}]})(props);
};
function CgPlug (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M9 2C8.44771 2 8 2.44772 8 3V5C8 5.55228 8.44771 6 9 6C9.55229 6 10 5.55228 10 5V3C10 2.44772 9.55229 2 9 2ZM8 9H16V11C16 13.2091 14.2091 15 12 15C9.79086 15 8 13.2091 8 11V9ZM13 16.917C15.8377 16.441 18 13.973 18 11V7H6V11C6 13.973 8.16229 16.441 11 16.917V22C11 22.5523 11.4477 23 12 23C12.5523 23 13 22.5523 13 22V16.917ZM14 3C14 2.44772 14.4477 2 15 2C15.5523 2 16 2.44772 16 3V5C16 5.55228 15.5523 6 15 6C14.4477 6 14 5.55228 14 5V3Z","fill":"currentColor"}}]})(props);
};
function CgPocket (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3 4H21V11C21 15.9706 16.9706 20 12 20C7.02944 20 3 15.9706 3 11V4ZM1 2H23V11C23 17.0751 18.0751 22 12 22C5.92487 22 1 17.0751 1 11V2ZM11.2929 14.6935C11.6834 15.084 12.3166 15.084 12.7071 14.6935L16.9497 10.4508C17.3403 10.0603 17.3403 9.42714 16.9497 9.03661C16.5592 8.64609 15.9261 8.64609 15.5355 9.03661L12 12.5721L8.46447 9.03661C8.07394 8.64609 7.44078 8.64609 7.05025 9.03661C6.65973 9.42714 6.65973 10.0603 7.05025 10.4508L11.2929 14.6935Z","fill":"currentColor"}}]})(props);
};
function CgPokemon (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM5.07089 13C5.55612 16.3923 8.47353 19 12 19C15.5265 19 18.4439 16.3923 18.9291 13H14.8293C14.4174 14.1652 13.3062 15 12 15C10.6938 15 9.58251 14.1652 9.17068 13H5.07089ZM18.9291 11C18.4439 7.60771 15.5265 5 12 5C8.47353 5 5.55612 7.60771 5.07089 11H9.17068C9.58251 9.83481 10.6938 9 12 9C13.3062 9 14.4174 9.83481 14.8293 11H18.9291ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z","fill":"currentColor"}}]})(props);
};
function CgPolaroid (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3 4C3 2.89543 3.89543 2 5 2H19C20.1046 2 21 2.89543 21 4V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V4ZM5 4H19V15H5V4Z","fill":"currentColor"}}]})(props);
};
function CgPoll (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M19 4H5C4.44771 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44771 19.5523 4 19 4ZM5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11 7H13V17H11V7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15 13H17V17H15V13Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7 10H9V17H7V10Z","fill":"currentColor"}}]})(props);
};
function CgPresentation (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM20 12H18C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12H4C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM4.25204 14H19.748C18.8599 17.4505 15.7277 20 12 20C8.27232 20 5.14012 17.4505 4.25204 14ZM8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12H8Z","fill":"currentColor"}}]})(props);
};
function CgPrinter (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M8 4H16V6H8V4ZM18 6H22V18H18V22H6V18H2V6H6V2H18V6ZM20 16H18V14H6V16H4V8H20V16ZM8 16H16V20H8V16ZM8 10H6V12H8V10Z","fill":"currentColor"}}]})(props);
};
function CgProductHunt (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM9 16V8H13C14.6569 8 16 9.34315 16 11C16 12.6569 14.6569 14 13 14H11V16H9ZM14 11C14 11.5523 13.5523 12 13 12H11V10H13C13.5523 10 14 10.4477 14 11Z","fill":"currentColor"}}]})(props);
};
function CgProfile (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z","fill":"currentColor"}}]})(props);
};
function CgPullClear (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M4 6H2V16C2 17.1046 2.89543 18 4 18H20C21.1046 18 22 17.1046 22 16V6H20V16H4V6Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M6 12H18V14H6V12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M18 8H6V10H18V8Z","fill":"currentColor"}}]})(props);
};
function CgPushChevronDownO (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M16 14V16H8V14H16Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7.75732 8.70261L9.17153 7.2884L12 10.1168L14.8284 7.28842L16.2426 8.70264L11.9999 12.9453L7.75732 8.70261Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z","fill":"currentColor"}}]})(props);
};
function CgPushChevronDownR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M9.17154 7.28839L7.75732 8.7026L11.9999 12.9453L16.2426 8.70263L14.8284 7.28842L12 10.1168L9.17154 7.28839Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M8.00001 14H16V16H8.00001V14Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z","fill":"currentColor"}}]})(props);
};
function CgPushChevronDown (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M5 7.41421L6.41421 6L12.0711 11.6569L17.7279 6L19.1421 7.41421L12.0711 14.4853L5 7.41421Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M19 16.3432H5V18.3432H19V16.3432Z","fill":"currentColor"}}]})(props);
};
function CgPushChevronLeftO (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M10 16H8V8H10V16Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15.2974 7.75732L16.7116 9.17153L13.8832 12L16.7116 14.8284L15.2974 16.2426L11.0547 11.9999L15.2974 7.75732Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12ZM3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z","fill":"currentColor"}}]})(props);
};
function CgPushChevronLeftR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M16.6743 9.1716L15.26 7.75739L11.0174 12L15.26 16.2426L16.6742 14.8284L13.8458 12L16.6743 9.1716Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M9.96265 8.00007V16.0001H7.96265V8.00007H9.96265Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z","fill":"currentColor"}}]})(props);
};
function CgPushChevronLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M16.929 5L18.3432 6.41421L12.6863 12.0711L18.3432 17.7279L16.929 19.1421L9.85789 12.0711L16.929 5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M8 19V5H6V19H8Z","fill":"currentColor"}}]})(props);
};
function CgPushChevronRightO (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M14 8H16V16H14V8Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M8.70261 16.2427L7.2884 14.8285L10.1168 12L7.28842 9.17164L8.70264 7.75743L12.9453 12.0001L8.70261 16.2427Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12ZM21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z","fill":"currentColor"}}]})(props);
};
function CgPushChevronRightR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M7.64429 14.8284L9.0585 16.2426L13.3012 12L9.05853 7.75739L7.64432 9.1716L10.4727 12L7.64429 14.8284Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14.3559 16L14.3559 7.99996H16.3559V16H14.3559Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z","fill":"currentColor"}}]})(props);
};
function CgPushChevronRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M7.41421 5L6 6.41421L11.6569 12.0711L6 17.7279L7.41421 19.1421L14.4853 12.0711L7.41421 5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16.3432 19V5H18.3432V19H16.3432Z","fill":"currentColor"}}]})(props);
};
function CgPushChevronUpO (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM8 10V8H16V10H8ZM16.2427 15.2974L14.8285 16.7116L12 13.8832L9.17164 16.7116L7.75743 15.2974L12.0001 11.0547L16.2427 15.2974Z","fill":"currentColor"}}]})(props);
};
function CgPushChevronUpR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21ZM1 19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5C2.79086 1 1 2.79086 1 5V19ZM9.17154 16.7116L7.75732 15.2974L11.9999 11.0547L16.2426 15.2974L14.8284 16.7116L12 13.8832L9.17154 16.7116ZM8.00001 10H16V8H8.00001V10Z","fill":"currentColor"}}]})(props);
};
function CgPushChevronUp (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M5 16.929L6.41421 18.3432L12.0711 12.6863L17.7279 18.3432L19.1421 16.929L12.0711 9.85789L5 16.929Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M19 8H5V6H19V8Z","fill":"currentColor"}}]})(props);
};
function CgPushDown (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M11.0001 1H13.0001V15.4853L16.2428 12.2427L17.657 13.6569L12.0001 19.3137L6.34326 13.6569L7.75748 12.2427L11.0001 15.4853V1Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M18 20.2877H6V22.2877H18V20.2877Z","fill":"currentColor"}}]})(props);
};
function CgPushLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M22.2877 11.0001V13.0001H7.80237L11.045 16.2428L9.63079 17.657L3.97394 12.0001L9.63079 6.34326L11.045 7.75748L7.80236 11.0001H22.2877Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M3 18V6H1V18H3Z","fill":"currentColor"}}]})(props);
};
function CgPushRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M1 12.9999V10.9999H15.4853L12.2427 7.75724L13.6569 6.34303L19.3137 11.9999L13.6569 17.6567L12.2427 16.2425L15.4853 12.9999H1Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M20.2877 6V18H22.2877V6H20.2877Z","fill":"currentColor"}}]})(props);
};
function CgPushUp (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M11.0001 22.2877H13.0001V7.80237L16.2428 11.045L17.657 9.63079L12.0001 3.97394L6.34326 9.63079L7.75748 11.045L11.0001 7.80236V22.2877ZM18 3H6V1H18V3Z","fill":"currentColor"}}]})(props);
};
function CgQr (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M9 3H3V9H5V5H9V3ZM3 21V15H5V19H9V21H3ZM15 3V5H19V9H21V3H15ZM19 15H21V21H15V19H19V15ZM7 7H11V11H7V7ZM7 13H11V17H7V13ZM17 7H13V11H17V7ZM13 13H17V17H13V13Z","fill":"currentColor"}}]})(props);
};
function CgQuoteO (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M20 5H4V19H20V5ZM4 3C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V5C22 3.89543 21.1046 3 20 3H4Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M9.06723 9.19629H12.0672L9.93267 14.8038H6.93267L9.06723 9.19629Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14.0672 9.19629H17.0672L14.9327 14.8038H11.9327L14.0672 9.19629Z","fill":"currentColor"}}]})(props);
};
function CgQuote (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M9.13456 9H12.1346L10 14.6075H7L9.13456 9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14.1346 9H17.1346L15 14.6075H12L14.1346 9Z","fill":"currentColor"}}]})(props);
};
function CgRadioCheck (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z","fill":"currentColor"}}]})(props);
};
function CgRadioChecked (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z","fill":"currentColor"}}]})(props);
};
function CgRatio (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M4 6V12H6V8L10 8V6H4Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M20 18H14V16H18V12H20V18Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M4 2C1.79086 2 0 3.79086 0 6V18C0 20.2091 1.79086 22 4 22H20C22.2091 22 24 20.2091 24 18V6C24 3.79086 22.2091 2 20 2H4ZM20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z","fill":"currentColor"}}]})(props);
};
function CgRead (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M7 14C8.10457 14 9 13.1046 9 12C9 10.8954 8.10457 10 7 10C5.89543 10 5 10.8954 5 12C5 13.1046 5.89543 14 7 14ZM10.4649 10C9.77325 8.8044 8.48056 8 7 8C5.13616 8 3.57006 9.27477 3.12602 11H2C1.44772 11 1 11.4477 1 12C1 12.5523 1.44772 13 2 13H3.12602C3.57006 14.7252 5.13616 16 7 16C9.20914 16 11 14.2091 11 12H13C13 14.2091 14.7909 16 17 16C18.8638 16 20.4299 14.7252 20.874 13H22C22.5523 13 23 12.5523 23 12C23 11.4477 22.5523 11 22 11H20.874C20.4299 9.27477 18.8638 8 17 8C15.5194 8 14.2267 8.8044 13.5351 10H10.4649ZM15 12C15 13.1046 15.8954 14 17 14C18.1046 14 19 13.1046 19 12C19 10.8954 18.1046 10 17 10C15.8954 10 15 10.8954 15 12Z","fill":"currentColor"}}]})(props);
};
function CgReadme (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M4 5.5H9C10.1046 5.5 11 6.39543 11 7.5V16.5C11 17.0523 10.5523 17.5 10 17.5H4C3.44772 17.5 3 17.0523 3 16.5V6.5C3 5.94772 3.44772 5.5 4 5.5ZM14 19.5C13.6494 19.5 13.3128 19.4398 13 19.3293V19.5C13 20.0523 12.5523 20.5 12 20.5C11.4477 20.5 11 20.0523 11 19.5V19.3293C10.6872 19.4398 10.3506 19.5 10 19.5H4C2.34315 19.5 1 18.1569 1 16.5V6.5C1 4.84315 2.34315 3.5 4 3.5H9C10.1947 3.5 11.2671 4.02376 12 4.85418C12.7329 4.02376 13.8053 3.5 15 3.5H20C21.6569 3.5 23 4.84315 23 6.5V16.5C23 18.1569 21.6569 19.5 20 19.5H14ZM13 7.5V16.5C13 17.0523 13.4477 17.5 14 17.5H20C20.5523 17.5 21 17.0523 21 16.5V6.5C21 5.94772 20.5523 5.5 20 5.5H15C13.8954 5.5 13 6.39543 13 7.5ZM5 7.5H9V9.5H5V7.5ZM15 7.5H19V9.5H15V7.5ZM19 10.5H15V12.5H19V10.5ZM5 10.5H9V12.5H5V10.5ZM19 13.5H15V15.5H19V13.5ZM5 13.5H9V15.5H5V13.5Z","fill":"currentColor"}}]})(props);
};
function CgRecord (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z","fill":"currentColor"}}]})(props);
};
function CgRedo (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M13.1459 11.0499L12.9716 9.05752L15.3462 8.84977C14.4471 7.98322 13.2242 7.4503 11.8769 7.4503C9.11547 7.4503 6.87689 9.68888 6.87689 12.4503C6.87689 15.2117 9.11547 17.4503 11.8769 17.4503C13.6977 17.4503 15.2911 16.4771 16.1654 15.0224L18.1682 15.5231C17.0301 17.8487 14.6405 19.4503 11.8769 19.4503C8.0109 19.4503 4.87689 16.3163 4.87689 12.4503C4.87689 8.58431 8.0109 5.4503 11.8769 5.4503C13.8233 5.4503 15.5842 6.24474 16.853 7.52706L16.6078 4.72412L18.6002 4.5498L19.1231 10.527L13.1459 11.0499Z","fill":"currentColor"}}]})(props);
};
function CgRemote (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M17.0514 4.32178L18.4656 5.73599L14.223 9.97863L18.4656 14.2213L17.0514 15.6355L11.3946 9.97863L17.0514 4.32178Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M6.94864 19.6785L5.53442 18.2643L9.77706 14.0216L5.53442 9.77897L6.94864 8.36476L12.6055 14.0216L6.94864 19.6785Z","fill":"currentColor"}}]})(props);
};
function CgRemoveR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H8Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z","fill":"currentColor"}}]})(props);
};
function CgRemove (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H8Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z","fill":"currentColor"}}]})(props);
};
function CgRename (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M10 4H8V6H5C3.34315 6 2 7.34315 2 9V15C2 16.6569 3.34315 18 5 18H8V20H10V4ZM8 8V16H5C4.44772 16 4 15.5523 4 15V9C4 8.44772 4.44772 8 5 8H8Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M19 16H12V18H19C20.6569 18 22 16.6569 22 15V9C22 7.34315 20.6569 6 19 6H12V8H19C19.5523 8 20 8.44771 20 9V15C20 15.5523 19.5523 16 19 16Z","fill":"currentColor"}}]})(props);
};
function CgReorder (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M3 4C3 3.44772 3.44772 3 4 3H12C12.5523 3 13 3.44772 13 4C13 4.55228 12.5523 5 12 5H4C3.44772 5 3 4.55228 3 4Z","fill":"currentColor","fillOpacity":"0.5"}},{"tag":"path","attr":{"d":"M3 12C3 11.4477 3.44772 11 4 11H12C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13H4C3.44772 13 3 12.5523 3 12Z","fill":"currentColor","fillOpacity":"0.5"}},{"tag":"path","attr":{"d":"M3 16C3 15.4477 3.44772 15 4 15H12C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17H4C3.44772 17 3 16.5523 3 16Z","fill":"currentColor","fillOpacity":"0.5"}},{"tag":"path","attr":{"d":"M3 20C3 19.4477 3.44772 19 4 19H12C12.5523 19 13 19.4477 13 20C13 20.5523 12.5523 21 12 21H4C3.44772 21 3 20.5523 3 20Z","fill":"currentColor","fillOpacity":"0.5"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M15.1707 9C15.5825 10.1652 16.6938 11 18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.6938 5 15.5825 5.83481 15.1707 7H4C3.44772 7 3 7.44772 3 8C3 8.55228 3.44772 9 4 9H15.1707ZM19 8C19 8.55228 18.5523 9 18 9C17.4477 9 17 8.55228 17 8C17 7.44772 17.4477 7 18 7C18.5523 7 19 7.44772 19 8Z","fill":"currentColor"}}]})(props);
};
function CgRepeat (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M18.3701 7.99993L13.8701 10.598V8.99993H6.88989V12.9999H4.88989V6.99993H13.8701V5.40186L18.3701 7.99993Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M10.1299 16.9999H19.1101V10.9999H17.1101V14.9999H10.1299V13.4019L5.62988 15.9999L10.1299 18.598V16.9999Z","fill":"currentColor"}}]})(props);
};
function CgRing (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M6.34326 3.68567C6.83159 3.19735 7.36734 2.78535 7.93569 2.44968C10.4352 0.97348 13.5651 0.97348 16.0645 2.44968C16.6329 2.78535 17.1686 3.19735 17.657 3.68567L12.0001 9.34253L6.34326 3.68567ZM12.0001 6.5141L9.4131 3.92709C11.0447 3.14768 12.9556 3.14768 14.5871 3.92709L12.0001 6.5141Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M2 12.6576C2 9.52653 3.43899 6.73156 5.69172 4.89796L7.11528 6.32152C5.22043 7.78449 4 10.0785 4 12.6576C4 17.0759 7.58172 20.6576 12 20.6576C16.4183 20.6576 20 17.0759 20 12.6576C20 10.0785 18.7796 7.78451 16.8847 6.32154L18.3083 4.89798C20.561 6.73158 22 9.52654 22 12.6576C22 18.1804 17.5228 22.6576 12 22.6576C6.47715 22.6576 2 18.1804 2 12.6576Z","fill":"currentColor"}}]})(props);
};
function CgRowFirst (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"g","attr":{"opacity":"0.5"},"child":[{"tag":"path","attr":{"d":"M6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H14C14.5523 13 15 12.5523 15 12C15 11.4477 14.5523 11 14 11H6Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M6 15C5.44772 15 5 15.4477 5 16C5 16.5523 5.44772 17 6 17H14C14.5523 17 15 16.5523 15 16C15 15.4477 14.5523 15 14 15H6Z","fill":"currentColor"}}]},{"tag":"path","attr":{"d":"M5 8C5 7.44772 5.44772 7 6 7H18C18.5523 7 19 7.44772 19 8C19 8.55228 18.5523 9 18 9H6C5.44772 9 5 8.55228 5 8Z","fill":"currentColor"}}]})(props);
};
function CgRowLast (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"g","attr":{"opacity":"0.5"},"child":[{"tag":"path","attr":{"d":"M6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11H14C14.5523 11 15 11.4477 15 12C15 12.5523 14.5523 13 14 13H6Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M6 9C5.44772 9 5 8.55228 5 8C5 7.44772 5.44772 7 6 7H14C14.5523 7 15 7.44772 15 8C15 8.55228 14.5523 9 14 9H6Z","fill":"currentColor"}}]},{"tag":"path","attr":{"d":"M5 16C5 16.5523 5.44772 17 6 17H18C18.5523 17 19 16.5523 19 16C19 15.4477 18.5523 15 18 15H6C5.44772 15 5 15.4477 5 16Z","fill":"currentColor"}}]})(props);
};
function CgRuler (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3 6C1.34315 6 0 7.34315 0 9V16C0 17.6569 1.34315 19 3 19H21C22.6569 19 24 17.6569 24 16V9C24 7.34315 22.6569 6 21 6H3ZM9 8H7V13C7 13.5523 6.55228 14 6 14C5.44772 14 5 13.5523 5 13V8H3C2.44772 8 2 8.44772 2 9V16C2 16.5523 2.44772 17 3 17H21C21.5523 17 22 16.5523 22 16V9C22 8.44772 21.5523 8 21 8H19V11C19 11.5523 18.5523 12 18 12C17.4477 12 17 11.5523 17 11V8H15V13C15 13.5523 14.5523 14 14 14C13.4477 14 13 13.5523 13 13V8H11V11C11 11.5523 10.5523 12 10 12C9.44771 12 9 11.5523 9 11V8Z","fill":"currentColor"}}]})(props);
};
function CgSandClock (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M13 6H11V7C11 7.55228 11.4477 8 12 8C12.5523 8 13 7.55228 13 7V6Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M6 2V4H7V7C7 9.76142 9.23858 12 12 12C9.23858 12 7 14.2386 7 17V20H6V22H18V20H17V17C17 14.2386 14.7614 12 12 12C14.7614 12 17 9.76142 17 7V4H18V2H6ZM9 4H15V7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7V4ZM9 17V20H15V17C15 15.3431 13.6569 14 12 14C10.3431 14 9 15.3431 9 17Z","fill":"currentColor"}}]})(props);
};
function CgScan (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M11 3H13V21H11V3Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5 8C5 7.44771 5.44772 7 6 7H9V5H6C4.34315 5 3 6.34315 3 8V16C3 17.6569 4.34315 19 6 19H9V17H6C5.44772 17 5 16.5523 5 16V8Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M19 8C19 7.44771 18.5523 7 18 7H15V5H18C19.6569 5 21 6.34315 21 8V16C21 17.6569 19.6569 19 18 19H15V17H18C18.5523 17 19 16.5523 19 16V8Z","fill":"currentColor"}}]})(props);
};
function CgScreenMirror (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M5 8H19V14H16V16H21V6H3V16H8V14H5V8Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16.3301 19L12 13L7.66987 19H16.3301Z","fill":"currentColor"}}]})(props);
};
function CgScreenShot (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12 8V6H8V10H10V8H12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14 14H16V18H12V16H14V14Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M4 3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V3ZM6 20V4H18V20H6Z","fill":"currentColor"}}]})(props);
};
function CgScreenWide (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M11 16H3C1.34315 16 0 14.6569 0 13V8C0 6.34315 1.34315 5 3 5H21C22.6569 5 24 6.34315 24 8V13C24 14.6569 22.6569 16 21 16H13V17H15C15.5523 17 16 17.4477 16 18C16 18.5523 15.5523 19 15 19H9C8.44771 19 8 18.5523 8 18C8 17.4477 8.44771 17 9 17H11V16ZM3 7H21C21.5523 7 22 7.44772 22 8V13C22 13.5523 21.5523 14 21 14H3C2.44772 14 2 13.5523 2 13V8C2 7.44772 2.44772 7 3 7Z","fill":"currentColor"}}]})(props);
};
function CgScreen (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M11 17H4C2.34315 17 1 15.6569 1 14V6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V14C23 15.6569 21.6569 17 20 17H13V19H16C16.5523 19 17 19.4477 17 20C17 20.5523 16.5523 21 16 21H8C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19H11V17ZM4 5H20C20.5523 5 21 5.44772 21 6V14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14V6C3 5.44772 3.44772 5 4 5Z","fill":"currentColor"}}]})(props);
};
function CgScrollH (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M7.18188 9.17154L5.76766 7.75732L1.52502 12L5.76766 16.2426L7.18188 14.8284L4.35345 12L7.18188 9.17154Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16.8181 14.8284L18.2323 16.2426L22.4749 12L18.2323 7.75733L16.8181 9.17155L19.6465 12L16.8181 14.8284Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M14.9999 12C14.9999 13.6569 13.6567 15 11.9999 15C10.343 15 8.99988 13.6569 8.99988 12C8.99988 10.3431 10.343 9 11.9999 9C13.6567 9 14.9999 10.3431 14.9999 12ZM12.9999 12C12.9999 12.5523 12.5522 13 11.9999 13C11.4476 13 10.9999 12.5523 10.9999 12C10.9999 11.4477 11.4476 11 11.9999 11C12.5522 11 12.9999 11.4477 12.9999 12Z","fill":"currentColor"}}]})(props);
};
function CgScrollV (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M9.17154 16.8182L7.75732 18.2324L12 22.475L16.2426 18.2324L14.8284 16.8182L12 19.6466L9.17154 16.8182Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14.8284 7.182L16.2426 5.76779L12 1.52515L7.75733 5.76779L9.17155 7.182L12 4.35357L14.8284 7.182Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 9.00018C13.6569 9.00018 15 10.3433 15 12.0002C15 13.657 13.6569 15.0002 12 15.0002C10.3431 15.0002 9 13.657 9 12.0002C9 10.3433 10.3431 9.00018 12 9.00018ZM12 11.0002C12.5523 11.0002 13 11.4479 13 12.0002C13 12.5525 12.5523 13.0002 12 13.0002C11.4477 13.0002 11 12.5525 11 12.0002C11 11.4479 11.4477 11.0002 12 11.0002Z","fill":"currentColor"}}]})(props);
};
function CgSearchFound (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M7.66542 10.2366L9.19751 8.951L10.4831 10.4831L13.5473 7.91194L14.8328 9.44402L10.2366 13.3007L7.66542 10.2366Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M16.2071 4.89344C19.0923 7.77862 19.3131 12.3193 16.8693 15.4578C16.8846 15.4713 16.8996 15.4854 16.9143 15.5L21.1569 19.7427C21.5474 20.1332 21.5474 20.7664 21.1569 21.1569C20.7664 21.5474 20.1332 21.5474 19.7427 21.1569L15.5 16.9143C15.4854 16.8996 15.4713 16.8846 15.4578 16.8693C12.3193 19.3131 7.77862 19.0923 4.89344 16.2071C1.76924 13.083 1.76924 8.01763 4.89344 4.89344C8.01763 1.76924 13.083 1.76924 16.2071 4.89344ZM14.7929 14.7929C17.1361 12.4498 17.1361 8.6508 14.7929 6.30765C12.4498 3.96451 8.6508 3.96451 6.30765 6.30765C3.96451 8.6508 3.96451 12.4498 6.30765 14.7929C8.6508 17.1361 12.4498 17.1361 14.7929 14.7929Z","fill":"currentColor"}}]})(props);
};
function CgSearchLoading (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M8.55024 10.5503C8.55024 11.1026 8.10253 11.5503 7.55024 11.5503C6.99796 11.5503 6.55024 11.1026 6.55024 10.5503C6.55024 9.99801 6.99796 9.55029 7.55024 9.55029C8.10253 9.55029 8.55024 9.99801 8.55024 10.5503Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M10.5502 11.5503C11.1025 11.5503 11.5502 11.1026 11.5502 10.5503C11.5502 9.99801 11.1025 9.55029 10.5502 9.55029C9.99796 9.55029 9.55024 9.99801 9.55024 10.5503C9.55024 11.1026 9.99796 11.5503 10.5502 11.5503Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M13.5502 11.5503C14.1025 11.5503 14.5502 11.1026 14.5502 10.5503C14.5502 9.99801 14.1025 9.55029 13.5502 9.55029C12.998 9.55029 12.5502 9.99801 12.5502 10.5503C12.5502 11.1026 12.998 11.5503 13.5502 11.5503Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M16.2071 4.89344C19.0922 7.7786 19.313 12.3192 16.8693 15.4577C16.8846 15.4712 16.8996 15.4853 16.9142 15.4999L21.1568 19.7426C21.5473 20.1331 21.5473 20.7663 21.1568 21.1568C20.7663 21.5473 20.1331 21.5473 19.7426 21.1568L15.5 16.9141C15.4853 16.8995 15.4713 16.8846 15.4578 16.8693C12.3193 19.3131 7.77858 19.0923 4.89338 16.2071C1.76918 13.083 1.76918 8.01763 4.89338 4.89344C8.01757 1.76924 13.0829 1.76924 16.2071 4.89344ZM6.30759 14.7929C8.65074 17.1361 12.4497 17.1361 14.7929 14.7929C17.136 12.4498 17.136 8.6508 14.7929 6.30765C12.4497 3.96451 8.65074 3.96451 6.30759 6.30765C3.96445 8.6508 3.96445 12.4498 6.30759 14.7929Z","fill":"currentColor"}}]})(props);
};
function CgSearch (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z","fill":"currentColor"}}]})(props);
};
function CgSelectO (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M9.17154 11.508L7.75732 10.0938L12 5.85114L16.2426 10.0938L14.8284 11.508L12 8.67956L9.17154 11.508Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M9.17154 12.492L7.75732 13.9062L12 18.1489L16.2426 13.9062L14.8284 12.492L12 15.3204L9.17154 12.492Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z","fill":"currentColor"}}]})(props);
};
function CgSelectR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M9.17154 11.508L7.75732 10.0938L12 5.85113L16.2426 10.0938L14.8284 11.508L12 8.67956L9.17154 11.508Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M9.17154 12.492L7.75732 13.9062L12 18.1489L16.2426 13.9062L14.8284 12.492L12 15.3204L9.17154 12.492Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z","fill":"currentColor"}}]})(props);
};
function CgSelect (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M6 9.65685L7.41421 11.0711L11.6569 6.82843L15.8995 11.0711L17.3137 9.65685L11.6569 4L6 9.65685Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M6 14.4433L7.41421 13.0291L11.6569 17.2717L15.8995 13.0291L17.3137 14.4433L11.6569 20.1001L6 14.4433Z","fill":"currentColor"}}]})(props);
};
function CgServer (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M9 6C8.44772 6 8 6.44772 8 7C8 7.55228 8.44772 8 9 8H15C15.5523 8 16 7.55228 16 7C16 6.44772 15.5523 6 15 6H9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M9 10C8.44772 10 8 10.4477 8 11C8 11.5523 8.44772 12 9 12H15C15.5523 12 16 11.5523 16 11C16 10.4477 15.5523 10 15 10H9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M4 5C4 3.34315 5.34315 2 7 2H17C18.6569 2 20 3.34315 20 5V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V5ZM7 4H17C17.5523 4 18 4.44772 18 5V19C18 19.5523 17.5523 20 17 20H7C6.44772 20 6 19.5523 6 19V5C6 4.44772 6.44771 4 7 4Z","fill":"currentColor"}}]})(props);
};
function CgServerless (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M11.7872 6H5V9H10.6953L11.7872 6Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M9.96735 11H5V14H8.87544L9.96735 11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11.0038 14L12.0957 11H20V14H11.0038Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M8.1475 16H5V19H7.05559L8.1475 16Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M9.18394 19L10.2759 16H20V19H9.18394Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12.8236 9L13.9156 6H20V9H12.8236Z","fill":"currentColor"}}]})(props);
};
function CgShapeCircle (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z","fill":"currentColor"}}]})(props);
};
function CgShapeHalfCircle (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M16 4C11.5817 4 8 7.58172 8 12C8 16.4183 11.5817 20 16 20V17C13.2386 17 11 14.7614 11 12C11 9.23858 13.2386 7 16 7V4Z","fill":"currentColor"}}]})(props);
};
function CgShapeHexagon (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M6 15.2348L12 18.5681L18 15.2348V8.76521L12 5.43188L6 8.76521V15.2348ZM12 2L3 7V17L12 22L21 17V7L12 2Z","fill":"currentColor"}}]})(props);
};
function CgShapeRhombus (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 6.34315L6.34317 12L12 17.6569L17.6569 12L12 6.34315ZM2.10052 12L12 21.8995L21.8995 12L12 2.10051L2.10052 12Z","fill":"currentColor"}}]})(props);
};
function CgShapeSquare (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M17 7H7V17H17V7ZM4 4V20H20V4H4Z","fill":"currentColor"}}]})(props);
};
function CgShapeTriangle (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M11.6603 5L3 20H20.3205L11.6603 5ZM11.6603 11L8.19615 17H15.1244L11.6603 11Z","fill":"currentColor"}}]})(props);
};
function CgShapeZigzag (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M2.31212 9L1 10.5094L4.77355 13.7897L6.28297 15.1018L7.59509 13.5924L9.13456 11.8214L11.3988 13.7897L12.9082 15.1018L14.2203 13.5924L15.7584 11.823L18.0209 13.7897L19.5303 15.1018L20.8424 13.5924L22.8106 11.3283L21.3012 10.0162L19.333 12.2803L15.5594 9L14.2473 10.5094L14.249 10.5109L12.7109 12.2803L8.93736 9L8.05395 10.0163L6.08567 12.2803L2.31212 9Z","fill":"currentColor"}}]})(props);
};
function CgShare (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 6.12549 15.0077 6.24919 15.0227 6.37063L8.08261 9.84066C7.54305 9.32015 6.80891 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15C6.80891 15 7.54305 14.6798 8.08261 14.1593L15.0227 17.6294C15.0077 17.7508 15 17.8745 15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C17.1911 15 16.457 15.3202 15.9174 15.8407L8.97733 12.3706C8.99229 12.2492 9 12.1255 9 12C9 11.8745 8.99229 11.7508 8.97733 11.6294L15.9174 8.15934C16.457 8.67985 17.1911 9 18 9Z","fill":"currentColor"}}]})(props);
};
function CgShield (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M7 8V13C7 15.7614 9.23858 18 12 18C14.7614 18 17 15.7614 17 13V8H7ZM5 4H19V13C19 16.866 15.866 20 12 20C8.13401 20 5 16.866 5 13V4Z","fill":"currentColor"}}]})(props);
};
function CgShoppingBag (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M5 4H19C19.5523 4 20 4.44771 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44771 4 5 4ZM2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM12 12C9.23858 12 7 9.31371 7 6H9C9 8.56606 10.6691 10 12 10C13.3309 10 15 8.56606 15 6H17C17 9.31371 14.7614 12 12 12Z","fill":"currentColor"}}]})(props);
};
function CgShoppingCart (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z","fill":"currentColor"}}]})(props);
};
function CgShortcut (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M16.1925 7.70711C15.8019 7.31658 15.1688 7.31658 14.7782 7.70711L7.70718 14.7782C7.31665 15.1687 7.31665 15.8019 7.70718 16.1924C8.0977 16.5829 8.73087 16.5829 9.12139 16.1924L16.1925 9.12132C16.583 8.7308 16.583 8.09763 16.1925 7.70711Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5Z","fill":"currentColor"}}]})(props);
};
function CgShutterstock (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12 17C12 17.5523 12.4477 18 13 18H17C17.5523 18 18 17.5523 18 17V13C18 12.4477 17.5523 12 17 12H16V16H12V17Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11 6C11.5523 6 12 6.44772 12 7V8H8V12H7C6.44772 12 6 11.5523 6 11V7C6 6.44772 6.44772 6 7 6H11Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5ZM19 4H5C4.44771 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44771 19.5523 4 19 4Z","fill":"currentColor"}}]})(props);
};
function CgSidebarOpen (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3 4H21V20H3V4ZM9 6H19V18H9V6Z","fill":"currentColor"}}]})(props);
};
function CgSidebarRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3 4H17V20H3V4ZM5 6H15V18H5V6Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M21 4H19V20H21V4Z","fill":"currentColor"}}]})(props);
};
function CgSidebar (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M21 20H7V4H21V20ZM19 18H9V6H19V18Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M3 20H5V4H3V20Z","fill":"currentColor"}}]})(props);
};
function CgSignal (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7 15C7 14.4477 7.44772 14 8 14C8.55228 14 9 14.4477 9 15V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V15Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12 10C11.4477 10 11 10.4477 11 11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V11C13 10.4477 12.5523 10 12 10Z","fill":"currentColor"}}]})(props);
};
function CgSize (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 6V4H20V20H12V18H8V16H4V8H8V6H12ZM14 6H18V18H14V6ZM12 8H10V16H12V8ZM8 10V14H6V10H8Z","fill":"currentColor"}}]})(props);
};
function CgSketch (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M5.20879 3H18.903L20.1118 10.2527L12.0559 21.1858L4 10.2527L5.20879 3ZM6.90304 5L6.11184 9.74726L12.0559 17.8142L18 9.74726L17.2088 5H6.90304Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M8.05592 8H16.0559V10H8.05592V8Z","fill":"currentColor"}}]})(props);
};
function CgSlack (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M13 10C13 11.1046 13.8954 12 15 12C16.1046 12 17 11.1046 17 10V5C17 3.89543 16.1046 3 15 3C13.8954 3 13 3.89543 13 5V10ZM5 8C3.89543 8 3 8.89543 3 10C3 11.1046 3.89543 12 5 12H10C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8H5ZM15 13C13.8954 13 13 13.8954 13 15C13 16.1046 13.8954 17 15 17H20C21.1046 17 22 16.1046 22 15C22 13.8954 21.1046 13 20 13H15ZM10 22C8.89543 22 8 21.1046 8 20L8 15C8 13.8954 8.89543 13 10 13C11.1046 13 12 13.8954 12 15V20C12 21.1046 11.1046 22 10 22ZM8 5C8 3.89543 8.89543 3 10 3C11.1046 3 12 3.89543 12 5V7H10C8.89543 7 8 6.10457 8 5ZM3 15C3 16.1046 3.89543 17 5 17C6.10457 17 7 16.1046 7 15V13H5C3.89543 13 3 13.8954 3 15ZM17 20C17 21.1046 16.1046 22 15 22C13.8954 22 13 21.1046 13 20V18H15C16.1046 18 17 18.8954 17 20ZM22 10C22 8.89543 21.1046 8 20 8C18.8954 8 18 8.89543 18 10V12H20C21.1046 12 22 11.1046 22 10Z","fill":"currentColor"}}]})(props);
};
function CgSleep (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM16.899 17C15.6364 18.2372 13.9073 19 12 19C10.0927 19 8.36355 18.2372 7.10102 17H16.899ZM18.3264 15C18.7583 14.0907 19 13.0736 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 13.0736 5.24169 14.0907 5.67363 15H18.3264Z","fill":"currentColor"}}]})(props);
};
function CgSmartHomeBoiler (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M5 5C5 2.79086 6.79086 1 9 1H15C17.2091 1 19 2.79086 19 5V21H15.144L15.8865 22.9999H13.8865L13.144 21H11.144L11.8865 22.9999H9.88653L9.14397 21H5V5ZM9 3H15C16.1046 3 17 3.89543 17 5V7H7V5C7 3.89543 7.89543 3 9 3ZM7 9H17V19H7V9Z","fill":"currentColor"}}]})(props);
};
function CgSmartHomeCooker (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M15 16C15 17.6569 13.6569 19 12 19C10.3431 19 9 17.6569 9 16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16ZM13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M15 1H9V3H11V5H7C4.79086 5 3 6.79086 3 9V19C3 21.2091 4.79086 23 7 23H17C19.2091 23 21 21.2091 21 19V9C21 6.79086 19.2091 5 17 5H13V3H15V1ZM17 7H7C5.89543 7 5 7.89543 5 9H19C19 7.89543 18.1046 7 17 7ZM19 11H5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V11Z","fill":"currentColor"}}]})(props);
};
function CgSmartHomeHeat (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M17 11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H10V15H7C5.34315 15 4 13.6569 4 12C4 10.3431 5.34315 9 7 9H17C18.6569 9 20 10.3431 20 12C20 13.6569 18.6569 15 17 15H14V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M0 12C0 8.13401 3.13401 5 7 5H17C20.866 5 24 8.13401 24 12C24 15.866 20.866 19 17 19H7C3.13401 19 0 15.866 0 12ZM7 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7Z","fill":"currentColor"}}]})(props);
};
function CgSmartHomeLight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M7.03435 6.5C7.03435 3.73858 9.27293 1.5 12.0344 1.5C14.7958 1.5 17.0344 3.73858 17.0344 6.5V10.5C17.0344 13.2614 14.7958 15.5 12.0344 15.5C9.27293 15.5 7.03435 13.2614 7.03435 10.5V6.5ZM15.0344 6.5V10.5C15.0344 12.1569 13.6912 13.5 12.0344 13.5C10.3775 13.5 9.03435 12.1569 9.03435 10.5V6.5C9.03435 4.84315 10.3775 3.5 12.0344 3.5C13.6912 3.5 15.0344 4.84315 15.0344 6.5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12.0344 16.5C11.4821 16.5 11.0344 16.9477 11.0344 17.5V21.5C11.0344 22.0523 11.4821 22.5 12.0344 22.5C12.5866 22.5 13.0344 22.0523 13.0344 21.5V17.5C13.0344 16.9477 12.5866 16.5 12.0344 16.5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7.74433 16.4397C7.93323 15.9207 8.50707 15.6531 9.02605 15.842C9.54502 16.0309 9.81261 16.6048 9.62372 17.1237L8.25564 20.8825C8.06675 21.4015 7.4929 21.6691 6.97393 21.4802C6.45495 21.2913 6.18736 20.7174 6.37625 20.1985L7.74433 16.4397Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14.974 15.8421C14.4551 16.031 14.1875 16.6048 14.3764 17.1238L15.7445 20.8825C15.9333 21.4015 16.5072 21.6691 17.0262 21.4802C17.5451 21.2913 17.8127 20.7175 17.6238 20.1985L16.2558 16.4397C16.0669 15.9208 15.493 15.6532 14.974 15.8421Z","fill":"currentColor"}}]})(props);
};
function CgSmartHomeRefrigerator (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M9 6C9 5.44772 9.44772 5 10 5C10.5523 5 11 5.44772 11 6V8C11 8.55228 10.5523 9 10 9C9.44772 9 9 8.55228 9 8V6Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M10 13C9.44772 13 9 13.4477 9 14V16C9 16.5523 9.44772 17 10 17C10.5523 17 11 16.5523 11 16V14C11 13.4477 10.5523 13 10 13Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M5 4C5 2.34315 6.34315 1 8 1H16C17.6569 1 19 2.34315 19 4V20C19 21.6569 17.6569 23 16 23H8C6.34315 23 5 21.6569 5 20V4ZM8 3H16C16.5523 3 17 3.44772 17 4V10H7V4C7 3.44772 7.44772 3 8 3ZM7 12H17V20C17 20.5523 16.5523 21 16 21H8C7.44772 21 7 20.5523 7 20V12Z","fill":"currentColor"}}]})(props);
};
function CgSmartHomeWashMachine (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M6 4H18C18.5523 4 19 4.44772 19 5V8H5V5C5 4.44772 5.44771 4 6 4ZM19 19V10H5V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19ZM3 5C3 3.34315 4.34315 2 6 2H18C19.6569 2 21 3.34315 21 5V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V5ZM7 5C6.44772 5 6 5.44772 6 6C6 6.55228 6.44772 7 7 7H9C9.55228 7 10 6.55228 10 6C10 5.44772 9.55228 5 9 5H7ZM14 7C14.5523 7 15 6.55228 15 6C15 5.44772 14.5523 5 14 5C13.4477 5 13 5.44772 13 6C13 6.55228 13.4477 7 14 7ZM18 6C18 6.55228 17.5523 7 17 7C16.4477 7 16 6.55228 16 6C16 5.44772 16.4477 5 17 5C17.5523 5 18 5.44772 18 6ZM14 15C14 16.1046 13.1046 17 12 17C10.8954 17 10 16.1046 10 15C10 13.8954 10.8954 13 12 13C13.1046 13 14 13.8954 14 15ZM16 15C16 17.2091 14.2091 19 12 19C9.79086 19 8 17.2091 8 15C8 12.7909 9.79086 11 12 11C14.2091 11 16 12.7909 16 15Z","fill":"currentColor"}}]})(props);
};
function CgSmartphoneChip (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M9 22C9 22.5523 8.55228 23 8 23C7.44772 23 7 22.5523 7 22C7 21.4477 7.44772 21 8 21C8.55228 21 9 21.4477 9 22ZM13 22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22C11 21.4477 11.4477 21 12 21C12.5523 21 13 21.4477 13 22ZM16 23C16.5523 23 17 22.5523 17 22C17 21.4477 16.5523 21 16 21C15.4477 21 15 21.4477 15 22C15 22.5523 15.4477 23 16 23Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M9 2C9 2.55228 8.55228 3 8 3C7.44772 3 7 2.55228 7 2C7 1.44772 7.44772 1 8 1C8.55228 1 9 1.44772 9 2ZM13 2C13 2.55228 12.5523 3 12 3C11.4477 3 11 2.55228 11 2C11 1.44772 11.4477 1 12 1C12.5523 1 13 1.44772 13 2ZM16 3C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1C15.4477 1 15 1.44772 15 2C15 2.55228 15.4477 3 16 3ZM9 22C9 22.5523 8.55228 23 8 23C7.44772 23 7 22.5523 7 22C7 21.4477 7.44772 21 8 21C8.55228 21 9 21.4477 9 22ZM13 22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22C11 21.4477 11.4477 21 12 21C12.5523 21 13 21.4477 13 22ZM16 23C16.5523 23 17 22.5523 17 22C17 21.4477 16.5523 21 16 21C15.4477 21 15 21.4477 15 22C15 22.5523 15.4477 23 16 23ZM23 16C23 15.4477 22.5523 15 22 15C21.4477 15 21 15.4477 21 16C21 16.5523 21.4477 17 22 17C22.5523 17 23 16.5523 23 16ZM23 12C23 11.4477 22.5523 11 22 11C21.4477 11 21 11.4477 21 12C21 12.5523 21.4477 13 22 13C22.5523 13 23 12.5523 23 12ZM22 7C22.5523 7 23 7.44771 23 8C23 8.55229 22.5523 9 22 9C21.4477 9 21 8.55229 21 8C21 7.44771 21.4477 7 22 7ZM2 15C2.55228 15 3 15.4477 3 16C3 16.5523 2.55228 17 2 17C1.44772 17 1 16.5523 1 16C1 15.4477 1.44772 15 2 15ZM2 11C2.55228 11 3 11.4477 3 12C3 12.5523 2.55228 13 2 13C1.44772 13 1 12.5523 1 12C1 11.4477 1.44772 11 2 11ZM3 8C3 7.44771 2.55228 7 2 7C1.44772 7 1 7.44771 1 8C1 8.55229 1.44772 9 2 9C2.55228 9 3 8.55229 3 8ZM17 6H7C6.44772 6 6 6.44772 6 7V17C6 17.5523 6.44772 18 7 18H17C17.5523 18 18 17.5523 18 17V7C18 6.44772 17.5523 6 17 6ZM7 4C5.34315 4 4 5.34315 4 7V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V7C20 5.34315 18.6569 4 17 4H7ZM14 10H10V14H14V10ZM8 8V16H16V8H8Z","fill":"currentColor"}}]})(props);
};
function CgSmartphoneRam (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M5 4C5 4.55228 4.55228 5 4 5C3.44772 5 3 4.55228 3 4C3 3.44772 3.44772 3 4 3C4.55228 3 5 3.44772 5 4Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M9 4C9 4.55228 8.55228 5 8 5C7.44772 5 7 4.55228 7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4C11 4.55228 11.4477 5 12 5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M17 4C17 4.55228 16.5523 5 16 5C15.4477 5 15 4.55228 15 4C15 3.44772 15.4477 3 16 3C16.5523 3 17 3.44772 17 4Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M20 5C20.5523 5 21 4.55228 21 4C21 3.44772 20.5523 3 20 3C19.4477 3 19 3.44772 19 4C19 4.55228 19.4477 5 20 5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5 20C5 20.5523 4.55228 21 4 21C3.44772 21 3 20.5523 3 20C3 19.4477 3.44772 19 4 19C4.55228 19 5 19.4477 5 20Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12 21C12.5523 21 13 20.5523 13 20C13 19.4477 12.5523 19 12 19C11.4477 19 11 19.4477 11 20C11 20.5523 11.4477 21 12 21Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M17 20C17 20.5523 16.5523 21 16 21C15.4477 21 15 20.5523 15 20C15 19.4477 15.4477 19 16 19C16.5523 19 17 19.4477 17 20Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M20 21C20.5523 21 21 20.5523 21 20C21 19.4477 20.5523 19 20 19C19.4477 19 19 19.4477 19 20C19 20.5523 19.4477 21 20 21Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5 12C5.55228 12 6 11.5523 6 11C6 10.4477 5.55228 10 5 10C4.44772 10 4 10.4477 4 11C4 11.5523 4.44772 12 5 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M20 13C20 13.5523 19.5523 14 19 14C18.4477 14 18 13.5523 18 13C18 12.4477 18.4477 12 19 12C19.5523 12 20 12.4477 20 13Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M0 9C0 7.34315 1.34315 6 3 6H21C22.6569 6 24 7.34315 24 9V15C24 16.6569 22.6569 18 21 18H3C1.34315 18 0 16.6569 0 15V9ZM3 8H21C21.5523 8 22 8.44772 22 9V15C22 15.5523 21.5523 16 21 16H3C2.44772 16 2 15.5523 2 15V9C2 8.44772 2.44772 8 3 8Z","fill":"currentColor"}}]})(props);
};
function CgSmartphoneShake (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M13 14H11V16H13V14Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M8 7C8 5.89543 8.89543 5 10 5H14C15.1046 5 16 5.89543 16 7V17C16 18.1046 15.1046 19 14 19H10C8.89543 19 8 18.1046 8 17V7ZM10 7H14V17H10V7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M18 9H20V15H18V9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M0 14H2V10H0V14Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M6 15H4V9H6V15Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M24 10H22V14H24V10Z","fill":"currentColor"}}]})(props);
};
function CgSmartphone (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M13 16H11V18H13V16Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M5 4C5 2.89543 5.89543 2 7 2H17C18.1046 2 19 2.89543 19 4V20C19 21.1046 18.1046 22 17 22H7C5.89543 22 5 21.1046 5 20V4ZM7 4H17V20H7L7 4Z","fill":"currentColor"}}]})(props);
};
function CgSmileMouthOpen (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12 17C14.2091 17 16 15.2091 16 13H8C8 15.2091 9.79086 17 12 17Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M10 10C10 10.5523 9.55228 11 9 11C8.44772 11 8 10.5523 8 10C8 9.44772 8.44772 9 9 9C9.55228 9 10 9.44772 10 10Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15 11C15.5523 11 16 10.5523 16 10C16 9.44772 15.5523 9 15 9C14.4477 9 14 9.44772 14 10C14 10.5523 14.4477 11 15 11Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z","fill":"currentColor"}}]})(props);
};
function CgSmileNeutral (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M9 11C9.55228 11 10 10.5523 10 10C10 9.44772 9.55228 9 9 9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M9 15C8.44772 15 8 15.4477 8 16C8 16.5523 8.44772 17 9 17H15C15.5523 17 16 16.5523 16 16C16 15.4477 15.5523 15 15 15H9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16 10C16 10.5523 15.5523 11 15 11C14.4477 11 14 10.5523 14 10C14 9.44772 14.4477 9 15 9C15.5523 9 16 9.44772 16 10Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z","fill":"currentColor"}}]})(props);
};
function CgSmileNoMouth (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M10 10C10 10.5523 9.55228 11 9 11C8.44772 11 8 10.5523 8 10C8 9.44772 8.44772 9 9 9C9.55228 9 10 9.44772 10 10Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15 11C15.5523 11 16 10.5523 16 10C16 9.44772 15.5523 9 15 9C14.4477 9 14 9.44772 14 10C14 10.5523 14.4477 11 15 11Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z","fill":"currentColor"}}]})(props);
};
function CgSmileNone (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M8 9C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11H9C9.55228 11 10 10.5523 10 10C10 9.44772 9.55228 9 9 9H8Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15 9C14.4477 9 14 9.44772 14 10C14 10.5523 14.4477 11 15 11H16C16.5523 11 17 10.5523 17 10C17 9.44772 16.5523 9 16 9H15Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M9 15C8.44772 15 8 15.4477 8 16C8 16.5523 8.44772 17 9 17H15C15.5523 17 16 16.5523 16 16C16 15.4477 15.5523 15 15 15H9Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z","fill":"currentColor"}}]})(props);
};
function CgSmileSad (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M9 11C9.55228 11 10 10.5523 10 10C10 9.44772 9.55228 9 9 9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14 17C14 15.8954 13.1046 15 12 15C10.8954 15 10 15.8954 10 17H8C8 14.7909 9.79086 13 12 13C14.2091 13 16 14.7909 16 17H14Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16 10C16 10.5523 15.5523 11 15 11C14.4477 11 14 10.5523 14 10C14 9.44772 14.4477 9 15 9C15.5523 9 16 9.44772 16 10Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z","fill":"currentColor"}}]})(props);
};
function CgSmileUpside (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M16 11H14C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11H8C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M10 14C10 13.4477 9.55228 13 9 13C8.44772 13 8 13.4477 8 14C8 14.5523 8.44772 15 9 15C9.55228 15 10 14.5523 10 14Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15 13C15.5523 13 16 13.4477 16 14C16 14.5523 15.5523 15 15 15C14.4477 15 14 14.5523 14 14C14 13.4477 14.4477 13 15 13Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12ZM20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12Z","fill":"currentColor"}}]})(props);
};
function CgSmile (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M16 13H14C14 14.1046 13.1046 15 12 15C10.8954 15 10 14.1046 10 13H8C8 15.2091 9.79086 17 12 17C14.2091 17 16 15.2091 16 13Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M10 10C10 10.5523 9.55228 11 9 11C8.44772 11 8 10.5523 8 10C8 9.44771 8.44772 9 9 9C9.55228 9 10 9.44771 10 10Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15 11C15.5523 11 16 10.5523 16 10C16 9.44771 15.5523 9 15 9C14.4477 9 14 9.44771 14 10C14 10.5523 14.4477 11 15 11Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z","fill":"currentColor"}}]})(props);
};
function CgSoftwareDownload (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V12.1578L16.2428 8.91501L17.657 10.3292L12.0001 15.9861L6.34326 10.3292L7.75748 8.91501L11 12.1575V5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M4 14H6V18H18V14H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14Z","fill":"currentColor"}}]})(props);
};
function CgSoftwareUpload (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M11 14.9861C11 15.5384 11.4477 15.9861 12 15.9861C12.5523 15.9861 13 15.5384 13 14.9861V7.82831L16.2428 11.0711L17.657 9.65685L12.0001 4L6.34326 9.65685L7.75748 11.0711L11 7.82854V14.9861Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M4 14H6V18H18V14H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14Z","fill":"currentColor"}}]})(props);
};
function CgSortAz (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M6 8C6 7.44772 6.44772 7 7 7H17C17.5523 7 18 7.44772 18 8C18 8.55228 17.5523 9 17 9H7C6.44772 9 6 8.55228 6 8Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M8 12C8 11.4477 8.44772 11 9 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H9C8.44772 13 8 12.5523 8 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11 15C10.4477 15 10 15.4477 10 16C10 16.5523 10.4477 17 11 17H13C13.5523 17 14 16.5523 14 16C14 15.4477 13.5523 15 13 15H11Z","fill":"currentColor"}}]})(props);
};
function CgSortZa (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M6 16C6 16.5523 6.44772 17 7 17H17C17.5523 17 18 16.5523 18 16C18 15.4477 17.5523 15 17 15H7C6.44772 15 6 15.4477 6 16Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M8 12C8 12.5523 8.44772 13 9 13H15C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11H9C8.44772 11 8 11.4477 8 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11 9C10.4477 9 10 8.55229 10 8C10 7.44771 10.4477 7 11 7H13C13.5523 7 14 7.44771 14 8C14 8.55229 13.5523 9 13 9H11Z","fill":"currentColor"}}]})(props);
};
function CgSpaceBetweenV (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M5 5V9H19V5H17V7H7V5H5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5 19V15H19V19H17V17H7V19H5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7 11H17V13H7V11Z","fill":"currentColor"}}]})(props);
};
function CgSpaceBetween (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M19 5L15 5L15 19H19V17H17L17 7L19 7V5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5 5L9 5L9 19H5L5 17H7L7 7H5L5 5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M13 7V17H11L11 7H13Z","fill":"currentColor"}}]})(props);
};
function CgSpectrum (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12 16H16C16 11.5817 12.4183 8 8 8V12C10.2091 12 12 13.7909 12 16Z","fill":"currentColor"}}]})(props);
};
function CgSpinnerAlt (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z","fill":"currentColor"}}]})(props);
};
function CgSpinnerTwoAlt (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12 22C17.5228 22 22 17.5228 22 12H19C19 15.866 15.866 19 12 19V22Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z","fill":"currentColor"}}]})(props);
};
function CgSpinnerTwo (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"opacity":"0.2","fillRule":"evenodd","clipRule":"evenodd","d":"M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12 22C17.5228 22 22 17.5228 22 12H19C19 15.866 15.866 19 12 19V22Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z","fill":"currentColor"}}]})(props);
};
function CgSpinner (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"opacity":"0.2","fillRule":"evenodd","clipRule":"evenodd","d":"M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z","fill":"currentColor"}}]})(props);
};
function CgSquare (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M14 10H10V14H14V10Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M5 9C5 6.79086 6.79086 5 9 5H15C17.2091 5 19 6.79086 19 9V15C19 17.2091 17.2091 19 15 19H9C6.79086 19 5 17.2091 5 15V9ZM9 8H15C15.5523 8 16 8.44772 16 9V15C16 15.5523 15.5523 16 15 16H9C8.44772 16 8 15.5523 8 15V9C8 8.44772 8.44772 8 9 8Z","fill":"currentColor"}}]})(props);
};
function CgStack (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M20 4V16H22V2H8V4H20Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M2 8V22H16V8H2ZM14 10H4V20H14V10Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M17 7H5V5H19V19H17V7Z","fill":"currentColor"}}]})(props);
};
function CgStark (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M7.17222 18.0249C5.81662 17.2862 4.69522 16.1661 3.95526 14.791C3.01664 13.0467 2.75847 11.0163 3.23071 9.0927C3.70295 7.16908 4.87201 5.48904 6.51164 4.37775C8.15127 3.26646 10.1449 2.80295 12.1066 3.07692L11.67 6.20259C10.4822 6.03669 9.2751 6.31735 8.28231 6.99024C7.28951 7.66312 6.58164 8.68039 6.2957 9.84514C6.00976 11.0099 6.16608 12.2393 6.73442 13.2954C7.18247 14.1281 7.86148 14.8063 8.6823 15.2536L14.8278 3.97537L17.4621 5.4108C18.8177 6.14946 19.9391 7.26961 20.679 8.64469C21.6177 10.3889 21.8758 12.4193 21.4036 14.343C20.9314 16.2666 19.7623 17.9466 18.1227 19.0579C16.483 20.1692 14.4894 20.6327 12.5277 20.3587L12.9643 17.2331C14.1521 17.399 15.3592 17.1183 16.352 16.4454C17.3448 15.7725 18.0527 14.7553 18.3386 13.5905C18.6245 12.4258 18.4682 11.1964 17.8999 10.1402C17.4518 9.30761 16.7728 8.62938 15.952 8.18212L9.80647 19.4604L7.17222 18.0249Z","fill":"currentColor"}}]})(props);
};
function CgStopwatch (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M18.6214 2.55029L21.4498 5.37872L20.0356 6.79293L17.2071 3.96451L18.6214 2.55029Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12.8225 8.60055H10.8225V12.6005H12.8225V8.60055Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M5.18633 18.8137C8.70105 22.3285 14.3995 22.3285 17.9143 18.8137C21.429 15.299 21.429 9.60055 17.9143 6.08583C14.3995 2.57111 8.70105 2.57111 5.18633 6.08583C1.67161 9.60054 1.67161 15.299 5.18633 18.8137ZM6.60054 17.3995C9.33422 20.1332 13.7664 20.1332 16.5 17.3995C19.2337 14.6659 19.2337 10.2337 16.5 7.50004C13.7664 4.76637 9.33422 4.76637 6.60054 7.50004C3.86688 10.2337 3.86688 14.6659 6.60054 17.3995Z","fill":"currentColor"}}]})(props);
};
function CgStories (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M15 6H9C8.44772 6 8 6.44772 8 7V17C8 17.5523 8.44772 18 9 18H15C15.5523 18 16 17.5523 16 17V7C16 6.44772 15.5523 6 15 6ZM9 4C7.34315 4 6 5.34315 6 7V17C6 18.6569 7.34315 20 9 20H15C16.6569 20 18 18.6569 18 17V7C18 5.34315 16.6569 4 15 4H9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M2 6C2 5.44772 2.44772 5 3 5C3.55228 5 4 5.44772 4 6V18C4 18.5523 3.55228 19 3 19C2.44772 19 2 18.5523 2 18V6Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M20 6C20 5.44772 20.4477 5 21 5C21.5523 5 22 5.44772 22 6V18C22 18.5523 21.5523 19 21 19C20.4477 19 20 18.5523 20 18V6Z","fill":"currentColor"}}]})(props);
};
function CgStudio (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M17 13H13V17H17V13Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3 3H21V21H3V3ZM5 5H19V19H5V5Z","fill":"currentColor"}}]})(props);
};
function CgStyle (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M13 21V13H21V21H13ZM15 15H19L19 19H15V15Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3 11L3 3L11 3V11H3ZM5 5L9 5V9L5 9L5 5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M18 6V12H16V8L12 8V6L18 6Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M12 18H6L6 12H8L8 16H12V18Z","fill":"currentColor"}}]})(props);
};
function CgSun (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M11 0H13V4.06189C12.6724 4.02104 12.3387 4 12 4C11.6613 4 11.3276 4.02104 11 4.06189V0ZM7.0943 5.68018L4.22173 2.80761L2.80752 4.22183L5.6801 7.09441C6.09071 6.56618 6.56608 6.0908 7.0943 5.68018ZM4.06189 11H0V13H4.06189C4.02104 12.6724 4 12.3387 4 12C4 11.6613 4.02104 11.3276 4.06189 11ZM5.6801 16.9056L2.80751 19.7782L4.22173 21.1924L7.0943 18.3198C6.56608 17.9092 6.09071 17.4338 5.6801 16.9056ZM11 19.9381V24H13V19.9381C12.6724 19.979 12.3387 20 12 20C11.6613 20 11.3276 19.979 11 19.9381ZM16.9056 18.3199L19.7781 21.1924L21.1923 19.7782L18.3198 16.9057C17.9092 17.4339 17.4338 17.9093 16.9056 18.3199ZM19.9381 13H24V11H19.9381C19.979 11.3276 20 11.6613 20 12C20 12.3387 19.979 12.6724 19.9381 13ZM18.3198 7.0943L21.1923 4.22183L19.7781 2.80762L16.9056 5.6801C17.4338 6.09071 17.9092 6.56608 18.3198 7.0943Z","fill":"currentColor"}}]})(props);
};
function CgSupport (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12.2607 21.9966C12.174 21.9988 12.0871 22 12 22C11.9128 22 11.8259 21.9988 11.7393 21.9966C7.68318 21.8928 4.22762 19.3738 2.7573 15.8242C1.74192 13.3674 1.7476 10.588 2.77433 8.13481C3.27688 6.93672 4.00599 5.85718 4.90808 4.94979L4.94983 4.90804C5.85259 4.01056 6.92574 3.28429 8.1165 2.78202C10.5894 1.74123 13.3958 1.73933 15.87 2.77633C17.0688 3.27993 18.1488 4.01042 19.0562 4.91407L19.0859 4.94373C19.9989 5.86054 20.7351 6.95351 21.2392 8.16721C21.7279 9.34662 21.9812 10.6006 21.999 11.8573C21.9997 11.9047 22 11.9523 22 12C22 12.0506 21.9996 12.1012 21.9989 12.1516C21.9376 16.2743 19.3814 19.7925 15.7731 21.2637C14.6481 21.7213 13.4566 21.9656 12.2607 21.9966ZM14.0322 15.4464L16.906 18.3202C14.0281 20.5599 9.97192 20.5599 7.09402 18.3202L9.96779 15.4464C11.2175 16.1845 12.7825 16.1845 14.0322 15.4464ZM8.55358 14.0322L5.67981 16.906C3.44007 14.0281 3.44007 9.97192 5.67981 7.09402L8.55358 9.96779C7.81548 11.2175 7.81548 12.7825 8.55358 14.0322ZM10.0824 12.5694C10.0773 12.5523 10.0725 12.5351 10.0679 12.5179C9.97738 12.179 9.97738 11.821 10.0679 11.4821C10.1556 11.1537 10.3282 10.8434 10.5858 10.5858C10.8299 10.3417 11.1213 10.1739 11.4306 10.0824C11.4477 10.0773 11.4649 10.0725 11.4821 10.0679C11.821 9.97738 12.179 9.97737 12.5179 10.0679C12.8463 10.1556 13.1566 10.3282 13.4142 10.5858C13.6583 10.8299 13.8261 11.1213 13.9176 11.4306C13.9227 11.4477 13.9275 11.4649 13.9321 11.4821C14.0226 11.821 14.0226 12.179 13.9321 12.5179C13.8444 12.8462 13.6718 13.1566 13.4142 13.4142C13.1701 13.6583 12.8787 13.8261 12.5694 13.9176C12.5523 13.9227 12.5351 13.9275 12.5179 13.9321C12.179 14.0226 11.821 14.0226 11.4821 13.9321C11.1538 13.8444 10.8434 13.6718 10.5858 13.4142C10.3417 13.1701 10.1739 12.8787 10.0824 12.5694ZM14.0322 8.55357C12.7825 7.81548 11.2175 7.81548 9.96779 8.55357L7.09402 5.6798C9.97192 3.44007 14.0281 3.44007 16.906 5.6798L14.0322 8.55357ZM18.3202 16.906C20.5599 14.0281 20.5599 9.97192 18.3202 7.09402L15.4464 9.96779C16.1845 11.2175 16.1845 12.7825 15.4464 14.0322L18.3202 16.906Z","fill":"currentColor"}}]})(props);
};
function CgSwapVertical (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12 16H13.5L13.5 10H15.5L15.5 16H17L14.5 19L12 16Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M8 8H9.5L9.5 14H11.5L11.5 8H13L10.5 5L8 8Z","fill":"currentColor"}}]})(props);
};
function CgSwap (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M16 13V11.5H10V9.5H16V8L19 10.5L16 13Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M8 17V15.5H14V13.5H8V12L5 14.5L8 17Z","fill":"currentColor"}}]})(props);
};
function CgSweden (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M23 4H10V11H23V4Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M23 13V20H10V13H23Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M8 13V20H1V13H8Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M1 11V4H8V11H1Z","fill":"currentColor"}}]})(props);
};
function CgSwiss (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3 3V21H21V3H3ZM14 7H10V10H7V14H10V17H14V14H17V10H14V7Z","fill":"currentColor"}}]})(props);
};
function CgSync (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M4.56079 10.6418L6.35394 3.94971L8.25402 5.84979C11.7312 3.6588 16.3814 4.07764 19.41 7.1063L17.9958 8.52052C15.7536 6.27827 12.3686 5.87519 9.71551 7.31128L11.2529 8.84869L4.56079 10.6418Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M19.4392 13.3581L17.646 20.0502L15.7459 18.1501C12.2688 20.3411 7.61857 19.9223 4.58991 16.8936L6.00413 15.4794C8.24638 17.7217 11.6313 18.1247 14.2844 16.6887L12.747 15.1512L19.4392 13.3581Z","fill":"currentColor"}}]})(props);
};
function CgTab (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M18.9999 4C20.6568 4 21.9999 5.34315 21.9999 7V17C21.9999 18.6569 20.6568 20 18.9999 20H4.99994C3.34308 20 1.99994 18.6569 1.99994 17V7C1.99994 5.34315 3.34308 4 4.99994 4H18.9999ZM19.9999 9.62479H13C12.4478 9.62479 11.8442 9.20507 11.652 8.68732L10.6542 6H4.99994C4.44765 6 3.99994 6.44772 3.99994 7V17C3.99994 17.5523 4.44765 18 4.99994 18H18.9999C19.5522 18 19.9999 17.5523 19.9999 17V9.62479Z","fill":"currentColor"}}]})(props);
};
function CgTag (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M2 8V16C2 16.5523 2.44772 17 3 17H16.6202C16.9121 17 17.1895 16.8724 17.3795 16.6508L20.808 12.6508C21.129 12.2763 21.129 11.7237 20.808 11.3492L17.3795 7.34921C17.1895 7.12756 16.9121 7 16.6202 7H3C2.44772 7 2 7.44772 2 8ZM0 8V16C0 17.6569 1.34315 19 3 19H16.6202C17.496 19 18.328 18.6173 18.898 17.9524L22.3265 13.9524C23.2895 12.8289 23.2895 11.1711 22.3265 10.0476L18.898 6.04763C18.328 5.38269 17.496 5 16.6202 5H3C1.34315 5 0 6.34315 0 8Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M15 13C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11C14.4477 11 14 11.4477 14 12C14 12.5523 14.4477 13 15 13ZM15 15C16.6569 15 18 13.6569 18 12C18 10.3431 16.6569 9 15 9C13.3431 9 12 10.3431 12 12C12 13.6569 13.3431 15 15 15Z","fill":"currentColor"}}]})(props);
};
function CgTally (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M3.66124 2.67117C3.71341 2.4 3.97956 2.18018 4.2557 2.18018H6.2557C6.53184 2.18018 6.71341 2.4 6.66124 2.67117L5.33877 9.54511C5.2866 9.81628 5.02045 10.0361 4.74431 10.0361H2.74431C2.46817 10.0361 2.2866 9.81628 2.33877 9.54511L3.66124 2.67117Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M8.66124 2.67117C8.71341 2.4 8.97956 2.18018 9.2557 2.18018H11.2557C11.5318 2.18018 11.7134 2.4 11.6612 2.67117L8.07168 21.329C8.01951 21.6002 7.75336 21.82 7.47722 21.82H5.47722C5.20108 21.82 5.01951 21.6002 5.07168 21.329L8.66124 2.67117Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M13.6612 2.67117C13.7134 2.4 13.9796 2.18018 14.2557 2.18018H16.2557C16.5318 2.18018 16.7134 2.4 16.6612 2.67117L13.0717 21.329C13.0195 21.6002 12.7534 21.82 12.4772 21.82H10.4772C10.2011 21.82 10.0195 21.6002 10.0717 21.329L13.6612 2.67117Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M18.6612 2.67117C18.7134 2.4 18.9796 2.18018 19.2557 2.18018H21.2557C21.5318 2.18018 21.7134 2.4 21.6612 2.67117L20.3388 9.54511C20.2866 9.81628 20.0205 10.0361 19.7443 10.0361H17.7443C17.4682 10.0361 17.2866 9.81628 17.3388 9.54511L18.6612 2.67117Z","fill":"currentColor"}}]})(props);
};
function CgTapDouble (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M14.9236 18V14C14.9236 12.3431 13.5804 11 11.9236 11C10.2667 11 8.92355 12.3431 8.92355 14V18C8.92355 19.6569 10.2667 21 11.9236 21C13.5804 21 14.9236 19.6569 14.9236 18ZM11.9236 9C9.16213 9 6.92355 11.2386 6.92355 14V18C6.92355 20.7614 9.16213 23 11.9236 23C14.685 23 16.9236 20.7614 16.9236 18V14C16.9236 11.2386 14.685 9 11.9236 9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M10.9236 14C10.9236 13.4477 11.3713 13 11.9236 13C12.4758 13 12.9236 13.4477 12.9236 14V17H10.9236V14Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11.9235 1C14.7023 1 17.2164 2.13339 19.0286 3.96311L17.6144 5.37735C16.1641 3.90955 14.15 3 11.9235 3C9.77436 3 7.82311 3.84749 6.38577 5.22651L4.97131 3.81205C6.7708 2.07122 9.22207 1 11.9235 1Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M11.9233 5C13.5809 5 15.1038 5.5761 16.3029 6.53898L14.8768 7.9651C14.0493 7.35833 13.0281 7 11.9233 7C10.848 7 9.85204 7.33943 9.03662 7.91699L7.60779 6.48816C8.79686 5.55586 10.2952 5 11.9233 5Z","fill":"currentColor"}}]})(props);
};
function CgTapSingle (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12.0491 3.11401C14.1927 3.11401 16.1393 3.95706 17.5756 5.32967L16.1609 6.74437C15.087 5.73346 13.6404 5.11401 12.0491 5.11401C10.4086 5.11401 8.92183 5.77243 7.83868 6.83944L6.42444 5.42519C7.86954 3.99627 9.85631 3.11401 12.0491 3.11401Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M10.9767 11.886C10.9767 11.3337 11.4244 10.886 11.9767 10.886C12.529 10.886 12.9767 11.3337 12.9767 11.886V13.886H10.9767V11.886Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M11.9767 6.88599C9.21526 6.88599 6.97668 9.12456 6.97668 11.886V15.886C6.97668 18.6474 9.21526 20.886 11.9767 20.886C14.7381 20.886 16.9767 18.6474 16.9767 15.886V11.886C16.9767 9.12456 14.7381 6.88599 11.9767 6.88599ZM14.9767 15.886V11.886C14.9767 10.2291 13.6335 8.88599 11.9767 8.88599C10.3198 8.88599 8.97668 10.2291 8.97668 11.886V15.886C8.97668 17.5428 10.3198 18.886 11.9767 18.886C13.6335 18.886 14.9767 17.5428 14.9767 15.886Z","fill":"currentColor"}}]})(props);
};
function CgTemplate (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3 3V9H21V3H3ZM19 5H5V7H19V5Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3 11V21H11V11H3ZM9 13H5V19H9V13Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M21 11H13V13H21V11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M13 15H21V17H13V15Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M21 19H13V21H21V19Z","fill":"currentColor"}}]})(props);
};
function CgTennis (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M19.0711 19.0711C22.9763 15.1658 22.9763 8.83418 19.0711 4.92893C15.1658 1.02369 8.83418 1.02369 4.92893 4.92893C1.02369 8.83418 1.02369 15.1658 4.92893 19.0711C8.83418 22.9763 15.1658 22.9763 19.0711 19.0711ZM19.9426 11.0407C19.7364 9.32374 18.9745 7.6608 17.6569 6.34315C16.3343 5.0206 14.6639 4.25792 12.9402 4.0551L12.93 4.11139C12.1086 8.58308 8.58304 12.1086 4.11136 12.93L4.05511 12.9402C4.25793 14.6639 5.02061 16.3343 6.34315 17.6569C7.66079 18.9745 9.32373 19.7364 11.0407 19.9426C11.0449 19.9191 11.0491 19.8956 11.0534 19.8721C11.8748 15.4004 15.4003 11.8748 19.872 11.0534C19.8955 11.0491 19.9191 11.0449 19.9426 11.0407ZM19.872 13.4292V13.0951C16.5073 13.8586 13.8586 16.5073 13.095 19.8721H13.429C14.9777 19.5924 16.4598 18.8539 17.6569 17.6569C18.8539 16.4598 19.5923 14.9778 19.872 13.4292ZM4.11136 10.8884L4.11136 10.666C4.37766 9.08301 5.12159 7.5647 6.34315 6.34315C7.56465 5.12165 9.08288 4.37773 10.6658 4.11139L10.8883 4.11139C10.1248 7.47615 7.47612 10.1249 4.11136 10.8884Z","fill":"currentColor"}}]})(props);
};
function CgTerminal (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M5.0333 14.8284L6.44751 16.2426L10.6902 12L6.44751 7.75733L5.0333 9.17155L7.86172 12L5.0333 14.8284Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15 14H11V16H15V14Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M2 2C0.895431 2 0 2.89543 0 4V20C0 21.1046 0.89543 22 2 22H22C23.1046 22 24 21.1046 24 20V4C24 2.89543 23.1046 2 22 2H2ZM22 4H2L2 20H22V4Z","fill":"currentColor"}}]})(props);
};
function CgTerrain (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M8 10L3 18H13L8 10Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M10.5286 10.7543L13.5 6L21 18H15.0572L10.5286 10.7543Z","fill":"currentColor"}}]})(props);
};
function CgThermometer (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M16.9498 5.63615C17.3403 5.24563 17.9735 5.24563 18.364 5.63615C18.7545 6.02668 18.7545 6.65984 18.364 7.05037L11.2929 14.1214C10.9024 14.512 10.2693 14.512 9.87873 14.1214C9.48821 13.7309 9.48821 13.0977 9.87873 12.7072L16.9498 5.63615Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M7.82813 17.5862C9.7695 18.8725 12.4109 18.6603 14.1214 16.9499L21.1924 9.8788C23.1451 7.92617 23.1451 4.76035 21.1924 2.80773C19.2398 0.855106 16.074 0.855106 14.1214 2.80773L7.0503 9.8788C5.33984 11.5893 5.12771 14.2307 6.41392 16.172L2.80766 19.7783C2.41714 20.1688 2.41714 20.802 2.80766 21.1925C3.19819 21.583 3.83135 21.583 4.22188 21.1925L7.82813 17.5862ZM12.7072 15.5356L19.7782 8.46458C20.9498 7.29301 20.9498 5.39351 19.7782 4.22194C18.6067 3.05037 16.7072 3.05037 15.5356 4.22194L8.46452 11.293C7.29294 12.4646 7.29294 14.3641 8.46452 15.5356C9.63609 16.7072 11.5356 16.7072 12.7072 15.5356Z","fill":"currentColor"}}]})(props);
};
function CgThermostat (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12 19C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17C11.4477 17 11 17.4477 11 18C11 18.5523 11.4477 19 12 19Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M15 13.9997C16.2144 14.9119 17 16.3642 17 18C17 20.7614 14.7614 23 12 23C9.23858 23 7 20.7614 7 18C7 16.3642 7.78555 14.9119 9 13.9997V4C9 2.34315 10.3431 1 12 1C13.6569 1 15 2.34315 15 4V13.9997ZM13 4V15.1707C14.1652 15.5826 15 16.6938 15 18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18C9 16.6938 9.83481 15.5826 11 15.1707V4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4Z","fill":"currentColor"}}]})(props);
};
function CgTikcode (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M9 5H5V9H9V5ZM3 3V11H11V3H3Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M19 5H15V9H19V5ZM13 3V11H21V3H13Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M9 15H5V19H9V15ZM3 13V21H11V13H3Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M13 13H15V21H13V13Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16 13H18V21H16V13Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M19 13H21V21H19V13Z","fill":"currentColor"}}]})(props);
};
function CgTime (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M9 7H11V12H16V14H9V7Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z","fill":"currentColor"}}]})(props);
};
function CgTimelapse (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12 19C10.067 19 8.31704 18.2165 7.05029 16.9498L12 12L12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z","fill":"currentColor"}}]})(props);
};
function CgTimer (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M13 5.07089C16.3923 5.55612 19 8.47353 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 9.96159 5.87128 8.12669 7.26175 6.84738L5.84658 5.43221C4.09461 7.0743 3 9.40932 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C11.662 3 11.3283 3.01863 11 3.05493V9.08551H13V5.07089Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7.70711 8.70708C7.31658 9.0976 7.31658 9.73077 7.70711 10.1213L10.5355 12.9497C10.9261 13.3402 11.5592 13.3402 11.9497 12.9497C12.3403 12.5592 12.3403 11.926 11.9497 11.5355L9.12132 8.70708C8.7308 8.31655 8.09763 8.31655 7.70711 8.70708Z","fill":"currentColor"}}]})(props);
};
function CgToday (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"rect","attr":{"opacity":"0.5","x":"7","y":"9","width":"10","height":"10","rx":"1","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M18 3H6C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V4C19 3.44772 18.5523 3 18 3ZM6 1C4.34315 1 3 2.34315 3 4V20C3 21.6569 4.34315 23 6 23H18C19.6569 23 21 21.6569 21 20V4C21 2.34315 19.6569 1 18 1H6Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7 6C7 5.44772 7.44772 5 8 5H12C12.5523 5 13 5.44772 13 6C13 6.55228 12.5523 7 12 7H8C7.44772 7 7 6.55228 7 6Z","fill":"currentColor"}}]})(props);
};
function CgToggleOff (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M17 15C18.6569 15 20 13.6569 20 12C20 10.3431 18.6569 9 17 9C15.3431 9 14 10.3431 14 12C14 13.6569 15.3431 15 17 15Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M0 12C0 8.13401 3.13401 5 7 5H17C20.866 5 24 8.13401 24 12C24 15.866 20.866 19 17 19H7C3.13401 19 0 15.866 0 12ZM7 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7Z","fill":"currentColor"}}]})(props);
};
function CgToggleOn (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M7 15C5.34315 15 4 13.6569 4 12C4 10.3431 5.34315 9 7 9C8.65685 9 10 10.3431 10 12C10 13.6569 8.65685 15 7 15Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M24 12C24 8.13401 20.866 5 17 5H7C3.13401 5 0 8.13401 0 12C0 15.866 3.13401 19 7 19H17C20.866 19 24 15.866 24 12ZM17 7H7C4.23858 7 2 9.23858 2 12C2 14.7614 4.23858 17 7 17H17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7Z","fill":"currentColor"}}]})(props);
};
function CgToggleSquareOff (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M15 9C14.4477 9 14 9.44772 14 10V14C14 14.5523 14.4477 15 15 15H19C19.5523 15 20 14.5523 20 14V10C20 9.44772 19.5523 9 19 9H15Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M0 7C0 5.89543 0.895431 5 2 5H22C23.1046 5 24 5.89543 24 7V17C24 18.1046 23.1046 19 22 19H2C0.89543 19 0 18.1046 0 17V7ZM2 7H22V17H2L2 7Z","fill":"currentColor"}}]})(props);
};
function CgToggleSquare (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M9 9C9.55228 9 10 9.44772 10 10V14C10 14.5523 9.55228 15 9 15H5C4.44772 15 4 14.5523 4 14V10C4 9.44772 4.44772 9 5 9H9Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M24 7C24 5.89543 23.1046 5 22 5H2C0.89543 5 0 5.89543 0 7V17C0 18.1046 0.895432 19 2 19H22C23.1046 19 24 18.1046 24 17V7ZM22 7H2V17H22V7Z","fill":"currentColor"}}]})(props);
};
function CgToolbarBottom (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M18 13H6V15H18V13Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M2 8C2 6.34315 3.34315 5 5 5H19C20.6569 5 22 6.34315 22 8V16C22 17.6569 20.6569 19 19 19H5C3.34315 19 2 17.6569 2 16V8ZM5 7H19C19.5523 7 20 7.44771 20 8V16C20 16.5523 19.5523 17 19 17H5C4.44772 17 4 16.5523 4 16V8C4 7.44772 4.44772 7 5 7Z","fill":"currentColor"}}]})(props);
};
function CgToolbarLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M8 9H6V15H8V9Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M2 8C2 6.34315 3.34315 5 5 5H19C20.6569 5 22 6.34315 22 8V16C22 17.6569 20.6569 19 19 19H5C3.34315 19 2 17.6569 2 16V8ZM5 7H19C19.5523 7 20 7.44771 20 8V16C20 16.5523 19.5523 17 19 17H5C4.44772 17 4 16.5523 4 16V8C4 7.44772 4.44772 7 5 7Z","fill":"currentColor"}}]})(props);
};
function CgToolbarRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M16 9H18V15H16V9Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M22 8C22 6.34315 20.6569 5 19 5H5C3.34315 5 2 6.34315 2 8V16C2 17.6569 3.34315 19 5 19H19C20.6569 19 22 17.6569 22 16V8ZM19 7H5C4.44772 7 4 7.44771 4 8V16C4 16.5523 4.44772 17 5 17H19C19.5523 17 20 16.5523 20 16V8C20 7.44772 19.5523 7 19 7Z","fill":"currentColor"}}]})(props);
};
function CgToolbarTop (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M18 11H6V9H18V11Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M2 16C2 17.6569 3.34315 19 5 19H19C20.6569 19 22 17.6569 22 16V8C22 6.34315 20.6569 5 19 5H5C3.34315 5 2 6.34315 2 8V16ZM5 17H19C19.5523 17 20 16.5523 20 16V8C20 7.44772 19.5523 7 19 7H5C4.44772 7 4 7.44771 4 8V16C4 16.5523 4.44772 17 5 17Z","fill":"currentColor"}}]})(props);
};
function CgToolbox (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M17 5.5H20C21.1046 5.5 22 6.39543 22 7.5V19.5C22 20.6046 21.1046 21.5 20 21.5H4C2.89543 21.5 2 20.6046 2 19.5V7.5C2 6.39543 2.89543 5.5 4 5.5H7C7 3.84315 8.34315 2.5 10 2.5H14C15.6569 2.5 17 3.84315 17 5.5ZM14 4.5H10C9.44772 4.5 9 4.94772 9 5.5H15C15 4.94772 14.5523 4.5 14 4.5ZM20 7.5H4V9.5H20V7.5ZM4 19.5V11.5H7V13.5H11V11.5H13V13.5H17V11.5H20V19.5H4Z","fill":"currentColor"}}]})(props);
};
function CgTouchpad (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M20 21C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20ZM4 5H20C20.5523 5 21 5.44772 21 6V14H3V6C3 5.44772 3.44772 5 4 5ZM3 16V18C3 18.5523 3.44772 19 4 19H11V16H3ZM13 19V16H21V18C21 18.5523 20.5523 19 20 19H13Z","fill":"currentColor"}}]})(props);
};
function CgTrack (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 3C12.5523 3 13 3.44772 13 4V5.07089C16.0657 5.5094 18.4906 7.93431 18.9291 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H18.9291C18.4906 16.0657 16.0657 18.4906 13 18.9291V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V18.9291C7.93431 18.4906 5.5094 16.0657 5.07089 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H5.07089C5.5094 7.93431 7.93431 5.5094 11 5.07089V4C11 3.44772 11.4477 3 12 3ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12Z","fill":"currentColor"}}]})(props);
};
function CgTranscript (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M5 16C5 15.4477 5.44772 15 6 15H14C14.5523 15 15 15.4477 15 16C15 16.5523 14.5523 17 14 17H6C5.44772 17 5 16.5523 5 16Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M18 11C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H10C9.44772 13 9 12.5523 9 12C9 11.4477 9.44772 11 10 11H18Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16 16C16 15.4477 16.4477 15 17 15H18C18.5523 15 19 15.4477 19 16C19 16.5523 18.5523 17 18 17H17C16.4477 17 16 16.5523 16 16Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M7 11C7.55228 11 8 11.4477 8 12C8 12.5523 7.55228 13 7 13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11H7Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44771 20.5523 5 20 5Z","fill":"currentColor"}}]})(props);
};
function CgTrashEmpty (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M17 6V5C17 3.89543 16.1046 3 15 3H9C7.89543 3 7 3.89543 7 5V6H4C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H5V19C5 20.6569 6.34315 22 8 22H16C17.6569 22 19 20.6569 19 19V8H20C20.5523 8 21 7.55228 21 7C21 6.44772 20.5523 6 20 6H17ZM15 5H9V6H15V5ZM17 8H7V19C7 19.5523 7.44772 20 8 20H16C16.5523 20 17 19.5523 17 19V8Z","fill":"currentColor"}}]})(props);
};
function CgTrash (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M9 9H11V17H9V9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M13 9H15V17H13V9Z","fill":"currentColor"}}]})(props);
};
function CgTree (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M11 17.9C8.71776 17.4367 7 15.419 7 13V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V13C17 15.419 15.2822 17.4367 13 17.9V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V17.9ZM12 4C13.6569 4 15 5.34315 15 7V13C15 14.3062 14.1652 15.4175 13 15.8293V11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11V15.8293C9.83481 15.4175 9 14.3062 9 13V7C9 5.34315 10.3431 4 12 4Z","fill":"currentColor"}}]})(props);
};
function CgTrees (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M12.7401 16.3185C12.035 17.1126 11.0808 17.6806 10 17.9V21C10 21.5523 9.55228 22 9 22C8.44772 22 8 21.5523 8 21V17.9C5.71776 17.4367 4 15.419 4 13V7C4 4.23858 6.23858 2 9 2C11.6087 2 13.7508 3.99781 13.9797 6.54693C14.5726 6.1993 15.2631 6 16 6C18.2091 6 20 7.79086 20 10V14C20 15.8638 18.7252 17.4299 17 17.874V21C17 21.5523 16.5523 22 16 22C15.4477 22 15 21.5523 15 21V17.874C14.0747 17.6358 13.279 17.075 12.7401 16.3185ZM12 7V13C12 14.3062 11.1652 15.4175 10 15.8293V13C10 12.4477 9.55228 12 9 12C8.44772 12 8 12.4477 8 13V15.8293C6.83481 15.4175 6 14.3062 6 13V7C6 5.34315 7.34315 4 9 4C10.6569 4 12 5.34315 12 7ZM17 15.7324V13C17 12.4477 16.5523 12 16 12C15.4477 12 15 12.4477 15 13V15.7324C14.4022 15.3866 14 14.7403 14 14V10C14 8.89543 14.8954 8 16 8C17.1046 8 18 8.89543 18 10V14C18 14.7403 17.5978 15.3866 17 15.7324Z","fill":"currentColor"}}]})(props);
};
function CgTrello (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M6 7C6 6.44771 6.44772 6 7 6H10C10.5523 6 11 6.44772 11 7V17C11 17.5523 10.5523 18 10 18H7C6.44772 18 6 17.5523 6 17V7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M13 7C13 6.44772 13.4477 6 14 6H17C17.5523 6 18 6.44772 18 7V13C18 13.5523 17.5523 14 17 14H14C13.4477 14 13 13.5523 13 13V7Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4ZM4 4H20V20H4V4Z","fill":"currentColor"}}]})(props);
};
function CgTrendingDown (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M1.85104 8.10628L0.436829 9.52049L7.5079 16.5916L13.8719 10.2276L18.1145 14.4702L16.3721 16.2126L23.0642 18.0058L21.2711 11.3136L19.5287 13.056L13.8719 7.39917L7.5079 13.7631L1.85104 8.10628Z","fill":"currentColor"}}]})(props);
};
function CgTrending (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M1.41421 16.4322L0 15.018L7.07107 7.94693L13.435 14.3109L17.6777 10.0682L15.9353 8.32587L22.6274 6.53271L20.8343 13.2248L19.0919 11.4825L13.435 17.1393L7.07107 10.7754L1.41421 16.4322Z","fill":"currentColor"}}]})(props);
};
function CgTrophy (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M13 15.9C15.2822 15.4367 17 13.419 17 11V4H7V11C7 13.419 8.71776 15.4367 11 15.9V18H9V20H15V18H13V15.9ZM9 6H15V11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11V6Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M18 6H20V11H18V6Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M6 6H4V11H6V6Z","fill":"currentColor"}}]})(props);
};
function CgTv (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M8 6.11861L9.4131 4.70551L11.5371 6.82954L14.3667 4L15.7782 5.41151L13.3137 7.87598H18C19.1046 7.87598 20 8.77141 20 9.87598V16.876C20 17.9805 19.1046 18.876 18 18.876H6C4.89543 18.876 4 17.9805 4 16.876V9.87598C4 8.77141 4.89543 7.87598 6 7.87598H9.75736L8 6.11861ZM18 9.87598H6V16.876H18V9.87598Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M8 19.876H16V20.876H8V19.876Z","fill":"currentColor"}}]})(props);
};
function CgTwilio (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M11 9C11 10.1046 10.1046 11 9 11C7.89543 11 7 10.1046 7 9C7 7.89543 7.89543 7 9 7C10.1046 7 11 7.89543 11 9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M17 9C17 10.1046 16.1046 11 15 11C13.8954 11 13 10.1046 13 9C13 7.89543 13.8954 7 15 7C16.1046 7 17 7.89543 17 9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M15 17C16.1046 17 17 16.1046 17 15C17 13.8954 16.1046 13 15 13C13.8954 13 13 13.8954 13 15C13 16.1046 13.8954 17 15 17Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11 15C11 16.1046 10.1046 17 9 17C7.89543 17 7 16.1046 7 15C7 13.8954 7.89543 13 9 13C10.1046 13 11 13.8954 11 15Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z","fill":"currentColor"}}]})(props);
};
function CgTwitter (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M8 3C9.10457 3 10 3.89543 10 5V8H16C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12H10V14C10 15.6569 11.3431 17 13 17H16C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21H13C9.13401 21 6 17.866 6 14V5C6 3.89543 6.89543 3 8 3Z","fill":"currentColor"}}]})(props);
};
function CgUiKit (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M14 6H10C9.44772 6 9 6.44772 9 7V17C9 17.5523 9.44772 18 10 18H14C14.5523 18 15 17.5523 15 17V7C15 6.44772 14.5523 6 14 6ZM10 4C8.34315 4 7 5.34315 7 7V17C7 18.6569 8.34315 20 10 20H14C15.6569 20 17 18.6569 17 17V7C17 5.34315 15.6569 4 14 4H10Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M6 7.45936L3.4932 7.04156C1.6646 6.73679 0 8.14692 0 10.0007V14.918C0 16.7718 1.6646 18.1819 3.4932 17.8772L6 17.4594V15.4318L3.1644 15.9044C2.55487 16.006 2 15.5359 2 14.918V10.0007C2 9.3828 2.55487 8.91276 3.1644 9.01435L6 9.48695V7.45936Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M18 7.45936L20.5068 7.04156C22.3354 6.73679 24 8.14692 24 10.0007V14.918C24 16.7718 22.3354 18.1819 20.5068 17.8772L18 17.4594V15.4318L20.8356 15.9044C21.4451 16.006 22 15.5359 22 14.918V10.0007C22 9.3828 21.4451 8.91276 20.8356 9.01435L18 9.48695V7.45936Z","fill":"currentColor"}}]})(props);
};
function CgUmbrella (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M4 9C4 4.58172 7.58172 1 12 1C16.4183 1 20 4.58172 20 9V11H13.0187V20.5C13.0187 21.8807 11.8994 23 10.5187 23C9.13797 23 8.01868 21.8807 8.01868 20.5V17.8571H10.0187V20.5C10.0187 20.7761 10.2425 21 10.5187 21C10.7948 21 11.0187 20.7761 11.0187 20.5V11H4V9ZM12 3C15.3137 3 18 5.68629 18 9H6C6 5.68629 8.68629 3 12 3Z","fill":"currentColor"}}]})(props);
};
function CgUnavailable (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M18.364 5.63604C21.8787 9.15076 21.8787 14.8492 18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364C2.12132 14.8492 2.12132 9.15076 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.364 5.63604ZM16.1925 17.6067L6.39327 7.80749C4.33767 10.5493 4.55666 14.4562 7.05025 16.9497C9.54384 19.4433 13.4507 19.6623 16.1925 17.6067ZM16.9497 7.05025C19.4433 9.54384 19.6623 13.4507 17.6067 16.1925L7.80749 6.39327C10.5493 4.33767 14.4562 4.55666 16.9497 7.05025Z","fill":"currentColor"}}]})(props);
};
function CgUnblock (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364ZM7.80749 17.6067C10.5493 19.6623 14.4562 19.4433 16.9497 16.9497C19.4433 14.4562 19.6623 10.5493 17.6067 7.80749L14.8284 10.5858C14.4379 10.9763 13.8047 10.9763 13.4142 10.5858C13.0237 10.1953 13.0237 9.5621 13.4142 9.17157L16.1925 6.39327C13.4507 4.33767 9.54384 4.55666 7.05025 7.05025C4.55666 9.54384 4.33767 13.4507 6.39327 16.1925L9.17157 13.4142C9.5621 13.0237 10.1953 13.0237 10.5858 13.4142C10.9763 13.8047 10.9763 14.4379 10.5858 14.8284L7.80749 17.6067Z","fill":"currentColor"}}]})(props);
};
function CgUndo (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M5.33929 4.46777H7.33929V7.02487C8.52931 6.08978 10.0299 5.53207 11.6607 5.53207C15.5267 5.53207 18.6607 8.66608 18.6607 12.5321C18.6607 16.3981 15.5267 19.5321 11.6607 19.5321C9.51025 19.5321 7.58625 18.5623 6.30219 17.0363L7.92151 15.8515C8.83741 16.8825 10.1732 17.5321 11.6607 17.5321C14.4222 17.5321 16.6607 15.2935 16.6607 12.5321C16.6607 9.77065 14.4222 7.53207 11.6607 7.53207C10.5739 7.53207 9.56805 7.87884 8.74779 8.46777L11.3393 8.46777V10.4678H5.33929V4.46777Z","fill":"currentColor"}}]})(props);
};
function CgUnfold (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12H2Z","fill":"currentColor"}}]})(props);
};
function CgUnsplash (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M15 4.5H9V8.5H15V4.5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M4 10.5H9V14.5H15V10.5H20V19.5H4V10.5Z","fill":"currentColor"}}]})(props);
};
function CgUsbC (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H8Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M3 12C3 9.23858 5.23858 7 8 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H8C5.23858 17 3 14.7614 3 12ZM8 9H16C17.6569 9 19 10.3431 19 12C19 13.6569 17.6569 15 16 15H8C6.34315 15 5 13.6569 5 12C5 10.3431 6.34315 9 8 9Z","fill":"currentColor"}}]})(props);
};
function CgUsb (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M10 4.5H11V6.5H10V4.5Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M14 4.5H13V6.5H14V4.5Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M7 8.5V1.5H17V8.5H19V19.5C19 21.1569 17.6569 22.5 16 22.5H8C6.34315 22.5 5 21.1569 5 19.5V8.5H7ZM9 3.5H15V8.5H9V3.5ZM17 10.5H7V19.5C7 20.0523 7.44772 20.5 8 20.5H16C16.5523 20.5 17 20.0523 17 19.5V10.5Z","fill":"currentColor"}}]})(props);
};
function CgUserAdd (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M8 11C10.2091 11 12 9.20914 12 7C12 4.79086 10.2091 3 8 3C5.79086 3 4 4.79086 4 7C4 9.20914 5.79086 11 8 11ZM8 9C9.10457 9 10 8.10457 10 7C10 5.89543 9.10457 5 8 5C6.89543 5 6 5.89543 6 7C6 8.10457 6.89543 9 8 9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11 14C11.5523 14 12 14.4477 12 15V21H14V15C14 13.3431 12.6569 12 11 12H5C3.34315 12 2 13.3431 2 15V21H4V15C4 14.4477 4.44772 14 5 14H11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M18 7H20V9H22V11H20V13H18V11H16V9H18V7Z","fill":"currentColor"}}]})(props);
};
function CgUserList (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M8 11C10.2091 11 12 9.20914 12 7C12 4.79086 10.2091 3 8 3C5.79086 3 4 4.79086 4 7C4 9.20914 5.79086 11 8 11ZM8 9C9.10457 9 10 8.10457 10 7C10 5.89543 9.10457 5 8 5C6.89543 5 6 5.89543 6 7C6 8.10457 6.89543 9 8 9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11 14C11.5523 14 12 14.4477 12 15V21H14V15C14 13.3431 12.6569 12 11 12H5C3.34315 12 2 13.3431 2 15V21H4V15C4 14.4477 4.44772 14 5 14H11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M22 11H16V13H22V11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16 15H22V17H16V15Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M22 7H16V9H22V7Z","fill":"currentColor"}}]})(props);
};
function CgUserRemove (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M8 11C10.2091 11 12 9.20914 12 7C12 4.79086 10.2091 3 8 3C5.79086 3 4 4.79086 4 7C4 9.20914 5.79086 11 8 11ZM8 9C9.10457 9 10 8.10457 10 7C10 5.89543 9.10457 5 8 5C6.89543 5 6 5.89543 6 7C6 8.10457 6.89543 9 8 9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M11 14C11.5523 14 12 14.4477 12 15V21H14V15C14 13.3431 12.6569 12 11 12H5C3.34315 12 2 13.3431 2 15V21H4V15C4 14.4477 4.44772 14 5 14H11Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M22 9H16V11H22V9Z","fill":"currentColor"}}]})(props);
};
function CgUser (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z","fill":"currentColor"}}]})(props);
};
function CgUserlane (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M15 4H21V10H15V4Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12H17C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12H3Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M6 10C7.65685 10 9 8.65685 9 7C9 5.34315 7.65685 4 6 4C4.34315 4 3 5.34315 3 7C3 8.65685 4.34315 10 6 10Z","fill":"currentColor"}}]})(props);
};
function CgViewCols (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M2 8C2 6.34315 3.34315 5 5 5H19C20.6569 5 22 6.34315 22 8V16C22 17.6569 20.6569 19 19 19H5C3.34315 19 2 17.6569 2 16V8ZM16 7H19C19.5523 7 20 7.44771 20 8V16C20 16.5523 19.5523 17 19 17H16V7ZM14 7H10V17H14V7ZM8 17V7H5C4.44772 7 4 7.44772 4 8V16C4 16.5523 4.44772 17 5 17H8Z","fill":"currentColor"}}]})(props);
};
function CgViewComfortable (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M2 8C2 6.34315 3.34315 5 5 5H19C20.6569 5 22 6.34315 22 8V16C22 17.6569 20.6569 19 19 19H5C3.34315 19 2 17.6569 2 16V8ZM5 7H19C19.5523 7 20 7.44771 20 8V11H4V8C4 7.44772 4.44772 7 5 7ZM4 13V16C4 16.5523 4.44772 17 5 17H8V13H4ZM10 17H19C19.5523 17 20 16.5523 20 16V13H10V17Z","fill":"currentColor"}}]})(props);
};
function CgViewDay (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M2 8C2 6.34315 3.34315 5 5 5H19C20.6569 5 22 6.34315 22 8V16C22 17.6569 20.6569 19 19 19H5C3.34315 19 2 17.6569 2 16V8ZM13 7H19C19.5523 7 20 7.44771 20 8V11H13V7ZM11 7H5C4.44772 7 4 7.44772 4 8V11H11V7ZM4 13V16C4 16.5523 4.44772 17 5 17H11V13H4ZM13 17H19C19.5523 17 20 16.5523 20 16V13H13V17Z","fill":"currentColor"}}]})(props);
};
function CgViewGrid (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M5 5C3.34315 5 2 6.34315 2 8V16C2 17.6569 3.34315 19 5 19H19C20.6569 19 22 17.6569 22 16V8C22 6.34315 20.6569 5 19 5H5ZM8 7H5C4.44772 7 4 7.44772 4 8V9H8V7ZM10 7V9H14V7H10ZM16 7V9H20V8C20 7.44771 19.5523 7 19 7H16ZM14 11H10V13H14V11ZM16 13V11H20V13H16ZM14 15H10V17H14V15ZM16 17V15H20V16C20 16.5523 19.5523 17 19 17H16ZM8 17V15H4V16C4 16.5523 4.44772 17 5 17H8ZM8 13V11H4V13H8Z","fill":"currentColor"}}]})(props);
};
function CgViewList (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M5 5C3.34315 5 2 6.34315 2 8V16C2 17.6569 3.34315 19 5 19H19C20.6569 19 22 17.6569 22 16V8C22 6.34315 20.6569 5 19 5H5ZM7 7H5C4.44772 7 4 7.44772 4 8V9H7V7ZM9 7V9H20V8C20 7.44771 19.5523 7 19 7H9ZM7 11H4V13H7V11ZM9 13V11H20V13H9ZM7 15H4V16C4 16.5523 4.44772 17 5 17H7V15ZM9 17V15H20V16C20 16.5523 19.5523 17 19 17H9Z","fill":"currentColor"}}]})(props);
};
function CgViewMonth (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M2 8C2 6.34315 3.34315 5 5 5H19C20.6569 5 22 6.34315 22 8V16C22 17.6569 20.6569 19 19 19H5C3.34315 19 2 17.6569 2 16V8ZM17 7H19C19.5523 7 20 7.44771 20 8V9H17V7ZM15 7H13V9H15V7ZM11 7H9V9H11V7ZM7 7H5C4.44772 7 4 7.44772 4 8V9H7V7ZM4 11V13H7V11H4ZM4 15V16C4 16.5523 4.44772 17 5 17H7V15H4ZM9 17H11V15H9V17ZM13 17H15V15H13V17ZM17 17H19C19.5523 17 20 16.5523 20 16V15H17V17ZM20 13V11H17V13H20ZM11 13H9V11H11V13ZM15 13H13V11H15V13Z","fill":"currentColor"}}]})(props);
};
function CgViewSplit (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M2 8C2 6.34315 3.34315 5 5 5H19C20.6569 5 22 6.34315 22 8V16C22 17.6569 20.6569 19 19 19H5C3.34315 19 2 17.6569 2 16V8ZM13 7H19C19.5523 7 20 7.44771 20 8V16C20 16.5523 19.5523 17 19 17H13V7ZM11 7H5C4.44772 7 4 7.44772 4 8V16C4 16.5523 4.44772 17 5 17H11V7Z","fill":"currentColor"}}]})(props);
};
function CgVinyl (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z","fill":"currentColor"}}]})(props);
};
function CgVoicemailO (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M11 12C11 12.3506 10.9398 12.6872 10.8293 13H13.1707C13.0602 12.6872 13 12.3506 13 12C13 10.3431 14.3431 9 16 9C17.6569 9 19 10.3431 19 12C19 13.6569 17.6569 15 16 15H8C6.34315 15 5 13.6569 5 12C5 10.3431 6.34315 9 8 9C9.65685 9 11 10.3431 11 12ZM9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12ZM17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z","fill":"currentColor"}}]})(props);
};
function CgVoicemailR (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M11.5 12C11.5 12.3506 11.4398 12.6872 11.3293 13H13.6707C13.5602 12.6872 13.5 12.3506 13.5 12C13.5 10.3431 14.8431 9 16.5 9C18.1569 9 19.5 10.3431 19.5 12C19.5 13.6569 18.1569 15 16.5 15H8.5C6.84315 15 5.5 13.6569 5.5 12C5.5 10.3431 6.84315 9 8.5 9C10.1569 9 11.5 10.3431 11.5 12ZM9.5 12C9.5 12.5523 9.05228 13 8.5 13C7.94772 13 7.5 12.5523 7.5 12C7.5 11.4477 7.94772 11 8.5 11C9.05228 11 9.5 11.4477 9.5 12ZM17.5 12C17.5 12.5523 17.0523 13 16.5 13C15.9477 13 15.5 12.5523 15.5 12C15.5 11.4477 15.9477 11 16.5 11C17.0523 11 17.5 11.4477 17.5 12Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1.5 8C1.5 6.34315 2.84315 5 4.5 5H19.5C21.1569 5 22.5 6.34315 22.5 8V16C22.5 17.6569 21.1569 19 19.5 19H4.5C2.84315 19 1.5 17.6569 1.5 16V8ZM4.5 7H19.5C20.0523 7 20.5 7.44772 20.5 8V16C20.5 16.5523 20.0523 17 19.5 17H4.5C3.94772 17 3.5 16.5523 3.5 16V8C3.5 7.44772 3.94772 7 4.5 7Z","fill":"currentColor"}}]})(props);
};
function CgVoicemail (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M10.0004 15C10.6281 14.1643 11 13.1256 11 12C11 9.23858 8.76142 7 6 7C3.23858 7 1 9.23858 1 12C1 14.7614 3.23858 17 6 17H18C20.7614 17 23 14.7614 23 12C23 9.23858 20.7614 7 18 7C15.2386 7 13 9.23858 13 12C13 13.1256 13.3719 14.1643 13.9996 15H10.0004ZM6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15ZM18 15C19.6569 15 21 13.6569 21 12C21 10.3431 19.6569 9 18 9C16.3431 9 15 10.3431 15 12C15 13.6569 16.3431 15 18 15Z","fill":"currentColor"}}]})(props);
};
function CgVolume (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M24 12C24 16.4183 20.4183 20 16 20V18C19.3137 18 22 15.3137 22 12C22 8.68629 19.3137 6 16 6V4C20.4183 4 24 7.58172 24 12Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M20 12C20 14.2091 18.2091 16 16 16V14C17.1046 14 18 13.1046 18 12C18 10.8954 17.1046 10 16 10V8C18.2091 8 20 9.79086 20 12Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M9 16L15 20V4L9 8H5C2.79086 8 1 9.79086 1 12C1 14.2091 2.79086 16 5 16H9ZM5 10H9L13 7.5V16.5L9 14H5C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10Z","fill":"currentColor"}}]})(props);
};
function CgWebcam (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M13 10C13 10.5523 12.5523 11 12 11C11.4477 11 11 10.5523 11 10C11 9.44772 11.4477 9 12 9C12.5523 9 13 9.44772 13 10Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M13 14.9C15.2822 14.4367 17 12.419 17 10C17 7.23858 14.7614 5 12 5C9.23858 5 7 7.23858 7 10C7 12.419 8.71776 14.4367 11 14.9V17H7V19H17V17H13V14.9ZM12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z","fill":"currentColor"}}]})(props);
};
function CgWebsite (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M14 7C13.4477 7 13 7.44772 13 8V16C13 16.5523 13.4477 17 14 17H18C18.5523 17 19 16.5523 19 16V8C19 7.44772 18.5523 7 18 7H14ZM17 9H15V15H17V9Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H10C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7H6Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H10C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11H6Z","fill":"currentColor"}},{"tag":"path","attr":{"d":"M5 16C5 15.4477 5.44772 15 6 15H10C10.5523 15 11 15.4477 11 16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z","fill":"currentColor"}}]})(props);
};
function CgWindows (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M3 5.5485L10.1954 4.58174V11.6106L3.00672 11.6651L3 5.5485ZM10.1954 12.3909V19.4957L3.00571 18.5105L3.0053 12.3909H10.1954ZM11.1134 4.45599L20.9977 3V11.5334L11.1134 11.6106V4.45599ZM21 12.505L20.9977 21L11.1134 19.6466V12.505H21Z","fill":"currentColor"}}]})(props);
};
function CgWorkAlt (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M17 7C17 5.34315 15.6569 4 14 4H10C8.34315 4 7 5.34315 7 7H6C4.34315 7 3 8.34315 3 10V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V10C21 8.34315 19.6569 7 18 7H17ZM14 6H10C9.44772 6 9 6.44772 9 7H15C15 6.44772 14.5523 6 14 6ZM6 9H18C18.5523 9 19 9.44772 19 10V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V10C5 9.44772 5.44772 9 6 9Z","fill":"currentColor"}}]})(props);
};
function CgYinyang (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M14 16C14 17.1046 13.1046 18 12 18C10.8954 18 10 17.1046 10 16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16Z","fill":"currentColor"}},{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C14.2091 20 16 18.2091 16 16C16 13.7909 14.2091 12 12 12ZM14 8C14 9.10457 13.1046 10 12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8Z","fill":"currentColor"}}]})(props);
};
function CgYoutube (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M5 7H19C19.5523 7 20 7.44771 20 8V16C20 16.5523 19.5523 17 19 17H5C4.44772 17 4 16.5523 4 16V8C4 7.44772 4.44772 7 5 7ZM2 8C2 6.34315 3.34315 5 5 5H19C20.6569 5 22 6.34315 22 8V16C22 17.6569 20.6569 19 19 19H5C3.34315 19 2 17.6569 2 16V8ZM10 9L14 12L10 15V9Z","fill":"currentColor"}}]})(props);
};
function CgZeit (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"d":"M17.9923 17.0225L11.9806 6.97729L6.00775 17.0225H17.9923Z","fill":"currentColor"}}]})(props);
};
function CgZoomIn (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M15.3431 15.2426C17.6863 12.8995 17.6863 9.1005 15.3431 6.75736C13 4.41421 9.20101 4.41421 6.85786 6.75736C4.51472 9.1005 4.51472 12.8995 6.85786 15.2426C9.20101 17.5858 13 17.5858 15.3431 15.2426ZM16.7574 5.34315C19.6425 8.22833 19.8633 12.769 17.4195 15.9075C17.4348 15.921 17.4498 15.9351 17.4645 15.9497L21.7071 20.1924C22.0976 20.5829 22.0976 21.2161 21.7071 21.6066C21.3166 21.9971 20.6834 21.9971 20.2929 21.6066L16.0503 17.364C16.0356 17.3493 16.0215 17.3343 16.008 17.319C12.8695 19.7628 8.32883 19.542 5.44365 16.6569C2.31946 13.5327 2.31946 8.46734 5.44365 5.34315C8.56785 2.21895 13.6332 2.21895 16.7574 5.34315ZM10.1005 7H12.1005V10H15.1005V12H12.1005V15H10.1005V12H7.10052V10H10.1005V7Z","fill":"currentColor"}}]})(props);
};
function CgZoomOut (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M15.3431 15.2426C17.6863 12.8995 17.6863 9.1005 15.3431 6.75736C13 4.41421 9.20101 4.41421 6.85786 6.75736C4.51472 9.1005 4.51472 12.8995 6.85786 15.2426C9.20101 17.5858 13 17.5858 15.3431 15.2426ZM16.7574 5.34315C19.6425 8.22833 19.8633 12.769 17.4195 15.9075C17.4348 15.921 17.4498 15.9351 17.4645 15.9497L21.7071 20.1924C22.0976 20.5829 22.0976 21.2161 21.7071 21.6066C21.3166 21.9971 20.6834 21.9971 20.2929 21.6066L16.0503 17.364C16.0356 17.3493 16.0215 17.3343 16.008 17.319C12.8695 19.7628 8.32883 19.542 5.44365 16.6569C2.31946 13.5327 2.31946 8.46734 5.44365 5.34315C8.56785 2.21895 13.6332 2.21895 16.7574 5.34315ZM7.10052 10V12H15.1005V10L7.10052 10Z","fill":"currentColor"}}]})(props);
};


/***/ }),

/***/ "./node_modules/react-icons/fi/index.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/react-icons/fi/index.esm.js ***!
  \**************************************************/
/*! exports provided: FiActivity, FiAirplay, FiAlertCircle, FiAlertOctagon, FiAlertTriangle, FiAlignCenter, FiAlignJustify, FiAlignLeft, FiAlignRight, FiAnchor, FiAperture, FiArchive, FiArrowDownCircle, FiArrowDownLeft, FiArrowDownRight, FiArrowDown, FiArrowLeftCircle, FiArrowLeft, FiArrowRightCircle, FiArrowRight, FiArrowUpCircle, FiArrowUpLeft, FiArrowUpRight, FiArrowUp, FiAtSign, FiAward, FiBarChart2, FiBarChart, FiBatteryCharging, FiBattery, FiBellOff, FiBell, FiBluetooth, FiBold, FiBookOpen, FiBook, FiBookmark, FiBox, FiBriefcase, FiCalendar, FiCameraOff, FiCamera, FiCast, FiCheckCircle, FiCheckSquare, FiCheck, FiChevronDown, FiChevronLeft, FiChevronRight, FiChevronUp, FiChevronsDown, FiChevronsLeft, FiChevronsRight, FiChevronsUp, FiChrome, FiCircle, FiClipboard, FiClock, FiCloudDrizzle, FiCloudLightning, FiCloudOff, FiCloudRain, FiCloudSnow, FiCloud, FiCode, FiCodepen, FiCodesandbox, FiCoffee, FiColumns, FiCommand, FiCompass, FiCopy, FiCornerDownLeft, FiCornerDownRight, FiCornerLeftDown, FiCornerLeftUp, FiCornerRightDown, FiCornerRightUp, FiCornerUpLeft, FiCornerUpRight, FiCpu, FiCreditCard, FiCrop, FiCrosshair, FiDatabase, FiDelete, FiDisc, FiDivideCircle, FiDivideSquare, FiDivide, FiDollarSign, FiDownloadCloud, FiDownload, FiDribbble, FiDroplet, FiEdit2, FiEdit3, FiEdit, FiExternalLink, FiEyeOff, FiEye, FiFacebook, FiFastForward, FiFeather, FiFigma, FiFileMinus, FiFilePlus, FiFileText, FiFile, FiFilm, FiFilter, FiFlag, FiFolderMinus, FiFolderPlus, FiFolder, FiFramer, FiFrown, FiGift, FiGitBranch, FiGitCommit, FiGitMerge, FiGitPullRequest, FiGithub, FiGitlab, FiGlobe, FiGrid, FiHardDrive, FiHash, FiHeadphones, FiHeart, FiHelpCircle, FiHexagon, FiHome, FiImage, FiInbox, FiInfo, FiInstagram, FiItalic, FiKey, FiLayers, FiLayout, FiLifeBuoy, FiLink2, FiLink, FiLinkedin, FiList, FiLoader, FiLock, FiLogIn, FiLogOut, FiMail, FiMapPin, FiMap, FiMaximize2, FiMaximize, FiMeh, FiMenu, FiMessageCircle, FiMessageSquare, FiMicOff, FiMic, FiMinimize2, FiMinimize, FiMinusCircle, FiMinusSquare, FiMinus, FiMonitor, FiMoon, FiMoreHorizontal, FiMoreVertical, FiMousePointer, FiMove, FiMusic, FiNavigation2, FiNavigation, FiOctagon, FiPackage, FiPaperclip, FiPauseCircle, FiPause, FiPenTool, FiPercent, FiPhoneCall, FiPhoneForwarded, FiPhoneIncoming, FiPhoneMissed, FiPhoneOff, FiPhoneOutgoing, FiPhone, FiPieChart, FiPlayCircle, FiPlay, FiPlusCircle, FiPlusSquare, FiPlus, FiPocket, FiPower, FiPrinter, FiRadio, FiRefreshCcw, FiRefreshCw, FiRepeat, FiRewind, FiRotateCcw, FiRotateCw, FiRss, FiSave, FiScissors, FiSearch, FiSend, FiServer, FiSettings, FiShare2, FiShare, FiShieldOff, FiShield, FiShoppingBag, FiShoppingCart, FiShuffle, FiSidebar, FiSkipBack, FiSkipForward, FiSlack, FiSlash, FiSliders, FiSmartphone, FiSmile, FiSpeaker, FiSquare, FiStar, FiStopCircle, FiSun, FiSunrise, FiSunset, FiTablet, FiTag, FiTarget, FiTerminal, FiThermometer, FiThumbsDown, FiThumbsUp, FiToggleLeft, FiToggleRight, FiTool, FiTrash2, FiTrash, FiTrello, FiTrendingDown, FiTrendingUp, FiTriangle, FiTruck, FiTv, FiTwitch, FiTwitter, FiType, FiUmbrella, FiUnderline, FiUnlock, FiUploadCloud, FiUpload, FiUserCheck, FiUserMinus, FiUserPlus, FiUserX, FiUser, FiUsers, FiVideoOff, FiVideo, FiVoicemail, FiVolume1, FiVolume2, FiVolumeX, FiVolume, FiWatch, FiWifiOff, FiWifi, FiWind, FiXCircle, FiXOctagon, FiXSquare, FiX, FiYoutube, FiZapOff, FiZap, FiZoomIn, FiZoomOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiActivity", function() { return FiActivity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiAirplay", function() { return FiAirplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiAlertCircle", function() { return FiAlertCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiAlertOctagon", function() { return FiAlertOctagon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiAlertTriangle", function() { return FiAlertTriangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiAlignCenter", function() { return FiAlignCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiAlignJustify", function() { return FiAlignJustify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiAlignLeft", function() { return FiAlignLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiAlignRight", function() { return FiAlignRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiAnchor", function() { return FiAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiAperture", function() { return FiAperture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiArchive", function() { return FiArchive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiArrowDownCircle", function() { return FiArrowDownCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiArrowDownLeft", function() { return FiArrowDownLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiArrowDownRight", function() { return FiArrowDownRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiArrowDown", function() { return FiArrowDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiArrowLeftCircle", function() { return FiArrowLeftCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiArrowLeft", function() { return FiArrowLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiArrowRightCircle", function() { return FiArrowRightCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiArrowRight", function() { return FiArrowRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiArrowUpCircle", function() { return FiArrowUpCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiArrowUpLeft", function() { return FiArrowUpLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiArrowUpRight", function() { return FiArrowUpRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiArrowUp", function() { return FiArrowUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiAtSign", function() { return FiAtSign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiAward", function() { return FiAward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiBarChart2", function() { return FiBarChart2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiBarChart", function() { return FiBarChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiBatteryCharging", function() { return FiBatteryCharging; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiBattery", function() { return FiBattery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiBellOff", function() { return FiBellOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiBell", function() { return FiBell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiBluetooth", function() { return FiBluetooth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiBold", function() { return FiBold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiBookOpen", function() { return FiBookOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiBook", function() { return FiBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiBookmark", function() { return FiBookmark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiBox", function() { return FiBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiBriefcase", function() { return FiBriefcase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCalendar", function() { return FiCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCameraOff", function() { return FiCameraOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCamera", function() { return FiCamera; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCast", function() { return FiCast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCheckCircle", function() { return FiCheckCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCheckSquare", function() { return FiCheckSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCheck", function() { return FiCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiChevronDown", function() { return FiChevronDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiChevronLeft", function() { return FiChevronLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiChevronRight", function() { return FiChevronRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiChevronUp", function() { return FiChevronUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiChevronsDown", function() { return FiChevronsDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiChevronsLeft", function() { return FiChevronsLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiChevronsRight", function() { return FiChevronsRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiChevronsUp", function() { return FiChevronsUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiChrome", function() { return FiChrome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCircle", function() { return FiCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiClipboard", function() { return FiClipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiClock", function() { return FiClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCloudDrizzle", function() { return FiCloudDrizzle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCloudLightning", function() { return FiCloudLightning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCloudOff", function() { return FiCloudOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCloudRain", function() { return FiCloudRain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCloudSnow", function() { return FiCloudSnow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCloud", function() { return FiCloud; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCode", function() { return FiCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCodepen", function() { return FiCodepen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCodesandbox", function() { return FiCodesandbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCoffee", function() { return FiCoffee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiColumns", function() { return FiColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCommand", function() { return FiCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCompass", function() { return FiCompass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCopy", function() { return FiCopy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCornerDownLeft", function() { return FiCornerDownLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCornerDownRight", function() { return FiCornerDownRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCornerLeftDown", function() { return FiCornerLeftDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCornerLeftUp", function() { return FiCornerLeftUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCornerRightDown", function() { return FiCornerRightDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCornerRightUp", function() { return FiCornerRightUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCornerUpLeft", function() { return FiCornerUpLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCornerUpRight", function() { return FiCornerUpRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCpu", function() { return FiCpu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCreditCard", function() { return FiCreditCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCrop", function() { return FiCrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiCrosshair", function() { return FiCrosshair; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiDatabase", function() { return FiDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiDelete", function() { return FiDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiDisc", function() { return FiDisc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiDivideCircle", function() { return FiDivideCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiDivideSquare", function() { return FiDivideSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiDivide", function() { return FiDivide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiDollarSign", function() { return FiDollarSign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiDownloadCloud", function() { return FiDownloadCloud; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiDownload", function() { return FiDownload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiDribbble", function() { return FiDribbble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiDroplet", function() { return FiDroplet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiEdit2", function() { return FiEdit2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiEdit3", function() { return FiEdit3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiEdit", function() { return FiEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiExternalLink", function() { return FiExternalLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiEyeOff", function() { return FiEyeOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiEye", function() { return FiEye; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiFacebook", function() { return FiFacebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiFastForward", function() { return FiFastForward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiFeather", function() { return FiFeather; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiFigma", function() { return FiFigma; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiFileMinus", function() { return FiFileMinus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiFilePlus", function() { return FiFilePlus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiFileText", function() { return FiFileText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiFile", function() { return FiFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiFilm", function() { return FiFilm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiFilter", function() { return FiFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiFlag", function() { return FiFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiFolderMinus", function() { return FiFolderMinus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiFolderPlus", function() { return FiFolderPlus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiFolder", function() { return FiFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiFramer", function() { return FiFramer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiFrown", function() { return FiFrown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiGift", function() { return FiGift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiGitBranch", function() { return FiGitBranch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiGitCommit", function() { return FiGitCommit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiGitMerge", function() { return FiGitMerge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiGitPullRequest", function() { return FiGitPullRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiGithub", function() { return FiGithub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiGitlab", function() { return FiGitlab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiGlobe", function() { return FiGlobe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiGrid", function() { return FiGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiHardDrive", function() { return FiHardDrive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiHash", function() { return FiHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiHeadphones", function() { return FiHeadphones; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiHeart", function() { return FiHeart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiHelpCircle", function() { return FiHelpCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiHexagon", function() { return FiHexagon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiHome", function() { return FiHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiImage", function() { return FiImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiInbox", function() { return FiInbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiInfo", function() { return FiInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiInstagram", function() { return FiInstagram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiItalic", function() { return FiItalic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiKey", function() { return FiKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiLayers", function() { return FiLayers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiLayout", function() { return FiLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiLifeBuoy", function() { return FiLifeBuoy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiLink2", function() { return FiLink2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiLink", function() { return FiLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiLinkedin", function() { return FiLinkedin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiList", function() { return FiList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiLoader", function() { return FiLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiLock", function() { return FiLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiLogIn", function() { return FiLogIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiLogOut", function() { return FiLogOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMail", function() { return FiMail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMapPin", function() { return FiMapPin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMap", function() { return FiMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMaximize2", function() { return FiMaximize2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMaximize", function() { return FiMaximize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMeh", function() { return FiMeh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMenu", function() { return FiMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMessageCircle", function() { return FiMessageCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMessageSquare", function() { return FiMessageSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMicOff", function() { return FiMicOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMic", function() { return FiMic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMinimize2", function() { return FiMinimize2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMinimize", function() { return FiMinimize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMinusCircle", function() { return FiMinusCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMinusSquare", function() { return FiMinusSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMinus", function() { return FiMinus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMonitor", function() { return FiMonitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMoon", function() { return FiMoon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMoreHorizontal", function() { return FiMoreHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMoreVertical", function() { return FiMoreVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMousePointer", function() { return FiMousePointer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMove", function() { return FiMove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiMusic", function() { return FiMusic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiNavigation2", function() { return FiNavigation2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiNavigation", function() { return FiNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiOctagon", function() { return FiOctagon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPackage", function() { return FiPackage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPaperclip", function() { return FiPaperclip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPauseCircle", function() { return FiPauseCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPause", function() { return FiPause; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPenTool", function() { return FiPenTool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPercent", function() { return FiPercent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPhoneCall", function() { return FiPhoneCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPhoneForwarded", function() { return FiPhoneForwarded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPhoneIncoming", function() { return FiPhoneIncoming; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPhoneMissed", function() { return FiPhoneMissed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPhoneOff", function() { return FiPhoneOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPhoneOutgoing", function() { return FiPhoneOutgoing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPhone", function() { return FiPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPieChart", function() { return FiPieChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPlayCircle", function() { return FiPlayCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPlay", function() { return FiPlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPlusCircle", function() { return FiPlusCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPlusSquare", function() { return FiPlusSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPlus", function() { return FiPlus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPocket", function() { return FiPocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPower", function() { return FiPower; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiPrinter", function() { return FiPrinter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiRadio", function() { return FiRadio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiRefreshCcw", function() { return FiRefreshCcw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiRefreshCw", function() { return FiRefreshCw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiRepeat", function() { return FiRepeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiRewind", function() { return FiRewind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiRotateCcw", function() { return FiRotateCcw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiRotateCw", function() { return FiRotateCw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiRss", function() { return FiRss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiSave", function() { return FiSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiScissors", function() { return FiScissors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiSearch", function() { return FiSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiSend", function() { return FiSend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiServer", function() { return FiServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiSettings", function() { return FiSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiShare2", function() { return FiShare2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiShare", function() { return FiShare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiShieldOff", function() { return FiShieldOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiShield", function() { return FiShield; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiShoppingBag", function() { return FiShoppingBag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiShoppingCart", function() { return FiShoppingCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiShuffle", function() { return FiShuffle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiSidebar", function() { return FiSidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiSkipBack", function() { return FiSkipBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiSkipForward", function() { return FiSkipForward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiSlack", function() { return FiSlack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiSlash", function() { return FiSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiSliders", function() { return FiSliders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiSmartphone", function() { return FiSmartphone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiSmile", function() { return FiSmile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiSpeaker", function() { return FiSpeaker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiSquare", function() { return FiSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiStar", function() { return FiStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiStopCircle", function() { return FiStopCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiSun", function() { return FiSun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiSunrise", function() { return FiSunrise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiSunset", function() { return FiSunset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiTablet", function() { return FiTablet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiTag", function() { return FiTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiTarget", function() { return FiTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiTerminal", function() { return FiTerminal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiThermometer", function() { return FiThermometer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiThumbsDown", function() { return FiThumbsDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiThumbsUp", function() { return FiThumbsUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiToggleLeft", function() { return FiToggleLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiToggleRight", function() { return FiToggleRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiTool", function() { return FiTool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiTrash2", function() { return FiTrash2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiTrash", function() { return FiTrash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiTrello", function() { return FiTrello; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiTrendingDown", function() { return FiTrendingDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiTrendingUp", function() { return FiTrendingUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiTriangle", function() { return FiTriangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiTruck", function() { return FiTruck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiTv", function() { return FiTv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiTwitch", function() { return FiTwitch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiTwitter", function() { return FiTwitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiType", function() { return FiType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiUmbrella", function() { return FiUmbrella; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiUnderline", function() { return FiUnderline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiUnlock", function() { return FiUnlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiUploadCloud", function() { return FiUploadCloud; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiUpload", function() { return FiUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiUserCheck", function() { return FiUserCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiUserMinus", function() { return FiUserMinus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiUserPlus", function() { return FiUserPlus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiUserX", function() { return FiUserX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiUser", function() { return FiUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiUsers", function() { return FiUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiVideoOff", function() { return FiVideoOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiVideo", function() { return FiVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiVoicemail", function() { return FiVoicemail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiVolume1", function() { return FiVolume1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiVolume2", function() { return FiVolume2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiVolumeX", function() { return FiVolumeX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiVolume", function() { return FiVolume; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiWatch", function() { return FiWatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiWifiOff", function() { return FiWifiOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiWifi", function() { return FiWifi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiWind", function() { return FiWind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiXCircle", function() { return FiXCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiXOctagon", function() { return FiXOctagon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiXSquare", function() { return FiXSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiX", function() { return FiX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiYoutube", function() { return FiYoutube; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiZapOff", function() { return FiZapOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiZap", function() { return FiZap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiZoomIn", function() { return FiZoomIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiZoomOut", function() { return FiZoomOut; });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ "./node_modules/react-icons/lib/esm/index.js");
// THIS FILE IS AUTO GENERATED

function FiActivity (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"22 12 18 12 15 21 9 3 6 12 2 12"}}]})(props);
};
function FiAirplay (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"}},{"tag":"polygon","attr":{"points":"12 15 17 21 7 21 12 15"}}]})(props);
};
function FiAlertCircle (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"line","attr":{"x1":"12","y1":"8","x2":"12","y2":"12"}},{"tag":"line","attr":{"x1":"12","y1":"16","x2":"12.01","y2":"16"}}]})(props);
};
function FiAlertOctagon (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}},{"tag":"line","attr":{"x1":"12","y1":"8","x2":"12","y2":"12"}},{"tag":"line","attr":{"x1":"12","y1":"16","x2":"12.01","y2":"16"}}]})(props);
};
function FiAlertTriangle (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}},{"tag":"line","attr":{"x1":"12","y1":"9","x2":"12","y2":"13"}},{"tag":"line","attr":{"x1":"12","y1":"17","x2":"12.01","y2":"17"}}]})(props);
};
function FiAlignCenter (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"18","y1":"10","x2":"6","y2":"10"}},{"tag":"line","attr":{"x1":"21","y1":"6","x2":"3","y2":"6"}},{"tag":"line","attr":{"x1":"21","y1":"14","x2":"3","y2":"14"}},{"tag":"line","attr":{"x1":"18","y1":"18","x2":"6","y2":"18"}}]})(props);
};
function FiAlignJustify (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"21","y1":"10","x2":"3","y2":"10"}},{"tag":"line","attr":{"x1":"21","y1":"6","x2":"3","y2":"6"}},{"tag":"line","attr":{"x1":"21","y1":"14","x2":"3","y2":"14"}},{"tag":"line","attr":{"x1":"21","y1":"18","x2":"3","y2":"18"}}]})(props);
};
function FiAlignLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"17","y1":"10","x2":"3","y2":"10"}},{"tag":"line","attr":{"x1":"21","y1":"6","x2":"3","y2":"6"}},{"tag":"line","attr":{"x1":"21","y1":"14","x2":"3","y2":"14"}},{"tag":"line","attr":{"x1":"17","y1":"18","x2":"3","y2":"18"}}]})(props);
};
function FiAlignRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"21","y1":"10","x2":"7","y2":"10"}},{"tag":"line","attr":{"x1":"21","y1":"6","x2":"3","y2":"6"}},{"tag":"line","attr":{"x1":"21","y1":"14","x2":"3","y2":"14"}},{"tag":"line","attr":{"x1":"21","y1":"18","x2":"7","y2":"18"}}]})(props);
};
function FiAnchor (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"5","r":"3"}},{"tag":"line","attr":{"x1":"12","y1":"22","x2":"12","y2":"8"}},{"tag":"path","attr":{"d":"M5 12H2a10 10 0 0 0 20 0h-3"}}]})(props);
};
function FiAperture (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"line","attr":{"x1":"14.31","y1":"8","x2":"20.05","y2":"17.94"}},{"tag":"line","attr":{"x1":"9.69","y1":"8","x2":"21.17","y2":"8"}},{"tag":"line","attr":{"x1":"7.38","y1":"12","x2":"13.12","y2":"2.06"}},{"tag":"line","attr":{"x1":"9.69","y1":"16","x2":"3.95","y2":"6.06"}},{"tag":"line","attr":{"x1":"14.31","y1":"16","x2":"2.83","y2":"16"}},{"tag":"line","attr":{"x1":"16.62","y1":"12","x2":"10.88","y2":"21.94"}}]})(props);
};
function FiArchive (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"21 8 21 21 3 21 3 8"}},{"tag":"rect","attr":{"x":"1","y":"3","width":"22","height":"5"}},{"tag":"line","attr":{"x1":"10","y1":"12","x2":"14","y2":"12"}}]})(props);
};
function FiArrowDownCircle (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"polyline","attr":{"points":"8 12 12 16 16 12"}},{"tag":"line","attr":{"x1":"12","y1":"8","x2":"12","y2":"16"}}]})(props);
};
function FiArrowDownLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"17","y1":"7","x2":"7","y2":"17"}},{"tag":"polyline","attr":{"points":"17 17 7 17 7 7"}}]})(props);
};
function FiArrowDownRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"7","y1":"7","x2":"17","y2":"17"}},{"tag":"polyline","attr":{"points":"17 7 17 17 7 17"}}]})(props);
};
function FiArrowDown (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"12","y1":"5","x2":"12","y2":"19"}},{"tag":"polyline","attr":{"points":"19 12 12 19 5 12"}}]})(props);
};
function FiArrowLeftCircle (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"polyline","attr":{"points":"12 8 8 12 12 16"}},{"tag":"line","attr":{"x1":"16","y1":"12","x2":"8","y2":"12"}}]})(props);
};
function FiArrowLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"19","y1":"12","x2":"5","y2":"12"}},{"tag":"polyline","attr":{"points":"12 19 5 12 12 5"}}]})(props);
};
function FiArrowRightCircle (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"polyline","attr":{"points":"12 16 16 12 12 8"}},{"tag":"line","attr":{"x1":"8","y1":"12","x2":"16","y2":"12"}}]})(props);
};
function FiArrowRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"5","y1":"12","x2":"19","y2":"12"}},{"tag":"polyline","attr":{"points":"12 5 19 12 12 19"}}]})(props);
};
function FiArrowUpCircle (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"polyline","attr":{"points":"16 12 12 8 8 12"}},{"tag":"line","attr":{"x1":"12","y1":"16","x2":"12","y2":"8"}}]})(props);
};
function FiArrowUpLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"17","y1":"17","x2":"7","y2":"7"}},{"tag":"polyline","attr":{"points":"7 17 7 7 17 7"}}]})(props);
};
function FiArrowUpRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"7","y1":"17","x2":"17","y2":"7"}},{"tag":"polyline","attr":{"points":"7 7 17 7 17 17"}}]})(props);
};
function FiArrowUp (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"12","y1":"19","x2":"12","y2":"5"}},{"tag":"polyline","attr":{"points":"5 12 12 5 19 12"}}]})(props);
};
function FiAtSign (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"4"}},{"tag":"path","attr":{"d":"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"}}]})(props);
};
function FiAward (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"8","r":"7"}},{"tag":"polyline","attr":{"points":"8.21 13.89 7 23 12 20 17 23 15.79 13.88"}}]})(props);
};
function FiBarChart2 (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"18","y1":"20","x2":"18","y2":"10"}},{"tag":"line","attr":{"x1":"12","y1":"20","x2":"12","y2":"4"}},{"tag":"line","attr":{"x1":"6","y1":"20","x2":"6","y2":"14"}}]})(props);
};
function FiBarChart (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"12","y1":"20","x2":"12","y2":"10"}},{"tag":"line","attr":{"x1":"18","y1":"20","x2":"18","y2":"4"}},{"tag":"line","attr":{"x1":"6","y1":"20","x2":"6","y2":"16"}}]})(props);
};
function FiBatteryCharging (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"}},{"tag":"line","attr":{"x1":"23","y1":"13","x2":"23","y2":"11"}},{"tag":"polyline","attr":{"points":"11 6 7 12 13 12 9 18"}}]})(props);
};
function FiBattery (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"1","y":"6","width":"18","height":"12","rx":"2","ry":"2"}},{"tag":"line","attr":{"x1":"23","y1":"13","x2":"23","y2":"11"}}]})(props);
};
function FiBellOff (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M13.73 21a2 2 0 0 1-3.46 0"}},{"tag":"path","attr":{"d":"M18.63 13A17.89 17.89 0 0 1 18 8"}},{"tag":"path","attr":{"d":"M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"}},{"tag":"path","attr":{"d":"M18 8a6 6 0 0 0-9.33-5"}},{"tag":"line","attr":{"x1":"1","y1":"1","x2":"23","y2":"23"}}]})(props);
};
function FiBell (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}},{"tag":"path","attr":{"d":"M13.73 21a2 2 0 0 1-3.46 0"}}]})(props);
};
function FiBluetooth (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"}}]})(props);
};
function FiBold (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"}},{"tag":"path","attr":{"d":"M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"}}]})(props);
};
function FiBookOpen (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}},{"tag":"path","attr":{"d":"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"}}]})(props);
};
function FiBook (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}},{"tag":"path","attr":{"d":"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"}}]})(props);
};
function FiBookmark (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"}}]})(props);
};
function FiBox (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}},{"tag":"polyline","attr":{"points":"3.27 6.96 12 12.01 20.73 6.96"}},{"tag":"line","attr":{"x1":"12","y1":"22.08","x2":"12","y2":"12"}}]})(props);
};
function FiBriefcase (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"2","y":"7","width":"20","height":"14","rx":"2","ry":"2"}},{"tag":"path","attr":{"d":"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}}]})(props);
};
function FiCalendar (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"4","width":"18","height":"18","rx":"2","ry":"2"}},{"tag":"line","attr":{"x1":"16","y1":"2","x2":"16","y2":"6"}},{"tag":"line","attr":{"x1":"8","y1":"2","x2":"8","y2":"6"}},{"tag":"line","attr":{"x1":"3","y1":"10","x2":"21","y2":"10"}}]})(props);
};
function FiCameraOff (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"1","y1":"1","x2":"23","y2":"23"}},{"tag":"path","attr":{"d":"M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"}}]})(props);
};
function FiCamera (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"}},{"tag":"circle","attr":{"cx":"12","cy":"13","r":"4"}}]})(props);
};
function FiCast (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"}},{"tag":"line","attr":{"x1":"2","y1":"20","x2":"2.01","y2":"20"}}]})(props);
};
function FiCheckCircle (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M22 11.08V12a10 10 0 1 1-5.93-9.14"}},{"tag":"polyline","attr":{"points":"22 4 12 14.01 9 11.01"}}]})(props);
};
function FiCheckSquare (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"9 11 12 14 22 4"}},{"tag":"path","attr":{"d":"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"}}]})(props);
};
function FiCheck (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"20 6 9 17 4 12"}}]})(props);
};
function FiChevronDown (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"6 9 12 15 18 9"}}]})(props);
};
function FiChevronLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"15 18 9 12 15 6"}}]})(props);
};
function FiChevronRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"9 18 15 12 9 6"}}]})(props);
};
function FiChevronUp (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"18 15 12 9 6 15"}}]})(props);
};
function FiChevronsDown (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"7 13 12 18 17 13"}},{"tag":"polyline","attr":{"points":"7 6 12 11 17 6"}}]})(props);
};
function FiChevronsLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"11 17 6 12 11 7"}},{"tag":"polyline","attr":{"points":"18 17 13 12 18 7"}}]})(props);
};
function FiChevronsRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"13 17 18 12 13 7"}},{"tag":"polyline","attr":{"points":"6 17 11 12 6 7"}}]})(props);
};
function FiChevronsUp (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"17 11 12 6 7 11"}},{"tag":"polyline","attr":{"points":"17 18 12 13 7 18"}}]})(props);
};
function FiChrome (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"circle","attr":{"cx":"12","cy":"12","r":"4"}},{"tag":"line","attr":{"x1":"21.17","y1":"8","x2":"12","y2":"8"}},{"tag":"line","attr":{"x1":"3.95","y1":"6.06","x2":"8.54","y2":"14"}},{"tag":"line","attr":{"x1":"10.88","y1":"21.94","x2":"15.46","y2":"14"}}]})(props);
};
function FiCircle (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}}]})(props);
};
function FiClipboard (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}},{"tag":"rect","attr":{"x":"8","y":"2","width":"8","height":"4","rx":"1","ry":"1"}}]})(props);
};
function FiClock (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"polyline","attr":{"points":"12 6 12 12 16 14"}}]})(props);
};
function FiCloudDrizzle (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"8","y1":"19","x2":"8","y2":"21"}},{"tag":"line","attr":{"x1":"8","y1":"13","x2":"8","y2":"15"}},{"tag":"line","attr":{"x1":"16","y1":"19","x2":"16","y2":"21"}},{"tag":"line","attr":{"x1":"16","y1":"13","x2":"16","y2":"15"}},{"tag":"line","attr":{"x1":"12","y1":"21","x2":"12","y2":"23"}},{"tag":"line","attr":{"x1":"12","y1":"15","x2":"12","y2":"17"}},{"tag":"path","attr":{"d":"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"}}]})(props);
};
function FiCloudLightning (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"}},{"tag":"polyline","attr":{"points":"13 11 9 17 15 17 11 23"}}]})(props);
};
function FiCloudOff (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"}},{"tag":"line","attr":{"x1":"1","y1":"1","x2":"23","y2":"23"}}]})(props);
};
function FiCloudRain (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"16","y1":"13","x2":"16","y2":"21"}},{"tag":"line","attr":{"x1":"8","y1":"13","x2":"8","y2":"21"}},{"tag":"line","attr":{"x1":"12","y1":"15","x2":"12","y2":"23"}},{"tag":"path","attr":{"d":"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"}}]})(props);
};
function FiCloudSnow (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"}},{"tag":"line","attr":{"x1":"8","y1":"16","x2":"8.01","y2":"16"}},{"tag":"line","attr":{"x1":"8","y1":"20","x2":"8.01","y2":"20"}},{"tag":"line","attr":{"x1":"12","y1":"18","x2":"12.01","y2":"18"}},{"tag":"line","attr":{"x1":"12","y1":"22","x2":"12.01","y2":"22"}},{"tag":"line","attr":{"x1":"16","y1":"16","x2":"16.01","y2":"16"}},{"tag":"line","attr":{"x1":"16","y1":"20","x2":"16.01","y2":"20"}}]})(props);
};
function FiCloud (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"}}]})(props);
};
function FiCode (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"16 18 22 12 16 6"}},{"tag":"polyline","attr":{"points":"8 6 2 12 8 18"}}]})(props);
};
function FiCodepen (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"}},{"tag":"line","attr":{"x1":"12","y1":"22","x2":"12","y2":"15.5"}},{"tag":"polyline","attr":{"points":"22 8.5 12 15.5 2 8.5"}},{"tag":"polyline","attr":{"points":"2 15.5 12 8.5 22 15.5"}},{"tag":"line","attr":{"x1":"12","y1":"2","x2":"12","y2":"8.5"}}]})(props);
};
function FiCodesandbox (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}},{"tag":"polyline","attr":{"points":"7.5 4.21 12 6.81 16.5 4.21"}},{"tag":"polyline","attr":{"points":"7.5 19.79 7.5 14.6 3 12"}},{"tag":"polyline","attr":{"points":"21 12 16.5 14.6 16.5 19.79"}},{"tag":"polyline","attr":{"points":"3.27 6.96 12 12.01 20.73 6.96"}},{"tag":"line","attr":{"x1":"12","y1":"22.08","x2":"12","y2":"12"}}]})(props);
};
function FiCoffee (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M18 8h1a4 4 0 0 1 0 8h-1"}},{"tag":"path","attr":{"d":"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"}},{"tag":"line","attr":{"x1":"6","y1":"1","x2":"6","y2":"4"}},{"tag":"line","attr":{"x1":"10","y1":"1","x2":"10","y2":"4"}},{"tag":"line","attr":{"x1":"14","y1":"1","x2":"14","y2":"4"}}]})(props);
};
function FiColumns (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"}}]})(props);
};
function FiCommand (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}}]})(props);
};
function FiCompass (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"polygon","attr":{"points":"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"}}]})(props);
};
function FiCopy (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"9","y":"9","width":"13","height":"13","rx":"2","ry":"2"}},{"tag":"path","attr":{"d":"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"}}]})(props);
};
function FiCornerDownLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"9 10 4 15 9 20"}},{"tag":"path","attr":{"d":"M20 4v7a4 4 0 0 1-4 4H4"}}]})(props);
};
function FiCornerDownRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"15 10 20 15 15 20"}},{"tag":"path","attr":{"d":"M4 4v7a4 4 0 0 0 4 4h12"}}]})(props);
};
function FiCornerLeftDown (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"14 15 9 20 4 15"}},{"tag":"path","attr":{"d":"M20 4h-7a4 4 0 0 0-4 4v12"}}]})(props);
};
function FiCornerLeftUp (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"14 9 9 4 4 9"}},{"tag":"path","attr":{"d":"M20 20h-7a4 4 0 0 1-4-4V4"}}]})(props);
};
function FiCornerRightDown (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"10 15 15 20 20 15"}},{"tag":"path","attr":{"d":"M4 4h7a4 4 0 0 1 4 4v12"}}]})(props);
};
function FiCornerRightUp (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"10 9 15 4 20 9"}},{"tag":"path","attr":{"d":"M4 20h7a4 4 0 0 0 4-4V4"}}]})(props);
};
function FiCornerUpLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"9 14 4 9 9 4"}},{"tag":"path","attr":{"d":"M20 20v-7a4 4 0 0 0-4-4H4"}}]})(props);
};
function FiCornerUpRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"15 14 20 9 15 4"}},{"tag":"path","attr":{"d":"M4 20v-7a4 4 0 0 1 4-4h12"}}]})(props);
};
function FiCpu (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"4","y":"4","width":"16","height":"16","rx":"2","ry":"2"}},{"tag":"rect","attr":{"x":"9","y":"9","width":"6","height":"6"}},{"tag":"line","attr":{"x1":"9","y1":"1","x2":"9","y2":"4"}},{"tag":"line","attr":{"x1":"15","y1":"1","x2":"15","y2":"4"}},{"tag":"line","attr":{"x1":"9","y1":"20","x2":"9","y2":"23"}},{"tag":"line","attr":{"x1":"15","y1":"20","x2":"15","y2":"23"}},{"tag":"line","attr":{"x1":"20","y1":"9","x2":"23","y2":"9"}},{"tag":"line","attr":{"x1":"20","y1":"14","x2":"23","y2":"14"}},{"tag":"line","attr":{"x1":"1","y1":"9","x2":"4","y2":"9"}},{"tag":"line","attr":{"x1":"1","y1":"14","x2":"4","y2":"14"}}]})(props);
};
function FiCreditCard (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"1","y":"4","width":"22","height":"16","rx":"2","ry":"2"}},{"tag":"line","attr":{"x1":"1","y1":"10","x2":"23","y2":"10"}}]})(props);
};
function FiCrop (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M6.13 1L6 16a2 2 0 0 0 2 2h15"}},{"tag":"path","attr":{"d":"M1 6.13L16 6a2 2 0 0 1 2 2v15"}}]})(props);
};
function FiCrosshair (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"line","attr":{"x1":"22","y1":"12","x2":"18","y2":"12"}},{"tag":"line","attr":{"x1":"6","y1":"12","x2":"2","y2":"12"}},{"tag":"line","attr":{"x1":"12","y1":"6","x2":"12","y2":"2"}},{"tag":"line","attr":{"x1":"12","y1":"22","x2":"12","y2":"18"}}]})(props);
};
function FiDatabase (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"ellipse","attr":{"cx":"12","cy":"5","rx":"9","ry":"3"}},{"tag":"path","attr":{"d":"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}},{"tag":"path","attr":{"d":"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"}}]})(props);
};
function FiDelete (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"}},{"tag":"line","attr":{"x1":"18","y1":"9","x2":"12","y2":"15"}},{"tag":"line","attr":{"x1":"12","y1":"9","x2":"18","y2":"15"}}]})(props);
};
function FiDisc (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"circle","attr":{"cx":"12","cy":"12","r":"3"}}]})(props);
};
function FiDivideCircle (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"8","y1":"12","x2":"16","y2":"12"}},{"tag":"line","attr":{"x1":"12","y1":"16","x2":"12","y2":"16"}},{"tag":"line","attr":{"x1":"12","y1":"8","x2":"12","y2":"8"}},{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}}]})(props);
};
function FiDivideSquare (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"3","width":"18","height":"18","rx":"2","ry":"2"}},{"tag":"line","attr":{"x1":"8","y1":"12","x2":"16","y2":"12"}},{"tag":"line","attr":{"x1":"12","y1":"16","x2":"12","y2":"16"}},{"tag":"line","attr":{"x1":"12","y1":"8","x2":"12","y2":"8"}}]})(props);
};
function FiDivide (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"6","r":"2"}},{"tag":"line","attr":{"x1":"5","y1":"12","x2":"19","y2":"12"}},{"tag":"circle","attr":{"cx":"12","cy":"18","r":"2"}}]})(props);
};
function FiDollarSign (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"12","y1":"1","x2":"12","y2":"23"}},{"tag":"path","attr":{"d":"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}}]})(props);
};
function FiDownloadCloud (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"8 17 12 21 16 17"}},{"tag":"line","attr":{"x1":"12","y1":"12","x2":"12","y2":"21"}},{"tag":"path","attr":{"d":"M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"}}]})(props);
};
function FiDownload (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{"tag":"polyline","attr":{"points":"7 10 12 15 17 10"}},{"tag":"line","attr":{"x1":"12","y1":"15","x2":"12","y2":"3"}}]})(props);
};
function FiDribbble (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"path","attr":{"d":"M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"}}]})(props);
};
function FiDroplet (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"}}]})(props);
};
function FiEdit2 (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"}}]})(props);
};
function FiEdit3 (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M12 20h9"}},{"tag":"path","attr":{"d":"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"}}]})(props);
};
function FiEdit (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}},{"tag":"path","attr":{"d":"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"}}]})(props);
};
function FiExternalLink (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}},{"tag":"polyline","attr":{"points":"15 3 21 3 21 9"}},{"tag":"line","attr":{"x1":"10","y1":"14","x2":"21","y2":"3"}}]})(props);
};
function FiEyeOff (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}},{"tag":"line","attr":{"x1":"1","y1":"1","x2":"23","y2":"23"}}]})(props);
};
function FiEye (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}},{"tag":"circle","attr":{"cx":"12","cy":"12","r":"3"}}]})(props);
};
function FiFacebook (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"}}]})(props);
};
function FiFastForward (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"13 19 22 12 13 5 13 19"}},{"tag":"polygon","attr":{"points":"2 19 11 12 2 5 2 19"}}]})(props);
};
function FiFeather (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"}},{"tag":"line","attr":{"x1":"16","y1":"8","x2":"2","y2":"22"}},{"tag":"line","attr":{"x1":"17.5","y1":"15","x2":"9","y2":"15"}}]})(props);
};
function FiFigma (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"}},{"tag":"path","attr":{"d":"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"}},{"tag":"path","attr":{"d":"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"}},{"tag":"path","attr":{"d":"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"}},{"tag":"path","attr":{"d":"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"}}]})(props);
};
function FiFileMinus (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}},{"tag":"polyline","attr":{"points":"14 2 14 8 20 8"}},{"tag":"line","attr":{"x1":"9","y1":"15","x2":"15","y2":"15"}}]})(props);
};
function FiFilePlus (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}},{"tag":"polyline","attr":{"points":"14 2 14 8 20 8"}},{"tag":"line","attr":{"x1":"12","y1":"18","x2":"12","y2":"12"}},{"tag":"line","attr":{"x1":"9","y1":"15","x2":"15","y2":"15"}}]})(props);
};
function FiFileText (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}},{"tag":"polyline","attr":{"points":"14 2 14 8 20 8"}},{"tag":"line","attr":{"x1":"16","y1":"13","x2":"8","y2":"13"}},{"tag":"line","attr":{"x1":"16","y1":"17","x2":"8","y2":"17"}},{"tag":"polyline","attr":{"points":"10 9 9 9 8 9"}}]})(props);
};
function FiFile (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}},{"tag":"polyline","attr":{"points":"13 2 13 9 20 9"}}]})(props);
};
function FiFilm (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"2","y":"2","width":"20","height":"20","rx":"2.18","ry":"2.18"}},{"tag":"line","attr":{"x1":"7","y1":"2","x2":"7","y2":"22"}},{"tag":"line","attr":{"x1":"17","y1":"2","x2":"17","y2":"22"}},{"tag":"line","attr":{"x1":"2","y1":"12","x2":"22","y2":"12"}},{"tag":"line","attr":{"x1":"2","y1":"7","x2":"7","y2":"7"}},{"tag":"line","attr":{"x1":"2","y1":"17","x2":"7","y2":"17"}},{"tag":"line","attr":{"x1":"17","y1":"17","x2":"22","y2":"17"}},{"tag":"line","attr":{"x1":"17","y1":"7","x2":"22","y2":"7"}}]})(props);
};
function FiFilter (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"}}]})(props);
};
function FiFlag (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"}},{"tag":"line","attr":{"x1":"4","y1":"22","x2":"4","y2":"15"}}]})(props);
};
function FiFolderMinus (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"}},{"tag":"line","attr":{"x1":"9","y1":"14","x2":"15","y2":"14"}}]})(props);
};
function FiFolderPlus (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"}},{"tag":"line","attr":{"x1":"12","y1":"11","x2":"12","y2":"17"}},{"tag":"line","attr":{"x1":"9","y1":"14","x2":"15","y2":"14"}}]})(props);
};
function FiFolder (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"}}]})(props);
};
function FiFramer (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"}}]})(props);
};
function FiFrown (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"path","attr":{"d":"M16 16s-1.5-2-4-2-4 2-4 2"}},{"tag":"line","attr":{"x1":"9","y1":"9","x2":"9.01","y2":"9"}},{"tag":"line","attr":{"x1":"15","y1":"9","x2":"15.01","y2":"9"}}]})(props);
};
function FiGift (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"20 12 20 22 4 22 4 12"}},{"tag":"rect","attr":{"x":"2","y":"7","width":"20","height":"5"}},{"tag":"line","attr":{"x1":"12","y1":"22","x2":"12","y2":"7"}},{"tag":"path","attr":{"d":"M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"}},{"tag":"path","attr":{"d":"M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"}}]})(props);
};
function FiGitBranch (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"6","y1":"3","x2":"6","y2":"15"}},{"tag":"circle","attr":{"cx":"18","cy":"6","r":"3"}},{"tag":"circle","attr":{"cx":"6","cy":"18","r":"3"}},{"tag":"path","attr":{"d":"M18 9a9 9 0 0 1-9 9"}}]})(props);
};
function FiGitCommit (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"4"}},{"tag":"line","attr":{"x1":"1.05","y1":"12","x2":"7","y2":"12"}},{"tag":"line","attr":{"x1":"17.01","y1":"12","x2":"22.96","y2":"12"}}]})(props);
};
function FiGitMerge (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"18","cy":"18","r":"3"}},{"tag":"circle","attr":{"cx":"6","cy":"6","r":"3"}},{"tag":"path","attr":{"d":"M6 21V9a9 9 0 0 0 9 9"}}]})(props);
};
function FiGitPullRequest (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"18","cy":"18","r":"3"}},{"tag":"circle","attr":{"cx":"6","cy":"6","r":"3"}},{"tag":"path","attr":{"d":"M13 6h3a2 2 0 0 1 2 2v7"}},{"tag":"line","attr":{"x1":"6","y1":"9","x2":"6","y2":"21"}}]})(props);
};
function FiGithub (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}}]})(props);
};
function FiGitlab (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"}}]})(props);
};
function FiGlobe (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"line","attr":{"x1":"2","y1":"12","x2":"22","y2":"12"}},{"tag":"path","attr":{"d":"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"}}]})(props);
};
function FiGrid (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"3","width":"7","height":"7"}},{"tag":"rect","attr":{"x":"14","y":"3","width":"7","height":"7"}},{"tag":"rect","attr":{"x":"14","y":"14","width":"7","height":"7"}},{"tag":"rect","attr":{"x":"3","y":"14","width":"7","height":"7"}}]})(props);
};
function FiHardDrive (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"22","y1":"12","x2":"2","y2":"12"}},{"tag":"path","attr":{"d":"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}},{"tag":"line","attr":{"x1":"6","y1":"16","x2":"6.01","y2":"16"}},{"tag":"line","attr":{"x1":"10","y1":"16","x2":"10.01","y2":"16"}}]})(props);
};
function FiHash (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"4","y1":"9","x2":"20","y2":"9"}},{"tag":"line","attr":{"x1":"4","y1":"15","x2":"20","y2":"15"}},{"tag":"line","attr":{"x1":"10","y1":"3","x2":"8","y2":"21"}},{"tag":"line","attr":{"x1":"16","y1":"3","x2":"14","y2":"21"}}]})(props);
};
function FiHeadphones (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M3 18v-6a9 9 0 0 1 18 0v6"}},{"tag":"path","attr":{"d":"M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"}}]})(props);
};
function FiHeart (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"}}]})(props);
};
function FiHelpCircle (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"path","attr":{"d":"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}},{"tag":"line","attr":{"x1":"12","y1":"17","x2":"12.01","y2":"17"}}]})(props);
};
function FiHexagon (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}}]})(props);
};
function FiHome (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}},{"tag":"polyline","attr":{"points":"9 22 9 12 15 12 15 22"}}]})(props);
};
function FiImage (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"3","width":"18","height":"18","rx":"2","ry":"2"}},{"tag":"circle","attr":{"cx":"8.5","cy":"8.5","r":"1.5"}},{"tag":"polyline","attr":{"points":"21 15 16 10 5 21"}}]})(props);
};
function FiInbox (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"22 12 16 12 14 15 10 15 8 12 2 12"}},{"tag":"path","attr":{"d":"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}}]})(props);
};
function FiInfo (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"line","attr":{"x1":"12","y1":"16","x2":"12","y2":"12"}},{"tag":"line","attr":{"x1":"12","y1":"8","x2":"12.01","y2":"8"}}]})(props);
};
function FiInstagram (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"2","y":"2","width":"20","height":"20","rx":"5","ry":"5"}},{"tag":"path","attr":{"d":"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}},{"tag":"line","attr":{"x1":"17.5","y1":"6.5","x2":"17.51","y2":"6.5"}}]})(props);
};
function FiItalic (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"19","y1":"4","x2":"10","y2":"4"}},{"tag":"line","attr":{"x1":"14","y1":"20","x2":"5","y2":"20"}},{"tag":"line","attr":{"x1":"15","y1":"4","x2":"9","y2":"20"}}]})(props);
};
function FiKey (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"}}]})(props);
};
function FiLayers (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"12 2 2 7 12 12 22 7 12 2"}},{"tag":"polyline","attr":{"points":"2 17 12 22 22 17"}},{"tag":"polyline","attr":{"points":"2 12 12 17 22 12"}}]})(props);
};
function FiLayout (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"3","width":"18","height":"18","rx":"2","ry":"2"}},{"tag":"line","attr":{"x1":"3","y1":"9","x2":"21","y2":"9"}},{"tag":"line","attr":{"x1":"9","y1":"21","x2":"9","y2":"9"}}]})(props);
};
function FiLifeBuoy (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"circle","attr":{"cx":"12","cy":"12","r":"4"}},{"tag":"line","attr":{"x1":"4.93","y1":"4.93","x2":"9.17","y2":"9.17"}},{"tag":"line","attr":{"x1":"14.83","y1":"14.83","x2":"19.07","y2":"19.07"}},{"tag":"line","attr":{"x1":"14.83","y1":"9.17","x2":"19.07","y2":"4.93"}},{"tag":"line","attr":{"x1":"14.83","y1":"9.17","x2":"18.36","y2":"5.64"}},{"tag":"line","attr":{"x1":"4.93","y1":"19.07","x2":"9.17","y2":"14.83"}}]})(props);
};
function FiLink2 (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"}},{"tag":"line","attr":{"x1":"8","y1":"12","x2":"16","y2":"12"}}]})(props);
};
function FiLink (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}},{"tag":"path","attr":{"d":"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}}]})(props);
};
function FiLinkedin (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}},{"tag":"rect","attr":{"x":"2","y":"9","width":"4","height":"12"}},{"tag":"circle","attr":{"cx":"4","cy":"4","r":"2"}}]})(props);
};
function FiList (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"8","y1":"6","x2":"21","y2":"6"}},{"tag":"line","attr":{"x1":"8","y1":"12","x2":"21","y2":"12"}},{"tag":"line","attr":{"x1":"8","y1":"18","x2":"21","y2":"18"}},{"tag":"line","attr":{"x1":"3","y1":"6","x2":"3.01","y2":"6"}},{"tag":"line","attr":{"x1":"3","y1":"12","x2":"3.01","y2":"12"}},{"tag":"line","attr":{"x1":"3","y1":"18","x2":"3.01","y2":"18"}}]})(props);
};
function FiLoader (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"12","y1":"2","x2":"12","y2":"6"}},{"tag":"line","attr":{"x1":"12","y1":"18","x2":"12","y2":"22"}},{"tag":"line","attr":{"x1":"4.93","y1":"4.93","x2":"7.76","y2":"7.76"}},{"tag":"line","attr":{"x1":"16.24","y1":"16.24","x2":"19.07","y2":"19.07"}},{"tag":"line","attr":{"x1":"2","y1":"12","x2":"6","y2":"12"}},{"tag":"line","attr":{"x1":"18","y1":"12","x2":"22","y2":"12"}},{"tag":"line","attr":{"x1":"4.93","y1":"19.07","x2":"7.76","y2":"16.24"}},{"tag":"line","attr":{"x1":"16.24","y1":"7.76","x2":"19.07","y2":"4.93"}}]})(props);
};
function FiLock (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"11","width":"18","height":"11","rx":"2","ry":"2"}},{"tag":"path","attr":{"d":"M7 11V7a5 5 0 0 1 10 0v4"}}]})(props);
};
function FiLogIn (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}},{"tag":"polyline","attr":{"points":"10 17 15 12 10 7"}},{"tag":"line","attr":{"x1":"15","y1":"12","x2":"3","y2":"12"}}]})(props);
};
function FiLogOut (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}},{"tag":"polyline","attr":{"points":"16 17 21 12 16 7"}},{"tag":"line","attr":{"x1":"21","y1":"12","x2":"9","y2":"12"}}]})(props);
};
function FiMail (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}},{"tag":"polyline","attr":{"points":"22,6 12,13 2,6"}}]})(props);
};
function FiMapPin (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}},{"tag":"circle","attr":{"cx":"12","cy":"10","r":"3"}}]})(props);
};
function FiMap (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"}},{"tag":"line","attr":{"x1":"8","y1":"2","x2":"8","y2":"18"}},{"tag":"line","attr":{"x1":"16","y1":"6","x2":"16","y2":"22"}}]})(props);
};
function FiMaximize2 (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"15 3 21 3 21 9"}},{"tag":"polyline","attr":{"points":"9 21 3 21 3 15"}},{"tag":"line","attr":{"x1":"21","y1":"3","x2":"14","y2":"10"}},{"tag":"line","attr":{"x1":"3","y1":"21","x2":"10","y2":"14"}}]})(props);
};
function FiMaximize (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"}}]})(props);
};
function FiMeh (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"line","attr":{"x1":"8","y1":"15","x2":"16","y2":"15"}},{"tag":"line","attr":{"x1":"9","y1":"9","x2":"9.01","y2":"9"}},{"tag":"line","attr":{"x1":"15","y1":"9","x2":"15.01","y2":"9"}}]})(props);
};
function FiMenu (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"3","y1":"12","x2":"21","y2":"12"}},{"tag":"line","attr":{"x1":"3","y1":"6","x2":"21","y2":"6"}},{"tag":"line","attr":{"x1":"3","y1":"18","x2":"21","y2":"18"}}]})(props);
};
function FiMessageCircle (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"}}]})(props);
};
function FiMessageSquare (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}}]})(props);
};
function FiMicOff (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"1","y1":"1","x2":"23","y2":"23"}},{"tag":"path","attr":{"d":"M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"}},{"tag":"path","attr":{"d":"M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"}},{"tag":"line","attr":{"x1":"12","y1":"19","x2":"12","y2":"23"}},{"tag":"line","attr":{"x1":"8","y1":"23","x2":"16","y2":"23"}}]})(props);
};
function FiMic (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"}},{"tag":"path","attr":{"d":"M19 10v2a7 7 0 0 1-14 0v-2"}},{"tag":"line","attr":{"x1":"12","y1":"19","x2":"12","y2":"23"}},{"tag":"line","attr":{"x1":"8","y1":"23","x2":"16","y2":"23"}}]})(props);
};
function FiMinimize2 (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"4 14 10 14 10 20"}},{"tag":"polyline","attr":{"points":"20 10 14 10 14 4"}},{"tag":"line","attr":{"x1":"14","y1":"10","x2":"21","y2":"3"}},{"tag":"line","attr":{"x1":"3","y1":"21","x2":"10","y2":"14"}}]})(props);
};
function FiMinimize (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"}}]})(props);
};
function FiMinusCircle (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"line","attr":{"x1":"8","y1":"12","x2":"16","y2":"12"}}]})(props);
};
function FiMinusSquare (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"3","width":"18","height":"18","rx":"2","ry":"2"}},{"tag":"line","attr":{"x1":"8","y1":"12","x2":"16","y2":"12"}}]})(props);
};
function FiMinus (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"5","y1":"12","x2":"19","y2":"12"}}]})(props);
};
function FiMonitor (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"2","y":"3","width":"20","height":"14","rx":"2","ry":"2"}},{"tag":"line","attr":{"x1":"8","y1":"21","x2":"16","y2":"21"}},{"tag":"line","attr":{"x1":"12","y1":"17","x2":"12","y2":"21"}}]})(props);
};
function FiMoon (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}}]})(props);
};
function FiMoreHorizontal (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"1"}},{"tag":"circle","attr":{"cx":"19","cy":"12","r":"1"}},{"tag":"circle","attr":{"cx":"5","cy":"12","r":"1"}}]})(props);
};
function FiMoreVertical (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"1"}},{"tag":"circle","attr":{"cx":"12","cy":"5","r":"1"}},{"tag":"circle","attr":{"cx":"12","cy":"19","r":"1"}}]})(props);
};
function FiMousePointer (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"}},{"tag":"path","attr":{"d":"M13 13l6 6"}}]})(props);
};
function FiMove (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"5 9 2 12 5 15"}},{"tag":"polyline","attr":{"points":"9 5 12 2 15 5"}},{"tag":"polyline","attr":{"points":"15 19 12 22 9 19"}},{"tag":"polyline","attr":{"points":"19 9 22 12 19 15"}},{"tag":"line","attr":{"x1":"2","y1":"12","x2":"22","y2":"12"}},{"tag":"line","attr":{"x1":"12","y1":"2","x2":"12","y2":"22"}}]})(props);
};
function FiMusic (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M9 18V5l12-2v13"}},{"tag":"circle","attr":{"cx":"6","cy":"18","r":"3"}},{"tag":"circle","attr":{"cx":"18","cy":"16","r":"3"}}]})(props);
};
function FiNavigation2 (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"12 2 19 21 12 17 5 21 12 2"}}]})(props);
};
function FiNavigation (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"3 11 22 2 13 21 11 13 3 11"}}]})(props);
};
function FiOctagon (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}}]})(props);
};
function FiPackage (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"16.5","y1":"9.4","x2":"7.5","y2":"4.21"}},{"tag":"path","attr":{"d":"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}},{"tag":"polyline","attr":{"points":"3.27 6.96 12 12.01 20.73 6.96"}},{"tag":"line","attr":{"x1":"12","y1":"22.08","x2":"12","y2":"12"}}]})(props);
};
function FiPaperclip (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"}}]})(props);
};
function FiPauseCircle (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"line","attr":{"x1":"10","y1":"15","x2":"10","y2":"9"}},{"tag":"line","attr":{"x1":"14","y1":"15","x2":"14","y2":"9"}}]})(props);
};
function FiPause (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"6","y":"4","width":"4","height":"16"}},{"tag":"rect","attr":{"x":"14","y":"4","width":"4","height":"16"}}]})(props);
};
function FiPenTool (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M12 19l7-7 3 3-7 7-3-3z"}},{"tag":"path","attr":{"d":"M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"}},{"tag":"path","attr":{"d":"M2 2l7.586 7.586"}},{"tag":"circle","attr":{"cx":"11","cy":"11","r":"2"}}]})(props);
};
function FiPercent (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"19","y1":"5","x2":"5","y2":"19"}},{"tag":"circle","attr":{"cx":"6.5","cy":"6.5","r":"2.5"}},{"tag":"circle","attr":{"cx":"17.5","cy":"17.5","r":"2.5"}}]})(props);
};
function FiPhoneCall (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}}]})(props);
};
function FiPhoneForwarded (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"19 1 23 5 19 9"}},{"tag":"line","attr":{"x1":"15","y1":"5","x2":"23","y2":"5"}},{"tag":"path","attr":{"d":"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}}]})(props);
};
function FiPhoneIncoming (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"16 2 16 8 22 8"}},{"tag":"line","attr":{"x1":"23","y1":"1","x2":"16","y2":"8"}},{"tag":"path","attr":{"d":"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}}]})(props);
};
function FiPhoneMissed (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"23","y1":"1","x2":"17","y2":"7"}},{"tag":"line","attr":{"x1":"17","y1":"1","x2":"23","y2":"7"}},{"tag":"path","attr":{"d":"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}}]})(props);
};
function FiPhoneOff (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"}},{"tag":"line","attr":{"x1":"23","y1":"1","x2":"1","y2":"23"}}]})(props);
};
function FiPhoneOutgoing (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"23 7 23 1 17 1"}},{"tag":"line","attr":{"x1":"16","y1":"8","x2":"23","y2":"1"}},{"tag":"path","attr":{"d":"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}}]})(props);
};
function FiPhone (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}}]})(props);
};
function FiPieChart (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21.21 15.89A10 10 0 1 1 8 2.83"}},{"tag":"path","attr":{"d":"M22 12A10 10 0 0 0 12 2v10z"}}]})(props);
};
function FiPlayCircle (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"polygon","attr":{"points":"10 8 16 12 10 16 10 8"}}]})(props);
};
function FiPlay (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"5 3 19 12 5 21 5 3"}}]})(props);
};
function FiPlusCircle (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"line","attr":{"x1":"12","y1":"8","x2":"12","y2":"16"}},{"tag":"line","attr":{"x1":"8","y1":"12","x2":"16","y2":"12"}}]})(props);
};
function FiPlusSquare (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"3","width":"18","height":"18","rx":"2","ry":"2"}},{"tag":"line","attr":{"x1":"12","y1":"8","x2":"12","y2":"16"}},{"tag":"line","attr":{"x1":"8","y1":"12","x2":"16","y2":"12"}}]})(props);
};
function FiPlus (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"12","y1":"5","x2":"12","y2":"19"}},{"tag":"line","attr":{"x1":"5","y1":"12","x2":"19","y2":"12"}}]})(props);
};
function FiPocket (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"}},{"tag":"polyline","attr":{"points":"8 10 12 14 16 10"}}]})(props);
};
function FiPower (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M18.36 6.64a9 9 0 1 1-12.73 0"}},{"tag":"line","attr":{"x1":"12","y1":"2","x2":"12","y2":"12"}}]})(props);
};
function FiPrinter (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"6 9 6 2 18 2 18 9"}},{"tag":"path","attr":{"d":"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}},{"tag":"rect","attr":{"x":"6","y":"14","width":"12","height":"8"}}]})(props);
};
function FiRadio (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"2"}},{"tag":"path","attr":{"d":"M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"}}]})(props);
};
function FiRefreshCcw (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"1 4 1 10 7 10"}},{"tag":"polyline","attr":{"points":"23 20 23 14 17 14"}},{"tag":"path","attr":{"d":"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"}}]})(props);
};
function FiRefreshCw (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"23 4 23 10 17 10"}},{"tag":"polyline","attr":{"points":"1 20 1 14 7 14"}},{"tag":"path","attr":{"d":"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"}}]})(props);
};
function FiRepeat (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"17 1 21 5 17 9"}},{"tag":"path","attr":{"d":"M3 11V9a4 4 0 0 1 4-4h14"}},{"tag":"polyline","attr":{"points":"7 23 3 19 7 15"}},{"tag":"path","attr":{"d":"M21 13v2a4 4 0 0 1-4 4H3"}}]})(props);
};
function FiRewind (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"11 19 2 12 11 5 11 19"}},{"tag":"polygon","attr":{"points":"22 19 13 12 22 5 22 19"}}]})(props);
};
function FiRotateCcw (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"1 4 1 10 7 10"}},{"tag":"path","attr":{"d":"M3.51 15a9 9 0 1 0 2.13-9.36L1 10"}}]})(props);
};
function FiRotateCw (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"23 4 23 10 17 10"}},{"tag":"path","attr":{"d":"M20.49 15a9 9 0 1 1-2.12-9.36L23 10"}}]})(props);
};
function FiRss (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M4 11a9 9 0 0 1 9 9"}},{"tag":"path","attr":{"d":"M4 4a16 16 0 0 1 16 16"}},{"tag":"circle","attr":{"cx":"5","cy":"19","r":"1"}}]})(props);
};
function FiSave (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}},{"tag":"polyline","attr":{"points":"17 21 17 13 7 13 7 21"}},{"tag":"polyline","attr":{"points":"7 3 7 8 15 8"}}]})(props);
};
function FiScissors (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"6","cy":"6","r":"3"}},{"tag":"circle","attr":{"cx":"6","cy":"18","r":"3"}},{"tag":"line","attr":{"x1":"20","y1":"4","x2":"8.12","y2":"15.88"}},{"tag":"line","attr":{"x1":"14.47","y1":"14.48","x2":"20","y2":"20"}},{"tag":"line","attr":{"x1":"8.12","y1":"8.12","x2":"12","y2":"12"}}]})(props);
};
function FiSearch (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"11","cy":"11","r":"8"}},{"tag":"line","attr":{"x1":"21","y1":"21","x2":"16.65","y2":"16.65"}}]})(props);
};
function FiSend (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"22","y1":"2","x2":"11","y2":"13"}},{"tag":"polygon","attr":{"points":"22 2 15 22 11 13 2 9 22 2"}}]})(props);
};
function FiServer (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"2","y":"2","width":"20","height":"8","rx":"2","ry":"2"}},{"tag":"rect","attr":{"x":"2","y":"14","width":"20","height":"8","rx":"2","ry":"2"}},{"tag":"line","attr":{"x1":"6","y1":"6","x2":"6.01","y2":"6"}},{"tag":"line","attr":{"x1":"6","y1":"18","x2":"6.01","y2":"18"}}]})(props);
};
function FiSettings (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"3"}},{"tag":"path","attr":{"d":"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"}}]})(props);
};
function FiShare2 (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"18","cy":"5","r":"3"}},{"tag":"circle","attr":{"cx":"6","cy":"12","r":"3"}},{"tag":"circle","attr":{"cx":"18","cy":"19","r":"3"}},{"tag":"line","attr":{"x1":"8.59","y1":"13.51","x2":"15.42","y2":"17.49"}},{"tag":"line","attr":{"x1":"15.41","y1":"6.51","x2":"8.59","y2":"10.49"}}]})(props);
};
function FiShare (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}},{"tag":"polyline","attr":{"points":"16 6 12 2 8 6"}},{"tag":"line","attr":{"x1":"12","y1":"2","x2":"12","y2":"15"}}]})(props);
};
function FiShieldOff (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"}},{"tag":"path","attr":{"d":"M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"}},{"tag":"line","attr":{"x1":"1","y1":"1","x2":"23","y2":"23"}}]})(props);
};
function FiShield (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}}]})(props);
};
function FiShoppingBag (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}},{"tag":"line","attr":{"x1":"3","y1":"6","x2":"21","y2":"6"}},{"tag":"path","attr":{"d":"M16 10a4 4 0 0 1-8 0"}}]})(props);
};
function FiShoppingCart (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"9","cy":"21","r":"1"}},{"tag":"circle","attr":{"cx":"20","cy":"21","r":"1"}},{"tag":"path","attr":{"d":"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"}}]})(props);
};
function FiShuffle (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"16 3 21 3 21 8"}},{"tag":"line","attr":{"x1":"4","y1":"20","x2":"21","y2":"3"}},{"tag":"polyline","attr":{"points":"21 16 21 21 16 21"}},{"tag":"line","attr":{"x1":"15","y1":"15","x2":"21","y2":"21"}},{"tag":"line","attr":{"x1":"4","y1":"4","x2":"9","y2":"9"}}]})(props);
};
function FiSidebar (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"3","width":"18","height":"18","rx":"2","ry":"2"}},{"tag":"line","attr":{"x1":"9","y1":"3","x2":"9","y2":"21"}}]})(props);
};
function FiSkipBack (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"19 20 9 12 19 4 19 20"}},{"tag":"line","attr":{"x1":"5","y1":"19","x2":"5","y2":"5"}}]})(props);
};
function FiSkipForward (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"5 4 15 12 5 20 5 4"}},{"tag":"line","attr":{"x1":"19","y1":"5","x2":"19","y2":"19"}}]})(props);
};
function FiSlack (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"}},{"tag":"path","attr":{"d":"M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}},{"tag":"path","attr":{"d":"M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"}},{"tag":"path","attr":{"d":"M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"}},{"tag":"path","attr":{"d":"M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"}},{"tag":"path","attr":{"d":"M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"}},{"tag":"path","attr":{"d":"M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"}},{"tag":"path","attr":{"d":"M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"}}]})(props);
};
function FiSlash (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"line","attr":{"x1":"4.93","y1":"4.93","x2":"19.07","y2":"19.07"}}]})(props);
};
function FiSliders (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"4","y1":"21","x2":"4","y2":"14"}},{"tag":"line","attr":{"x1":"4","y1":"10","x2":"4","y2":"3"}},{"tag":"line","attr":{"x1":"12","y1":"21","x2":"12","y2":"12"}},{"tag":"line","attr":{"x1":"12","y1":"8","x2":"12","y2":"3"}},{"tag":"line","attr":{"x1":"20","y1":"21","x2":"20","y2":"16"}},{"tag":"line","attr":{"x1":"20","y1":"12","x2":"20","y2":"3"}},{"tag":"line","attr":{"x1":"1","y1":"14","x2":"7","y2":"14"}},{"tag":"line","attr":{"x1":"9","y1":"8","x2":"15","y2":"8"}},{"tag":"line","attr":{"x1":"17","y1":"16","x2":"23","y2":"16"}}]})(props);
};
function FiSmartphone (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"5","y":"2","width":"14","height":"20","rx":"2","ry":"2"}},{"tag":"line","attr":{"x1":"12","y1":"18","x2":"12.01","y2":"18"}}]})(props);
};
function FiSmile (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"path","attr":{"d":"M8 14s1.5 2 4 2 4-2 4-2"}},{"tag":"line","attr":{"x1":"9","y1":"9","x2":"9.01","y2":"9"}},{"tag":"line","attr":{"x1":"15","y1":"9","x2":"15.01","y2":"9"}}]})(props);
};
function FiSpeaker (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"4","y":"2","width":"16","height":"20","rx":"2","ry":"2"}},{"tag":"circle","attr":{"cx":"12","cy":"14","r":"4"}},{"tag":"line","attr":{"x1":"12","y1":"6","x2":"12.01","y2":"6"}}]})(props);
};
function FiSquare (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"3","width":"18","height":"18","rx":"2","ry":"2"}}]})(props);
};
function FiStar (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}}]})(props);
};
function FiStopCircle (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"rect","attr":{"x":"9","y":"9","width":"6","height":"6"}}]})(props);
};
function FiSun (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"5"}},{"tag":"line","attr":{"x1":"12","y1":"1","x2":"12","y2":"3"}},{"tag":"line","attr":{"x1":"12","y1":"21","x2":"12","y2":"23"}},{"tag":"line","attr":{"x1":"4.22","y1":"4.22","x2":"5.64","y2":"5.64"}},{"tag":"line","attr":{"x1":"18.36","y1":"18.36","x2":"19.78","y2":"19.78"}},{"tag":"line","attr":{"x1":"1","y1":"12","x2":"3","y2":"12"}},{"tag":"line","attr":{"x1":"21","y1":"12","x2":"23","y2":"12"}},{"tag":"line","attr":{"x1":"4.22","y1":"19.78","x2":"5.64","y2":"18.36"}},{"tag":"line","attr":{"x1":"18.36","y1":"5.64","x2":"19.78","y2":"4.22"}}]})(props);
};
function FiSunrise (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M17 18a5 5 0 0 0-10 0"}},{"tag":"line","attr":{"x1":"12","y1":"2","x2":"12","y2":"9"}},{"tag":"line","attr":{"x1":"4.22","y1":"10.22","x2":"5.64","y2":"11.64"}},{"tag":"line","attr":{"x1":"1","y1":"18","x2":"3","y2":"18"}},{"tag":"line","attr":{"x1":"21","y1":"18","x2":"23","y2":"18"}},{"tag":"line","attr":{"x1":"18.36","y1":"11.64","x2":"19.78","y2":"10.22"}},{"tag":"line","attr":{"x1":"23","y1":"22","x2":"1","y2":"22"}},{"tag":"polyline","attr":{"points":"8 6 12 2 16 6"}}]})(props);
};
function FiSunset (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M17 18a5 5 0 0 0-10 0"}},{"tag":"line","attr":{"x1":"12","y1":"9","x2":"12","y2":"2"}},{"tag":"line","attr":{"x1":"4.22","y1":"10.22","x2":"5.64","y2":"11.64"}},{"tag":"line","attr":{"x1":"1","y1":"18","x2":"3","y2":"18"}},{"tag":"line","attr":{"x1":"21","y1":"18","x2":"23","y2":"18"}},{"tag":"line","attr":{"x1":"18.36","y1":"11.64","x2":"19.78","y2":"10.22"}},{"tag":"line","attr":{"x1":"23","y1":"22","x2":"1","y2":"22"}},{"tag":"polyline","attr":{"points":"16 5 12 9 8 5"}}]})(props);
};
function FiTablet (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"4","y":"2","width":"16","height":"20","rx":"2","ry":"2"}},{"tag":"line","attr":{"x1":"12","y1":"18","x2":"12.01","y2":"18"}}]})(props);
};
function FiTag (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}},{"tag":"line","attr":{"x1":"7","y1":"7","x2":"7.01","y2":"7"}}]})(props);
};
function FiTarget (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"circle","attr":{"cx":"12","cy":"12","r":"6"}},{"tag":"circle","attr":{"cx":"12","cy":"12","r":"2"}}]})(props);
};
function FiTerminal (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"4 17 10 11 4 5"}},{"tag":"line","attr":{"x1":"12","y1":"19","x2":"20","y2":"19"}}]})(props);
};
function FiThermometer (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"}}]})(props);
};
function FiThumbsDown (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"}}]})(props);
};
function FiThumbsUp (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"}}]})(props);
};
function FiToggleLeft (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"1","y":"5","width":"22","height":"14","rx":"7","ry":"7"}},{"tag":"circle","attr":{"cx":"8","cy":"12","r":"3"}}]})(props);
};
function FiToggleRight (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"1","y":"5","width":"22","height":"14","rx":"7","ry":"7"}},{"tag":"circle","attr":{"cx":"16","cy":"12","r":"3"}}]})(props);
};
function FiTool (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"}}]})(props);
};
function FiTrash2 (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"3 6 5 6 21 6"}},{"tag":"path","attr":{"d":"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}},{"tag":"line","attr":{"x1":"10","y1":"11","x2":"10","y2":"17"}},{"tag":"line","attr":{"x1":"14","y1":"11","x2":"14","y2":"17"}}]})(props);
};
function FiTrash (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"3 6 5 6 21 6"}},{"tag":"path","attr":{"d":"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}}]})(props);
};
function FiTrello (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"3","width":"18","height":"18","rx":"2","ry":"2"}},{"tag":"rect","attr":{"x":"7","y":"7","width":"3","height":"9"}},{"tag":"rect","attr":{"x":"14","y":"7","width":"3","height":"5"}}]})(props);
};
function FiTrendingDown (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"23 18 13.5 8.5 8.5 13.5 1 6"}},{"tag":"polyline","attr":{"points":"17 18 23 18 23 12"}}]})(props);
};
function FiTrendingUp (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"23 6 13.5 15.5 8.5 10.5 1 18"}},{"tag":"polyline","attr":{"points":"17 6 23 6 23 12"}}]})(props);
};
function FiTriangle (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}}]})(props);
};
function FiTruck (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"1","y":"3","width":"15","height":"13"}},{"tag":"polygon","attr":{"points":"16 8 20 8 23 11 23 16 16 16 16 8"}},{"tag":"circle","attr":{"cx":"5.5","cy":"18.5","r":"2.5"}},{"tag":"circle","attr":{"cx":"18.5","cy":"18.5","r":"2.5"}}]})(props);
};
function FiTv (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"2","y":"7","width":"20","height":"15","rx":"2","ry":"2"}},{"tag":"polyline","attr":{"points":"17 2 12 7 7 2"}}]})(props);
};
function FiTwitch (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"}}]})(props);
};
function FiTwitter (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}}]})(props);
};
function FiType (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"4 7 4 4 20 4 20 7"}},{"tag":"line","attr":{"x1":"9","y1":"20","x2":"15","y2":"20"}},{"tag":"line","attr":{"x1":"12","y1":"4","x2":"12","y2":"20"}}]})(props);
};
function FiUmbrella (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"}}]})(props);
};
function FiUnderline (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"}},{"tag":"line","attr":{"x1":"4","y1":"21","x2":"20","y2":"21"}}]})(props);
};
function FiUnlock (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"11","width":"18","height":"11","rx":"2","ry":"2"}},{"tag":"path","attr":{"d":"M7 11V7a5 5 0 0 1 9.9-1"}}]})(props);
};
function FiUploadCloud (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"16 16 12 12 8 16"}},{"tag":"line","attr":{"x1":"12","y1":"12","x2":"12","y2":"21"}},{"tag":"path","attr":{"d":"M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"}},{"tag":"polyline","attr":{"points":"16 16 12 12 8 16"}}]})(props);
};
function FiUpload (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{"tag":"polyline","attr":{"points":"17 8 12 3 7 8"}},{"tag":"line","attr":{"x1":"12","y1":"3","x2":"12","y2":"15"}}]})(props);
};
function FiUserCheck (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{"tag":"circle","attr":{"cx":"8.5","cy":"7","r":"4"}},{"tag":"polyline","attr":{"points":"17 11 19 13 23 9"}}]})(props);
};
function FiUserMinus (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{"tag":"circle","attr":{"cx":"8.5","cy":"7","r":"4"}},{"tag":"line","attr":{"x1":"23","y1":"11","x2":"17","y2":"11"}}]})(props);
};
function FiUserPlus (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{"tag":"circle","attr":{"cx":"8.5","cy":"7","r":"4"}},{"tag":"line","attr":{"x1":"20","y1":"8","x2":"20","y2":"14"}},{"tag":"line","attr":{"x1":"23","y1":"11","x2":"17","y2":"11"}}]})(props);
};
function FiUserX (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{"tag":"circle","attr":{"cx":"8.5","cy":"7","r":"4"}},{"tag":"line","attr":{"x1":"18","y1":"8","x2":"23","y2":"13"}},{"tag":"line","attr":{"x1":"23","y1":"8","x2":"18","y2":"13"}}]})(props);
};
function FiUser (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}},{"tag":"circle","attr":{"cx":"12","cy":"7","r":"4"}}]})(props);
};
function FiUsers (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{"tag":"circle","attr":{"cx":"9","cy":"7","r":"4"}},{"tag":"path","attr":{"d":"M23 21v-2a4 4 0 0 0-3-3.87"}},{"tag":"path","attr":{"d":"M16 3.13a4 4 0 0 1 0 7.75"}}]})(props);
};
function FiVideoOff (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"}},{"tag":"line","attr":{"x1":"1","y1":"1","x2":"23","y2":"23"}}]})(props);
};
function FiVideo (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"23 7 16 12 23 17 23 7"}},{"tag":"rect","attr":{"x":"1","y":"5","width":"15","height":"14","rx":"2","ry":"2"}}]})(props);
};
function FiVoicemail (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"5.5","cy":"11.5","r":"4.5"}},{"tag":"circle","attr":{"cx":"18.5","cy":"11.5","r":"4.5"}},{"tag":"line","attr":{"x1":"5.5","y1":"16","x2":"18.5","y2":"16"}}]})(props);
};
function FiVolume1 (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}},{"tag":"path","attr":{"d":"M15.54 8.46a5 5 0 0 1 0 7.07"}}]})(props);
};
function FiVolume2 (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}},{"tag":"path","attr":{"d":"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"}}]})(props);
};
function FiVolumeX (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}},{"tag":"line","attr":{"x1":"23","y1":"9","x2":"17","y2":"15"}},{"tag":"line","attr":{"x1":"17","y1":"9","x2":"23","y2":"15"}}]})(props);
};
function FiVolume (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}}]})(props);
};
function FiWatch (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"7"}},{"tag":"polyline","attr":{"points":"12 9 12 12 13.5 13.5"}},{"tag":"path","attr":{"d":"M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"}}]})(props);
};
function FiWifiOff (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"1","y1":"1","x2":"23","y2":"23"}},{"tag":"path","attr":{"d":"M16.72 11.06A10.94 10.94 0 0 1 19 12.55"}},{"tag":"path","attr":{"d":"M5 12.55a10.94 10.94 0 0 1 5.17-2.39"}},{"tag":"path","attr":{"d":"M10.71 5.05A16 16 0 0 1 22.58 9"}},{"tag":"path","attr":{"d":"M1.42 9a15.91 15.91 0 0 1 4.7-2.88"}},{"tag":"path","attr":{"d":"M8.53 16.11a6 6 0 0 1 6.95 0"}},{"tag":"line","attr":{"x1":"12","y1":"20","x2":"12.01","y2":"20"}}]})(props);
};
function FiWifi (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M5 12.55a11 11 0 0 1 14.08 0"}},{"tag":"path","attr":{"d":"M1.42 9a16 16 0 0 1 21.16 0"}},{"tag":"path","attr":{"d":"M8.53 16.11a6 6 0 0 1 6.95 0"}},{"tag":"line","attr":{"x1":"12","y1":"20","x2":"12.01","y2":"20"}}]})(props);
};
function FiWind (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"}}]})(props);
};
function FiXCircle (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"10"}},{"tag":"line","attr":{"x1":"15","y1":"9","x2":"9","y2":"15"}},{"tag":"line","attr":{"x1":"9","y1":"9","x2":"15","y2":"15"}}]})(props);
};
function FiXOctagon (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}},{"tag":"line","attr":{"x1":"15","y1":"9","x2":"9","y2":"15"}},{"tag":"line","attr":{"x1":"9","y1":"9","x2":"15","y2":"15"}}]})(props);
};
function FiXSquare (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"x":"3","y":"3","width":"18","height":"18","rx":"2","ry":"2"}},{"tag":"line","attr":{"x1":"9","y1":"9","x2":"15","y2":"15"}},{"tag":"line","attr":{"x1":"15","y1":"9","x2":"9","y2":"15"}}]})(props);
};
function FiX (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"18","y1":"6","x2":"6","y2":"18"}},{"tag":"line","attr":{"x1":"6","y1":"6","x2":"18","y2":"18"}}]})(props);
};
function FiYoutube (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"}},{"tag":"polygon","attr":{"points":"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"}}]})(props);
};
function FiZapOff (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"12.41 6.75 13 2 10.57 4.92"}},{"tag":"polyline","attr":{"points":"18.57 12.91 21 10 15.66 10"}},{"tag":"polyline","attr":{"points":"8 8 3 14 12 14 11 22 16 16"}},{"tag":"line","attr":{"x1":"1","y1":"1","x2":"23","y2":"23"}}]})(props);
};
function FiZap (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polygon","attr":{"points":"13 2 3 14 12 14 11 22 21 10 12 10 13 2"}}]})(props);
};
function FiZoomIn (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"11","cy":"11","r":"8"}},{"tag":"line","attr":{"x1":"21","y1":"21","x2":"16.65","y2":"16.65"}},{"tag":"line","attr":{"x1":"11","y1":"8","x2":"11","y2":"14"}},{"tag":"line","attr":{"x1":"8","y1":"11","x2":"14","y2":"11"}}]})(props);
};
function FiZoomOut (props) {
  return Object(_lib__WEBPACK_IMPORTED_MODULE_0__["GenIcon"])({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"11","cy":"11","r":"8"}},{"tag":"line","attr":{"x1":"21","y1":"21","x2":"16.65","y2":"16.65"}},{"tag":"line","attr":{"x1":"8","y1":"11","x2":"14","y2":"11"}}]})(props);
};


/***/ }),

/***/ "./node_modules/react-icons/lib/esm/iconBase.js":
/*!******************************************************!*\
  !*** ./node_modules/react-icons/lib/esm/iconBase.js ***!
  \******************************************************/
/*! exports provided: GenIcon, IconBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenIcon", function() { return GenIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconBase", function() { return IconBase; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iconContext */ "./node_modules/react-icons/lib/esm/iconContext.js");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}

function GenIcon(data) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var attr = props.attr,
        size = props.size,
        title = props.title,
        svgProps = __rest(props, ["attr", "size", "title"]);

    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + ' ' : '') + props.className;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title), props.children);
  };

  return _iconContext__WEBPACK_IMPORTED_MODULE_1__["IconContext"] !== undefined ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_iconContext__WEBPACK_IMPORTED_MODULE_1__["IconContext"].Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(_iconContext__WEBPACK_IMPORTED_MODULE_1__["DefaultContext"]);
}

/***/ }),

/***/ "./node_modules/react-icons/lib/esm/iconContext.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-icons/lib/esm/iconContext.js ***!
  \*********************************************************/
/*! exports provided: DefaultContext, IconContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultContext", function() { return DefaultContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconContext", function() { return IconContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext && react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(DefaultContext);

/***/ }),

/***/ "./node_modules/react-icons/lib/esm/iconsManifest.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-icons/lib/esm/iconsManifest.js ***!
  \***********************************************************/
/*! exports provided: IconsManifest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsManifest", function() { return IconsManifest; });
var IconsManifest = [
  {
    "id": "fa",
    "name": "Font Awesome",
    "projectUrl": "https://fontawesome.com/",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "io",
    "name": "Ionicons 4",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "io5",
    "name": "Ionicons 5",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "md",
    "name": "Material Design icons",
    "projectUrl": "http://google.github.io/material-design-icons/",
    "license": "Apache License Version 2.0",
    "licenseUrl": "https://github.com/google/material-design-icons/blob/master/LICENSE"
  },
  {
    "id": "ti",
    "name": "Typicons",
    "projectUrl": "http://s-ings.com/typicons/",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
  },
  {
    "id": "go",
    "name": "Github Octicons icons",
    "projectUrl": "https://octicons.github.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/primer/octicons/blob/master/LICENSE"
  },
  {
    "id": "fi",
    "name": "Feather",
    "projectUrl": "https://feathericons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/feathericons/feather/blob/master/LICENSE"
  },
  {
    "id": "gi",
    "name": "Game Icons",
    "projectUrl": "https://game-icons.net/",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "id": "wi",
    "name": "Weather Icons",
    "projectUrl": "https://erikflowers.github.io/weather-icons/",
    "license": "SIL OFL 1.1",
    "licenseUrl": "http://scripts.sil.org/OFL"
  },
  {
    "id": "di",
    "name": "Devicons",
    "projectUrl": "https://vorillaz.github.io/devicons/",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ai",
    "name": "Ant Design Icons",
    "projectUrl": "https://github.com/ant-design/ant-design-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "bs",
    "name": "Bootstrap Icons",
    "projectUrl": "https://github.com/twbs/icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ri",
    "name": "Remix Icon",
    "projectUrl": "https://github.com/Remix-Design/RemixIcon",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "fc",
    "name": "Flat Color Icons",
    "projectUrl": "https://github.com/icons8/flat-color-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "gr",
    "name": "Grommet-Icons",
    "projectUrl": "https://github.com/grommet/grommet-icons",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "hi",
    "name": "Heroicons",
    "projectUrl": "https://github.com/tailwindlabs/heroicons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "si",
    "name": "Simple Icons",
    "projectUrl": "https://simpleicons.org/",
    "license": "CC0 1.0 Universal",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"
  },
  {
    "id": "im",
    "name": "IcoMoon Free",
    "projectUrl": "https://github.com/Keyamoon/IcoMoon-Free",
    "license": "CC BY 4.0 License"
  },
  {
    "id": "bi",
    "name": "BoxIcons",
    "projectUrl": "https://github.com/atisawd/boxicons",
    "license": "CC BY 4.0 License"
  },
  {
    "id": "cg",
    "name": "css.gg",
    "projectUrl": "https://github.com/astrit/css.gg",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "vsc",
    "name": "VS Code Icons",
    "projectUrl": "https://github.com/microsoft/vscode-codicons",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  }
]

/***/ }),

/***/ "./node_modules/react-icons/lib/esm/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-icons/lib/esm/index.js ***!
  \***************************************************/
/*! exports provided: IconsManifest, GenIcon, IconBase, DefaultContext, IconContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _iconsManifest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iconsManifest */ "./node_modules/react-icons/lib/esm/iconsManifest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconsManifest", function() { return _iconsManifest__WEBPACK_IMPORTED_MODULE_0__["IconsManifest"]; });

/* harmony import */ var _iconBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iconBase */ "./node_modules/react-icons/lib/esm/iconBase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GenIcon", function() { return _iconBase__WEBPACK_IMPORTED_MODULE_1__["GenIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconBase", function() { return _iconBase__WEBPACK_IMPORTED_MODULE_1__["IconBase"]; });

/* harmony import */ var _iconContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iconContext */ "./node_modules/react-icons/lib/esm/iconContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultContext", function() { return _iconContext__WEBPACK_IMPORTED_MODULE_2__["DefaultContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconContext", function() { return _iconContext__WEBPACK_IMPORTED_MODULE_2__["IconContext"]; });





/***/ }),

/***/ "./src/reusecore/Box/index.js":
/*!************************************!*\
  !*** ./src/reusecore/Box/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _excluded = ["children", "ref", "onClick"];

var _this = undefined,
    _jsxFileName = "C:\\Users\\HLC_2021\\Documents\\psb_landing\\src\\reusecore\\Box\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var BoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Box__BoxWrapper",
  componentId: "sc-biqg5d-0"
})([""]);

var Box = function Box(_ref) {
  var children = _ref.children,
      ref = _ref.ref,
      onClick = _ref.onClick,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  var AllClasses = ["box"];

  if (props.className) {
    AllClasses.push(props.className);
  }

  return __jsx(BoxWrapper, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    onClick: onClick,
    ref: ref
  }, props, {
    className: AllClasses.join(" "),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }), children);
};

Box.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any.isRequired,
  as: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(["div", "section", "article", "header", "footer", "address", "nav", "main"])
};
/* harmony default export */ __webpack_exports__["default"] = (Box);

/***/ }),

/***/ "./src/reusecore/Button/button.style.js":
/*!**********************************************!*\
  !*** ./src/reusecore/Button/button.style.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "buttonstyle__ButtonWrapper",
  componentId: "sc-1l0bfk6-0"
})(["", " ", ""], function (props) {
  return props.btnColor ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["color:", ";"], props.btnColor) : Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["color:inherit;"]);
}, function (props) {
  return props.btnBg ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["background-color:", ";"], props.btnBg) : Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["background-color:#ddd;"]);
});
/* harmony default export */ __webpack_exports__["default"] = (ButtonWrapper);

/***/ }),

/***/ "./src/reusecore/Button/index.js":
/*!***************************************!*\
  !*** ./src/reusecore/Button/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _button_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button.style */ "./src/reusecore/Button/button.style.js");


var _excluded = ["children", "type", "onClick"];

var _this = undefined,
    _jsxFileName = "C:\\Users\\HLC_2021\\Documents\\psb_landing\\src\\reusecore\\Button\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var Button = function Button(_ref) {
  var children = _ref.children,
      type = _ref.type,
      onClick = _ref.onClick,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  var AllClasses = ["btn"];

  if (props.className) {
    AllClasses.push(props.className);
  }

  return __jsx(_button_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    onClick: onClick,
    type: type
  }, props, {
    className: AllClasses.join(" "),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }), children);
};

Button.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any.isRequired,
  as: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(["button", "a", "span", "div"]) //--

};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/reusecore/Layout/Col/col.style.js":
/*!***********************************************!*\
  !*** ./src/reusecore/Layout/Col/col.style.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var ColWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "colstyle__ColWrapper",
  componentId: "sc-1uehkoi-0"
})(["position:relative;padding-right:15px;padding-left:15px;&.p-0{padding:0;}&.col-1{flex:0 0 auto;width:8.333333%;}&.col-2{flex:0 0 auto;width:16.666667%;}&.col-3{flex:0 0 auto;width:25%;}&.col-4{flex:0 0 auto;width:33.333333%;}&.col-5{flex:0 0 auto;width:41.666667%;}&.col-6{flex:0 0 auto;width:50%;}&.col-7{flex:0 0 auto;width:58.333333%;}&.col-8{flex:0 0 auto;width:66.666667%;}&.col-9{flex:0 0 auto;width:75%;}&.col-10{flex:0 0 auto;width:83.333333%;}&.col-11{flex:0 0 auto;width:91.666667%;}&.col-12{flex:0 0 auto;width:100%;}&.offset-1{margin-left:8.333333%;}&.offset-2{margin-left:16.666667%;}&.offset-3{margin-left:25%;}&.offset-4{margin-left:33.333333%;}&.offset-5{margin-left:41.666667%;}&.offset-6{margin-left:50%;}&.offset-7{margin-left:58.333333%;}&.offset-8{margin-left:66.666667%;}&.offset-9{margin-left:75%;}&.offset-10{margin-left:83.333333%;}&.offset-11{margin-left:91.666667%;}@media only screen and (min-width:320px){&.xs-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%;}&.xs-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%;}&.xs-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%;}&.xs-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%;}&.xs-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%;}&.xs-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%;}&.xs-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%;}&.xs-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%;}&.xs-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%;}&.xs-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%;}&.xs-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%;}&.xs-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;}&.order-xs-first{-ms-flex-order:-1;order:-1;}&.order-xs-last{-ms-flex-order:13;order:13;}&.order-xs-0{-ms-flex-order:0;order:0;}&.order-xs-1{-ms-flex-order:1;order:1;}&.order-xs-2{-ms-flex-order:2;order:2;}&.order-xs-3{-ms-flex-order:3;order:3;}&.order-xs-4{-ms-flex-order:4;order:4;}&.order-xs-5{-ms-flex-order:5;order:5;}&.order-xs-6{-ms-flex-order:6;order:6;}&.order-xs-7{-ms-flex-order:7;order:7;}&.order-xs-8{-ms-flex-order:8;order:8;}&.order-xs-9{-ms-flex-order:9;order:9;}&.order-xs-10{-ms-flex-order:10;order:10;}&.order-xs-11{-ms-flex-order:11;order:11;}&.order-xs-12{-ms-flex-order:12;order:12;}&.offset-xs-0{margin-left:0;}&.offset-xs-1{margin-left:8.333333%;}&.offset-xs-2{margin-left:16.666667%;}&.offset-xs-3{margin-left:25%;}&.offset-xs-4{margin-left:33.333333%;}&.offset-xs-5{margin-left:41.666667%;}&.offset-xs-6{margin-left:50%;}&.offset-xs-7{margin-left:58.333333%;}&.offset-xs-8{margin-left:66.666667%;}&.offset-xs-9{margin-left:75%;}&.offset-xs-10{margin-left:83.333333%;}&.offset-xs-11{margin-left:91.666667%;}}@media (min-width:576px){&.sm-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%;}&.sm-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%;}&.sm-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%;}&.sm-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%;}&.sm-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%;}&.sm-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%;}&.sm-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%;}&.sm-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%;}&.sm-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%;}&.sm-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%;}&.sm-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%;}&.sm-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;}&.order-sm-first{-ms-flex-order:-1;order:-1;}&.order-sm-last{-ms-flex-order:13;order:13;}&.order-sm-0{-ms-flex-order:0;order:0;}&.order-sm-1{-ms-flex-order:1;order:1;}&.order-sm-2{-ms-flex-order:2;order:2;}&.order-sm-3{-ms-flex-order:3;order:3;}&.order-sm-4{-ms-flex-order:4;order:4;}&.order-sm-5{-ms-flex-order:5;order:5;}&.order-sm-6{-ms-flex-order:6;order:6;}&.order-sm-7{-ms-flex-order:7;order:7;}&.order-sm-8{-ms-flex-order:8;order:8;}&.order-sm-9{-ms-flex-order:9;order:9;}&.order-sm-10{-ms-flex-order:10;order:10;}&.order-sm-11{-ms-flex-order:11;order:11;}&.order-sm-12{-ms-flex-order:12;order:12;}&.offset-sm-0{margin-left:0;}&.offset-sm-1{margin-left:8.333333%;}&.offset-sm-2{margin-left:16.666667%;}&.offset-sm-3{margin-left:25%;}&.offset-sm-4{margin-left:33.333333%;}&.offset-sm-5{margin-left:41.666667%;}&.offset-sm-6{margin-left:50%;}&.offset-sm-7{margin-left:58.333333%;}&.offset-sm-8{margin-left:66.666667%;}&.offset-sm-9{margin-left:75%;}&.offset-sm-10{margin-left:83.333333%;}&.offset-sm-11{margin-left:91.666667%;}}@media (min-width:768px){&.md-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%;}&.md-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%;}&.md-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%;}&.md-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%;}&.md-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%;}&.md-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%;}&.md-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%;}&.md-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%;}&.md-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%;}&.md-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%;}&.md-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%;}&.md-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;}&.order-md-first{-ms-flex-order:-1;order:-1;}&.order-md-last{-ms-flex-order:13;order:13;}&.order-md-0{-ms-flex-order:0;order:0;}&.order-md-1{-ms-flex-order:1;order:1;}&.order-md-2{-ms-flex-order:2;order:2;}&.order-md-3{-ms-flex-order:3;order:3;}&.order-md-4{-ms-flex-order:4;order:4;}&.order-md-5{-ms-flex-order:5;order:5;}&.order-md-6{-ms-flex-order:6;order:6;}&.order-md-7{-ms-flex-order:7;order:7;}&.order-md-8{-ms-flex-order:8;order:8;}&.order-md-9{-ms-flex-order:9;order:9;}&.order-md-10{-ms-flex-order:10;order:10;}&.order-md-11{-ms-flex-order:11;order:11;}&.order-md-12{-ms-flex-order:12;order:12;}&.offset-md-0{margin-left:0;}&.offset-md-1{margin-left:8.333333%;}&.offset-md-2{margin-left:16.666667%;}&.offset-md-3{margin-left:25%;}&.offset-md-4{margin-left:33.333333%;}&.offset-md-5{margin-left:41.666667%;}&.offset-md-6{margin-left:50%;}&.offset-md-7{margin-left:58.333333%;}&.offset-md-8{margin-left:66.666667%;}&.offset-md-9{margin-left:75%;}&.offset-md-10{margin-left:83.333333%;}&.offset-md-11{margin-left:91.666667%;}}@media (min-width:992px){&.lg-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%;}&.lg-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%;}&.lg-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%;}&.lg-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%;}&.lg-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%;}&.lg-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%;}&.lg-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%;}&.lg-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%;}&.lg-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%;}&.lg-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%;}&.lg-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%;}&.lg-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;}&.order-lg-first{-ms-flex-order:-1;order:-1;}&.order-lg-last{-ms-flex-order:13;order:13;}&.order-lg-0{-ms-flex-order:0;order:0;}&.order-lg-1{-ms-flex-order:1;order:1;}&.order-lg-2{-ms-flex-order:2;order:2;}&.order-lg-3{-ms-flex-order:3;order:3;}&.order-lg-4{-ms-flex-order:4;order:4;}&.order-lg-5{-ms-flex-order:5;order:5;}&.order-lg-6{-ms-flex-order:6;order:6;}&.order-lg-7{-ms-flex-order:7;order:7;}&.order-lg-8{-ms-flex-order:8;order:8;}&.order-lg-9{-ms-flex-order:9;order:9;}&.order-lg-10{-ms-flex-order:10;order:10;}&.order-lg-11{-ms-flex-order:11;order:11;}&.order-lg-12{-ms-flex-order:12;order:12;}&.offset-lg-0{margin-left:0;}&.offset-lg-1{margin-left:8.333333%;}&.offset-lg-2{margin-left:16.666667%;}&.offset-lg-3{margin-left:25%;}&.offset-lg-4{margin-left:33.333333%;}&.offset-lg-5{margin-left:41.666667%;}&.offset-lg-6{margin-left:50%;}&.offset-lg-7{margin-left:58.333333%;}&.offset-lg-8{margin-left:66.666667%;}&.offset-lg-9{margin-left:75%;}&.offset-lg-10{margin-left:83.333333%;}&.offset-lg-11{margin-left:91.666667%;}}@media (min-width:1200px){&.xl-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%;}&.xl-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%;}&.xl-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%;}&.xl-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%;}&.xl-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%;}&.xl-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%;}&.xl-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%;}&.xl-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%;}&.xl-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%;}&.xl-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%;}&.xl-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%;}&.xl-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;}&.xl-first{-ms-flex-order:-1;order:-1;}&.xl-last{-ms-flex-order:13;order:13;}&.order-xl-0{-ms-flex-order:0;order:0;}&.order-xl-1{-ms-flex-order:1;order:1;}&.order-xl-2{-ms-flex-order:2;order:2;}&.order-xl-3{-ms-flex-order:3;order:3;}&.order-xl-4{-ms-flex-order:4;order:4;}&.order-xl-5{-ms-flex-order:5;order:5;}&.order-xl-6{-ms-flex-order:6;order:6;}&.order-xl-7{-ms-flex-order:7;order:7;}&.order-xl-8{-ms-flex-order:8;order:8;}&.order-xl-9{-ms-flex-order:9;order:9;}&.order-xl-10{-ms-flex-order:10;order:10;}&.order-xl-11{-ms-flex-order:11;order:11;}&.order-xl-12{-ms-flex-order:12;order:12;}&.offset-xl-0{margin-left:0;}&.offset-xl-1{margin-left:8.333333%;}&.offset-xl-2{margin-left:16.666667%;}&.offset-xl-3{margin-left:25%;}&.offset-xl-4{margin-left:33.333333%;}&.offset-xl-5{margin-left:41.666667%;}&.offset-xl-6{margin-left:50%;}&.offset-xl-7{margin-left:58.333333%;}&.offset-xl-8{margin-left:66.666667%;}&.offset-xl-9{margin-left:75%;}&.offset-xl-10{margin-left:83.333333%;}&.offset-xl-11{margin-left:91.666667%;}}.about-image{width:450px;height:464px;margin-top:50px;}"]);
/* harmony default export */ __webpack_exports__["default"] = (ColWrapper);

/***/ }),

/***/ "./src/reusecore/Layout/Col/index.js":
/*!*******************************************!*\
  !*** ./src/reusecore/Layout/Col/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _col_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./col.style */ "./src/reusecore/Layout/Col/col.style.js");


var _excluded = ["children"];

var _this = undefined,
    _jsxFileName = "C:\\Users\\HLC_2021\\Documents\\psb_landing\\src\\reusecore\\Layout\\Col\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var Col = function Col(_ref) {
  var children = _ref.children,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  var AllClasses = ["col"];

  if (props.className) {
    AllClasses.push(props.className);
  }

  return __jsx(_col_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    className: AllClasses.join(" "),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Col);
Col.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any.isRequired
};

/***/ }),

/***/ "./src/reusecore/Layout/Container/container.style.js":
/*!***********************************************************!*\
  !*** ./src/reusecore/Layout/Container/container.style.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var ContainerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "containerstyle__ContainerWrapper",
  componentId: "sc-my3qv0-0"
})(["width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;position:relative;@media (min-width:568px){max-width:100%;}@media (min-width:576px){max-width:95%;}@media (min-width:768px){max-width:720px;}@media (min-width:992px){max-width:960px;}@media (min-width:1200px){max-width:1140px;}@media (min-width:1400px){max-width:1320px;}&.fluid{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;}"]);
/* harmony default export */ __webpack_exports__["default"] = (ContainerWrapper);

/***/ }),

/***/ "./src/reusecore/Layout/Container/index.js":
/*!*************************************************!*\
  !*** ./src/reusecore/Layout/Container/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _container_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./container.style */ "./src/reusecore/Layout/Container/container.style.js");


var _excluded = ["children"];

var _this = undefined,
    _jsxFileName = "C:\\Users\\HLC_2021\\Documents\\psb_landing\\src\\reusecore\\Layout\\Container\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var Container = function Container(_ref) {
  var children = _ref.children,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  var AllClasses = ["container"];

  if (props.className) {
    AllClasses.push(props.className);
  }

  return __jsx(_container_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    className: AllClasses.join(" "),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Container);
Container.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any.isRequired
};

/***/ }),

/***/ "./src/reusecore/Layout/Row/index.js":
/*!*******************************************!*\
  !*** ./src/reusecore/Layout/Row/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _row_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./row.style */ "./src/reusecore/Layout/Row/row.style.js");


var _excluded = ["children"];

var _this = undefined,
    _jsxFileName = "C:\\Users\\HLC_2021\\Documents\\psb_landing\\src\\reusecore\\Layout\\Row\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var Row = function Row(_ref) {
  var children = _ref.children,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  var AllClasses = ["row"];

  if (props.className) {
    AllClasses.push(props.className);
  }

  return __jsx(_row_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    className: AllClasses.join(" "),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Row);
Row.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any.isRequired
};

/***/ }),

/***/ "./src/reusecore/Layout/Row/row.style.js":
/*!***********************************************!*\
  !*** ./src/reusecore/Layout/Row/row.style.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var RowWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "rowstyle__RowWrapper",
  componentId: "sc-avq5qi-0"
})(["display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px;&.no-gutters{margin-right:0;margin-left:0;}&.no-gutters > .col,&.no-gutters > [class*=\"col-\"]{padding-right:0;padding-left:0;}"]);
/* harmony default export */ __webpack_exports__["default"] = (RowWrapper);

/***/ }),

/***/ "./src/reusecore/Layout/index.js":
/*!***************************************!*\
  !*** ./src/reusecore/Layout/index.js ***!
  \***************************************/
/*! exports provided: Container, Row, Col */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container */ "./src/reusecore/Layout/Container/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _Container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Row */ "./src/reusecore/Layout/Row/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return _Row__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Col */ "./src/reusecore/Layout/Col/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Col", function() { return _Col__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./src/reusecore/Text/index.js":
/*!*************************************!*\
  !*** ./src/reusecore/Text/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _excluded = ["children"];

var _this = undefined,
    _jsxFileName = "C:\\Users\\HLC_2021\\Documents\\psb_landing\\src\\reusecore\\Text\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].p.withConfig({
  displayName: "Text__TextWrapper",
  componentId: "sc-1ezj4hz-0"
})(["margin-top:0;margin-bottom:1rem;", " ", ""], function (props) {
  return props.FontSize && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["font-size:", ";"], props.FontSize);
}, function (props) {
  return props.TextColor && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["color:", ";"], props.TextColor);
});

var Text = function Text(_ref) {
  var children = _ref.children,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  var AllClasses = ["text"];

  if (props.className) {
    AllClasses.push(props.className);
  }

  return __jsx(TextWrapper, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    className: AllClasses.join(" "),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Text);
Text.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any.isRequired,
  as: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(["p", "span", "strong", "em"])
};
Text.defaultProps = {
  as: "p"
};

/***/ }),

/***/ "./src/sections/Contract/contract.style.js":
/*!*************************************************!*\
  !*** ./src/sections/Contract/contract.style.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var ContractWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "contractstyle__ContractWrapper",
  componentId: "sc-1a53dvq-0"
})(["position:fixed;width:100%;bottom:20px;z-index:99;.contract{width:260px;height:47px;left:calc(50% - 130px);overflow:hidden;color:white;white-space:nowrap;background:#00000088;text-align:center;border-radius:5px;padding:10px 0px;position:relative;box-shadow:rgba(6,24,44,0.4) 0px 0px 0px 2px,rgba(6,24,44,0.65) 0px 4px 6px -1px,rgba(255,255,255,0.08) 0px 1px 0px inset;backdrop-filter:blur(10px);text-transform:uppercase;transition:all 0.3s ease-out;&:hover{width:100%;height:160px;left:0;}p{padding:0px;margin:0;font-size:15px;}a{color:", ";}button{position:absolute;width:unset;background:none;height:unset;right:0px;top:0px;svg{font-size:20px;color:#990000;}}}"], function (props) {
  return props.theme.primaryColor;
});
/* harmony default export */ __webpack_exports__["default"] = (ContractWrapper);

/***/ }),

/***/ "./src/sections/Contract/index.js":
/*!****************************************!*\
  !*** ./src/sections/Contract/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contract_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contract.style */ "./src/sections/Contract/contract.style.js");
/* harmony import */ var _reusecore_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reusecore/Layout */ "./src/reusecore/Layout/index.js");
/* harmony import */ var _reusecore_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reusecore/Box */ "./src/reusecore/Box/index.js");
/* harmony import */ var _reusecore_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reusecore/Text */ "./src/reusecore/Text/index.js");
/* harmony import */ var _reusecore_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reusecore/Button */ "./src/reusecore/Button/index.js");
/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/cg */ "./node_modules/react-icons/cg/index.esm.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\HLC_2021\\Documents\\psb_landing\\src\\sections\\Contract\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var Contract = function Contract() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      show = _useState[0],
      setShow = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    usd: 0,
    percent: 0
  }),
      price = _useState2[0],
      setPrice = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_8___default()({
      method: 'get',
      url: 'https://api.coingecko.com/api/v3/simple/token_price/binance-smart-chain?contract_addresses=0x36bfbb1d5b3c9b336f3d64976599b6020ca805f1&vs_currencies=usd&include_24hr_change=true'
    }).then(function (response) {
      setPrice({
        usd: response === null || response === void 0 ? void 0 : response.data['0x36bfbb1d5b3c9b336f3d64976599b6020ca805f1'].usd,
        percent: response === null || response === void 0 ? void 0 : response.data['0x36bfbb1d5b3c9b336f3d64976599b6020ca805f1'].usd_24h_change
      });
    })["catch"](function (error) {
      console.log(error);
    });
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, show && __jsx(_contract_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(_reusecore_Layout__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx(_reusecore_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "contract",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx(_reusecore_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "priceExchange",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, __jsx(_reusecore_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "price",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx(_reusecore_Text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "price-headinng",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 19
    }
  }, "PSB $", price.usd, __jsx("span", {
    style: (price === null || price === void 0 ? void 0 : price.percent) > 0 ? {
      color: 'rgb(94, 219, 74)'
    } : {
      color: 'red'
    },
    className: "percent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, price.percent > 0 ? __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_7__["FiArrowUpRight"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 44
    }
  }) : __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_7__["FiArrowDownRight"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 64
    }
  }), Number.parseFloat(price.percent).toFixed(2), "%")))), __jsx(_reusecore_Text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }, "PSB Contract\xA0", __jsx("a", {
    href: "https://pancakeswap.finance/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x36bfBb1d5B3C9b336f3D64976599B6020cA805F1",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, "0x36bfBb1d5B3C9b336f3D64976599B6020cA805F1")), __jsx(_reusecore_Text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, "PULV Contract\xA0", __jsx("a", {
    href: "https://pancakeswap.finance/swap?inputCurrency=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56&outputCurrency=0xD59896C6F17F62BB584BBdaAAb8d0E09fDDf691e",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, "0xD59896C6F17F62BB584BBdaAAb8d0E09fDDf691e")), __jsx(_reusecore_Text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, "Official telegram:", " ", __jsx("a", {
    target: "_blank",
    href: "//t.me/planetsandbox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, "@planetsandbox"), ", Twitter:", " ", __jsx("a", {
    target: "_blank",
    href: "//twitter.com/planetsandbox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, "@planetsandbox"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }), __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, "Be aware of fake contract addresses and fake social groups/accounts!"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Contract);

/***/ })

}]);
//# sourceMappingURL=5.js.map
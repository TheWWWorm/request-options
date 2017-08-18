'use strict'

function applySettings (options, settings) {
    if (options.constructor === Object) {
        options.url = settings.baseUrl || '' + options.url || '';
    } else { //url is  the only option
        options = settings.baseUrl || '' + options || '';
    }
    return options;
}

/**
 * Wrapper for Request module.
 * @param {Object} Request module
 * @param {Object = {}} defaults default options. Any option that Request accepts
 * @param {Object = {}} settings module settings. Additinal optionals, that ease use of the Request module
 */

module.exports = (Request, defaults = {}, settings = {}) => {
    return new Proxy(Request, {
        get(target, fnName) {
            let fn = target[fnName];
            if (~['get', 'post', 'put', 'del', 'delete'].indexOf(fnName)) {
                fn = (options = {}, ...args) => {
                    if (options.constructor === Object) {
                        options = Object.assign({}, defaults, options);
                    } else if (options.constructor === Function) {
                        args.unshift(options);
                        options = defaults;
                    }
                    options = applySettings(options, settings);
                    target[fnName].call(undefined, options, ...args);
                }
            }
            return fn;
        }
    });
}
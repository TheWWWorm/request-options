'use strict'

module.exports = (Request, defaults = {}) => {
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
                    target[fnName].call(undefined, options, ...args);
                }
            }
            return fn;
        }
    });
}
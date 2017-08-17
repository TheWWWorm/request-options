# request-options
Proxy for creatng default option for request module

### How to use
```js

const request = require('request');
const Request = require('./request_options')(request, {jar:true});

Request.get({url: 'http://google.com'}, (error, response, body) => {
    //Stuff
});

}
```
Or even
```js

const request = require('request');
const Request = require('./request_options')(request, {jar:true, url: 'http://google.com'});

Request.get((error, response, body) => {
    //Stuff
});
```

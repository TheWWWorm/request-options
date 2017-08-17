# request-options
Wrapper for creatng default options for request module + bonus settings

## How to use
Supply request module as first parameter, your default options as second and module settings as third.
```js

const request = require('request');
const Request = require('./request_options')(request, {jar:true});

Request.get({url: 'http://google.com'}, (error, response, body) => {
    //Stuff
});

```
Or even
```js

const request = require('request');
const Request = require('./request_options')(request, {url: '/search?q=cats'}, {baseUrl: 'http://google.com'});

Request.get((error, response, body) => {
    //Stuff
});
```


## Settings

You can you use settings, for more ease of use

### baseUrl

Sets base of the url. For example if baseUrl is 'http://google.lv' and url is '/search?q=cats'. then end url will be 'http://google.com/search?q=cats'. Cats are cute!


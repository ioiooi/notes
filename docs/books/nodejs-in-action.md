# Node.js in Action

## Part 1 - Node fundamentals

### Chapter 1: Welcome to Node.js

#### 1.2 Asynchronous and evented: the browser

* Both Javascript and Node are event-driven (they use an event loop) and non-blocking when handling I/O.
* When I/O happens in the browser, it happens outside of the event loop (outside the main script execution) and then an "event" is emitted when the I/O is finished, which is handled by a function (often called a "callback").

```js
$.post('/resource.json', function(data) {
  console.log(data);
});
```

* In the above example the browser continues to process other events, like User clicks or other Ajax-calls until the response for resource.json comes back.

#### 1.5 DIRTy (Data-intensive real-time) by default

* Node core modules are small and low-level
* Node is a Platform! not a framework like Rails or Django. Node+Express is more like Ruby on Rails.

#### 1.5.2 Hello World HTTP server

* When a request happens, the anonymous callback function is fired.
* The requestListener is like listening to onclick event in the browser. The same function or logic handles the click always/forever once it's setup.
  Just like the function(req, res) callback in http.createServer().
* Same thing different writing:

```js
var server = http.createServer();
server.on('request', function(req, res) {
  // foobar
});
```

### Chapter 2: Building a multiroom chat application

#### 2.2 Application requirements and initial setup

To handle chat-related messaging, you could poll the server with Ajax. Ajax uses HTTP as a transport mechanism, and HTTP wasn't design for real-time communication. When a message is sent using HTTP, a new TCP/IP connection must be used. Opening and closing connections takes time, and the size of the data transfer is larger because HTTP headers are sent on every request. Instead we'll be using Web-Socket.

#### 2.4 Handling messaging using Socket.io

Socket.IO will fall back transparently to other WebSocket alternatives if WebSocket isn't implemented in a web browser. Socket.IO provides virtual channels, so instead of broadcasting every message to every connected user, you can broadcast only to those who have subscribed to a specific channel.

### Chapter 3: Node programming fundamentals

#### 3.1 Organizing and reusing Node functionality

* Node modules bundle up code for reuse, but they don't alter global scope.
* Node modules allow you to select what functions and variables from the included file are exposed to the application. If the module is returning more than one function or variable, the module can specify these by setting the properties of an object called `exports`. If the module is returning a single function or variable, the property `module.exports` can instead be set.
* After Node has located and evaluated your module, the require function returns the contents of the exports object defined in the module.
* Populating the exports object of a module gives you a simple way to group reusable code in separate files.

#### 3.1.1 Creating modules

To create a typical module, you create a file that defines properties on the exports object with any kind of data, such as strings, objects, and functions.

```js
const canadianDollar = 0.91;

const roundTwoDecimals = amount => {
  return Math.round(amount * 100) / 100;
};

exports.canadianToUS = canadian => {
  return roundTwoDecimals(canadian * canadianDollar);
};

exports.USToCanadian = us => {
  return roundTwoDecimals(us / canadianDollar);
};
```

Only two properties of the exports object are set.
Utilize the new module by using Node's require function.

```js
const currency = require('./currency');

console.log('50 Canadian dollars equals this amount of US dollars:');
console.log(currency.canadianToUS(50));

console.log('30 US dollars equals this amount of Canadian dollars:');
console.log(currency.USToCanadian(30));
```

After Node has located and evaluated your module, the require function returns the contents of the exports object defined in the module. You're then able to use the two functions returned by the module to do currency conversion.

#### 3.1.2 Fine-tuning module creation using module.exports

<https://blog.tableflip.io/the-difference-between-module-exports-and-exports/>

<https://medium.freecodecamp.org/node-js-module-exports-vs-exports-ec7e254d63ac>

As a guideline, if the relationship between `exports` and `module.exports` seems like magic to you, ignore `exports` and only use `module.exports`.

#### 3.2 Asynchronous programming techniques

* There are two popular models in the Node world for managing response logic: callbacks and event listeners.
* _Callbacks_ generally define logic for one-off responses. E.g. you perform a db query and specify what to do with the result in the callback.
* _Event listeners_, on the other hand, are essentially callbacks that are associated with a conceptual entity (an event). For comparison, a mouse click is an event you would handle in the browser when someone clicks the mouse. As an example, in Node an HTTP server emits a request event when an HTTP request is made.
* Node HTTP server instance is an example of an event emitter, a class (`EventEmitter`) that can be inherited and that adds the ability to emit and handle events.

#### 3.2.2 Handling repeating events with event emitters

* Event emitters fire events and include the ability to handle those events when triggered. Some important Node API components, such as HTTP servers, TCP servers, and streams, are implemented as event emitters. You can also create your own. As we mentioned earlier, events are handled through the use of listeners. A listener is the association of an event with a callback function that gets triggered each time the event occurs. For example, a TCP socket in Node has an event called data that's triggered whenever new data is available on the socket.
* The following code defines a `channel` event emitter with a single listener that responds to someone joining the channel. Note that you use `on` (or, alternatively, the longer form `addListener`) to add a listener to an event emitter:

```js
const EventEmitter = require('events').EventEmitter;
const channel = new EventEmitter();
channel.on('join', () => console.log('Welcome!'));
```

This join callback, however, won't ever be called, because you haven't emitted any events yet. You could add a line to the listing that would trigger an event using the emit function:

```js
channel.emit('join');
```

* _Event Names_: Events are simply keys and can have any string value: `data`, `join` or `some crazy long event name`. There's only one special event, called `error`.
* The EventEmitter provides various methods such as `once()`, `removeListener()` etc… for further information lookup the [EventEmitter documentation](https://nodejs.org/docs/latest-v8.x/api/events.html)
* You can even extend the EventEmitter and build something like a File Watcher. Extending should be done by using ES6 class and extends syntax.
* [File Watcher GIST](https://gist.github.com/ioiooi/e164966553df75a4c4b6379dd6590736#file-filewatcher-js)

#### 3.3 Sequencing asynchronous logic

The concept of sequencing groups of asynchronous tasks is called flow control by the Node community. There are two types of flow control: serial and parallel.

Simple serial task example: Creating directory and then storing a file in it.
Parallel tasks are independent from another and it is not important when these tasks start and finish relative to one another, but they should all be completed before further logic executes.
Simple parallel task example: Downloading a number of files that all should be compressed into a zip archive.

#### 3.3.1 When to use serial flow control

* In order to execute a number of asynchronous tasks in sequence, you could use callbacks, but if you have a significant number of tasks, you'll have to organize them. If you don't, you'll end up with messy code due to excessive callback nesting.

```js
setTimeout(function() {
  console.log('I execute first.');
  setTimeout(function() {
    console.log('I execute next.');
    setTimeout(function() {
      console.log('I execute last.');
    }, 100);
  }, 500);
}, 1000);
```

#### 3.3.2 Implementing serial flow control

* In order to execute a number of asynchronous tasks in sequence using serial flow control, you first need to put the tasks in an array, in the desired order of execution. This array will act as a queue: when you finish one task, you extract the next task in sequence from the array.

```js
const task1 = () => {
  // Do something async e.g. http request, read a file etc...
  if (err) return next(err);

  next(null, dataTask1);
};

const task2 = dataFromTask1 => {
  // Do something async with the result from task1
  next(null, dataTask2);
};

const task3 = dataFromTask2 => {
  // Do something async with the result from task2
  next(null, dataTask3);
};

const tasks = [task1, task2, task3];

const next = (err, result) => {
  if (err) throw err;

  const currentTask = tasks.shift();

  if (currentTask) {
    currentTask(result);
  }
};

next();
```

#### 3.4 Summary

* Organize application logic into reusable modules.
  * Based on CommonJS module specification.
  * Populating the `exports` and `module.exports` objects.
* Make async logic behave the way you want it to.
  * By using callbacks, event emitters and flow control

## Part 2 - Web application development with Node

### Chapter 4: Building Node web applications

At Node's core is a powerful streaming HTTP parser consisting of roughly 1,500 lines of optimized C code. This parser, in combination with the low-level TCP API that Node exposes to JavaScript, provides you with a very low-level, but very flexibel, HTTP server.

#### 4.1.1 How Node presents incoming HTTP requests to developers

* To create an HTTP server, call the `http.createServer()` function. It accepts a single argument, a callback function, that will be called on each HTTP request received by the server. This _request_ callback receives, as arguments, the `request` and `response` objects.

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Hello World');
  res.end();
});
```

* For every HTTP request received by the server, the request callback function will be invoked with new `req` and `res` objects.
* Prior to the callback being triggered, Node will parse the request up through the HTTP headers and provide them as part of the `req` object. But Node doesn't start parsing the body of the request until the callback has been fired. This is different from some server-side frameworks, like PHP, where both the headers and body of the request are parsed before your application logic runs.
* After the request callback is triggered it's your responsibility to end the response using the `res.end()` method.
* For the server to listen for incoming requests it has to be bound to a port. The `server.listen()` method, accepts a combination of arguments, but for now the focus will be on listening for connections on a specified and unprivileged port, such as 3000.

```js
server.listen(3000);
```

#### 4.1.4 Setting response headers

* Node offers several methods to progressively alter the header fields of an HTTP response: the `res.setHeader(field, value)`, `res.getHeader(field)`, and `res.removeHeader(field)` methods.
* Different HTTP status codes can be applied by setting the `res.statusCode` property.
* All of the above methods and properties can be called and assigned at any point during the application's response, as long as it's before the first call to `res.write()` or `res.end()`.

```js
const body = 'Hello World';
res.setHeader('Content-Length', body.length);
res.setHeader('Content-Type', 'text/plain');
res.statusCode = 200;
res.end(body);
```

* Node's philosophy is to provide small but robust networking APIs, not to compoete with high-level frameworks such as **Rails** or **Django**, but to serve as a tremendous platform for similar frameworks to build upon. Because of this design, neither high-level concepts like sessions nor fundamentals such as HTTP cookies are provided within Node's core. Those are left for third-party modules to provide.

#### 4.2 Building a RESTful web service

* In Node you can check which HTTP method (verb) is being used by checking the `req.method` property. When you know which method the requetst is using, your server will know which task to perform.
* When Node's HTTP parser reads in and parses request data, it makes that data available in the form of `data` events that contain chunks of parsed data ready to be handled.

```js
const http = require('http');
const server = http.createServer((req, res) => {
  req.on('data', chunk => {
    console.log('parsed', chunk);
  });
  req.on('end', () => {
    console.log('done parsing');
    res.end();
  });
});
```

* By default, the `data` events provide `Buffer` objects, which are Node's version of byte arrays. The stream encoding of the `Buffer` can be set using `req.setEncoding(encoding)` method.

```js
// chunk is now a UTF8 string instead of a Buffer.
req.setEncoding('utf8');
req.on('data', chunk => {
  console.log(chunk);
});
```

* One way of getting the whole data transmission is to concatenate all of the chunks of data until the `end` event is emitted.

```js
const server = http.createServer((req, res) => {
  switch (req.method) {
    case 'POST':
      let item = '';
      req.setEncoding('utf8');
      req.on('data', chunk => {
        item += chunk;
      });
      // end event - request is complete
      req.on('end', () => {
        // do something with item
        res.end('OK. Item received.');
      });
      break;
  }
});
```

* To speed up responses, the `Content-Length` field should be sent with your response. Setting the `Content-Length` header implicitly disables Node's chunked encoding, providing a performance boost because less data needs to be transferred.

```js
const body = 'Foobar...';
res.setHeader('Content-Length', Buffer.byteLength(body));
res.setHeader('Content-Type', 'text/plain; charset="utf-8"');
res.end(body);
```

* `Content-Length` value should represent the byte length and not character length. Using `body.length` could lead to a wrong value in case a multibyte charater is present. E.g. `'I❤NY'.length` is 5 and `Buffer.byteLength('I❤NY')` is 7.

#### 4.3 Serving static files

```js
const http = require('http');
const { parse } = require('url');
const { join } = require('path');
const fs = require('fs');
const root = __dirname;

const server = http.createServer((req, res) => {
  const url = parse(req.url);
  const path = join(root, url.pathname);
  const stream = fs.createReadStream(path);
  stream.pipe(res);
});

server.listen(3000);
```

* `pipe()` can take any `ReadableStream` and write (pipe) its contents to any `WriteableStream`. The `request` and `reponse` objects are, respectively, `ReadableStream` ([link](https://nodejs.org/dist/latest-v8.x/docs/api/http.html#http_class_http_incomingmessage)) and `WriteableStream` ([link](https://nodejs.org/dist/latest-v8.x/docs/api/http.html#http_class_http_serverresponse)).

#### 4.3.2 Handling server errors

* In Node, anything that inherits from `EventEmitter` has the potential of emitting an `error` event. A stream, like `fs.ReadStream`, is simply a specialized `EventEmitter` that contains predefined events such as `data` and `end`.
* `error`s can kill your server.

```js
stream.pipe(res);
stream.on('error', err => {
  res.statusCode = 500;
  res.end('Internal Server Error');
});
```

* Registering an `error` event helps you catch any foreseen or unforeseen errors and enables you to respond more gracefully to the client.

### Chapter 5: Storing Node application data

### Chapter 6: Connect

### Chapter 7: Connect's built-in middleware

### Chapter 8: Express

### Chapter 9: Advanced Express

### Chapter 10: Testing Node applications

### Chapter 11: Web application templating

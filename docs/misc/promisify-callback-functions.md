# Promisify callback functions

[MDN - Using promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

[Google - Promises introduction](https://developers.google.com/web/fundamentals/primers/promises)

## Example 1: setTimeout

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
wait(10000).then(() => console.log("10 seconds"));
```

`wait()` gets invoked and does 2 things:

- invokes a `setTimeout` with the desired duration and a reference to the `resolve` variable which is the function to be executed after the timer expires.
- returns a new Promise with a success callback `resolve` which is passed down to `setTimeout`.

## Example 2: AWS SDK - DynamoDB

```js
const docClient = new AWS.DynamoDB.DocumentClient();
const get = (params) => {
  return new Promise((resolve, reject) => {
    docClient.get(params, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};
get({ foo: bar })
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

- `resolve` and `reject` are getting called inside the callback function of the async api.

## Example 3: Reading a file using `fs` (Node.js)

```js
const fs = require("fs");

const readFilePromise = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

readFilePromise("example.txt")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

## Example 4: AJAX using XMLHttpRequest Object

Create an XMLHttpRequest object and set up event listeners for onload and onerror events.

- If the request is successful (HTTP status between 200 and 299), we resolve the promise with the response text.
- If there's an error during the request, we reject the promise with an appropriate error message.

```js
function makeAjaxRequest(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(new Error(`HTTP Error: ${xhr.status}`));
      }
    };

    xhr.onerror = function () {
      reject(new Error("Network Error"));
    };

    xhr.send();
  });
}

// Example usage:
makeAjaxRequest("GET", "https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
```

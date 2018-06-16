# Promises

[MDN - Using promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

[Google - Promises introduction](https://developers.google.com/web/fundamentals/primers/promises)

## Wrapping API

### Example 1: setTimeout

```js
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
wait(10000).then(console.log('10 seconds'));
```

`wait()` gets invoked and does 2 things:

- invokes a `setTimeout` with the desired duration and a reference to the `resolve` variable which is the function to be executed after the timer expires.
- returns a new Promise with a success callback `resolve` which is passed down to `setTimeout`.

### Example 2: AWS SDK - DynamoDB

```js
const docClient = new AWS.DynamoDB.DocumentClient();
const get = params => {
  return new Promise((resolve, reject) => {
    docClient.get(params, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};
get({ foo: bar })
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

- `resolve` and `reject` are getting called inside the callback function of the async api.
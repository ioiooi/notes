# Unix Time

[Wiki](https://en.wikipedia.org/wiki/Unix_time)

> Unix Time, POSIX time, UNIX Epoch Time all mean the same thing.
> Describes a point in time defined as a number of seconds that have elapsed since 00:00:00 UTC Thursday, 1 January 1970.

UTC +1 hour ⇒ CET  
UTC +2 hours ⇒ CEST

## Javascript

[MDN web docs - Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

JavaScript Date objects are based on a time value that is the **number of milliseconds** since 00:00:00 UTC Thursday, 1 January 1970.
Can only be instantiated by calling it as a constructor. Uses the systems locale.

Current UNIX Epoch Time in JavaScript:

```js
Math.floor(Date.now() / 1000);
```

Current day but at a different time e.g. 17:15

```js
const date = new Date();
date.setHours(17, 15, 0);
```

Difference in seconds between two dates e.g. now and one hour from now:

```js
const date = new Date();
date.setHours(date.getHours() + 1);
const now = Date.now();
Math.floor((date.getTime() - now) / 1000);
// outputs 3600
```

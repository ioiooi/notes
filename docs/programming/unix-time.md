# Unix Time

[Wiki](https://en.wikipedia.org/wiki/Unix_time)

> Unix Time, POSIX time, UNIX Epoch Time all mean the same thing.
> Describes a point in time defined as a number of seconds that have elapsed since 00:00:00 UTC Thursday, 1 January 1970.

UTC +1 hour ⇒ CET  
UTC +2 hours ⇒ CEST

## Javascript

[MDN web docs - Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

JavaScript Date objects are based on a time value that is the **number of milliseconds** since 00:00:00 UTC Thursday, 1 January 1970.
They can only be instantiated by calling the Date constructor and use the system's locale.

### Getting Current Unix Epoch Time

```js
Math.floor(Date.now() / 1000);
```

### Setting a Specific Time on the Current Day

```js
const date = new Date();
date.setHours(17, 15, 0);
```

### Calculating the Difference in Seconds Between Two Dates

```js
const date = new Date();
date.setHours(date.getHours() + 1);
const now = Date.now();
Math.floor((date.getTime() - now) / 1000);
// outputs 3600
```

## PHP

[PHP Manual - Date and Time](https://www.php.net/manual/en/datetime.format.php)

In PHP, you can manipulate Unix Time using the `time()` function and the `DateTime` class.

### Getting Current Unix Epoch Time_

```php
// Current Unix Epoch Time in seconds
$currentUnixTimeSeconds = time();

// Current Unix Epoch Time in milliseconds
$currentUnixTimeMilliseconds = round(microtime(true) * 1000);
```

### Calculating the Difference in Seconds Between Two Dates_

```php
$dateTime1 = new DateTime();
$dateTime2 = clone $dateTime1;
$dateTime2->modify('+1 hour');

$unixTime1 = $dateTime1->getTimestamp();
$unixTime2 = $dateTime2->getTimestamp();

$differenceInSeconds = $unixTime2 - $unixTime1;
```

## C\#

[Microsoft Docs - DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime)

In C#, you can work with Unix Time using the `DateTime` class. Unix Time is represented as the number of seconds or milliseconds since January 1, 1970.

### Getting Current Unix Epoch Time*

```csharp
// Current Unix Epoch Time in seconds
long unixTimeSeconds = (long)(DateTime.UtcNow - new DateTime(1970, 1, 1)).TotalSeconds;

// Current Unix Epoch Time in milliseconds
long unixTimeMilliseconds = (long)(DateTime.UtcNow - new DateTime(1970, 1, 1)).TotalMilliseconds;
```

### Calculating the Difference in Seconds Between Two Dates*

```csharp
DateTime dateTime1 = DateTime.UtcNow;
DateTime dateTime2 = dateTime1.AddHours(1);

long unixTime1 = dateTime1.ToUnixTimeSeconds();
long unixTime2 = dateTime2.ToUnixTimeSeconds();

long differenceInSeconds = unixTime2 - unixTime1;
```

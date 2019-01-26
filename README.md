# Spaz's Faster now()

***Faster now() for Node.js***

Let's be clear: `Date.now()` is not "slow".
On Spaz's c.2018 laptop it returns the current time in about 80 nanoseconds (yes, _nano_; 80 billionths-with-a-B of a second.)

But, if you like speed like Spaz likes speed, it turns out that, using Node's [`process.hrtime()`](https://nodejs.org/api/process.html#process_process_hrtime_time), we can calculate the current time in about _half the nanos!_

Crazy, huh?

## Installation and Usage

`npm install spazmodius/now`

```js
const now = require('@spazmodius/now')
console.log('The current time is', now(), Date.now())
```

## API

### now()

Returns the number of milliseconds since the UNIX epoch.
This is a drop-in replacement for [`Date.now()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now).

## Tests

Installing with `npm` does not include the tests; you'll have to clone the repo.

`ava test/test.js`

`node test/vs-Date-now.js`

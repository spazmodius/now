# Spaz's Faster now()

***Faster now() for Node.js***

Let's be clear: `Date.now()` is not "slow".
On my laptop (c. 2019) it returns the current time in about 80 nanoseconds (yes, _nano_; 80 billionths-with-a-B of a second.)

But if you like speed like Spaz likes speed, it turns out that using Node's `process.hrtime()` we can calculate the current time in about _half the nanos!_

## Installation and Usage

`npm install spazmodius/now`

```js
const now = require('@spazmodius/now')
console.log('The current time is', now(), Date.now())
```

## API

### now()

Returns the number of milliseconds since the UNIX epoch.
This is a drop-in replacement for `Date.now()`.

## Tests

Installing with `npm` does not include the tests; you'll have to clone the repo.

`ava test/test.js`

`node test/bench.js`

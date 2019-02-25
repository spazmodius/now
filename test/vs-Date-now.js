'use strict'
const Bench = require('@spazmodius/hrbench')
const spazNow = require('..')
const { now: dateNow } = Date

Bench()
	.test('Date.now', dateNow)
	.test('@spazmodius/now', spazNow)
	.run()
	.then(Bench.summarize)
	.then(console.log)
'use strict'
const Bench = require('@spazmodius/hrbench')
const spazNow = require('../now')
const { now: dateNow } = Date

Bench()
	.test(dateNow)
	.test(spazNow)
	.run()
	.then(Bench.summarize)
	.then(console.log)
'use strict'
const test = require('ava')
const now = require('../now')

test('matches Date.now', t => {
	t.true(Math.abs(now() - Date.now()) <= 1)
})

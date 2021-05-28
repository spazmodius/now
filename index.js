'use strict'
const nodeVersion = parseInt(process.versions.node)
module.exports =
	// in Node v14.x, hrtime() is 2x slower
	nodeVersion === 14 ? Date.now :
	require('./now')

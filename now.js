'use strict'
const { hrtime } = process
const { now: dateNow } = Date
const { floor } = Math

let time, baseline

function sync() {
	time = dateNow()
	baseline = hrtime()
	
	baseline[1] -= 5e5
	if (baseline[1] < 0) {
		baseline[0] -= 1
		baseline[1] += 1e9
	}
}

function now() {
	let [s, ns] = hrtime()
	s -= baseline[0]
	ns -= baseline[1]
	if (ns < 0) {
		s -= 1
		ns += 1e9
	}
	return time + s * 1e3 + floor(ns * 1e-6)
}

sync()
setInterval(sync, 10000).unref()

module.exports =  now

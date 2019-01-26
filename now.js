'use strict'
const { hrtime } = process
const { now: dateNow } = Date
const { floor } = Math

let time, baseline

function sync() {
	time = dateNow()
	baseline = hrtime()

	// subtract a half-ms
	// later, Math.floor will have the effect of rounding
	baseline[1] -= 5e5
	if (baseline[1] < 0) {
		baseline[0] -= 1
		baseline[1] += 1e9
	}
}

function now() {
	// why not hrtime(baseline)?
	// long subtraction for the love of nanos!
	let [s, ns] = hrtime()
	s -= baseline[0]
	ns -= baseline[1]
	if (ns < 0) {
		s -= 1
		ns += 1e9
	}
	return time + s * 1e3 + floor(ns * 1e-6)
}

// re-sync periodically because the system clock drifts and adjusts
setInterval(sync, 10000).unref()
sync()

module.exports =  now

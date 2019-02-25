'use strict'
const given = require('@spazmodius/gwt')
const now = require('..')

given(()=> Date.now())
.given(() => now())
.when((dateNow, spazNow) => Math.abs(spazNow - dateNow))
.then(({returned: difference}) => difference <= 1)

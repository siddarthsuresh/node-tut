const lodash = require('lodash')

const items = [1,[2,3],[4]]
console.log('Items before flattening '+items)
lodash.flattenDeep(items)
console.log('Items after flattening '+items)

// const bootstrap = require('bootstrap')

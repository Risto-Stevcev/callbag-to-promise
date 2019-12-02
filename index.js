const toAsyncIterable = require('callbag-to-async-iterable')

const toPromise = async function(stream) {
  let result = []

  for await (let item of toAsyncIterable(stream))
    result.push(item)

  return result
}

module.exports = toPromise

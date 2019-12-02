# callbag-to-promise

Convert an entire stream into a promise


## Install

```sh
yarn install @ristostevcev/callbag-to-promise
```


## Usage

```js
const { pipe, interval, map, take } = require('callbag-basics')
const toPromise = require('@ristostevcev/callbag-to-promise')

pipe(
  interval(50),
  map(e => e * 2),
  take(5),
  toPromise
)
// Promise [0, 2, 4, 6, 8]
```


## License

See LICENSE

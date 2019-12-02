const { expect } = require('chai')
const { pipe, interval, map, take } = require('callbag-basics')
const toPromise = require('.')

describe('callbag-to-promise', () => {
  it('should convert a callbag to a promise', () => {
    pipe(
      interval(50),
      map(e => e * 2),
      take(5),
      toPromise
    ).then(stream => expect(stream).to.deep.equal([0, 2, 4, 6, 8]))
  })
})

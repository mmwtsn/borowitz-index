import fs from 'fs'
import test from 'tape'
import {parse, count} from '../../src/helpers'

const authors = [
  'Alexander Stille',
  'Jeremy Keehn',
  'Paul Kedrosky',
  'Marsh McCall',
  'John Cassidy'
]

test('helpers.parse()', t => {
  fs.readFile('./test/fixtures/homepage.html', (err, data) => {
    if (err) throw err

    t.same(parse(data), authors, 'returns an array of names')
    t.end()
  })
})

test('helpers.parse()', t => {
  t.equal(count(authors), 0, 'returns an integer')
  t.end()
})

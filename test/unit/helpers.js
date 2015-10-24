import fs from 'fs'
import test from 'tape'
import {parse, count} from '../../helpers'

const authors = [
  'Ferris Jabr',
  'Andy Borowitz',
  'Dana Goodyear',
  'Andy Borowitz',
  'The Editors'
]

test('helpers.parse()', t => {
  fs.readFile('./test/fixtures/popular.html', (err, data) => {
    if (err) throw err

    t.same(parse(data), authors, 'returns an array of names')
    t.end()
  })
})

test('helpers.parse()', t => {
  t.equal(count(authors), 2, 'returns an integer')
  t.end()
})

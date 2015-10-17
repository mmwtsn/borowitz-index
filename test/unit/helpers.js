import fs from 'fs'
import test from 'tape'
import {parse} from '../../src/helpers'

test('helpers.parse()', t => {
  fs.readFile('./test/fixtures/homepage.html', (err, data) => {
    if (err) throw err

    t.equal(parse(data), 0, 'returns an integer')
    t.end()
  })
})

import req from 'supertest'
import test from 'tape'
import server from '../../src/server'

test('server', t => {
  req(server)
    .get('/')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) throw err

      t.same(res.body, { borowitz_index: 0 }, 'returns Borowitz Index as JSON')
      t.end()
    })
})

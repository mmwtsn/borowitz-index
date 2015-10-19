import nock from 'nock'
import req from 'supertest'
import test from 'tape'
import server from '../../server'

nock('http://www.newyorker.com')
  .get('/')
  .replyWithFile(200, './test/fixtures/homepage.html')

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

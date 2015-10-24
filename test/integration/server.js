import nock from 'nock'
import req from 'supertest'
import test from 'tape'
import server from '../../server'

nock('http://www.newyorker.com')
  .get('/popular')
  .replyWithFile(200, './test/fixtures/popular.html')

test('server', t => {
  req(server)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) throw err

      t.assert(res.text.match(/h2.2..h2/), 'returns Borowitz Index in HTML')
      t.end()
    })
})

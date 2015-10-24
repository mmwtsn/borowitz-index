import express from 'express'
import request from 'request'
import {parse, count} from './helpers'

const app = express()

app.set('view engine', 'jade')
app.use(express.static('public'))

app.get('/', (req, res) => {
  request('http://www.newyorker.com/popular', (err, response, html) => {
    if (err || response.statusCode !== 200) throw err

    res.render('index', { borowitz_index: count(parse(html)) })
  })
})

export default app

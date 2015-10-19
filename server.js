import express from 'express'
import request from 'request'
import {parse, count} from './helpers'

const app = express()

app.get('/', (req, res) => {
  request('http://www.newyorker.com', (err, response, html) => {
    if (err || response.statusCode !== 200) throw err

    res.json({ borowitz_index: count(parse(html)) })
  })
})

export default app

import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.json({ borowitz_index: 0 })
})

export default app

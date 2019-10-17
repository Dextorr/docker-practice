const express = require('express')

const app = express()

const DEFAULT_PORT = 3000;

app.get('/', (req, res) => {
  const today = new Date()
  const wuTangWednesday = today.getDay() === 3
  const message = `It\'s ${wuTangWednesday ? '':'not'} Wu-Tang Wednesday${wuTangWednesday ? ' 👐🏽':''}`
  res.send({ message })
})

app.listen(DEFAULT_PORT, () => console.log(`🏃🏽‍💨 Running on ${DEFAULT_PORT}`));

'use strict'

const express = require('express')
const app = express()
const fs = require('fs')
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile('/index.html')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
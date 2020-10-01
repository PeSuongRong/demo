// eslint-disable-next-line no-undef
const express = require('express')
// eslint-disable-next-line no-undef
const serveStatic = require('serve-static')
// eslint-disable-next-line no-undef
const path = require('path')
const app = express()

// eslint-disable-next-line no-undef
app.use('/', serveStatic(path.join(__dirname,'/dist')))

// eslint-disable-next-line no-undef
const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
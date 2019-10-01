import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import Routes from '../Routes'

const PORT = 9000
const app = express()

app.use(express.static('public'))

app.use('/', (req, res) => {
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      <Routes />
    </StaticRouter>
  )
  const html = `
    <html>
      <head><title>Page title</title></head>
      <body>
        <div id="app">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `

  res.send(html)
})

app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`)
})

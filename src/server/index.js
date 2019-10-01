import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

import Home from '../app/components/Home'

const PORT = 9000
const app = express()

app.use(express.static('public'))

app.use('/', (req, res) => {
  const content = renderToString(<Home />)
  const html = `
    <html>
      <head><title>Page title</title></head>
      <body>
        <div id="app">${content}</div>
      </body>
    </html>
  `

  res.send(html)
})

app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`)
})

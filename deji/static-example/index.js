const express = require('express')

const app = express()

const port = 3000

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`the server is connected and running on port: ${port}`)
})
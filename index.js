const port = 3000

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.post('/dialog', (req, res) => {
    const { message } = req.body

    res.json({ message })
})

app.listen(port, () => console.log(`Running on port ${port}`))
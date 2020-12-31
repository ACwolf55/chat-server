
const express = require('express')
const mc = require('./controllers/messages-controller')

const app = express()

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

const port = 3001

app.listen(port, () =>{
    console.log(`Server listening on port ${port}`)
    }
)

const messageBaseUrl = '/api/messages'
app.post(messageBaseUrl,mc.create)
app.get(messageBaseUrl,mc.read)
app.put(`${messageBaseUrl}/:id`,mc.update)
app.delete(`${messageBaseUrl}/:id`,mc.delete)




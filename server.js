import express from 'express'
import dotenv from 'dotenv'
import { Server as httpServer } from 'http'
import { Server } from 'socket.io'
import path from 'path'

dotenv.config()

const app = express()
const port = 8080
const staticFiles = `${path.resolve()}/build`
const users = []

const http = httpServer(app)
const socketIO = new Server(http)

socketIO.on('connection', socket => {
  socket.on('newUser', newUserData => {
    users.push(newUserData)
    socketIO.emit('newUserResponse', users)
  })

  socket.on('typing', typingData => {
    socket.broadcast.emit('typingResponse', typingData)
  })

  socket.on('newMessage', message => {
    socketIO.emit('newMessageResponse', message)
  })
})

app.use(express.static(staticFiles))
app.get('*', (req, res) => {
  res.sendFile(`${staticFiles}/index.html`)
})

try {
  await http.listen(port)
  console.log(`Server is listening on port: ${port}`)
}catch(e) {
  console.log(e.message)
}
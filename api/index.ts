var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var data = require('./data.js')

// Global variable to store the latest NHL results
var latestData: any

// Load the NHL data for when client's first connect
// This will be updated every 10 minutes
// data.getData().then((result: any) => {
//   latestData = result
// })

latestData = new Date().toISOString()

http.listen(3000, function() {
  console.log('HTTP server started on port 3000')
})

io.on('connection', function(socket: any) {
  // when clients connect, send the latest data
  socket.emit('data', latestData)
})

// refresh data
setInterval(function() {
  // data.getData().then((result: any) => {
  //   // Update latest results for when new client's connect
  //   latestData = result

  //   // send it to all connected clients
  //   io.emit('data', result)

  //   console.log('Last updated: ' + new Date())
  // })
  latestData = new Date().toISOString()
  io.emit('data', latestData)
  console.log('Last updated: ' + new Date())
}, 3000)

const express = require('express')
const server = express()
const routes = require('./routes')

//hability to static files
server.use(express.static('public'))
server.use(routes)

server.listen(3000, ()=>console.log('server is running..'))

const express = require('express')
const server = express()

//hability to static files
server.use(express.static('public'))

server.get('/', (req, res)=>{
    return res.sendFile(__dirname+'/pages/index.html')
})

server.listen(3000, ()=>console.log('server is running..'))

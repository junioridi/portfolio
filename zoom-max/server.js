const express = require('express');
const app = express();
const { v4:uuid4 } = require('uuid');
//const server = require('http').Server(app);

const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}

const server = https.createServer(options, app);

//server.listen(3030);

const customGenerationFunction = () => (Math.trunc((Math.random()*899+100)).toString());

const { ExpressPeerServer } = require('peer');
const peerServer = ExpressPeerServer(server, {
    debug: true,
    proxied: true,
    generateClientId: customGenerationFunction,
    ssl: {}
});


const io = require('socket.io')(server);

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.use('/peerjs', peerServer);
app.get('/', (req, res) => {
    //res.status(200).send("This is cool again");
    //res.render('room');
    res.redirect(`/${uuid4()}`);
});

app.get('/:room', (req, res) => {
    res.render('room', { roomId: req.params.room } );
});

io.on( 'connection', socket => {
    console.log(`Connected`);
    socket.on('join-room', (roomId, userId) => {
        
        console.log(`room: ${roomId}`);
        console.log(`user: ${userId}`);
        
        socket.join(roomId);
        console.log("broadcast to all users");
        socket.broadcast.to(roomId).emit('user-connected', userId);

        socket.on('disconnect', () => {
            socket.broadcast.to(roomId).emit('user-disconnected', userId)
        })
 
    })
});

/*
io.on('connection', socket => {
  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId)
    socket.to(roomId).broadcast.emit('user-connected', userId);
    // messages
    socket.on('message', (message) => {
      //send message to the same room
      io.to(roomId).emit('createMessage', message)
  }); 

    socket.on('disconnect', () => {
      socket.to(roomId).broadcast.emit('user-disconnected', userId)
    })
  })
})
*/
 

server.listen(3030);



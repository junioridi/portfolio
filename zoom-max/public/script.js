
const socket = io("/");
const videoGrid = document.getElementById("video-grid");
//myVideo.muted = true;

console.log(ROOM_ID);

var peer = new Peer(undefined, {
    path: '/peerjs',
    host: 'calzzani.loginto.me',
    port: 3030
});


const addVideoStream = (stream) => {    
    const video = document.createElement( 'video' );
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
        video.play();
    });
    videoGrid.append(video);
};  

//navigator.mediaDevices.getUserMedia || 
const getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
const callList = [];

peer.on('open', id => {
    
    console.log(`join-room ${ROOM_ID}:peer user ${id}`);
    getUserMedia({video: true, audio: true},  stream => {

        peer.on('call', call => {
            console.log("answering");        
            call.answer(stream);
            call.on('stream', remoteStream => {
                if(!callList[call.peer])
                {
                    addVideoStream(remoteStream);
                    callList[call.peer] = call;
                    console.log("call stream answered");
                }
            });
        });  
    
        socket.on('user-connected', (userId) => {
            console.log("socket user connected");
            connectToNewUser(userId, stream);
        });

        socket.emit("join-room", ROOM_ID, id);

        addVideoStream(stream); 
    });

}, (err) => {
    console.log("failed to get local stream");
}); 

 


const connectToNewUser = (userId, stream) => {
    console.log(`new user peer calling ${userId}`);
    const call = peer.call(userId, stream);
    call.on('stream', userVideoStream => {
        if(!callList[call.peer])
        {
            console.log(`receiving stream from ${userId}`);      
            addVideoStream(userVideoStream);
            callList[call.peer] = call;
        }
    });
}




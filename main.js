// VideoTalkNet - Main Video Calling Functions

let peer = null;
let localStream = null;
let currentCall = null;
let isMuted = false;
let isCameraOff = false;

// Initialize video call
function startVideoCall() {
    const myId = getValue('myId');
    const friendId = getValue('callId');
    const myName = getValue('myName');
    
    if (isEmpty(myId)) {
        showAlert("Please enter or generate an ID!");
        return;
    }
    
    if (isEmpty(myName)) {
        showAlert("Please enter your name!");
        return;
    }
    
    // Get user media (camera and microphone)
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(function(stream) {
            localStream = stream;
            document.getElementById('myVideo').srcObject = stream;
            
            // Create PeerJS connection
            peer = new Peer(CONFIG.idPrefix + myId, CONFIG.peerConfig);
            
            peer.on('open', function(id) {
                console.log("Connected with ID: " + id);
                hideElement('login-area');
                showElement('call-area');
                
                // Call friend if ID was entered
                if (!isEmpty(friendId)) {
                    callFriend(CONFIG.idPrefix + friendId);
                }
            });
            
            // Handle incoming calls
            peer.on('call', function(call) {
                call.answer(localStream);
                handleCall(call);
            });
            
            // Handle errors
            peer.on('error', function(err) {
                showAlert("Error: " + err.type);
            });
        })
        .catch(function(err) {
            showAlert("Camera/Mic Error: " + err.message);
        });
}

// Call a friend
function callFriend(friendId) {
    const call = peer.call(friendId, localStream);
    handleCall(call);
}

// Handle call events
function handleCall(call) {
    currentCall = call;
    
    call.on('stream', function(remoteStream) {
        document.getElementById('friendVideo').srcObject = remoteStream;
    });
    
    call.on('close', function() {
        showAlert("Call ended!");
        location.reload();
    });
    
    call.on('error', function(err) {
        showAlert("Call Error: " + err);
    });
}

// Toggle mute
function toggleMute() {
    isMuted = !isMuted;
    localStream.getAudioTracks()[0].enabled = !isMuted;
    
    const btn = document.getElementById('muteBtn');
    btn.innerText = isMuted ? "🔊" : "🔇";
    btn.classList.toggle('red');
}

// Toggle camera
function toggleCamera() {
    isCameraOff = !isCameraOff;
    localStream.getVideoTracks()[0].enabled = !isCameraOff;
    
    const btn = document.getElementById('cameraBtn');
    btn.innerText = isCameraOff ? "📷" : "📷";
    btn.classList.toggle('red');
}

// End call
function endCall() {
    if (localStream) {
        localStream.getTracks().forEach(track => track.stop());
    }
    if (currentCall) {
        currentCall.close();
    }
    location.reload();
}
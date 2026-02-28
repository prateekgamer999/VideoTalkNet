// VideoTalkNet - Configuration File

const CONFIG = {
    // PeerJS Configuration
    peerConfig: {
        debug: 1
    },
    
    // App Settings
    appName: "VideoTalkNet",
    version: "1.0.0",
    
    // ID Settings
    idLength: 4,
    idPrefix: "vt-",
    minId: 1000,
    maxId: 9999,
    
    // Bot Settings (Using a free chatbot API)
    botApiUrl: "https://api.pawan.krd/v1/chat",
    botName: "VideoBot"
};
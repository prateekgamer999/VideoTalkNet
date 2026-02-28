// VideoTalkNet - Bot Chat Functions

let botConversation = [];

// Start bot chat
function startBotChat() {
    hideElement('login-area');
    showElement('bot-area');
    
    // Welcome message
    addBotMessage("Hey there! I'm VideoBot. What's your name?");
}

// Send message to bot
function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    
    if (message === "") return;
    
    // Add user message
    addUserMessage(message);
    input.value = "";
    
    // Get bot response (using local responses since no Python)
    const botResponse = getBotResponse(message);
    setTimeout(() => {
        addBotMessage(botResponse);
    }, 500);
}

// Add user message to chat
function addUserMessage(text) {
    const chatBox = document.getElementById('chat-box');
    const time = getTimeStamp();
    
    chatBox.innerHTML += `
        <div class="message user-message">
            <b>You • ${time}</b>
            ${text}
        </div>
    `;
    scrollToBottom('chat-box');
}

// Add bot message to chat
function addBotMessage(text) {
    const chatBox = document.getElementById('chat-box');
    const time = getTimeStamp();
    
    chatBox.innerHTML += `
        <div class="message bot-message">
            <b>${CONFIG.botName} • ${time}</b>
            ${text}
        </div>
    `;
    scrollToBottom('chat-box');
}

// Simple bot responses
function getBotResponse(message) {
    const msg = message.toLowerCase();
    
    // Store conversation
    botConversation.push({ user: message, bot: "" });
    
    // Simple responses
    if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
        return "Hey there! Nice to meet you! 😊";
    }
    else if (msg.includes("how are you")) {
        return "I'm doing great! Thanks for asking.";
    }
    else if (msg.includes("your name")) {
        return "I'm VideoBot! Your virtual chat friend.";
    }
    else if (msg.includes("what can you do")) {
        return "I can chat with you, tell jokes, and keep you company!";
    }
    else if (msg.includes("joke")) {
        const jokes = [
            "Why do programmers prefer dark mode? Because light attracts bugs!",
            "Why did the developer go broke? Because he used up all his cache!",
            "What do you call a fake noodle? An impasta!"
        ];
        return jokes[Math.floor(Math.random() * jokes.length)];
    }
    else if (msg.includes("bye")) {
        return "Goodbye! Come back soon! 👋";
    }
    else if (msg.includes("help")) {
        return "I can help with: jokes, conversation, or just listen!";
    }
    else if (msg.includes("weather")) {
        return "I don't have weather data, but I hope it's sunny where you are!";
    }
    else if (msg.includes("age")) {
        return "I'm just a few lines of code, so I'm very young!";
    }
    else if (msg.includes("game")) {
        return "Let's play a game! Think of a number between 1 and 10.";
    }
    else if (msg.includes("food") || msg.includes("eat")) {
        return "I don't eat, but I heard pizza is delicious! 🍕";
    }
    else if (msg.includes("music")) {
        return "I love coding beats! 🎵 What's your favorite song?";
    }
    else if (msg.includes("movie")) {
        return "I hear 'The Social Network' is good for coders!";
    }
    else {
        const responses = [
            "That's interesting! Tell me more.",
            "Hmm, I see. What else?",
            "I'm still learning! Can you teach me?",
            "That's cool!",
            "Interesting point!",
            "Tell me about yourself!",
            "What do you like to do for fun?"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
}

// Exit bot chat
function exitBot() {
    botConversation = [];
    location.reload();
}

// Press Enter to send
document.getElementById('chat-input').addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
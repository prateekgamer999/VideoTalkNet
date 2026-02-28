// VideoTalkNet - Utility Functions

// Generate a random 4-digit ID
function generateId() {
    const id = Math.floor(CONFIG.minId + Math.random() * (CONFIG.maxId - CONFIG.minId));
    document.getElementById('myId').value = id;
    return id;
}

// Show an element
function showElement(id) {
    document.getElementById(id).style.display = 'block';
}

// Hide an element
function hideElement(id) {
    document.getElementById(id).style.display = 'none';
}

// Get element value
function getValue(id) {
    return document.getElementById(id).value;
}

// Set element value
function setValue(id, value) {
    document.getElementById(id).value = value;
}

// Show alert message
function showAlert(message) {
    alert(message);
}

// Scroll chat to bottom
function scrollToBottom(elementId) {
    const element = document.getElementById(elementId);
    element.scrollTop = element.scrollHeight;
}

// Check if string is empty
function isEmpty(str) {
    return !str || str.trim().length === 0;
}

// Format timestamp
function getTimeStamp() {
    const now = new Date();
    return now.getHours() + ":" + String(now.getMinutes()).padStart(2, '0');
}
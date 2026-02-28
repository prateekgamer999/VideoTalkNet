-- VideoTalkNet Database

-- Users Table
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id VARCHAR(10) UNIQUE NOT NULL,
    username VARCHAR(50) NOT NULL,
    ip_address VARCHAR(20),
    is_online BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Calls Table
CREATE TABLE calls (
    id INT PRIMARY KEY AUTO_INCREMENT,
    caller_id VARCHAR(10),
    receiver_id VARCHAR(10),
    start_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    end_time TIMESTAMP NULL,
    duration INT DEFAULT 0,
    status VARCHAR(20) DEFAULT 'active'
);

-- Insert sample users
INSERT INTO users (user_id, username, ip_address, is_online) 
VALUES 
('1001', 'Prateek', '192.168.1.5', TRUE),
('1002', 'Raj', '192.168.1.7', TRUE),
('1003', 'Amit', '192.168.1.9', FALSE);

-- Select all online users
SELECT * FROM users WHERE is_online = TRUE;

-- Get call history
SELECT * FROM calls ORDER BY start_time DESC;
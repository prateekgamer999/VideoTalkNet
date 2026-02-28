<?php
// VideoTalkNet - Simple API

header("Content-Type: application/json");

// Get request type
$method = $_SERVER['REQUEST_METHOD'];

// Simple routing
if ($method === 'GET') {
    $action = $_GET['action'] ?? '';
    
    if ($action === 'users') {
        echo json_encode([
            'status' => 'success',
            'users' => [
                ['id' => '1001', 'name' => 'Prateek', 'online' => true],
                ['id' => '1002', 'name' => 'Raj', 'online' => true]
            ]
        ]);
    } 
    elseif ($action === 'status') {
        echo json_encode([
            'status' => 'success',
            'message' => 'VideoTalkNet API is running'
        ]);
    }
    else {
        echo json_encode([
            'status' => 'error',
            'message' => 'Unknown action'
        ]);
    }
}
?>
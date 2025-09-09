<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

try {
    // Squiggle API endpoint for AFL standings (actual ladder)
    // Use 'standings' for actual ladder, not 'ladder' which returns predictions
    $apiUrl = 'https://api.squiggle.com.au/?q=standings';
    
    // Initialize cURL
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $apiUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    curl_setopt($ch, CURLOPT_USERAGENT, 'AFL-Information-Hub/1.0');
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error = curl_error($ch);
    curl_close($ch);
    
    if ($error) {
        throw new Exception('cURL Error: ' . $error);
    }
    
    if ($httpCode !== 200) {
        throw new Exception('API Error: HTTP ' . $httpCode);
    }
    
    if (!$response) {
        throw new Exception('No response from API');
    }
    
    $data = json_decode($response, true);
    
    if (json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception('Invalid JSON response: ' . json_last_error_msg());
    }
    
    // Check if we have standings data
    if (!isset($data['standings']) || !is_array($data['standings'])) {
        // Log the actual response structure for debugging
        error_log('Squiggle API response: ' . substr($response, 0, 500));
        throw new Exception('No standings data available');
    }
    
    // Return the standings data
    echo json_encode([
        'success' => true,
        'data' => $data['standings'],
        'count' => count($data['standings']),
        'timestamp' => date('Y-m-d H:i:s'),
        'api_endpoint' => $apiUrl
    ]);
    
} catch (Exception $e) {
    // Log error for debugging
    error_log('AFL Ladder API Error: ' . $e->getMessage());
    
    // Return error response
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Failed to fetch AFL ladder data',
        'message' => $e->getMessage(),
        'timestamp' => date('Y-m-d H:i:s'),
        'api_endpoint' => $apiUrl ?? 'undefined'
    ]);
}
?>
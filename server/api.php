<?php 

require_once __DIR__ . '/database.php';

header('Content-Type: application/json');

$response = $database;

if(is_numeric($_GET['index'])) {
    $response = $database[$_GET['index']];
};

echo json_encode($response);

?>
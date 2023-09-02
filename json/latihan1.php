<?php
// $mahasiswa = [
//     [
//         "nama" => "Rizky",
//         "nim" => "123456",
//         "email" => "hy@gmail.com"
//     ],
//     [
//         "nama" => "Rizal",
//         "nim" => "1234567",
//         "email" => "hyy@gmail.com"
// ]
// ];

$dbh = new PDO('mysql:host=localhost;dbname=phpdasar', 'root', '');
$db = $dbh->prepare('SELECT * FROM phpdasar');
$db->execute();
$mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($mahasiswa);
echo $data;
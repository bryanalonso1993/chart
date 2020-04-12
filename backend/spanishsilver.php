<?php
// requiero parametros de conexion
require('parametros_bd.php');

$data = $_GET['anio'];

if( $data == ''){
    $sql = "SELECT * FROM `spanish-silver`";
}else{
    $data_query = $con->real_escape_string($data);
    $sql = "SELECT * FROM `spanish-silver` WHERE year > $data_query";
}

$query = $con->query($sql);
if ( !$query) {
    die("Error en el query sql $con->error");
}

$num_rows = $query->num_rows;
$array_data = array();$array_push = array();

for ($i=0; $i < $num_rows; $i++) { 
    $row = $query->fetch_array(MYSQLI_ASSOC);
    $array_data['year'] = $row['year'];
    $array_data['situados_paid'] = $row['situados_paid'];
    $array_data['silver_minted'] = $row['silver_minted'];
    array_push($array_push,$array_data);
}

echo json_encode($array_push);

?>
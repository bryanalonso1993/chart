<?php

// backend iris para plotear las metricas

require_once("parametros_bd.php");
$data = $_GET["species"];

$con = new mysqli($SERVER, $USERNAME, $PASSWORD, $BASEDATOS , 3306);
if ( $con->connect_errno){
    die("Error in connect database $BASEDATOS, errorlog $con->connect_errno ");
}
if ($data == "") {
    $sql = "SELECT * FROM `iris`";
} else {
    // anti sql inyection
    $anti_sql = $con->real_escape_string($data);
    $sql = "SELECT * FROM `iris` WHERE species='$anti_sql'";
}

$execute_query = $con->query($sql);

if (!$execute_query){
    die("Error in execute query $con->error");
}
// numero de resultados del query sql
$num_rows = $execute_query->num_rows;

$array_push  = array();
$array_final = array();

for ($i=0; $i < $num_rows; $i++) { 
    $row = $execute_query->fetch_array(MYSQLI_ASSOC);
    $array_push['sepallength'] = $row['sepallength'];
    $array_push['sepalwidth'] = $row['sepalwidth'];
    $array_push['petallength'] = $row['petallength'];
    $array_push['species'] = $row['species'];
    array_push( $array_final , $array_push);
}

$result_json = json_encode($array_final);
echo $result_json;
?>
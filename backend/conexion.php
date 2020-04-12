<?php

// query for table racing

require_once("../backend/parametros_bd.php");

$con = new mysqli(
    $host=$SERVER,
    $username=$USERNAME,
    $passwd=$PASSWORD,
    $dbname=$BASEDATOS,
    $port=3306);

if ( $con->connect_errno) {
    die("Error in connect database... $con->error");
}
$breeder = $_GET['breeder'];
if ( isset($breeder)) {
    $sql = "SELECT * FROM racing WHERE breeder LIKE '%".$breeder."%' limit 20";
}else{
    $sql = "SELECT * FROM racing limit 20 ";
}

$query_sql = $con->query($sql);

if ( !$query_sql ) {
    die("Error in execute query");
}

$num_rows = $query_sql->num_rows;

//echo var_dump($response_rows);
$var = array();
$final_result = array();
for ($i=0; $i < $num_rows ; $i++) { 
    $response_rows = $query_sql->fetch_array(MYSQLI_ASSOC);
    $var["pos"]      = $response_rows['pos'];
    $var["breeder"]  = $response_rows['breeder'];
    $var["pigeon"]   = $response_rows['pigeon'];
    $var["name"]     = $response_rows['name'];
    $var["color"]    = $response_rows['color'];
    $var["sex"]      = $response_rows['sex'];
    $var["arrival"]  = $response_rows['arrival'];
    $var["speed"]    = $response_rows['speed'];
    $var["towin"]    = $response_rows['towin'];
    $var["elegible"] = $response_rows['elegible'];
    array_push($final_result,$var);
}
$json_result = json_encode($final_result);
$query_sql->close();
$con->close();
echo $json_result;
                    

?>
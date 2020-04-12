<?php
$SERVER="127.0.0.1";
$USERNAME="bryan";
$PASSWORD="claro123";
$BASEDATOS="DATASETS";
$PORT=3306;

$con = new mysqli($SERVER,$USERNAME, $PASSWORD, $BASEDATOS, $PORT);

if ($con->connect_errno) {
    die("Error in connect database");
}


?>
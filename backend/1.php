<?php

$con = new mysqli(
    "127.0.0.1","bryan","claro123","DATASETS",3306
);
if ($con->connect_errno) {
    die("Error in connect database ... $con->connect_errno");
}else{
    echo "Successfull connection \n";
    $sql = "SELECT * FROM racing A 10";
    $var = [];
    if ( $sql = "SELECT * FROM racing LIMIT 2") 
    {
        $sql_query = $con->query($sql);
        $num_rows = $sql_query->num_rows;
        for ($index=0;$index<$num_rows;$index++){
            $row = $sql_query->fetch_array(MYSQLI_NUM);
            $var_result['pos']=$row[0];
            $var_result['breeder']=$row[1];
            $var_result['pigeon']=$row[2];
            $var_result['name'] = $row[3];
            $var_result['color'] = $row[4];
            $var_result['sex'] = $row[5];
            $var_result['ent'] = $row[6];
            $var_result['arrival'] = $row[7];
            $var_result['speed'] = $row[8];
            $var_result['towin'] = $row[9];
            $var_result['elegible'] = $row[10];
            array_push($var,$var_result);
        }
        $var1=json_encode($var);
        print_r($var1);
        $con->close();   
    }else{
        die("Bad query");
    }
}

?>
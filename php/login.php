<?php
include_once("helper.php");
$commondata = new Helper();
$logindata = json_decode(file_get_contents("php://input"));
if(sizeof($logindata)!=0){
    $username = $logindata->username;
    $password = $logindata->password;

    $query = "Select password from users where name LIKE '".$username."'";
    $data = $commondata->getdata($query);
    if($data[0]['password'] == $password){
        echo json_encode($data[0]);
    }
}
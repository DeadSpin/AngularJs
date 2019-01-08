<?php
include_once('header.php');

class Helper extends Header{
    public function __construct(){
        parent::__construct();
    }

    public function getdata($qry){
        $result = $this->conn->query($qry);
        if($result == false){
            return false;
        }
        $row = array();
        while($res = $result->fetch_assoc()){
            $row[] = $res;
        }
        return $row;
    }

    public function execute($query){
        $result = $this->conn->query($query);
        if($result == false){
            echo "Error:Can't Execute";
        }
        else{
            return true;
        }
    }
}
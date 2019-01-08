<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

class Header {
    private $_localhost = "127.0.0.1 "; 
    private $_username = "root"; 
    private $_password = "testteam"; 
    private $_dbname = "db_angular"; 

    protected $conn;
    public function __construct(){
        if(!isset($this->conn)){
            $this->conn = new mysqli($this->_localhost, $this->_username, $this->_password, $this->_dbname);
            if(!$this->conn) {
                die("Error : " );
            }
        }
        return $this->conn;
    }
}   
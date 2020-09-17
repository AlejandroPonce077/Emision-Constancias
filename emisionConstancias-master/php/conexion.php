
<?php 
		function conexion(){

			$conexion = pg_connect("host=192.168.119.43 port=5432 dbname=constancias user=emision password=constancias") or die ("Error de Conexion");

			return $conexion;
		}

 ?>
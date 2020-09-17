<?php 

	require_once "conexion.php";
	$conexion=conexion();
	$n=$_POST['nombre'];
	$ap=$_POST['apellidop'];
	$am=$_POST['apellidom'];
	$e=$_POST['email'];
	$t=$_POST['telefono'];

	if( $n != '' && $ap != '' && $am != '' && $e != '' && $t != '') { 
		$sql="INSERT into alumnos (nombre,apellidop,apellidom,email,telefono)
									values ('$n','$ap','$am','$e','$t')";
		echo $result=pg_query($conexion,$sql);
	}

 ?>
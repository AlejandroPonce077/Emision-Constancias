<?php 
	require_once "conexion.php";
	$conexion=conexion();
	$id=$_POST['id'];
	$n=$_POST['nombre'];
	$ap=$_POST['apellidop'];
	$am=$_POST['apellidom'];
	$e=$_POST['email'];
	$t=$_POST['telefono'];
	$c=$_POST['curso'];

	if( $n != '' && $ap != '' && $am != '' && $e != '' && $t != '') { 
		$sql="UPDATE alumnos set nombre='$n',
								apellidop='$ap',
								apellidom='$am',
								email='$e',
								telefono=$t,
								curso='$c'
				where id='$id'";

		echo $result=pg_query($conexion,$sql);
	}
	

 ?>
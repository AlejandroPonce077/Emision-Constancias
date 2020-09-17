
<?php 
	require_once "conexion.php";
	$conexion=conexion();
	$id=$_POST['id'];

	$sql="DELETE from alumnos where id='$id'";
	echo $result=pg_query($conexion,$sql);
 ?>
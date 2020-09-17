<?php 

	require_once "conexion.php";
	$conexion=conexion();
	$n=$_POST['nombre'];
	$color=$_POST['color'];
	$logo=$_POST['logo'];
  
  // Leer en un fichero binario
  $data = file_get_contents('../images/USECAD.png');
  
  // Escapar el dato binario
  $escaped = pg_escape_bytea($data);
  
  // Insertarlo en la base de datos

  $sql="INSERT INTO cursos (nombre, color, logo) VALUES ('$n','$color', '$escaped')";

  echo $result=pg_query($conexion,$sql);
	
?>

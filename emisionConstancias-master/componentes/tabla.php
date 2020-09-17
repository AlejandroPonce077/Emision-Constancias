<?php 
	session_start();
	require_once "../php/conexion.php";
	$conexion=conexion();

 ?>

<div class="row">
	<div class="col-sm-12" >
		<table class="table table-hover table-condensed table-bordered">
		<caption>
			<button class="btn btn-primary" data-toggle="modal" data-target="#modalNuevo">
				Agregar nuevo 
				<span class="glyphicon glyphicon-plus"></span>
			</button>
		</caption>
		  <thead class="thead-dark">
		    <tr>
		      <th scope="col">Nombre</th>
		      <th scope="col">Apellido Paterno</th>
		      <th scope="col">Apellido Materno</th>
		      <th scope="col">Email</th>
		      <th scope="col">Telefono</th>
		      <th scope="col">Editar</th>
		      <th scope="col">Eliminar</th>
		      <th scope="col">Generar</th>
		    </tr>
			</thead>

			<?php 

				if(isset($_SESSION['consulta'])){
					if($_SESSION['consulta'] > 0){
						$idp=$_SESSION['consulta'];
						$sql="SELECT id,nombre,apellidop,apellidom,email,telefono 
						from alumnos where id ='$idp'";
					}else{
						$sql="SELECT id,nombre,apellidop,apellidom,email,telefono 
						from alumnos";
					}
				}else{
					$sql="SELECT id,nombre,apellidop,apellidom,email,telefono 
						from alumnos";
				}

				$result=pg_query($conexion,$sql);
				while($ver=pg_fetch_row($result)){ 

					$datos=$ver[0]."||".
						   $ver[1]."||".
						   $ver[2]."||".
						   $ver[3]."||".
						   $ver[4]."||".
						   $ver[5];
			 ?>

			<tr>
				<td><?php echo $ver[1] ?></td>
				<td><?php echo $ver[2] ?></td>
				<td><?php echo $ver[3] ?></td>
				<td><?php echo $ver[4] ?></td>
				<td><?php echo $ver[5] ?></td>
				<td>


					<button src="../icons/icons/pencil.svg" type="button" class="btn btn-warning glyphicon glyphicon-pencil" data-toggle="modal" data-target="#modalEdicion" onclick="agregaform('<?php echo $datos ?>')">
						<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>


					</button>
				</td>
				<td>
					<button class="btn btn-danger glyphicon glyphicon-remove" 
					onclick="preguntarSiNo('<?php echo $ver[0] ?>')">

						
					</button>

				<td>
					<button class="btn btn-danger" data-target="#modalEdicion" onclick="generarConstancia('<?php echo $ver[1] ?>','<?php echo $ver[2] ?>','<?php echo $ver[3] ?>','<?php echo $ver[4] ?>','<?php echo $ver[5] ?>')">

						
					</button>
				</td>

				</td>
			</tr>
			<?php 
		}
			 ?>
		</table>
	</div>
</div>
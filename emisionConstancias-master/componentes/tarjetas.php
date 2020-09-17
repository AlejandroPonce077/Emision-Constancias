<?php 
  session_start();
  require_once "../php/conexion.php";
  $conexion=conexion();


 ?>

        <div class="container margen">

          <div class="container" name="ConstanciaZero">
            <div class="card-columns mb-3 text-center" id="plantillas">
              

    <caption>
      <button class="btn btn-primary" data-toggle="modal" data-target="#modalNuevos">
        Agregar nuevo curso 
        <span class="glyphicon glyphicon-plus"></span>
      </button>
    </caption>

              <div class="card">
                  <div class="card mb-4 shadow-sm">
                <div class="card-header">
                  <h4 class="my-0 font-weight-normal">Zero</h4>
                </div>
                <div class="card-body">
                  <img src="images/--QR.png" height="130" width="130">
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>Genera una constancia desde Cero</li>
                  </ul>
                  <button type="button" class="btn btn-lg btn-block btn-outline-primary" id="btn-zero" onclick = "location='view/zero.html'" >Hazlo!!</button>
                </div>
              </div>
              </div>


              <div class="card">
              <div class="card mb-4 shadow-sm" name="ConstanciaUSECAD">
                <div class="card-header">
                  <h4 class="my-0 font-weight-normal">USECAD</h4>
                </div>
                <div class="card-body">
                  <img src="images/USECAD.png" height="130" width="150">
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>Ve la lista de alumnos</li>
                    <li>Genera una constancia</li>
                  </ul>
                  <button type="button" class="btn btn-lg btn-block btn-outline-primary" id="btn-plntillaA" onclick = "location='view/plantillaA.html'" >Checalo</button>
                </div>
              </div>
              </div>



     <?php 

        if(isset($_SESSION['consulta'])){
          if($_SESSION['consulta'] > 0){
            $idp=$_SESSION['consulta'];
            $sql="SELECT id,nombre,color,logo 
            from cursos where id ='$idp'";
          }else{
            $sql="SELECT id,nombre,color,logo 
            from cursos";
          }
        }else{
          $sql="SELECT id,nombre,color,logo
            from cursos";
        }

        $result=pg_query($conexion,$sql);
        while($ver=pg_fetch_row($result)){ 

          $datos=$ver[0]."||".
               $ver[1]."||".
               $ver[2]."||".
               $ver[3];
       ?>



            <div class="card">

              <div class="card mb-4 shadow-sm" name="Constancia">
                <div class="card-header">
                  <h4 class="my-0 font-weight-normal"><?php echo $ver[1] ?></h4>
                </div>


                <div class="card-body">
                  <ul class="list-unstyled mt-3 mb-4">
                    <li><?php echo $ver[2] ?></li>
                    <li><?php echo $ver[3] ?></li>
                  </ul>
                  <button type="button" class="btn btn-lg btn-block btn-outline-primary" id="btn-plntillaA" onclick = "location='view/plantillaA.html'" >A ver</button>
                  <button type="button" class="btn btn-lg btn-block btn-outline-danger" id="btn-borrar"  >Borrar</button>
                </div>
              </div>
              </div>

      <?php 
    }
       ?>
            </div>
          </div>
        </div>
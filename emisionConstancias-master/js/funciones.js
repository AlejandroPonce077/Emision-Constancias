

function agregardatos(nombre,apellidop,apellidom,email,telefono){
	$.ajax({
		type:"POST",
		url:"../php/agregarDatos.php",
		data:{
			nombre:nombre,
			apellidop:apellidop,
			apellidom:apellidom,
			email:email,
			telefono:telefono
		},
		success:function(r){

			if (nombre == '' || apellidop == '' || apellidom == '' || email  == '' || telefono == ''){
				alertify.error("Verifique los datos");
			}else{
				if(r=1){
					$('#tabla').load('../componentes/tabla.php');
					alertify.success("Agregado con exito");
				}else{
					alertify.error("Falló el servidor");
				}
			}
		}
	});
}

function agregaform(datos){

	d=datos.split('||');

	$('#idpersona').val(d[0]);
	$('#nombreu').val(d[1]);
	$('#apellidoPu').val(d[2]);
	$('#apellidoMu').val(d[3]);
	$('#emailu').val(d[4]);
	$('#telefonou').val(d[5]);
	
}

function actualizaDatos(id,nombre,apellidop,apellidom,email,telefono){

	cadena= "&id=" + id +
			"&nombre=" + nombre + 
			"&apellidop=" + apellidop +
			"&apellidom=" + apellidom +
			"&email=" + email +
			"&telefono=" + telefono;

	$.ajax({
		type:"POST",
		url:"../php/actualizaDatos.php",
		data:{
			id:id,
			nombre:nombre,
			apellidop:apellidop,
			apellidom:apellidom,
			email:email,
			telefono:telefono
		},
		success:function(response){

			if (nombre == '' || apellidop == '' || apellidom == '' || email == '' || telefono == '' ){
				alertify.error("Verifique los datos");
			}else{
				if(r=1){
					$('#tabla').load('../componentes/tabla.php');
					alertify.success("Actualizado con exito");
				}else{
					alertify.error("Falló el servidor");
				}
			}
			

		}
	});

}

function preguntarSiNo(id){
	alertify.confirm('Eliminar Datos', '¿Esta seguro de eliminar este registro?', 
					function(){ eliminarDatos(id) }
                , function(){ alertify.error('Se cancelo')});
}

function eliminarDatos(id){

	cadena="id=" + id;

		$.ajax({
			type:"POST",
			url:"../php/eliminarDatos.php",
			data:cadena,
			success:function(r){
				if(r!=1){
					$('#tabla').load('../componentes/tabla.php');
					alertify.success("Eliminado con exito!");
				}else{
					alertify.error("Fallo el servidor :(");
				}
			}
		});
}

function generarConstancia(nombreF,apellidopF,apellidomF,emailF,telefonoF){
	$(document).ready(function() {
 		
		$.ajax({
			success: function(response) {


			    //Extraemos los datos del formulario para VCard
				var inicio	 = 'BEGIN:VCARD'+ "\n" + "VERSION:4.0" + "\n";
				var nombre   = 'N:' + nombreF + " "  + apellidopF  + " "+apellidomF + "\n";
								
				var telefono = 'TEL;HOME;VOICE:' + telefonoF + "\n";
				var email 	 = 'EMAIL:' + emailF + "\n";
				/*
				var calle    = $("#contentCalle");
				var ciudad   = $("#contentCiudad");
				var colonia  = $("#contentColonia");
				var codigop  = $("#contentCodigoP");
				var pais     = $("#contentPais");
				*/
				var fin 	 = 'END:VCARD';


				var codeContents = inicio+nombre+telefono+email+fin;


				//Parametros adicionales del QR
				//var color = $("#color").val();
				//var ecc = $("#ecc").val();;
				//var size = Math.pow(2,$("#size").val());
				//var imgTag = "";//Inicializar el logo


				//Se ajustan las configuraciones para el QR
				var options = {
					text: codeContents,
				    logo: "../images/USECAD.png",
				    logoWidth: undefined,
				    logoHeight: undefined,
				    logoBackgroundColor: '#ffffff',
				    logoBackgroundTransparent: true,
				    colorDark : "#2458c9",
			 		colorLight : "#ffffff",
			 		width: 256,
			 		height: 256,
 		     
 		
				}

				//Se crea el código QR
   				var qrcode = new QRCode(document.getElementById("areaImprimir"),options); 
   				generarPDF(nombreF,apellidopF,apellidomF,emailF,telefonoF);
   					
   				
   		

							




			},
		});
		});
				
 };


function generarPDF(nombreF,apellidopF,apellidomF,emailF,telefonoF){
	//generarConstancia(nombreF,apellidopF,apellidomF,emailF,telefonoF);
	$(document).ready(function() {
	$.ajax({
			success: function(response) {
			var doc = new jsPDF('l');
						
			doc.setFontSize(40)
			doc.setFont('helvetica')
			doc.setFontType('bold')
			doc.text(110, 25, 'Constancia')


						var imgData = document.getElementById("YAID").src;



						//Coordenadas    x   y    Size
			doc.addImage(imgData, 'PNG', 220, 140, 50, 50, "QR", "FAST");
			doc.save('Constancia'+nombreF+'.pdf');
			nuevo();
			},
	});
	});
}

nuevo = function(){
	location.reload();
};

function agregarCurso(nombre,color,logo){


		$.ajax({
			type:"POST",
			url:"php/insertarImg.php",
			data:{
				nombre:nombre,
				color:color,
				logo:logo
			},
			success:function(r){
				if(r!=1){
					$('#nuevoT').load('componentes/tarjetas.php');
					alertify.success("Creado con exito");
				}else{
					alertify.error("Fallo el servidor :(");
				}
			}
		});
}


function muestraTabla(id){
	
	 $(document).ready(function(){
	$.ajax({
			type:"POST",
			url:"view/plantillaA.php",
			data:{
				idP:id,
			},
			success:function(r){
				if(r!=1){
					location.assign("view/plantillaA.php");
					alertify.success("Mostrado con exito");
				}else{
					alertify.error("Fallo el servidor :(");
				}
			}
		});
});
}
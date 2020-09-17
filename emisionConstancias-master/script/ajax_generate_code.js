
$(document).ready(function() {

//Funcion para generar el QR
genera = function(){

 		$("#codeForm").submit(function(){
		$.ajax({
			success: function(response) {

				//Cambios a la aparicion de Botones
			    var btng = $("#generar-btn");
			    btng.attr("style","display:none")

			    var btnd = $("#download-btn");
			    btnd.attr("style","display:inline")

			    var btnn = $("#nuevo-btn");
			    btnn.attr("style","display:inline")

			    var btnn = $("#pdf-btn");
			    btnn.attr("style","display:inline")

			    //Extraemos los datos del formulario para VCard
				var inicio	 = 'BEGIN:VCARD'+ "\n" + "VERSION:4.0" + "\n";
				var nombre   = 'N:' + $("#contentName").val() + " " + $("#contentAPaterno").val() + " "
							 	+ $("#contentAMaterno").val() + "\n";
								
				var telefono = 'TEL;HOME;VOICE:' + $("#contentNumber").val() + "\n";
				var email 	 = 'EMAIL:' + $("#contentEmail").val() + "\n";
				var calle    = $("#contentCalle");
				var ciudad   = $("#contentCiudad");
				var colonia  = $("#contentColonia");
				var codigop  = $("#contentCodigoP");
				var pais     = $("#contentPais");
				var fin 	 = 'END:VCARD'

				//Se agrupan los datos
				if( $('#customCheck1').prop('checked') ) {

				    var direc 	 = "ADR;LABEL=100: " + calle.val() + ','
					+ ciudad.val() + ','
					+ colonia.val() + ','
					+ codigop.val() + ','
					+ pais.val() + "\n";
					var codeContents = inicio+nombre+telefono+email+direc+fin;

				}else{
					var codeContents = inicio+nombre+telefono+email+fin;
				}

				//Parametros adicionales del QR
				var color = $("#color").val();
				var ecc = $("#ecc").val();;
				var size = Math.pow(2,$("#size").val());
				var imgTag = "";//Inicializar el logo
				
				//Proceso para cargar el logo al servidor
				var archivos = document.getElementById("cargarImg").files;
				for (i = 0; i < archivos.length; i++) {
				imgTag = document.createElement("img");
				imgTag.height = 200;//ESTAS LINEAS NO SON "NECESARIAS" 
				imgTag.width = 400; //ÚNICAMENTE HACEN QUE LAS IMÁGENES SE VEAN 
				imgTag.id = i;      // ORDENADAS CON UN TAMAÑO ESTÁNDAR
				imgTag.src = URL.createObjectURL(archivos[i]);
				}


				//Switch para poder mandar el código de manera correta a options
				switch (ecc) {
				case "L":
					var nLimit = QRCode.CorrectLevel.L;
					break;
				case "M":
					var nLimit = QRCode.CorrectLevel.M;
					break;
				case "Q":
					var nLimit = QRCode.CorrectLevel.Q;
					break;
				case "H":
					var nLimit = QRCode.CorrectLevel.H;
					break;
				}


				//Se ajustan las configuraciones para el QR
				var options = {
					text: codeContents,
				    logo: imgTag.src,
				    logoWidth: undefined,
				    logoHeight: undefined,
				    logoBackgroundColor: '#ffffff',
				    logoBackgroundTransparent: true,
				    colorDark : color,
			 		colorLight : "#ffffff",
			 		width: size*8,
			 		height: size*8,
			 		correctLevel : nLimit, // L, M, Q, H 		
 		     
 		
				}

				//Se crea el código QR
				if (typeof qrcode == 'undefined' || qrcode == null){
   					qrcode = new QRCode(document.getElementById("areaImprimir"),options); 
				}else{
					qrcode.clean();
				}

				

			},
		});
	});
				
 };


//Funcion para descargar el QR
download_img = function() {

	var youtubeimgsrc = document.getElementById("YAID").src;
	var a = $("<a>").attr("href", youtubeimgsrc).attr("download", $("#contentName").val() + "QR.png").appendTo("body");

	a[0].click();

	a.remove();

};

//Función para limpiar el formulario
nuevo = function(){
	$("#codeForm")[0].reset();
	location.reload();
};

//Hacer aparecer el formulario de la direccion.
showContent = function () {
        element = document.getElementById("content");
        check = document.getElementById("customCheck1");
        if (check.checked) {
            element.style.display='block';
           	$("#contentCalle").attr("required","required");
           	$("#contentCiudad").attr("required","required");
           	$("#contentColonia").attr("required","required");
           	$("#contentCodigoP").attr("required","required");
           	$("#contentPais").attr("required","required");

        }
        else {
            element.style.display='none';
            	$("#contentCalle").removeAttr("required");
            	$("#contentCiudad").removeAttr("required");
            	$("#contentColonia").removeAttr("required");
            	$("#contentCodigoP").removeAttr("required");
            	$("#contentPais").removeAttr("required");
            	
        }
    }



 

//Botones
$("#generar-btn").on("click", genera);
$("#download-btn").on("click", download_img);
$("#nuevo-btn").on("click", nuevo);
$("#customCheck1").on("click", showContent);

});
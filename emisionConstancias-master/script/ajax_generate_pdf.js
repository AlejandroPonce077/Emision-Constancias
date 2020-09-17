$(document).ready(function() {

//Funcion para generar el QR
pdf = function(){


				var doc = new jsPDF('l');
				var nombre   = $("#contentName").val() ;
				var APaterno = $("#contentAMaterno").val();
				var AMaterno = $("#contentAPaterno").val();
				var email 	 = $("#contentEmail").val();
				
				doc.setFontSize(40)
				doc.setFont('helvetica')
				doc.setFontType('bold')
				doc.text(110, 25, 'Constancia')

				doc.setFontSize(35)
				doc.setTextColor(100);
				doc.text(80, 55, nombre+" "+APaterno+" "+AMaterno);
				doc.setTextColor(0, 0, 255);
				doc.text(20, 65, email);

				var imgData = document.getElementById("YAID").src;

							//Coordenadas    x   y    Size
				doc.addImage(imgData, 'PNG', 220, 140, 50, 50, "QR", "FAST");
				doc.save('Constancia'+nombre+'.pdf');		
 };


//Botones
$("#pdf-btn").on("click", pdf);

});
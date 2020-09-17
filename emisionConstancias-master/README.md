# Emisión de Constancias
El proyecto Emisión de Constancias permite generar códigos QR de tal forma que sea funcional para fines académicos y/o administrativos de la Facultad de Ingeniería de la UNAM y éste pertenezca y pueda ser usado solamente por el personal académico competente.

Dicho código QR tendrá como finalidad la creación de una tarjeta VCard las cuales contendrán el nombre, teléfono, e-mail, geolocalización y algún URL que desee añadir. Además el usuario podrá insertar algún logo, cambiar de color y tamaño si así lo desea.

Aparte de esto el sistema contará con algunas plantillas ya preestablecidas de códigos QR.

### Dependencias necesarias
___
Esta aplicación necesita las siguientes dependencias para su correcto funcionamiento:

##### Dependencias para el servidor

* Servidor web( apache preferiblemente )
* php ( versión 5.4.\* o superior )

### Requerimientos previos
____

El proyecto de Emisión de Constancias requiere de algunas dependencias las cuales se muestran a continuación.

##### PHP
* Un servidor web
* Cualquier componente específico para módulos (tales como GD, PDF libs, etc.)

Para más información consultar http://phpqrcode.sourceforge.net

##### jQuery-minicolors
Paquetería para implementar la selección de colores.
* Un servidor web
* Bootstrap 2.0.0 [OPCIONAL]

Para más información consultar https://labs.abeautifulsite.net/jquery-minicolors

##### jsPDF
Paquetería para poder crear archivos PDF.

Para más información consultar https://parall.ax/products/jspdf

##### EasyQRCodeJS (Actual)
Paquetería para implementar el código QR.
* Soporte de generación de códigos QR basado en Canvas.
* Requiere de Patrones necesarios que admiten soporte de puntos.
* Soporte para AMD, CMD, CommonJS/Node.js, JavaScript.
* Soporte para logos y colores.

Para más información consultar https://github.com/ushelp/EasyQRCodeJS

##### EasyQRCodeJS-NodeJS (Futuro)
Se busca implementar esta
* Soporte de generación de códigos QR basado en Canvas.
* Requiere de Patrones necesarios que admiten soporte de puntos.
* Soporte para guardar las imágenes sin DOM.
* Soporte para obtener datos de imagen base 64.

Para más información consultar https://github.com/ushelp/EasyQRCodeJS-NodeJS


### Estructura de las carpetas
___

La organización de los recursos para este proyecto se encuentra de la siguiente forma
* easyQR: Esta es la carpeta que contiene lo necesario para el generador de códigos QR.
    * src: Contenido javascript correspondiente a la generación de QR.
    * dist: Contenido Node.JS para las dependencias.
* css: Hojas de estilo css
* js: Contenido javascript para la implementación de los colores.
* jsPDF: Carpeta que contiene lo necesario para el generador de PDF
* script: Contenido javascript para la implementación del generador de códigos QR y PDF.
* images: Imágenes a ocupar.

### Instalación
___

Para instalar las paqueterias necesarias utilizamos los siguientes comandos.
```BASH
npm install easyqrcodejs
npm install --save @claviska/jquery-minicolors
```

### API
___

##### Generador de Código QR

La generación de los códigos QR se encuentra en el archivo _ajax_generate_code.js_

###### Creación simple

```JS
qrcode = new QRCode(OBJETO,CONFIGURACION);
```

_OBJETO_ = Elemento donde se mostrará en el html.

_CONFIGURACION_ = Todos los elementos modificables del código QR. (Puede ser un simple string)

* Si se desea eliminar el QR generado

```JS
qrcode.clean();
```

* Generar otro

```JS
qrcode.makeCode("USECAD");
```


###### Implementación VCards
Para llevar acabo la correcta implementación de la VCard se siguen [estandares](https://es.wikipedia.org/wiki/VCard), se mostraran los más utilizados para este proyecto con un ejemplo.

```html
    BEGIN:VCARD
    VERSION:4.0
    N:Gump;Forrest;;Mr.;
    TEL;TYPE=home,voice;VALUE=uri:tel:+1-404-555-1212
    ADR;TYPE=HOME;LABEL="42 Plantation St.\nBaytown\, LA 30314\nUnited States of America":;;42 Plantation St.;Baytown;LA;30314;United States of America
    EMAIL:forrestgump@example.com
    END:VCARD
```
En nuestro archivo principal _ajax_generate_code.js_ la manera en que llevamos a cabo la recopilación de los datos es a través de variables, concatenando cada una de ellas los estándares mencionados y entre ellas para así poder insertarlo a la hora de crear el código QR.

```JS
    var inicio   = 'BEGIN:VCARD'+ "\n" + "VERSION:4.0" + "\n";
    var nombre   = 'N:' + $("#contentName").val() + "\n";
    var telefono = 'TEL;HOME;VOICE:' + $("#contentNumber").val() + "\n";
    var email    = 'EMAIL:' + $("#contentEmail").val() + "\n";
    var fin      = 'END:VCARD'

    var codeContents = inicio+nombre+telefono+email+fin;
```

###### Páginas para Base de datos 

*   https://gist.github.com/EvgenyOrekhov/4dd7be642a429f1d3144
*   https://www.digitalocean.com/community/questions/forbidden-you-don-t-have-permissions-to-access-on-this-server
*   https://www.osradar.com/deploy-postgresql-using-docker-compose/
*   https://medium.com/erdk2/comandos-consola-postgres-54591bdeec0a
*   https://www.solvetic.com/tutoriales/article/3427-como-encontrar-y-ver-puertos-abiertos-sistemas-linux/
*   https://www.cloudreach.com/en/resources/blog/containerize-this-how-to-use-php-apache-mysql-within-docker-containers/
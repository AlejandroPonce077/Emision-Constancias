create table alumnos(
			ID  SERIAL PRIMARY KEY,
			nombre varchar(50) NOT NULL,
			apellidoP varchar(50) NOT NULL,
			apellidoM varchar(50) NOT NULL,
			email varchar(50) NOT NULL,
			telefono numeric(20) NOT NULL,
			calle varchar(50),
			ciudad varchar(50),
			colonia varchar(50),
			codigop varchar(50),
			pais varchar(50)

);

alter table alumnos add curso int4;

ALTER TABLE alumnos 
   ADD CONSTRAINT fk_curso
   FOREIGN KEY (curso) 
   REFERENCES "cursos"(id);
  
update alumnos set curso = '1' where id = '1';
update alumnos set curso = '2' where id = '20';
  
  
  

INSERT INTO alumnos (nombre,apellidoP,apellidoM,email,telefono,curso)
VALUES ( 'Andres', 'Martinez', 'Lopez', 'micorreo@nose.com',77530298,1);

INSERT INTO alumnos (nombre,apellidoP,apellidoM,email,telefono,curso)
VALUES ( 'Alejandro', 'Ponce', 'Sedano', 'micorreo2@nose.com',77530588,2 );

INSERT INTO alumnos (email,telefono)
VALUES ('micorreo2@nose.com',77530588 );

create table cursos(
			ID  SERIAL PRIMARY KEY,
			nombre varchar(50) NOT NULL,
			color varchar(50) not null,
			logo bytea not null

);

INSERT INTO cursos (nombre,color,logo)
VALUES ('Prueba','#758588 ','csdcscddds');

INSERT INTO cursos (nombre,color,logo)
VALUES ('Prueba2','#758588 ','csdcfsdds');


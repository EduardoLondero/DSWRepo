# Propuesta TP DSW

## Grupo
### Integrantes
* 51708 - Londero, Eduardo Agustin
* 50936 - Ojeda, Alejo Agustin
  
### Repositorios
* [frontend app](https://github.com/EduardoLondero/club-frontend)
* [backend app](https://github.com/EduardoLondero/club-backend)

## Tema
### Descripción
El sistema que desarrollamos es una plataforma de gestión para un club deportivo, diseñada para administrar usuarios, membresías, deportes, localidades, roles y demás. El objetivo es ofrecer una solución que facilite el control y organización de los aspectos administrativos del club.

### Modelo
[Imagen](https://drive.google.com/file/d/1_wE_H2QCCRcldTkfMLTFS1rf6NleAA5L/view?usp=sharing)

## Alcance Funcional 

### Alcance Mínimo

Regularidad:
|Req|Detalle|
|:-|:-|
|CRUD simple|1. CRUD Tipo Membresia<br>2. CRUD Deporte<br>3. CRUD Localidad|
|CRUD dependiente|1. CRUD Membresia {depende de} CRUD Tipo Membresia<br>2. CRUD Cliente {depende de} CRUD Localidad|
|Listado<br>+<br>detalle| 1. Listado de Membresias filtrado por tipo de Membresia. Muestra id y tipo de Membresia => detalle CRUD Membresia<br> 2. Listado de Pagos por Usuario, muestra fecha de pago, estado de pago y monto total abonado => detalle muestra datos del tipo de Membresia y nombre|
|CUU/Epic|1. Inscribirse a Deporte <br>2. Comprar Membresia|


Adicionales para Aprobación
|Req|Detalle|
|:-|:-|
|CRUD |1. CRUD Tipo Membresia<br>2. CRUD Deporte<br>3. CRUD Localidad<br>4. CRUD Pago<br>5. CRUD Membresia<br>6. CRUD Usuario<br>7. CRUD Provincia|
|CUU/Epic|1. Inscribirse a Deporte<br>2. Comprar Membresia<br>3. Administrar Usuarios|


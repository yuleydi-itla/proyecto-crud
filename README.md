# Proyecto CRUD - Gestión de Usuarios

Este proyecto fue desarrollado como parte de la asignatura **Programación III** en el ITLA.

## Descripción

En este proyecto desarrollé una aplicación web CRUD funcional para la gestión de usuarios, utilizando HTML, CSS y JavaScript puro.

La aplicación permite administrar usuarios de forma completa, incluyendo la creación, visualización, edición y eliminación de registros. Además, incorporé un sistema básico de inicio de sesión y validaciones en los formularios para asegurar que los datos ingresados sean correctos.

## Funcionalidades

- Inicio de sesión con validación de credenciales
- Registro de nuevos usuarios
- Visualización de usuarios en una tabla
- Edición de usuarios existentes
- Eliminación de usuarios con confirmación
- Persistencia de datos mediante localStorage
- Contador de usuarios registrados

## Credenciales de acceso

Para probar el sistema, utilicé las siguientes credenciales de acceso:

- Usuario: admin
- Contraseña: 1234

Estas credenciales son únicamente para fines de prueba y demostración del funcionamiento de la aplicación.

## Tecnologías utilizadas

Para el desarrollo de este proyecto utilicé las siguientes tecnologías:

- HTML5
- CSS3
- JavaScript (Vanilla)

## Flujo de trabajo

Para el desarrollo del proyecto apliqué la metodología **Git Flow**, lo que me permitió organizar mejor el trabajo y llevar un control adecuado de los cambios realizados.

### Ramas principales

- main: contiene la versión final del proyecto
- dev: utilizada para la integración del desarrollo
- qa: destinada a pruebas y validaciones

### Ramas de desarrollo

- feature/login-form: implementación del formulario de inicio de sesión
- feature/validate-user-input: validación de los datos ingresados
- feature/user-dashboard: visualización de información general
- feature/user-crud: implementación completa de las operaciones CRUD
- hotfix/fix-date-format: corrección del formato de fecha

Durante el desarrollo realicé múltiples Pull Requests entre las ramas dev, qa y main, todos en estado cerrado (closed/merged), cumpliendo con los requisitos establecidos.

## Consideraciones

El proyecto funciona completamente en el navegador, sin necesidad de un backend o base de datos externa. Los datos se almacenan localmente mediante localStorage, lo que permite mantener la información incluso después de recargar la página. Se recomienda utilizar un navegador actualizado para su correcto funcionamiento.

## Autor

Desarrollado por Yuleydi De Los Santos  
Instituto Tecnológico de Las Américas (ITLA)

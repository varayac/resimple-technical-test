# ReSimple - Prueba Técnica

Este proyecto corresponde a la prueba técnica para el cargo de desarrollador junior, emitido por el departamento de TI de la empresa sustentable [ReSimple](https://www.resimple.cl).

Consiste en una aplicación web que manipula datos provenientes de un archivo Excel y JSON, mostrando la información de empresas, áreas y trabajadores a través de una interfaz web.

## Descripción y solución

El objetivo de este proyecto es desarrollar una plataforma que permita visualizar de manera organizada la información contenida en dos archivos: "origen-datos-junior.xlsx" y "diccionario-de-datos.json", mediante una interfaz frontend construida preferentemente con React.

Se mostrarán los datos de empresas, áreas y trabajadores, empleando la información proporcionada por estos archivos.

El desarrollo de la lógica encargada de obtener y manipular los datos de estos archivos, será mediante la construcción de una API simple de solo lectura (petición GET), utilizando el framework express.js. Anticipando un posible escenario de escalamiento de la aplicación o implementación de un gestor de base de datos mas robusto.

## Estructura del proyecto

-   **client/**: Contiene la parte frontend de la aplicación, desarrollada en React.
-   **server/**: Incluye la lógica del servidor backend construida con Node.js y Express.js para manejar la obtención y procesamiento de datos.
-   **datafiles/**: Contiene los archivos a manipular.

## Instalación

1. Clonar repositorio desde: https://github.com/varayac/resimple-technical-test
2. Acceder al repositorio: `cd resimple-technical-test`
3. Instalar dependencias y ejecutar servidor: `cd server && npm i && npm run start`
4. Instalar dependencias y ejecutar cliente: `cd client && npm i && npm run dev`

## Uso

1. Ejecutar el servidor: `npm run start` en server/.
2. Ejecutar el cliente: `npm run dev` en client/.
3. Acceder a la aplicación web en tu navegador: `http://localhost:5173/`.

## Tecnologías utilizadas

Front-End:

-   React.js (vite)
-   Tailwind CSS

Back-End:

-   Node.JS (v20.9.x)
-   Express.JS

## Estandarizar código

Con el fin de mantener buenas practicas y un código limpio se ha utilizado el siguiente [estándar (standard)](https://standardjs.com) de JavaScript para facilitar el desarrollo en un hipotético escenario colaborativo.

-   Ejecutar para visualizar alertas: `npm run lint`
-   Ejecutar para formatear código: `npm run format`

_Se agradece la oportunidad a ReSimple, este repo seguira mejorando._ 😊

# proyecto-e2e

## integrantes: 

    - Monica Alejandra Muñoz Beltran (ma.munozb1@uniandes.edu.co)
    - Humberto Enrique Maury Maury (h.maury@uniandes.edu.co)
    - Daniel Santiago Rondon Cardenas (ds.rondon@uniandes.edu.co)
    - Fredy Antonio Alarcon Fonseca (f.alarconf@uniandes.edu.co)

## prerrequisitos

    - Ghost versión 3.41.1, usar el siguiente comando para instalar dicha versión: 
        ghost install 3.41.1 --local --force

    - Ghost versión 4.44.0: 
        docker run -d -e url=http://localhost:3002 -p 3002:2368 --name ghost_4.44.0 ghost:4.44.0
        
    - Kraken-node versión 1.0.24
    
    - Node versión 14.18.0
    
    - Cypress versión 12.9.0

    - Tener creado un usuario y sitio en ambas versiones de ghost 

    - Ghost debe estar ejecutado

## Ejecución pruebas de regresión visual 

    - Abrir terminal 
    - Ingresar a la carpeta prueba_regresion_visual 
    - Correr el comando `node index.js`
    - Abrir en el navegador el archivo index.html generado dentro de la carpeta `results` y el folder con fecha mas reciente 

## Los escenarios que fueron ajustados en cypress para ser ejecutados en la version 4.44.0 de ghost son: 

    - ES002
    - ES003
    - ES005
    - ES006
    - ES007
    - ES009
    - ES012
    - ES014
    - ES018
    - ES019

## Ejecución de Kraken:

    - editar el archivo kraken/properties.json
    - configure los valores de USERNAME1 y PASSWORD1 con las credenciales de ghost validas.
    - en la carpeta kraken/feature/escenarios encontrara los archivos txt para cada escenario de pruebas, copie y pegue el contenido del txt que desee ejecutar dentro del archivo my_first.feature dejando las lineas de codigo ahi presente.
    - abrir la terminal
    - ingresar a la carpeta kraken
    - iniciar el proyecto usando el comando `kraken-node run`.

## Ejecucion de Cypress
    
    - edite el archivo cypress/cypress/e2e/ghost/login/login.js
    - cambie los valores de las constantes username y password con las credenciales de ghost validas.
    - abrir la terminal
    - ingresar a la carpeta cypress
    - correr el comando npm install si aun no lo ha hecho.
    - iniciar proyecto usando el comando `cypress open`.
    - seleccionar pruebas E2E.
    - seleccionar navegador y ejecutar el navegador.
    - en el menú lateral seleccionar la opción specs, ahí vera todos los escenarios de pruebas.
    - ejecute uno a uno los escenarios.

## Escenarios de prueba

### Login
    - ES001: login fallido y exitoso.
    - ES002: login, navegación y logout.

### Posts
    - ES003: Crear post y publicar un post.
    - ES004: Editar un post despues de crealo y publicarlo.
    - ES005: Eliminar post despues de crealo y publicarlo.
   
## Pages 
    - ES006: Crear page y publicar una page.
    - ES007: Editar Page después de haberla creado.
    - ES008: Eliminar Page después de haberla creado.

### Tags
    - ES009: Navegar en el menú a tags y luego crear un tag.
    - ES010: Editar un tag después de crearlo.
    - ES011: Eliminar un tag después de crearlo.
    - ES012: Asignar un tag a un post después de crearlos.
    - ES013: Asignar un tag a un Page después de crearlos.

### General
    - ES014: Navegar a General y cambiar title/description del sitio para luego visualizar el cambio.
    - ES015: Modificar archivo de icon del sitio.
    - ES016: Modificar archivo de logo del sitio. 

### Code injection
    - ES017: Aplicar estilos en el header y footer del html para luego visualizar el cambio en el sitio.

### Profile 
    - ES018: Editar profile, cambia nombre del usuario y validar que hayas sido cambiado.

### configuración/Diseño 
    - ES019: Configurar un nuevo elemento de menu con una página nueva y probar navegación en el sitio para el nuevo elemento.
    - ES020: Configurar un nuevo elemento de menu secundario con una página nueva y probar navegación en el sitio para el nuevo elemento.

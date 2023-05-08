# proyecto-e2e

## prerrequisitos

    - Ghost versión 3.41.1, usar el siguiente comando para instalar dicha versión: 
        ghost install 3.41.1 --local --force
        
    - Kraken-node versión 1.0.24
    
    - Node versión 14.18.0
    
    - Cypress versión 12.9.0

## Ejecución de Kraken:

    - En la carpeta feature/escenarios encontrara los archivos txt para cada escenario de pruebas, copie y pegue el contenido del txt desee ejecutar dentro del archivo my_first.feature dejando las lineas de codigo ahi presente.
    - Abrir la terminal
    - ingresar a la carpeta kraken
    - Iniciar proyecto usando el comando **kraken-node run**.

## Ejecucion de Cypress
    
    - Abrir la terminal
    - ingresar a la carpeta cypress
    - correr el comando npm install si aun no lo ha hecho.
    - Iniciar proyecto usando el comando **cypress open**.
    - Seleccionar pruebas E2E.
    - Seleccionar navegador.
    - En el menú lateral seleccionar la opción specs, ahí vera todos los escenarios de pruebas.
    - Ejecute uno a uno los escenarios.

## Escenarios de prueba

### Login
    - ES001: login fallido y exitoso.
    - ES002: login, navegación y logout.

### Posts
    - ESOO3: Crear post y publicar un post.
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
    - ES019: Editar profile y cambia password luego probar el nuevo password para posteriormente restaurar el password anterior.

### configuración/Diseño 
    - ES020: Configurar un nuevo elemento de menu con una página nueva y probar navegación en el sitio para el nuevo elemento.
    - ES021: Configurar un nuevo elemento de menu secundario con una página nueva y probar navegación en el sitio para el nuevo elemento.

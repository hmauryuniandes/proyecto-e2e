# proyecto-e2e

## integrantes: 

    - Monica Alejandra Muñoz Beltran (ma.munozb1@uniandes.edu.co)
    - Humberto Enrique Maury Maury (h.maury@uniandes.edu.co)
    - Daniel Santiago Rondon Cardenas (ds.rondon@uniandes.edu.co)
    - Fredy Antonio Alarcon Fonseca (f.alarconf@uniandes.edu.co)

## prerrequisitos

    - Ghost versión 3.41.1, usar el siguiente comando para instalar dicha versión: 
        ghost install 3.41.1 --local --force
        
    - Kraken-node versión 1.0.24
    
    - Node versión 14.18.0
    
    - Cypress versión 12.9.0

    - Tener creado un usuario y sitio en ghost 

    - Ghost debe estar ejecutado


## Ejecucion de Cypress
    
    - edite el archivo cypress\cypress\e2e\ghost3\semana7\a-priori\data\login_correcto.json usando sus credenciales de acceso a Ghost
    - cambie los valores de las constantes username y password con las credenciales de ghost validas.
    - de ser necesario edite el puerto que utiliza Ghost, por defecto esta en 2368. Puede editarlo en la linea 2 del archivo cypress\cypress\e2e\ghost3\semana7\page-object\site\site.js
    - abrir la terminal
    - ingresar a la carpeta cypress
    - correr el comando npm install si aun no lo ha hecho.
    - iniciar proyecto usando el comando `cypress open`.
    - en caso de no tener el proyecto agregado, usar la ruta: ./cypress 
    - seleccionar pruebas E2E.
    - seleccionar navegador y ejecutar el navegador.
    - en el menú lateral seleccionar la opción specs, dirijase a la carpeta cypress\e2e\ghost3\semana7, allí encontrá 3 carpeta con cada una de las estrategias trabajadas: a priori, aleatorios y dinamicos (pseudo aleatorios).
    - ejecute uno a uno los escenarios dentro de las 3 carpetas.

## Estrategias usadas

### A priori

Usando la herramienta Mockaroo se generaron los datos en lsitas guardadas en archivos json, estos archivos fueron importados en las clases de page-object de cada funcionalidad. Estos archivos se pueden encontrar en cypress\cypress\e2e\ghost3\semana7\a-priori\data.
Para la ejecucion de las pruebas se selecciona de manera aleatoria el indice para extraer los datos desde los archivos .json 

### Dinamico (Pseudo Aleatorio)

En el beforeAll de cada escenario de pruebas se generarón datos usando faker.js, dichos datos fueron generados con la misma estructura de los .json para usar estos durante la ejecucion de las pruebas en vez de los datos a priori.

### Aleatorios

Usando Faker se generan datos de manera aleatoria para cada uno de los valores en el momento en que son requeridos en el escenario de pruebas.

## Descripcion de los escenarios

En la siguiente pagina, dentro de la wiki, encontrará la lsita de los escenarios con su correspondiente estrategia de generacion de datos de prueba:
https://github.com/hmauryuniandes/proyecto-e2e/wiki/Escenarios-con-estrategias-de-generaci%C3%B3n-de-datos


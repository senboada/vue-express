# Prueba EISA 👇
## Autor: Steven Boada

### Requisitos:
- nodejs versión 16.13
- npm versión 8.1
- mysql versión 8.0

### Proyecto

El proyecto se divide en 2 partes:

#### Client: 
 Contiene el codigo front-end en vuejs versión 3. Para ejecutar el proyecto debe:
- Acceder por consola a la raiz del proyecto
- Ejecutar el comando:
```sh
npm install
```
- Ejecutar el comando: 
```sh
npm run serve
```
 
- accedemos a la ruta http://localhost:8080

#### Server: 
Contiene el codigo back-end en nodejs con express. Para ejecutar el proyecto debe:
- Acceder a la raiz del proyecto.
- Para la base de datos se presentan 2 formas de trabajar:
1) Instalar localmente una base de datos mysql versión < 8.0 y configurar las variables de BD en el archivo .env 
```sh
DATABASE_URL="mysql://{{user}}:{{password}}@{{ip}}:{{puerto}}/{{nombre_base_datos}}"
```
2) Utilizar docker
- Ejecutar el comando:
```sh
docker-composer up -d
```
- Una vez se tiene la base de datos configurada y parametrizada en el proyecto. Ejecutar el comando: 
```sh
npm install
```
- Gestionamos la BD con el ORM prisma https://www.prisma.io/ . Ahora ejecutaremos las migraciones con el comando:
```sh
npx prisma migrate dev
```
o el comando :
```sh
 npx prisma db push
```
- Luego ejecutamos el comando para ejecutar el servidor:
```sh
 npm run dev
```
- accedemos a la ruta http://localhost:3000

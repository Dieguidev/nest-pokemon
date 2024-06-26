<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


# Description

API Pokemon

## 1. Installation

```bash
$ npm install
```
## 2. Tener Nest CLI instalado
```bash
$ npm i -g @nestjs/cli
```
## 3. Levantar la base de datos
```bash
$ docker-compose up -d
```
## 4. Clonar el archivo __.env.template__ y renombrar la copia a __.env__

## 5. Llenar las variables de entorno definidas en el __.env__

## 6. Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## 7. Reconstruir la base de datos con semilla
```
http://localhost:3000/api/v2/seed   
```
## Stack usado
* Nest
* MongoDB

# Production Build
1. Crear el archivo ```.env.prod```
2. Llenar las variables de entorno de prod
3. Crear la nueva imagen 
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```





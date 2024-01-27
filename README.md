# Welcome to Flight services

## Project Setup
- clone the project on your local
-Execute `npm install `on the same path as of your root directory of the downloaded project
- Create a `.env` file in the root directory and add the following enviornment variable
    - `PORT =3000`
- Inside the `src\config` folder create a new file `config.json` and then add the following piece of json

```
{
"development": {
    "username": "your_db_id",
    "password": "your_db_password",
    "database": "Flights_search_db_dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
<<<<<<< HEAD

```
-Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
```


## DB Design
- Airplane Table
- Flight Table
- Airport Table
- City Table

- A flight belongs to an airplane but one airplane can be used in multiple 
flights
    - A city has many airports but one airport belongs to a city
    - One airport can have many flights, but a flight belongs to one airport


## Tables
### City id, name, created_at, updated_at
### Airport id, name, address, city_id, created_at , updated_at
| Relationship → City has many airports and Airport belongs to a city (one to many)


```
npx sequelize model :generate --name Airport -- attriubutes
name:String,address:String,cityId:integer
```
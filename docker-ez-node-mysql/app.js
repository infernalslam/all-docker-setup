const express = require('express')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('db', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  })

sequelize.authenticate()
         .then(() => console.log('Hello world!')('Connection has been established successfully.'))
         .catch((err) => console.log(err))

const app = express()
app.get('/', (req, res, next) => {
    sequelize.authenticate()
         .then(() => res.send('Hello world!')('Connection has been established successfully.'))
         .catch((err) => res.send(err))
})

app.listen(3000, () => console.log('Server started'))
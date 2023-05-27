import express, { json, urlencoded } from 'express'
import os from 'node:os'
import cors from 'cors'
import chalk from 'chalk'

const app = express()

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: false }))

// middleware
app.use(function (req, res, next) {
  // req.baseUrl/body/cookies/hostname/ip/originalUrl/params/path/protocol/query/route/param(name [, defaultValue])
  // res.append(field [, value])/cookie(name, value [, options])/redirect([status,] path)/sendFile(path [, options] [, fn])/sendStatus(statusCode)
  console.log(chalk.blue((new Date().toLocaleDateString())))
  next()
})
// 172.21.9.182
app.get('/name', async (req, res) => {
  // res.set('Content-Type', 'application/json')
  res.json({
    name: 'express'
  })
})

app.post('/name-post', async (req, res) => {
  res.json({
    name: 'express'
  })
})

app.put('/name-put', async (req, res) => {
  res.json({
    name: 'express'
  })
})

app
  .route('/level-one')
    .all((req, res, next) => {})
    .get((req, res, next) => {})
    .post((req, res, next) => {})

// Route path: /users/:userId/books/:bookId
// Request URL: http://localhost:3000/users/34/books/8989
// req.params: { "userId": "34", "bookId": "8989" }
app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params)
})

// 以太网/eth0
const network = os.networkInterfaces()['以太网'].find(net => net.family === 'IPv4')




app.listen(3000)
console.log(chalk.bold.black.bgGreen('server start at:',chalk.red(`${network.address}:3000`)))

export const viteNodeApp = app
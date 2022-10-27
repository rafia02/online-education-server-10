const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')

app.use(cors())

const datas = require('./data/courses.json')


app.get('/', (req, res) => {
    res.send('Hello World!')
  })


  app.get('/courses', (req, res) => {
    res.send(datas)
  })

  app.get('/courses/:id', (req, res) => {
    const id = req.params.id 

    const singleCourse = datas.find(data=> data.id == id)
    res.send(singleCourse)


  })




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) 


  module.exports = app 
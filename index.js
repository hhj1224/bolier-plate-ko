const express = require('express')
const app = express()
const port = 5001


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://hong:1q2w3e4r@boliarplate.vpxmf.mongodb.net/boliarplate?retryWrites=true&w=majority', {
    useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify:false
}).then(() => console.log('mongoose Connect...')).catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!~안녕하세요 병로기 바봉')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
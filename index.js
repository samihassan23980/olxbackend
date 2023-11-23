const express = require('express')
const app = express()
const db = require('./config/db.js')
const cors = require('cors')

app.use(cors())

app.listen(process.env.port || 8080, function () {
  console.log('Listening to 4000')
})


app.use(express.json())

app.use('/', require('./routes/index'))



db.connection.once('open' , ()=>{
  console.log('db connect sucessfully')
}).on('error', (e)=>{
  console.log('eroor' , e)
})


//fetch('url', {
//   method: 'POST'
// }).then(res => res.json())
// .then(res => console.log(res))



//cow-mandi.pk

//fetch('https://cow-mandi.pk/ads')
//.then(res => res.json())
//.then(res => console.log(res))

const data = [
  { title: 'Bakra for sale', price: 28000 },
  { title: 'Cow for sale', price: 130000 }
]

//use
//1. GET
//2. POST
//3. UPDATE
//4. DELETE

// app.use('/ads', (req, res) => {
//   //database se data mangwaenge

//   res.send({
//     message: 'Data fetched successfully',
//     data
//   })
// })


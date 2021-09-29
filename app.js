const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const morgan = require('morgan')
const hpp = require('hpp')
const helmet = require('helmet')


const app = express()
app.set('port', process.env.PORT || 3000)

if(process.env.NODE_ENV === 'production')
{
  app.use(morgan('combined'))
  app.use(hpp())
  app.use(helmet({contentSecurityPolicy : false}))
}
else
{
  app.use(morgan('dev'))
}

app.get('/test', (req,res,next) => {

  res.json({code : 200, message : "ec2 & nginx testing..."})
})


app.listen(app.get('port'), ()=> {
  console.log('server start...')
})
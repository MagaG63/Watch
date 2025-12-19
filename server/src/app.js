const express = require('express');
const morgan = require('morgan');
const authRouter = require('./routes/auth.router');
const cookieParser = require('cookie-parser')
const contentRouter = require('./routes/content.router');
const orderRouter = require('./routes/order.router');
const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(morgan('dev'))
app.use(cookieParser())


app.use('/api/auth', authRouter)
app.use('/api/content', contentRouter)
app.use('/api', orderRouter );


app.use((err, req, res, next) => {
  console.log(err);
  res.sendStatus(500);
})

module.exports = app;
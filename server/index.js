const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { models, sequelize } = require('./models');

// Express Set-up
const app = express();
// Express Middleware
app.use(bodyParser.json())
app.use('/', express.static( path.join(__dirname, '..', 'public') ));
// Front-End
app.get('*', (req,res) => {
  if( !res.headersSent ){
    res.set({ 'Content-Type': 'text/html' })
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  }
});
// Error Handling
app.use(function (err, req, res, next){
  let statusCode = err.statusCode || err.code;
  if( typeof(statusCode) !== 'number' || statusCode < 100 ){
    statusCode = 500;
  }
if( statusCode === 500 ){
    console.error(err);
  }
if( !res.headersSent ){
    res.status(statusCode);
    res.json({ error: err.message });
  }
});
// Connect to db and start server
sequelize.sync().then(() => {
  app.listen( 3000, function() {
    console.log('Server started at port 3000');
  });
});

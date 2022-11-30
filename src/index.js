const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();

// settingss
app.set('port', process.env.PORT || 8000);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use('/api/usuario', require('./routes/index'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// start the server
app.listen(app.get('port'), () => {
  console.log(`Corriendo en el puerto ${app.get('port')}`);
});

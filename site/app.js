require("dotenv").config()

const express = require("express");
const app = express();
const path = require ("path");
const createError = require('http-errors');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const cors = require("cors");
var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));
let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header("Access-Control-Allow-Methods", "OPTIONS, POST, GET, PUT, DELETE");
    res.header('Access-Control-Allow-Headers', "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
    next();
  }
app.use(allowCrossDomain);

const userLogin = require('./middlewares/userLoginCheck')
const dbConnectionTest = require("./middlewares/dbConnectionTest")

/* necesraio para usar GET y POST */
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

/* necesario para utilizar DELETE y PUT */
app.use(methodOverride('_method'))


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

dbConnectionTest()


app.use(session({
  secret: "FeelTheSound",
  resave: true,
  saveUninitialized: true
}))

app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')))

app.use(userLogin)

app.use(logger('dev'));

/* app.use(express.static("public")) */

const indexRouter = require('./routes/index');
const adminController = require('./routes/admin');
const productosRouter = require('./routes/productos');
const usuariosRouter = require('./routes/usuarios');

const apiCarrito = require('./routes/api/carrito');
const apiProducto = require('./routes/api/productos');
const apiUsuarios = require('./routes/api/usuarios');


dbConnectionTest()

app.use('/', indexRouter);
app.use('/admin', adminController);
app.use('/productos', productosRouter);
app.use('/users', usuariosRouter);

app.use('/api/carrito',apiCarrito);
app.use('/api/productos',apiProducto);
app.use('/api/usuarios',apiUsuarios);


app.use((req, res, next) => {
    res.status(404).render("error404")
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    /* res.render('error'); */
  });


module.exports = app;
const express = require("express")
const app = express()
const port = 3000
const path = require ("path")

const indexRouter = require('./routes/index');
const productosRouter = require('./routes/productos');
const adminController = require('./routes/admin')
const usuariosRouter = require('./routes/usuarios')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.static( "public"))

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/admin', adminController);
app.use('/productos', productosRouter);
app.use('/users', usuariosRouter);


module.exports = app;
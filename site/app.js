const express = require("express")
const app = express()
const port = 3000
const path = require ("path")
const methodOverride = require('method-override')

/* necesraio para usar GET y POST */
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

/* necesario para utilizar DELETE y PUT */
app.use(methodOverride('_method'))


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.static( "public"))

const indexRouter = require('./routes/index');
const productosRouter = require('./routes/productos');
const adminController = require('./routes/admin')
const usuariosRouter = require('./routes/usuarios')

app.use('/', indexRouter);
app.use('/admin', adminController);
app.use('/productos', productosRouter);
app.use('/users', usuariosRouter);

app.use((req, res, next) => {
    res.status(404).render("error404")
})


module.exports = app;
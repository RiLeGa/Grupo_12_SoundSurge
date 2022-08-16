const express = require("express")
const app = express()
const port = 3000
const path = require ("path")

const indexRouter = require('./routes/index');
const productosRouter = require('./routes/productos');
const adminController = require('./routes/administrador')
const usuariosRouter = require('./routes/usuarios')


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.static( "public"))

app.use('/', indexRouter, adminController, productosRouter, usuariosRouter);





/* app.listen(port, () => console.log(`Servidor levantado con exito en http://localhost:${port}`))
 */
module.exports = app;
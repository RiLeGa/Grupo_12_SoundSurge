const express = require("express");
const router =express.Router();

let {usuarios,usuarioEspecifico,productos,productoEspecifico,agregar,editar,eliminar} = require("../../controllers/apiController");

router.get("usuarios", usuarios)
router.get("usuarios/:id", usuarioEspecifico)

router.get('/productos', productos)
router.get('/productos/:id', productoEspecifico)

router.get("/productos/agregar", agregar)
router.put("/productos/editar/:id", editar)
router.delete("/productos/eliminar/:id", eliminar)


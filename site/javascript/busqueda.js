window.addEventListener("load",( ) => {

    /* let vinculacion = "Documento vinculado con exito"
    console.log(vinculacion); */

    let $ = (elemento) => document.querySelector(elemento)

    let buscador = $("#icons-search")
    let palabra = ""
    buscador.onkeydown = ( event) => {
        let letra = event.key
        letra === "Backspace" ? palabra = palabra.substring(0, palabra.length -1) : letra.length > 1 ? null:
        palabra = palabra += letra
        console.log(event.key);
        console.log(palabra);
    }


})
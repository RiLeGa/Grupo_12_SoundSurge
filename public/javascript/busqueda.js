window.onload = function() {

    let vinculacion = "Documento vinculado con exito"
    console.log(vinculacion);

    let $ = (e) => document.querySelector(e)

    let buscador = $("#search")
    let palabra = ""
    buscador.onkeydown = (e) => {
        let letra = e.key
        letra === "Backspace" ? palabra = palabra.substring(0, palabra.length -1) : letra.length > 1 ? null:
        palabra = palabra += letra
       /*  console.log(event.key); */
        console.log(palabra);
    }


}
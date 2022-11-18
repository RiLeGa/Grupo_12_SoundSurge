window.addEventListener('load', () => {

    let $ = (elemento) => document.querySelector(elemento)
    console.log("Register vinculado");

    const regExLetter = /^[A-Z]+$/;
    const regExExt = /\.(jpg|jpeg|png|jfif|gif|webp)$/
    const regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
    const regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

    let form = $('#formulario')
    let nombre = $('#nombre')
    let apellido = $('#apellido')
    let email = $('#email')
    let terminos = $('#terminos')
    let inputPass = $('#clave')
    let inputPass2 = $('#confirmar')
    /* let imagen = $("#file") */

    let errores = [{
        id: 1,
        elemento:"nombre",
        mensaje: "El Nombre es obligatorio"
    },{
        id: 2,
        elemento:"apellido",
        mensaje: "Falta el apellido"
    },{
        id: 3,
        elemento:"email",
        mensaje: "El campo Email es obligatorio"
    },{
        id: 4,
        elemento:"contrasenia",
        mensaje: "La contraseña es obligatoria"
    },{
        id: 5,
        elemento:"confirmar",
        mensaje: "Debe confirmar su contraseña"
    },{
        id: 6,
        elemento:"checkbox",
        mensaje: "Debe aceptar los terminos y condiciones"
    },
    {
        id: 7,
        elemento:"file",
        mensaje: "Debe aceptar los terminos y condiciones"
    }]

    /* let eye = $('#eye-clave')
    let eye2 = $('#eye-confirmar')
    eye.addEventListener('click',(e) => {
        inputPass.type === 'password' ? inputPass.type = 'text' : inputPass.type = 'password'
        if(eye.classList.contains('fa-eye-slash')){
            eye.classList.toggle('fa-eye-slash')
            eye.classList.toggle('fa-eye')
        }else{
            eye.classList.toggle('fa-eye-slash')
            eye.classList.toggle('fa-eye')
        }   
    })

    eye2.addEventListener('click',(e) => {
        inputPass2.type === 'password' ? inputPass2.type = 'text' : inputPass2.type = 'password'
        if(eye2.classList.contains('fa-eye-slash')){
            eye2.classList.toggle('fa-eye-slash')
            eye2.classList.toggle('fa-eye')
        }else{
            eye2.classList.toggle('fa-eye-slash')
            eye2.classList.toggle('fa-eye')
        }   
    }) */


    document.getElementById("file").onchange=function(e){
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload=function(){
            let preview = document.getElementById("preview");
            imagen=document.createElement("img");
            imagen.src=reader.result;
            preview.append(imagen);

        }
            let variable = true
            switch (true) {
                case regExExt.test(imagen.value):
                    $('#preview').innerHTML = "<small>El Nombre solo acepta letras</small>"
                    errores.forEach(e => {
                        if(e.id === 7 ){
                            e.mensaje = "El Nombre solo acepta letras"
                            variable = false
                        }
                    });
                    if (variable) {
                        errores.push(error)
                    }
                    break;
            }
        }

    nombre.addEventListener('blur',() => {
        let error = {
            id: 1,
            elemento:"nombre",
            mensaje: "El Nombre es obligatorio"
        }
        let variable = true
        switch (true) {
            case !nombre.value:
                $('#nombreContainer').innerHTML = "<small>El Nombre es obligatorio</small>"
                nombre.style.border = "3px solid red"
                errores.forEach(e => {
                    if(e.id === 1 ){
                        e.mensaje = "El Nombre es obligatorio"
                        variable = false
                    }
                });
                if (variable) {
                    errores.push(error)
                }
                break;
            case regExLetter.test(nombre.value):
                $('#nombreContainer').innerHTML = "<small>El Nombre solo acepta letras</small>"
                nombre.style.border = "3px solid red"
                errores.forEach(e => {
                    if(e.id === 1 ){
                        e.mensaje = "El Nombre solo acepta letras"
                        variable = false
                    }
                });
                if (variable) {
                    errores.push(error)
                }
                break;
            default:
                $('#nombreContainer').innerHTML = ""
                nombre.style.border = "3px solid black"
                errores = errores.filter(error => {
                    return error.id !== 1
                })
                break;
        }
        console.log(errores);
    })
    apellido.addEventListener('blur',() => {
        let error = {
            id: 2,
            elemento:"apellido",
            mensaje: "Falta el apellido"
        }
        let variable = true
        switch (true) {
            case !apellido.value:
                $('#apellidoContainer').innerHTML = "<small>El apellido es obligatorio</small>"
                apellido.style.border = "3px solid red"
                errores.forEach(e => {
                    if(e.id === 2 ){
                        e.mensaje = "El apellido es obligatorio"
                        variable = false
                    }
                });
                if (variable) {
                    errores.push(error)
                }
                break;
            case regExLetter.test(apellido.value):
                $('#apellidoContainer').innerHTML = "<small>El apellido no puede contener numeros ni caracteres especiales</small>"
                nombre.style.border = "3px solid red"
                errores.forEach(e => {
                    if(e.id === 2 ){
                        e.mensaje = "El apellido no puede contener numeros ni caracteres especiales"
                        variable = false
                    }
                });
                if (variable) {
                    errores.push(error)
                }
                break;
            default:
                $('#apellidoContainer').innerHTML = ""
                apellido.style.border = "3px solid black"
                errores = errores.filter(error => {
                    return error.id !== 2
                })
                break;
        }
    })

   /*  form.addEventListener('submit',(e) => {
        e.preventDefault();

        console.log(form.elements);
        if(errores.length > 0){
            form.submit()
        }
    }) */
})
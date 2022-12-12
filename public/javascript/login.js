window.addEventListener('load', () => {

    let $ = (elemento) => document.querySelector(elemento)
    console.log("Register vinculado");

    const regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
    const regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

    let form = $('#formularioLogin')
    let email = $('#email')
    let inputPass = $('#clave')

    let errores = [{
        id: 1,
        elemento:"email",
        mensaje: "El campo Email es obligatorio"
    },{
        id: 2,
        elemento:"clave",
        mensaje: "La contraseña es obligatoria"
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

    email.addEventListener('blur',() => {
        let variable = true
        switch (true) {
            case !email.value:
                $('#emailContainer').innerHTML = "<small>El campo Email es obligatorio</small>"
                email.style.border = "3px solid red"
                errores.forEach(e => {
                    if(e.id === 1 ){
                        e.mensaje = "El campo Email es obligatorio"
                        variable = false
                    }
                });
                if (variable) {
                    errores.push(error)
                }
                break;
            case !regExEmail.test(email.value):
                $('#emailContainer').innerHTML = "<small>El email no coincide con un email valido</small>"
                email.style.border = "3px solid red"
                errores.forEach(e => {
                    if(e.id === 1 ){
                        e.mensaje = "El email no coincide con un email valido"
                        variable = false
                    }
                });
                if (variable) {
                    errores.push(error)
                }
                break;
            default:
                $('#emailContainer').innerHTML = ""
                email.style.border = "3px solid black"
                errores = errores.filter(error => {
                    return error.id !== 1
                })
                break;
        }
        console.log(errores);
    })
    inputPass.addEventListener('blur',() => {
        let variable = true
        switch (true) {
            case !inputPass.value:
                $('#passContainer').innerHTML = "<small>La contraseña es obligatoria</small>"
                inputPass.style.border = "3px solid red"
                errores.forEach(e => {
                    if(e.id === 2 ){
                        e.mensaje = "La contraseña es obligatoria"
                        variable = false
                    }
                });
                if (variable) {
                    errores.push(error)
                }
                break;
            case !regExPass.test(inputPass.value):
                $('#passContainer').innerHTML = "<small>La contraseña debe tener entre 6 y 12 caracteres y debe contener una mayuscula, una minuscula y un numero</small>"
                inputPass.style.border = "3px solid red"
                errores.forEach(e => {
                    if(e.id === 2 ){
                        e.mensaje = "La contraseña debe tener entre 6 y 12 caracteres y debe contener una mayuscula, una minuscula y un numero"
                        variable = false
                    }
                });
                if (variable) {
                    errores.push(error)
                }
                break;
            default:
                $('#passContainer').innerHTML = ""
                inputPass.style.border = "3px solid black"
                errores = errores.filter(error => {
                    return error.id !== 2
                })
                break;
        }
    })

    form.addEventListener('submit',(e) => {
        
        console.log(form.elements);
        if(errores.length > 0){
            e.preventDefault();
        }else{
            form.submit()
        }
    })
    
})
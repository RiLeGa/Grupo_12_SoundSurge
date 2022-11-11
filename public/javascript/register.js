window.addEventListener("load", () => {

    let $ = (elemento) => document.querySelector(elemento)
    console.log("register vinculado");

    let form = $("")
    let nombre = $("")
    let apellido = $("")
    let email = $("")
    let contrasenia = $("")
    let contrasenia2 = $("")

    let eye = $("")
    let eye2 = $("")

    eye.addEventListener("click", (e) => {
        console.log(inputPass.type)
        inputPass === "password" ? inputPass.type = "text" : inputPass ="password"

        console.log(eye.classList.contains())

        if(eye.classList.contains()){
            eye.classList.togle()
            eye.classList.togle()
        }else{
            eye.classList.togle()
            eye.classList.togle()
        }
    })
    eye2.addEventListener("click", (e) => {
        console.log(inputPass.type)
        inputPass === "password" ? inputPass.type = "text" : inputPass ="password"

        console.log(eye2.classList.contains())

        if(eye2.classList.contains()){
            eye2.classList.togle()
            eye2.classList.togle()
        }else{
            eye2.classList.togle()
            eye2.classList.togle()
        }
    })

    nombre.addEventListener("blur", () =>{
        switch (true) {
            case !nombre.value:
                $().innerHTML = ""
                
                break;
        
            default:
                $().innerHTML = ""
                break;
        }
    })
    contrasenia.addEventListener("blur", () =>{
        switch (true) {
            case !nombre.value:
                $().innerHTML = ""
                
                break;
        
            default:
                $().innerHTML = ""
                break;
        }
    })
    
})
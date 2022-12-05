window.addEventListener('load', () => {

    
    let carrito = document.querySelector('#carrito');
    
    carrito.addEventListener('click', event => {
                event.preventDefault();
                Swal.fire({
                customClass: {
                    confirm: 'swalBtnColor',
                    cancelButton: 'swalBtnColor'
                },

                title: 'Primero debes ingresar a tu cuena!',
                text: "Si no tienes cuenta puedes registrarte",
                color: 'white',
                background: "#007ca1",
                showCancelButton: true,
                confirmButtonColor: '#f5a3b0',
               border:'black-solid-2px',
                cancelButtonColor: '#6487e68c',
                confirmButtonText: '<a href="/users/login" >ingrear</a>',
              
              
                cancelButtonText:'<a href="/users/register" >Registrarme</a>'
                ,icon: 'warning',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },

            }).then((result) => {

                    

                })
        })}
    
)

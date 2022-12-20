window.addEventListener('load', () => {
  let $ = (elemento) => document.querySelector(elemento)
    console.log("Register vinculado");
    
    let forms = document.querySelectorAll('#del');
    for (let i = 0; i < forms.length; i++) {
        forms[i].addEventListener('submit', (e) => {
                e.preventDefault();
                Swal.fire({
                customClass: {
                    confirmButton: 'swalBtnColor',
                    cancelButton: 'swalBtnColor'
                },
      title: 'Deses eliminar tu usuario?',
      text: "Si eliminas tu usuario perderas todas tus ordenes de compra!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar usuario',
      cancelButtonText: 'Cancelar',
      background: 'black',
      color:'white'
    })
    .then((result) => {
      if (result.isConfirmed) {
        forms[i].submit();
        Swal.fire(
          'Has eliminado tu usuario, te echaremos de menos! :c'
        )
      }else{
        Swal.fire(
          'No se elmino tu usuario :D')
        }
      })
    })
}
})
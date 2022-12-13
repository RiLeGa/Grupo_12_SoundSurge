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
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    .then((result) => {
      if (result.isConfirmed) {
        forms[i].submit();
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }else{
        Swal.fire(
          'no Deleted!',
          'Your file hasn´t been deleted.',
          'error')
        }
      })
    })
}
})
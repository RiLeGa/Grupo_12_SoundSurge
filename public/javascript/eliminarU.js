window.onload = function() {
  let $ = (elemento) => document.querySelector(elemento)
    console.log("Register vinculado");
    
  document.getElementById("tn btn-del").onclick=function(e){
  

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    .then((result) => {
      if (result.i) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }else{
        Swal.fire(
          'no Deleted!',
          'Your file hasn´t been deleted.',
          'error'
        )
      }
    })
}
}
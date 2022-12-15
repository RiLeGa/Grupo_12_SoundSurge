const $ = id => document.getElementById(id)

/* imagen previa del producto */

$("imagen").addEventListener('change', (e) => {

    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = () => $("img-preview").src = reader.result
    changeImage(e.target.name,e.target.files)

})

$("imagen2").addEventListener('change', (e) => {

    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = () => $("sub-img-preview-1").src = reader.result
    changeImage(e.target.name,e.target.files)

})

$("imagen3").addEventListener('change', (e) => {

    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = () => $("sub-img-preview-2").src = reader.result
    changeImage(e.target.name,e.target.files)

})

$("imagen4").addEventListener('change', (e) => {

    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = () => $("sub-img-preview-3").src = reader.result
    changeImage(e.target.name,e.target.files)

})
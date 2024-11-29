function getQueryParam(param) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

let ProductoId = getQueryParam('id');

if (ProductoId) {
    let url = `https://dummyjson.com/recipes/${ProductoId}`;

    fetch(url)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.log(data);

            let fotoReceta = document.querySelector('.foto');
            let titulo = document.querySelector('.titulo');
            let informacionReceta = document.querySelector('.instrucciones');
            let tiempoCoccion = document.querySelector('.tiempoCoccion');
            let categoria = document.querySelector('.categoria');

            fotoReceta.src = data.image;
            titulo.textContent = data.name;
            informacionReceta.textContent = data.instructions;
            tiempoCoccion.textContent = 'Tiempo Cocción: ' + data.cookTimeMinutes + ' minutos';

            
            let tags = data.tags; 
            if (tags) {
                let tagsHTML = '';
                for (let i = 0; i < tags.length; i++) {
                    tagsHTML += `<a href="./category.html?tag=${tags[i]}">${tags[i]}</a>`;
                    if (i < tags.length - 1) {
                        tagsHTML += ', '; 
                    }
                }
                categoria.innerHTML = 'Categoría: ' + tagsHTML;
            } else {
                categoria.textContent = 'La receta no tien categoría';
            }
        })
        .catch(function(e) {
            console.log(e);
        });
} else {
    console.error('No hay un id en la URL');
}

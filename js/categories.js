let url = 'https://dummyjson.com/recipes/tags';

let categoriasContenedor = document.querySelector('.categorias');

function cargarCategorias() {
    fetch(url)
        .then(function (res) {
            return res.json();
        })
        .then(function (categorias) {
            let contenido = '';

            for (let i = 0; i < categorias.length; i++) {
                let categoria = categorias[i];
                
                contenido += '<li><a href="./category.html?tag=' + categoria + '">' + categoria + '</a></li>';
            }

            categoriasContenedor.innerHTML = contenido;
        })
        .catch(function (error) {
            console.error('Error al cargar las categorías:', error);
        });
}

cargarCategorias();






    












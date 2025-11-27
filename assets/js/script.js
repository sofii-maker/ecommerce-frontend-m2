document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.btn-like');

    likeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productElement = event.target.closest('.producto');
            const productId = productElement.getAttribute('data-product-id');
            const countElement = productElement.querySelector('.count-like');

            handleLike(productId, countElement);
        });
    });
});

function handleLike(productId, countElement) {

    let currentLikes = parseInt(countElement.textContent);
    currentLikes++;
    countElement.textContent = currentLikes;

    
}

contador = document.getElementById('contadorcarrito')


function añadir(){
    valor = contador.textContent
        contador.textContent = parseInt(valor) + 1
    
}
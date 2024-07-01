document.addEventListener('DOMContentLoaded', () => {
    $(".botonEnviar").click(function(){
        alert("El correo fue enviado correctamente")
    })

    const ListadoItemsModal = document.getElementById('ListadoItemsModal');
    const MostrarTotal = document.getElementById('MostrarTotal');
    let total = 0;

    document.querySelectorAll('.botonAgregar').forEach(button => {
        button.addEventListener('click', event => {
            const card = button.closest('.card');
            const titulo = card.querySelector('.card-title').innerText;
            const precio = parseFloat(card.querySelector('.text-success').innerText.replace('$', ''));
            const imagen = card.querySelector('img').src;

            total = total + precio;
            MostrarTotal.innerText = total.toFixed(3);

            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
            listItem.innerHTML = `
                <div>
                    <img src="${imagen}" alt="${titulo}" width="50" class="me-2">
                    <span>${titulo}</span>
                </div>
                <span class="badge bg-success rounded-pill">$${precio.toFixed(3)}</span>
                <button class="btn btn-danger btn-sm ms-2">Eliminar</button>`;

            listItem.querySelector('.btn-danger').addEventListener('click', () => {
                total = total - precio;
                MostrarTotal.innerText = total.toFixed(3);
                listItem.remove();
            });
            ListadoItemsModal.appendChild(listItem);
        });
    });
});


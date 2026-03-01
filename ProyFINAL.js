let itemInput = document.getElementById("itemInput");
let addItemButton = document.getElementById("addItemButton");
let categoriaSelect = document.getElementById("categoria");

function addItemButtonClick() {

    let itemText = itemInput.value.trim();

    if (itemText === "") {
        alert("Escribe algo primero");
        return;
    }

    let categoria = categoriaSelect.value;

    // Buscar el UL dentro de la categoría elegida
    let categoriaDiv = document.getElementById(categoria);
    let lista = categoriaDiv.querySelector("ul");

    let newItem = document.createElement("li");

    // Crear fecha
    let fecha = new Date().toLocaleString();

    // Crear contenedor texto
    let textContainer = document.createElement("div");
    textContainer.classList.add("texto");

    let textSpan = document.createElement("span");
    textSpan.textContent = itemText;

    let fechaSpan = document.createElement("small");
    fechaSpan.textContent = fecha;

    textContainer.appendChild(textSpan);
    textContainer.appendChild(fechaSpan);

    // Botón eliminar
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "✖";

    deleteButton.addEventListener("click", function () {
        newItem.remove();
    });

    newItem.appendChild(textContainer);
    newItem.appendChild(deleteButton);

    lista.appendChild(newItem);

    itemInput.value = "";
}

addItemButton.addEventListener("click", addItemButtonClick);
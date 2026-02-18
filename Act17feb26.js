let itemInput = document.getElementById("itemInput");
let addItemButton = document.getElementById("addItemButton");
let categoriaSelect = document.getElementById("categoria");

// MATRIZ (array dentro de objeto)
let inventario = {
    DIA1: [],
    DIA2: [],
    PENDIENTES: [],
    METAS: []
};

function addItemButtonClik() {

    let itemText = itemInput.value;
    let categoria = categoriaSelect.value;

    if (itemText === "") return;

    let lista = document.querySelector("#" + categoria + " ul");

    let newItem = document.createElement("li");
    newItem.textContent = itemText;

    lista.appendChild(newItem);

    itemInput.value = "";
}
addItemButton.addEventListener("click", addItemButtonClik);
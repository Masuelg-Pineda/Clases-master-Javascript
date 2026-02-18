//Paso 1 Elementos que voy a ocupar

let itemInput = document.getElementById("itemInput");
let addItemButton = document.getElementById("addItemButton");
let itemList = document.getElementById("itemList");

//Paso 2 Crear funcion
function addItemButtonClik() {
    let itemText = itemInput.value; //Obtener el texto del input

    let newItem = document.createElement("li"); //Crear un nuevo elemento de lista

//    newItem.innerHTML = itemText; //No ocupar para no vulnerar datos

//Crear un elemento span
    let textSpan = document.createElement("span");
    textSpan.textContent = itemText; //Asignar el texto al span
    newItem.appendChild(textSpan); //Agregar el span al elemento de lista

//Crear el botón eliminar
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    
    deleteButton.addEventListener("click", function() {
        newItem.remove(); //Eliminar el elemento de lista
})

    newItem.appendChild(deleteButton); //Agregar el botón eliminar al elemento de lista
    itemList.appendChild(newItem); //Agregar el nuevo elemento de lista a la lista
    itemInput.value = ""; //Limpiamos el input
}

addItemButton.addEventListener("click", addItemButtonClik); //Cuando hace click, hace todo lo anterior
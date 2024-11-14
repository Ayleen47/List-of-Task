function actualFecha_hora() {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const actualFecha = date.toLocaleDateString('es-ES', options);
    const actualHora = date.toLocaleTimeString('es-ES');
    
    const dateTimeElement = document.getElementById('fecha_hora');
    dateTimeElement.innerHTML = `${actualFecha}, ${actualHora}`;
} 
// Actualiza la fecha y hora cada segundo
setInterval(actualFecha_hora, 1000);
// Llama a la función por primera vez para mostrar la fecha y hora inmediatamente
actualFecha_hora();


function agregarTarea() {
    let nuevaTarea_texto= document.getElementById("nuevaTarea").value;

    if (nuevaTarea_texto === " ") {
        alert("No hay tarea agregada, Ingresela por favor.")
        return;
    }
    
    

    
    let nuevaTarea= document.createElement("li");
    nuevaTarea.textContent= nuevaTarea_texto + " ";




    
    
    
    let botonEliminar= document.createElement("button");
    botonEliminar.textContent= "X";
    botonEliminar.onclick= function() {//posee una subfuncion para k cuando aprete para eliminar se pueda a cuaquier items de la lista
        nuevaTarea.remove();
        Cantidades();
    }
    nuevaTarea.appendChild(botonEliminar);

    //agrega lo que se escribio en el input a la lista de tareasn o pendientes
    document.getElementById("listaTareas").appendChild(nuevaTarea);

    //permite limpiar lo que se haya escrito para poner una nueva tarea
    document.getElementById("nuevaTarea").value= " ";

    //hace que al hacer doble clic marque como completado el items
    nuevaTarea.ondblclick = function() {
        nuevaTarea.classList.toggle("completed");

        /*total++
        cantidad.innerHTML= total;*/
        if (nuevaTarea.classList.contains("completed")) {
            nuevaTarea.style.backgroundColor = "rgb(146, 227, 116)";
        } else {
            nuevaTarea.style.backgroundColor = "rgb(205, 145, 145)";
        }
        Cantidades();
    }
    Cantidades();
}

function Cantidades() {
    let totalPendientes= 0;
    let totalRealizadas= 0;

    let tareas = document.getElementById("listaTareas").children;
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].style.backgroundColor === "rgb(146, 227, 116)") {
            totalRealizadas++;
        } else {
            totalPendientes++;
        }
    }
    document.getElementById("pendientes").textContent= `Pendientes: ${totalPendientes}`;
    document.getElementById("realizadas").textContent= `Realizadas: ${totalRealizadas}`;
}
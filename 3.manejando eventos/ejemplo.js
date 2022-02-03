/* function clickTitulo() {
    console.log("El usuario hizo click en el titulo")
}

const titulo2 = document.getElementById('tituloForm')

//titulo2.onclick = clickTitulo; esto es una forma pero no tan recomendable mejor la siguiente

titulo2.addEventListener("click", clickTitulo); */


/* document.addEventListener('DOMContentLoaded', () => {
    console.log("El documento se a cargado")
}) */

const form = document.querySelector('#formulario');

const enviarFormulario = (event) => {
    event.preventDefault();

    const { name, email, password } = event.target;

    console.log(name.value, email.value, password.value);

    if(name.value.length === 0 ) alert("El nombre no es valido");
};

form.addEventListener('submit', enviarFormulario);

const section = document.querySelector('#section')
/* const tituloForm = document.querySelector('#tituloForm')


tituloForm.addEventListener("click", (event) => {
    console.log(event.bubbles, event.cancelBubble);
    event.stopPropagation();
    console.log(event.bubbles, event.cancelBubble);
    console.log("CLICK EN EL TITULO");
}); 

section.addEventListener("click", () => {
    console.log("CLICK EN LA SECCION");
});  */

section.addEventListener("click", (event) => {
    console.log(event.target, event.currentTarget);
},
    {
        capture: true,
    }
)
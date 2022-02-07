# Manipulando el DOM
  El DOM o document object model es una interfaz o contrato que nos permite acceder al documento HTML desde JavaScript es una representación del documento y todas sus etiquetas 
  en memoria. Desde JavaScript sera un objeto atravez del cual tendremos una serie de metodos que nos permitiran modificar la parte de HTML y cambiar la estructura, los estilos,
  detectar eventos del usuario y ejecutar acciones en nuestro código y demás.
  
  Document tiene una serie de metodos que nos permite selecionar el nodo que me interesa, estos son por id, por clases o por tipos de etiquetas. Existen más pero estos son los 
  basicos. 
  Ejemplo con id: 
    console.log(document.getElementById("cabecera")); 
    En este caso estamos eligiendo un unico elemento y no es recomendable que utilices dos ids iguales en el codigo. 
    En caso de que no exista va a devolver null.
  Ejemplo con class:
    console.log(document.getElementsByClassName("border-grey"));
    Me va a devolver un listado de todos los elementos de mi DOM que tenga esta clase. 
  Ejemplo con etiquetas:
    console.log(document.getElementsByTagName("li"));
    Me va a devolver un listado con la cantidad de etiquetas que existan asi sea una sola.  
  Ejemplo por propiedad nombre:
    console.log(document.getElementsByName("cabecera_1"));
    Filtra por las etiquetas name que dispongan de un valor.
  
  Los siguientes son los reemplazantes de jquery uno es querySelector y querySelectorAll, estos sirven tambien para reemplazar a los anteriores aunque depende de la situación
  dado a que estos son estaticos, esto quiere decir que hay que volver a obtener el selector dado a que si ya esta definido no va a cambiar. 
    Ejemplo con querySelector:
     console.log(document.querySelectorAll("li"));
     En este caso trae la primer etiqueta que coincida con lo que nosotros le pedimos.
    Ejemplo con querySelectorAll:
      console.log(document.querySelectorAll("li"));
      En este caso trae todas las etiquetas que existan en el codigo que coincida con la busqueda. 
      Para el caso de clases tienen que ir con un punto (.) .border-gray
      En el caso de id van a ir con una almuadilla (#) #cabecera
      Por ultimo para propiedad name seria entre corchetes ([]) "[name=cabecera]"
    
   Los node es cualquier elemento del DOM desde el documento hasta los elements, dispone de unas propiedades comunes el primero es parentElement y children,
   si hago elemento.children me va a mostrar sus hijos o hijo y en el caso de elemento.parentElement es el elemento padre de la gerarquia.
   
<h1> Creando y manipulando el DOM </h1>
  
 <h3> Creando elemento</h3> 
 
En este apartado se comienza a dar dinamismo a la pagina web cambiando el HTML desde JavaScript. Para crear elementos que representan etiquetas HTML se utiliza           document.createElement('h2', 'opcional'); el opcional es por si se desea escribir algo dentro de la etiqueta. Otro es para agregar un texto utilizando           document.createTextNode('Ejemplo de agregar texto');. Por ultimo se pueden crear comentarios con JavaScript con document.createComment('crear comentario random'); pero no  se utiliza muy amenudo.

  <h3> Clonar elemento </h3>
  
Para copiar uno o varios elementos y cambiar el contenido existe metodo articulo.cloneNode() con el siguiente ejemplo 
const articulo = document.querySelector('article');
const articulo2 = articulo.cloneNode();
cloneNode() admite un parametro que por defecto esta en false pero si le asigno true este copiara todo el elemento con sus hijos e hijos de hijos que tenga. 

  <h3> Ubicando un elemento en el DOM </h3>
  
Para saber si un elemento pertenece al DOM o no dado a que puede estar oculto o sin visualizar existe articulo.isConnected devolviendo un booleano, para insertarlo hay que seleccionar al padre de lo que queremos insertar 

       - document.getElementById('section') 
       - section.appendChild(articulo2)
       
      Para seleccionar donde lo quiero ubicar tengo 4 opciones:
      
       - section.insertAdjacentElement('beforebegin', articulo2) -> hermano superior 
       - section.insertAdjacentElement('afterbegin', articulo2) -> hermano inferior 
       - section.insertAdjacentElement('beforeend', articulo2) -> ultimo hijo
       - section.insertAdjacentElement('afterend', articulo2) -> primer hijo
       
Para continuar se puede incluir texto sin la necesidad de copiarlo de otro lado y se realiza con section.AdjacentText('beforeend', 'Aqui acaba la seccion'); siendo las 4 opciones anteriores. 
Tambien otro ejemplo de uso es section.insertAdjacentHTML ('beforeend', '<3>Esto es un titulo inventado</3>') esto nos permite incluir HTML en el codigo JavaScript sin tener que crearlo con createElement y demas sino escribirlo como un string e insertarlo directamente.
     
   <h3> Eliminar elemento </h3>
   
Ahora para eliminar tenemos el metodo section.remove() removiendo todo lo que este dentro de nuestra seccion en este caso. Se puede tambien reemplazar el contenido de un elemento con section.innerHTML siendo una propiedad de lectura que se puede reescribir ejemplo section.innerHTML = '<2>Nuevo titulo de la seccion</2>'. Continuando con este metodo podemos utilizar section.outerHTML = '<2>Nuevo titulo de la seccion completa</2>'  que es para eliminar no solo el contenido de la seccion si no todo completo.
Existe una propiedad llamada innerText que nos permite modificar el contenido del texto de la seccion con section.children[0].textContent = 'Otro titulo mas'.
Asimismo podemos modificar atributos con section.getAttribute('id') para localizarlo y asignarle un nuevo valor section.setAttribute('id', 'otrovalor'). Esto mismo se puede utilizar con class pero tienen otras propiedades como section.classList que nos devuelve un listado de los elemetos y section.className que nos da el nombre de la clase unicamente. Para modificarlo es con section.classList.add('NuevaClaseCss') y lo mismo reemplazando add por remove para removerla. Por ultimo esta el metodo toggle que dice si no tiene una clase que la ponga y si la tiene que la quite todo esto sin conocer el valor que tiene con section.classList.toggle('nuevaClase') devolviendo un booleano o interruptor, se emplea para escoder menus o elementos que no queremos que se vean en dispositivos mobiles.  
     
<h1> Manejar eventos </h1>

Los eventos son sucesos o acciones que ocurren en un momento temporal, es cuando el usuario interactua con la pagina web es decir el evento ocurre sobre elementos HTML o elementos del DOM, la escucha de estos eventos es lo que nos permite darle vida a nuestra web. 

  <h3> Escuchando el evento </h3>
  <!-- Para mejorar la legibilidad defini con h6 cada uno de los listeners por html id y addeventlistener-->
Para poder reaccionar a ellos existe la función listeners que nos permite escuchar el evento y ejecutar codigo cuando ese evento ocurra a esto se le conoce como handler o manejador. Hay tres formas de definir estos listeners sin embargo no todas son buenas practicas, empezando por definirlo en el propio documento HTML con on y el evento que queremos escuchar y la llamada a la funcion esta forma no se debe usar bajo ningun concepto dado a que estas mezclando HTML con JavaScipt. La segunda es realizando todo desde el codigo JavaScript seleccionando el id con const titulo2 = document.getElementById("El valor del ID") luego titulo2.onclick aunque tiene como gran desventaja el que al tener un numero limitado de eventos por la propiedad on y lo que quiero escuchar. Por ultimo y la mejor opcion es con addEventListener siendo asi una funcion que permite pasarle dos parametros primero el nombre del evento que quiero escuchar y como segundo el handler viendo tal que asi titulo2.addEventListener("click", clickTitulo) asi tambien se puede eliminar el listener con remove.addEventListener("click", clickTitulo) para desavilitar las acciones en esos botones o elementos. 

Referencia de los eventos que excisten [mozilla developer](https://developer.mozilla.org/es/docs/Web/Events).

Para cualquier tipo de evento en la función que defini al principio simplemente por usar addEventListener nos permite definilo con un parametro como en este ejemplo 
const clickTitulo = (event) => {console.log(event)} dando como resultado un objeto enorme con muchas propiedades que nos define el evento y una de las mas importantes es target que nos dice que elemento clicamos. 

<h4> DOMContentLoaded </h4>
Para continuar conociendo los eventos mas interesantes uno de ellos se produce sobre el documento HTML conodico como ***DOMContentLoaded*** que nos indica la carga completa del HTML 

```
  document.addEventListener("DOMContentLoaded", () => {
   console.log("El documento se ha cargado")
  })
```

<h4> Submit </h4>

El siguiente evento mas utilizado es para enviar un formulario ***submit*** 

```
  const form = document.querySelector('#formulario');
  
  const enviarFormulario = (event) => {
    event.preventDefault();
    
    const { name, email, password } = event.target; 
    
    console.log(name.value, email.value, password.value); 
    
    if(name.value.length === 0 ) alert("El nombre no es valido");
    };
    
  form.addEventListener('submit', enviarFormulario);
```


     

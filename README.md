# Manipulando el DOM
  El DOM o document object model es una interfaz o contrato que nos permite acceder al documento HTML desde JavaScript es una representación del documento y todas sus etiquetas 
  en memoria. Desde JavaScript sera un objeto atravez del cual tendremos una serie de metodos que nos permitiran modificar la parte de HTML y cambiar la estructura, los estilos,
  detectar eventos del usuario y ejecutar acciones en nuestro código y demás.
  Esta es la forma de acceder al DOM: 
  
  ![document](https://user-images.githubusercontent.com/21134315/151376537-fa2a08eb-bebc-4029-a29d-dd9fc79320de.png)
  > Esta es la representación en JavaScript de mi documento (la raiz del DOM)
  
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
   
# Creando y manipulando el DOM
  En este apartado se comienza a dar dinamismo a la pagina web cambiando el HTML desde JavaScript.
    Para comenzar, como se crean elementos que representen etiquetas HTML con document.createElement('h2', 'opcional');.
    Otro es para agregar un texto utilizando document.createTextNode('Ejemplo de agregar texto');.
    Por ultimo esta el document.createComment('crear comentario random'); -> pero no se usa nunca.
   Despues puede que nos interece copiar el elemento, articulo o lo que tenga y cambiar el contenido para eso existe un metodo
     const articulo = document.querySelector('article');
     const articulo2 = articulo.cloneNode();
     cloneNode() admite un parametro que por defecto esta en false pero si lo paso a true este copiara todo el elemento con sus hijos e      hijos de hijos que tenga. 
     Hay una propiedad que nos dice si un elemento pertenece al DOM por que puede estar oculto o sin visualizar articulo.isConnected y      devuelve un booleano. Luego de esto para insertarlo hay que seleccionar al padre de lo que queremos insertar 
       document.getElementById('section') 
       section.appendChild(articulo2)
      Para seleccionar donde lo quiero ubicar tengo 4 opciones:
        section.insertAdjacentElement('beforebegin', articulo2) -> hermano superior 
        section.insertAdjacentElement('afterbegin', articulo2) -> hermano inferior 
        section.insertAdjacentElement('beforeend', articulo2) -> ultimo hijo
        section.insertAdjacentElement('afterend', articulo2) -> primer hijo
     Luego de esto tambien puede interesar incluir texto sin la necesidad de copiarlo de otro lado y se realiza con section.AdjacentText('beforeend', 'Aqui acaba la seccion');
     Tambien otro ejemplo de uso es section.insertAdjacentHTML ('beforeend', '<3>Esto es un titulo inventado</3>') esto nos permite incluir HTML en el codigo JavaScript sin tener que crearlo con createElement y demas sino escribirlo como un string e insertarlo directamente.
     Ahora para eliminar tenemos el metodo section.remove() remobiendo todo lo que este dentro de nuestra seccion en este caso. 
     Se puede tambien reemplazar el contenido de un elemento con section.innerHTML que es una propiedad de lectura pero se puede reescribir con section.innerHTML = '<2>Nuevo titulo de la seccion</2>'. Continuando con este metodo podemos utilizar section.outerHTML = '<2>Nuevo titulo de la seccion completa</2>'  que es para eliminar no solo el contenido de la seccion si no todo completo.
     Por ultimo de estos tenemos innerText que nos permite modificar el contenido de texto de la seccion con section.children[0].textContent = 'Otro titulo mas'.
     Por ultimo podemos modificar atributos con section.getAttribute('id') para localizarlo y asignarlo un nuevo valor section.setAttribute('id', 'otrovalor'). Esto mismo se puede utilizar con class pero tienen otras propiedades como section.classList que nos devuelve un listado de los elemetos y section.className que nos da el nombre de la clase unicamente. Para modificarlo se hace con section.classList.add('NuevaClaseCss') y lo mismo reemplazando add por remove para removerla por ultimo esta el metodo toggle que dice si no tiene una clase que la ponga y si la tiene que la quite todo esto sin concoer el valor que tiene con section.classList.toggle('nuevaClase') devolviendo un booleano o interruptor.  
     
   
     
     

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
     
     
     
     
     

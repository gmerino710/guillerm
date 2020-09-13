console.log('holaa');

cardContent = [
    {
        title: "Tecnología",
        img:"https://placeimg.com/200/200/tech",
        descripcion:'Este es la descripcion de una fotografica para el domm'
    },
    {
        title: "Animales",
        img:"https://placeimg.com/200/200/animals"
        ,
        descripcion:'Este es la descripcion de una fotografica para el domm'
    },
    {
        title: "Arquitectura",
        img:"https://placeimg.com/200/200/arch"
        ,
        descripcion:'Este es la descripcion de una fotografica para el domm'
    },
    {
        title: "Gente",
        img:"https://placeimg.com/200/200/people"
        ,
        descripcion:'Este es la descripcion de una fotografica para el domm'
    },
    {
        title: "Naturaleza",
        img:"https://placeimg.com/200/200/nature"
        ,
        descripcion:'Este es la descripcion de una fotografica para el domm'
    }
]

const $boton = document.getElementById('btn');



function cargar() {
// solanet kas etiquetas que tiene adentro
const $plantilla = document.getElementById('plantilla').content,
$contenedor = document.getElementById('contenedor'),
$fragmento = document.createDocumentFragment();

cardContent.forEach(el => {
    $plantilla.querySelector('h5').textContent=el.title;
    $plantilla.querySelector('.card-text').textContent=el.descripcion;
    $plantilla.querySelector('img').setAttribute('src',el.img)
    // vamos a clonar el nodo de plantilla , true por que copia todo
    let $Hijo =document.importNode($plantilla,true);
    $fragmento.appendChild($Hijo)

});
//todo se guarda de una sola ve
$contenedor.appendChild($fragmento);


  }


  // las funcion menajadora solo resive un solo paramento que es, si quiero q reciva para metro debo meterlo
  //dentro de  una arrow fuction

function hola(nombre = 'pedrito') {
        alert(nombre)

    $boton.removeEventListener('blick',hola)    
}




  $boton.addEventListener('click',
        hola()
)













// solo el primer
//al busca todos
// devulbe node list
// los otros debuelve html
let pep = document.querySelector('.card');

console.log(pep)


let pep2 = document.querySelectorAll('.card');



let Listas = document.querySelector('.listas');

pep2.forEach(element => {
        console.log(element);
});


let pep3 = document.querySelectorAll('#menu li');

pep3.forEach(element => {
    console.log(element);
});


//getAttribute -> trae el atributo
// elementos del dom como constantes
//$ -> para variablles donde guarde elementos del doom
const $links = document.querySelector('.links')

// cambias el atributo
document.documentElement.setAttribute('lang','es');


console.log($links.hasAttribute('rel'));

$links.removeAttribute('rel')

console.log($links.hasAttribute('rel'));

// añadir estilos
//console.log($links.style);
// asignas una propiedas
$links.style.setProperty('color','black');

$links.style.setProperty('display','block');

$links.style.width = '50%'

$links.style.padding = '50px'

//CSS variables propiedades-personzalidas
//acceder a propiedad
//representa html
const $html = document.documentElement;

const $body = document.body
//obtener la
let dark = getComputedStyle($html).getPropertyValue('--dark')

//console.log(dark);
//texto html

const $texto = document.getElementById('que-es');

let text =`<p>const $texto = document.getElementById('que-es');</p>
            <p>const $texto = document.getElementById('que-es');</p>
            <p>const $texto = document.getElementById('que-es');</p>

`
// innert text es un texto no reconoce las etique no es parte del estandar
//$texto.innerText = text

$texto.textContent = text

// inner html remplaza el conteniod

$texto.innerHTML = text

// elimin donde nacio y lo rempleza por el nuevi
$texto.outerHTML = text


let frutas = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]


// insercion con fragmentos

// donde se ara la inserccion
const $fragmento = document.createDocumentFragment();

frutas.forEach(element => {
    
const $li = document.createElement('li');

$li.textContent = element

$li.setAttribute('class','item')

$fragmento.appendChild($li)

});

Listas.appendChild($fragmento)

const $formulario = document.getElementById('formulario'),
$contenedor = document.querySelector('#bloque'),
$fragmento2 = document.createDocumentFragment();


// las funcion menajadora solo resive un solo paramento que es


$formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    let texto = document.getElementById('nani').value;
    console.log(texto)
    $bloc_container = document.createElement('div')
    $bloc_container.setAttribute('class','card');
    $block = document.createElement('div')
    $block.setAttribute('class','card-body');
    $block.textContent  = texto;
    $bloc_container.appendChild($block)

    $fragmento2.appendChild($bloc_container)
   // $block.setAttribute('class','item')
    $contenedor.appendChild($fragmento2);

    texto = document.getElementById('nani').value= '';
})
// añadir al coontenedor




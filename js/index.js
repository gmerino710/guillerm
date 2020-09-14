import {nombre,escribir,convert} from "./app7.js";

const $d = document;

//eventos del teclado
/*
keypress ->mientras
keyup ->soltando la tecla
keydonw-> cuando presionamos
*/
const $ul = document.getElementById("paco");



const $fragmento = document.createDocumentFragment();


const $select = document.getElementById("cars");

const $cars = $select.options[$select.selectedIndex].value;


console.log($select);

$select.addEventListener("change",(e)=>{

    let $cars = $select.options[$select.selectedIndex].value;


console.log($cars);
});


// API FETCH
const ulr2 ="https://jsonplaceholder.typicode.com/comments?postId=3";

const url = "https://jsonplaceholder.typicode.com/users";


/*
function buscar(id) { 
    const $cargando = document.getElementById("cargando");

    $cargando.style.display = 'block'

    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then(response=>{
    
        //console.log(response.json())
      
            return response.ok? response.json():Promise.reject(response)
        
     
    })
    .then(son =>{
       
        son.forEach(element => {
            console.log(element)
            const $li =document.createElement("li");
            $li.innerHTML = `p-id->${element.postId} id->${element.id} name->${element.name} boton-><button class='btn btn-info'>Enviar</button>`;
            $fragmento.appendChild($li);
            });
            
            $ul.appendChild($fragmento);
            
    
        }
    )
    
    
    .catch(error=>{
        console.log(error)
      
    })
    .finally(()=>{
        $cargando.style.display = 'none';
      })


 }*/


 async function get_memo(){
    try {
        let respuesta = await fetch(url)
        let data = await respuesta.json()
        console.log(respuesta)
       // console.log('fetch...')
       // console.log(data)

        if(!respuesta.ok) {
            throw{status:respuesta.status}
        }
        else{
            data.forEach(element => {
                console.log(element)
                const $li =document.createElement("li");
                $li.textContent = `ID->${element.id} Name->${element.name}`;
                $fragmento.appendChild($li);
                });
                $ul.appendChild($fragmento);
                console.log(usuarios)
        }
       
    
        

    } catch (e) {
        console.log(e)
            alert('Ocurrio un error:'+e.status);
    }finally{
        console.log('cargando.....')
    }

 }



get_memo();









/*

fetch(url)
.then(response=>{

    //console.log(response.json())
  
        return response.ok? response.json():Promise.reject(response)
    
 
})
.then(son =>{
    let usuarios =[]
    usuarios = son

    usuarios.forEach(element => {
        console.log(element)
        const $li =document.createElement("li");
        $li.textContent = `ID->${element.id} Name->${element.name}`;
        $fragmento.appendChild($li);
        });
        $ul.appendChild($fragmento);
        console.log(usuarios)

    }
)


.catch(error=>{
    console.log(error)
  
})
*/

/*

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });*/
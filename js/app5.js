// this-> sirve paara contexto golbal o para el objeto de un archivo

objeto ={
    name:'Perico',
    imprimir:function () {

        console.log(this.name)
      }
}


objeto.imprimir();




const $formulario = document.getElementById('form01');


const $alerta = document.getElementById('alerta');


const $detener = document.getElementById('detener');


function imprimir() {

    alert('Agregar');
    location.reload();
  }


$alerta.addEventListener('click',imprimir)



$detener.addEventListener('click',(e)=>{

    alert('elemento quitado');

    $alerta.removeEventListener('click',imprimir);

    $alerta.disabled = true;

})

/*

$formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    //e.stopPropagation() -> nose prope a otrso
    alert('sfdfsdf');
});*/
//proxies
//BOM
//BROWSER OBJECT MODEL

console.log('inicioooo')
// recargar
//console.log(location.reload)

//dodne se original
/*
console.log(location.origin)

console.log(location.protocol)

console.log(location.host)

console.log(location.port)

console.log(location.href)
//donde apunta
console.log(location.pathname)

*/
// objeto history
//console.log(history.length)
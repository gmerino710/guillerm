var cocolito = 'Guillemro peres'

/*
alert(cocolito+'pedrada')


alert(`${cocolito} pedrada`)*/


let contador = 1;

var html = ''
/*
while (contador<=10) {
    console.log(contador++);
}*/

var lista = document.getElementsByClassName("listas");
/*
for (let index = 1; index < 11; index++) {
      
      html = `<li>${index}</li>`;  

      console.log(html);  
}*/

// for inn para iterar un objeto se usa asi Key[propiedad]


const jon ={
    nombre:'pedro',
    apellido:'Jhonny',
    edad:23
}

for (const k in jon) {
      
       // console.log(jon[k])
        
}

//for of en js todo es un objeto el in solo propiedas de un objeto , el of de cualquier objeto iterable


let numeros = [1,2,3,4,5,6,7,8,9]

for (const i of numeros) {
    ///console.log(i);
}
/*
try {
   let num = 20
    if (isNaN(num)) {
        throw new Error('Dato no es un numero')
    }
    if(num >23){
        throw new Error('Es un muy grande numero')
    }

    console.log(num*2)


} catch (error) {
    console.log('El error es'+ error)
}
*/
//Arrow functions

//ahora vamos con los modulos


// set timeout y set interval

/*
setTimeout(() => {
    console.log('holoo');
}, 1000);


let tiempos = setInterval(() => {
    console.log(new Date().toLocaleTimeString());

}, 2000);

*/
// detiene el reloj
//clearInterval(tiempos);
//ASINCRONIA

//js solo una cosa a la vez un solo hilo


//Event Loop
//Concurrencia -> es dos o mas tareas progresivamente simultaneamente
// Paralelimos -> dos tareas al mismo tiempo
//Operacion bloqueantes  -> es aquella no duelve el control hatsa que termine su tarea
//y no bloqueante  -> no bloquea el flujo principal

//sincrono -> sucede en el prese , espera el rsultado y sigue la siguiente
//asincrono -> la repsueto se espera en un futuro, se ejecuta uno depsues del otro
//siempre fase de espera

//Callbacks

//Promesas viene siendo como un if else
function promesas_cuadrado (valor){
    return new Promise((res,rej)=>{
        setTimeout(() => {

            if (valor >5) {
                res({
                    valor,
                    mensaje:'Bueno'
                });
            } else {
                rej({
                    valor,
                    mensaje:'malo'
                });
            }

            
        }, 2000);
        
        
       
    })
}

/*
promesas_cuadrado(10)
.then(ob=>{
    console.log(ob);
    //para crar otro lo llamo con return
    return promesas_cuadrado(1)
})
.then(ob=>{
    console.log(ob);
})
.catch(err =>{
    console.log(err)
})*/

// funcion asincron
 async function asincroa(params) {
        try {
            // codigo que funciona
            console.log('inicio de funcion as');
            // espera a que lleg
            let objeto = await promesas_cuadrado(1)
            
            console.log(`el valor es : ${objeto}`);

            objeto = await promesas_cuadrado(10)
            
            console.log(`el valor es : ${objeto}`);


         


        } catch (error) {
            
        }
}


asincroa();
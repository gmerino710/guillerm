export var nombre = 'pedro';

export function escribir(e) {
        console.log('pedrooo')
        console.log(e.type)
        console.log(e)
        console.log(e.key)
}



export function convert ($value) {

        const $paco = document.querySelector('#paco');

        $paco.textContent =`El valor de su vehiculo es ${$value.toUpperCase()}`;
        
  }

const $input = document.querySelector('#pass');

const $passw = document.querySelector('#password');



const $rpassw = document.querySelector('#rpassword');

const $msg = document.querySelector('#msg');


const $msgrr = document.querySelector('#msg_err');

const correcto = 'La contraseña debe tener almenos 8 caracteres'

const desigual = 'Los cambos  no son iguales'
var textContent = '';


//onkeyup="charcountupdate(this.value)s

function charcountupdate(str) {
    var lng = str.length;

        if (lng <8 || lng>0 ) {

            $input.style.setProperty('border-color', 'red');
            $msg.style.setProperty('color', 'red');
            $msg.textContent = correcto;
        }
       
       if(lng >=8) {
            $input.style.setProperty('border-color', 'green');
            $msg.textContent = '';
        }
    
        if(lng ==0) {
            $input.style.setProperty('border-color', '#4F4F4F');
            $msg.textContent = '';
        }
        
}






$rpassw.addEventListener('keyup',(e)=>{
    let pss = $passw.value;
    let pssr = e.target.value
   

    if (pssr == pss) {
      
        $passw.style.setProperty('border-color', 'green');
        $rpassw.style.setProperty('border-color', 'green');
        $msgrr.textContent = '';
    }
    
  
    if(pssr!=pss){

     
        
        $passw.style.setProperty('border-color', 'red');
        $rpassw.style.setProperty('border-color', 'red');
        $msgrr.textContent = desigual;
        $msgrr.style.setProperty('color', 'red');
    }
 

})

$passw.addEventListener('keyup',(e)=>{

    
    let pssr = $rpassw.value;
    let pss = e.target.value
   
    charcountupdate(pss)

    if (pssr == pss) {
      
        $passw.style.setProperty('border-color', 'green');
        $rpassw.style.setProperty('border-color', 'green');
        $msgrr.textContent = '';
    }
    
  
    if(pssr!=pss){

     
        
        $passw.style.setProperty('border-color', 'red');
        $rpassw.style.setProperty('border-color', 'red');
        $msgrr.textContent = desigual;
        $msgrr.style.setProperty('color', 'red');
    }
    
  

})




function compare (e) {
    
  }








const $body = document.querySelector('.body')

let img = ['ls.jpg','ps.jpg','critic.jpg']

let contador =0;



const change_img =  ()=>{
    contador++;
    $body.style.setProperty('background',`url(../js/img/${img[contador%img.length]}`); 

}




onload=function()
    {
        // Cargamos una imagen aleatoria
        change_img();
 
        // Indicamos que cada 5 segundos cambie la imagen
        setInterval(change_img,10000);
    }


/*
img.forEach((element,index) => {
            setInterval(() => {
               console.log(element)
            }, 2000);
            
    
})*/




/*


            img.forEach((element,index) => {
            
                setInterval(() => {
                        $body.style.setProperty('background',`url(../js/img/${element}`); 

                        console.log(element)
                       
                    }, 1000);
                
            });*/

/*
   
    
*/
    
// 


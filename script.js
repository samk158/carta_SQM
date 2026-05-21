/*========================
INICIO
=========================*/

const pantalla=

document.querySelector(
".pantallaInicio"
);

const carta=

document.querySelector(
".contenedor"
);

const sobre=

document.querySelector(
".sobre"
);

const musica=

document.getElementById(
"musica"
);

const firma=

document.getElementById(
"firma"
);

const final=

document.querySelector(
".overlayFinal"
);



/* abrir */

sobre.addEventListener(

"click",

()=>{

pantalla.classList.add(
"abrir"
);



setTimeout(()=>{

pantalla.classList.add(
"ocultarPantalla"
);

carta.classList.add(
"mostrarCarta"
);

},1200);



/* audio */

if(

musica

){

musica.volume=0;

musica.play();



let volumen=0;



let fade=

setInterval(()=>{

volumen+=0.01;



if(

volumen>=0.15

){

volumen=.45;

clearInterval(
fade
);

}



musica.volume=
volumen;

},180);

}



animarFirma();

}



);





/*========================
FIRMA
=========================*/

function animarFirma(){



if(

!firma

)return;



let texto=

firma.innerText;



firma.innerText="";



let i=0;



let escribir=

setInterval(()=>{

firma.innerHTML+=

texto.charAt(
i
);



i++;



if(

i>=texto.length

){

clearInterval(
escribir
);

}



},130);

}





/*========================
FINAL
=========================*/

window.addEventListener(

"scroll",

()=>{

let scroll=

window.scrollY+

window.innerHeight;



let total=

document.body.scrollHeight;



if(

scroll>

total-250

){

final.classList.add(

"mostrarFinal"

);

}

}

);





/*========================
RESPIRACION
=========================*/

setInterval(()=>{

document.querySelector(

".fondo"

)

.style.opacity=

0.92+

Math.random()*.08;

},2500);





/*========================
MENSAJE
=========================*/

console.log(

"Algunas historias no terminan. Solo aprenden a vivir en silencio."

);
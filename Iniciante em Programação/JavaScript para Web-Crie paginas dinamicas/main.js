function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

var listDeTeclas = document.querySelectorAll('.tecla');
let contador = 0

while (contador < listDeTeclas.length) {

    const tecla = listDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    tecla.onclick = function(){
        tocaSom(idAudio)
    };

    contador = contador + 1;

    console.log(contador);
}
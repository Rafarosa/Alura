function tocasSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

function tocasSomClap(){
    document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_pom').onclick = tocasSomPom;


var listDeTeclas = document.querySelectorAll('.tecla');
listDeTeclas [0].onclick = tocasSomClap;
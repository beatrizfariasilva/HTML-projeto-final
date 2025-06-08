function enviarmensagem(){

const nome = document.getElementById('nome').value.trim()
const mensagem =document.getElementById('mensagem').value.trim()

if (!nome || !mensagem){
    alert("Campos não informados");
    return;
}

const telefone = '5581984296768';

const texto = ` Olá meu nome é ${nome} e  gostaria de ${mensagem}`; 

const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

window.open(url, '_blank');

}

let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlide() {
    slides.forEach((img, i) => {
        img.style.opacity = i === index ? "1" : "0";
    });

    index = (index + 1) % slides.length;
}

document.addEventListener("DOMContentLoaded", () => {
    setInterval(showSlide, 4500);
});
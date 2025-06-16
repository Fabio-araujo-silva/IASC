const imagem = document.querySelector("#becker");
const home = document.querySelector("#primeiro");
const sobre = document.querySelector("#segundo");
const graduacao = document.querySelector("#terceiro")
const biblioteca = document.querySelector("#quarto")
const noticias = document.querySelector("#quinto")
const pessoas = document.querySelector("#sexto")
const navbar = document.querySelector(".navbar");
const card = document.querySelector(".card");
const luz = document.querySelector(".luz");

const body = document.querySelector("body");


// NAVBAR
navbar.addEventListener("mouseenter",() => {
    imagem.style.opacity = "1";
    
    
})
navbar.addEventListener("mouseleave",() => {
    imagem.style.opacity = "0";
    
})
home.addEventListener("mouseenter",() => {
    imagem.style.transform = "translateX(105px)";
    home.style.transform = "scale(1.2)";
    
    
})
home.addEventListener("mouseleave",() => {
    imagem.style.transform = "translateX(105px)";
    home.style.transform = "scale(1)";
    
})
sobre.addEventListener("mouseenter",() => {
    imagem.style.transform = "translateX(240px)";
    sobre.style.transform = "scale(1.2)";
 
    

})
sobre.addEventListener("mouseleave",() => {
    imagem.style.transform = "translateX(240px)";
    sobre.style.transform = "scale(1)";
  
    

})
graduacao.addEventListener("mouseenter",() => {
    imagem.style.transform = "translateX(390px)";
    graduacao.style.transform = "scale(1.2)";

})
graduacao.addEventListener("mouseleave",() => {
    imagem.style.transform = "translateX(390px)";
    graduacao.style.transform = "scale(1)";

})

biblioteca.addEventListener("mouseenter",() => {
    imagem.style.transform = "translateX(520px)";
    biblioteca.style.transform = "scale(1.2)";
    

})
biblioteca.addEventListener("mouseleave",() => {
    imagem.style.transform = "translateX(520px)";
    biblioteca.style.transform = "scale(1)";
    

})
noticias.addEventListener("mouseenter",() => {
    imagem.style.transform = "translateX(645px)";
    noticias.style.transform = "scale(1.2)";

})
noticias.addEventListener("mouseleave",() => {
    imagem.style.transform = "translateX(645px)";
    noticias.style.transform = "scale(1)";
    

})
pessoas.addEventListener("mouseenter",() => {
    imagem.style.transform = "translateX(780px)";
    pessoas.style.transform = "scale(1.2)";
   
   

})
pessoas.addEventListener("mouseleave",() => {
    imagem.style.transform = "translateX(780px)";
    pessoas.style.transform = "scale(1)";
  
  
    

})


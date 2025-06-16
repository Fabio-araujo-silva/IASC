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
const card1 = document.querySelector("#card1");
const card2 = document.querySelector("#card2");
const card3 = document.querySelector("#card3");
const card4 = document.querySelector("#card4");
const card5 = document.querySelector("#card5");
const card6 = document.querySelector("#card6");
const card7 = document.querySelector("#card7");


const cardOficial = [card1, card2, card3, card4, card5, card6,card7];

let i = 0;

const seta = document.querySelector("#setaDireita");

seta.addEventListener("click", () => {
    // incrementa o contador a cada clique

  
   
    
  
  
  if(i == 0){
    
    cardOficial[i].style.transform = "translateX(-100%)";
    cardOficial[i].style.opacity = "0";
    cardOficial[i+1].style.transform = "translateX(-110%)";
     cardOficial[i+2].style.transform = "translateX(-110%)";
     cardOficial[i+3].style.transform = "translateX(-110%)";
     cardOficial[i+3].style.opacity = "1";
   
    
    i++;
  }
  else if(i == 1){
    cardOficial[i].style.transform = "translateX(-200%)";
    cardOficial[i].style.opacity= "0";
     cardOficial[i+1].style.transform = "translateX(-230%)";
    cardOficial[i+1].style.opacity= "1";
     cardOficial[i+2].style.transform = "translateX(-230%)";
    cardOficial[i+2].style.opacity= "1";
    cardOficial[i+3].style.transform = "translateX(-230%)";
    cardOficial[i+3].style.opacity= "1";
    
    
    i++;
  }
  else if(i == 2){
    
    cardOficial[i].style.opacity = "0";
     cardOficial[i].style.transform = "translateX(-300%)";
     cardOficial[i+1].style.opacity = "1";
     cardOficial[i+1].style.transform = "translateX(-345%)";
     cardOficial[i+2].style.opacity = "1";
     cardOficial[i+2].style.transform = "translateX(-345%)";
       cardOficial[i+3].style.transform = "translateX(-345%)";
       cardOficial[i+3].style.opacity = "1";
      
    i++;
    
  }else if(i == 3){
    cardOficial[i].style.opacity = "0";
    cardOficial[i].style.transform = "translateX(-440%)";
    cardOficial[i+1].style.opacity = "1";
    cardOficial[i+1].style.transform = "translateX(-460%)";
    cardOficial[i+2].style.opacity = "1";
    cardOficial[i+2].style.transform = "translateX(-460%)";
    cardOficial[i+3].style.opacity = "1";
    cardOficial[i+3].style.transform = "translateX(-460%)";
     
     i++;
     

    
   
    
  }
  if(i == 4){
cardOficial.forEach((card, index) => {
    if (index <= 2) {
      card.style.opacity = "1";
      card.style.transform = "translateX(0%)";
    } else {
      card.style.opacity = "0";
      card.style.transform = "translateX(0%)";
    }
  });

  i = 0; // reinicia o contador


}
  
  
     
      
});
card1.addEventListener("mouseenter", () => {
  
    card2.style.filter = "brightness(0.5)";
    card3.style.filter = "brightness(0.5)";
    
    body.classList.add("luz");
});
card1.addEventListener("mouseleave", () => {
 card2.style.filter = "brightness(1)";
    card3.style.filter = "brightness(1)";
    body.classList.remove("luz");
    
});

card2.addEventListener("mouseenter", () => {
  
    card1.style.filter = "brightness(0.5)";
    card3.style.filter = "brightness(0.5)";
    
    body.classList.add("luz");
});
card2.addEventListener("mouseleave", () => {
 card1.style.filter = "brightness(1)";
    card3.style.filter = "brightness(1)";
    
    body.classList.remove("luz");
});

card3.addEventListener("mouseenter", () => {
  body.classList.add("luz");
    card1.style.filter = "brightness(0.5)";
    card2.style.filter = "brightness(0.5)";
    
});
card3.addEventListener("mouseleave", () => {
    body.classList.remove("luz");
 card1.style.filter = "brightness(1)";
    card2.style.filter = "brightness(1)";
   
});
card4.addEventListener("mouseenter", () => {
    body.classList.add("luz");
    card5.style.filter = "brightness(0.5)";
    card6.style.filter = "brightness(0.5)";
    card7.style.filter = "brightness(0.5)";
})
card4.addEventListener("mouseleave", () => {
    body.classList.remove("luz");
    card5.style.filter = "brightness(1)";
    card6.style.filter = "brightness(1)";
    card7.style.filter = "brightness(1)";
});
card5.addEventListener("mouseenter", () => {
    body.classList.add("luz");
    card4.style.filter = "brightness(0.5)";
    card6.style.filter = "brightness(0.5)";
    card7.style.filter = "brightness(0.5)";
})
card5.addEventListener("mouseleave", () => {
    body.classList.remove("luz");
    card4.style.filter = "brightness(1)";
    card6.style.filter = "brightness(1)";
    card7.style.filter = "brightness(1)";
});
card6.addEventListener("mouseenter", () => {
    body.classList.add("luz");
    card4.style.filter = "brightness(0.5)";
    card5.style.filter = "brightness(0.5)";
    card7.style.filter = "brightness(0.5)";
})
card6.addEventListener("mouseleave", () => {
    body.classList.remove("luz");
    card4.style.filter = "brightness(1)";
    card5.style.filter = "brightness(1)";
    card7.style.filter = "brightness(1)";
});

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

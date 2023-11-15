const input = document.getElementById("input");
const botao = document.getElementById("adivinhar");
const resposta = document.getElementById("resposta");

let numero = parseInt(Math.random() * 101);
botao.addEventListener("click", e => {
    let chute = input.value.trim();
    if(chute == numero){
        resposta.innerHTML = `Parabéns, você acertou! O número secreto é ${chute}`;
        resposta.style.color = "green"

    }else if(chute < numero){
        resposta.innerHTML = `Poxa, você errou... O número secreto é maior que ${chute}`;
        resposta.style.color = "#DA1E26";
    }else if(chute > numero){
        resposta.innerHTML = `Poxa, você errou... O número secreto é menor que ${chute}`;
        resposta.style.color = "#DA1E26";
    }
});
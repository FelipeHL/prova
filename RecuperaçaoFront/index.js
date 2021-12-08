var aviso = document.getElementById("tipo");
var mensagem = document.getElementById("mensagem");
var body = document.querySelector("body");


function adicionar() {
            let tip = aviso.options[aviso.selectedIndex].text
            let mensagens = mensagem.value

            console.log(tip)
            console.log(mensagens)

            let card = document.createElement("div");
            card.className = "card"

           
           let nome = document.createElement("p");
           nome.innerHTML = tip;

           let mensagem1 = document.createElement("p")
           mensagem1.innerHTML = mensagens;
           
            
            card.appendChild(nome)
            card.appendChild(mensagem1)
            body.appendChild(card)
            
            if(tipo == "Normal"){
                card.style.backgroundColor = "Grey"
            }
            if(tipo == "Importante"){
                card.style.backgroundColor = "Yellow"
            }
            if(tipo == "Urgente"){
                card.style.backgroundColor = "Red"
            }
}
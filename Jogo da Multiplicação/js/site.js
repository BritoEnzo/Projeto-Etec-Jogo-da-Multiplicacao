
const numero1 = document.querySelector('#idNumero1');
const numero2 = document.querySelector('#idNumero2');
const resposta = document.querySelector('#idResposta');
const pontuacao = document.querySelector('#idPontos');
var correta = 0;
var pontos = 0;
var jogo = false;
var relogio = null;

function sortear(){
    valor1 = Math.ceil(Math.random()*10);
    numero1.value = valor1;
    valor2 = Math.ceil(Math.random()*10);
    numero2.value = valor2;
    correta = valor1 * valor2
}

function verifica(){
    if(jogo == true){
        if(resposta.value != ""){

        
            if(resposta.value == correta){
                pontos++;
                pontuacao.value = "Pontos: "+pontos
            }else{
                pontos--;
                pontuacao.value = "Pontos: "+pontos
            }
            iniciar();
        }
    }
}
function iniciar(){
    sortear();
    resposta.value = "";
    resposta.focus();
}


iniciar();

document.addEventListener('keyup',(event)=>{
    if(event.key == "Enter"){
        verifica(); 
    }
})


const display = document.querySelector('#display')

function iniciar_timer(){
    if(jogo == false){
        jogo = true
        relogio = setInterval(()=>{
            minutos = parseInt(tempo/60,10);
            segundos = parseInt(tempo%60,10);

            display.innerHTML = minutos+":"+segundos;
            tempo--;


    if(segundos < 10){        
            display.innerHTML = minutos+":0"+ segundos;
        }
        else{
            display.innerHTML = minutos+":"+segundos;
        }
            if(tempo<1){
                clearInterval(relogio);
                jogo = false
                display.innerHTML = "O tempo acabou!"
            }



        },1000);
    }

}

function tempo_timer(tempo_timer){
    if(relogio != null){
        clearInterval(relogio)
        jogo = false
    }
    tempo = tempo_timer*60
}
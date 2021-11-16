let order = []; //variável para as luzes que vão acender no genius
let clickedOrder = []; //Ordem dos cliques
let score = 0; //contador

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//cria ordem aleatória de cores
let shuffleOrder = () => { //variável que vai guardar um número a cada rodada
    let colorOrder = Math.floor(Math.random() * 4); //sorteia um número de 0 a 3
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) { //o tamanho que estiver no order será o número de vez que ele irá rodar
        let elementColor = createColorElement(order[i]); //cada elemento do indíce i que será gerado cada vez que o for rodar,
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a proxima cor
let lightColor = (element, number) => { //light color recebe a função que vai acender e apagar a luz
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
        }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}


//checa se os botões clicados são os mesmos da ordem gerada no jogo 
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) { 
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();    

    }
}

//funcao para o clique do usuario
let click = (color) => { //click é igual a uma função que recebe uma color
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');//recebe selected

    setTimeout(() => {
        createColorElement(color).classList.remove('selected'); //retira a classe recebida
        checkOrder();//checa se as cores clicadas correspondem as cores que acenderam
    },250);
   
}

//funcao que retorna a cor
let createColorElement = (color) => { //função que vai receber a color
    if(color == 0) { //no começo do código 
        return green;
    } else if(color == 1) {
        return red;
    } else if(color == 2) {
        return yellow;
    } else if(color == 3) {
        return blue;
    }
}
//funcao para proximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
} 

//funcao para gameover
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`); //AQUI É CRASE!!!
    order = [];
    clickedOrder = [];

    playGame();//função de começar
}
//função de inicio do jogo
let playGame = () => { //zera o score e começa o jogo de novo
    alert('Bem-vindo ao Genius! Iniciando novo jogo!')
    score = 0;

    nextLevel();
}
//adicionando os eventos dos clicks
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame(); //chama a função para começar o jogo
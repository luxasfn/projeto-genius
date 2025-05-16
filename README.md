
# Projeto Genius

Este projeto é uma recriação do famoso jogo eletrônico **Genius** (ou **Simon Game**) utilizando **HTML**, **CSS** e **JavaScript puro**. O objetivo é testar a memória do jogador, que precisa repetir sequências de cores e sons que vão ficando progressivamente mais difíceis.

## Como funciona

O jogo começa com o acendimento aleatório de uma cor. O jogador precisa clicar na mesma cor. A cada rodada bem-sucedida, uma nova cor é adicionada à sequência, que deve ser repetida na ordem correta. O jogo continua até que o jogador erre a sequência.

## Funcionalidades

- Geração aleatória de sequências
- Validação da sequência clicada pelo jogador
- Feedback visual e sonoro
- Reinício automático após erro
- Níveis crescentes de dificuldade

## 🛠️ Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**

## Estrutura de Arquivos

```
projeto-genius/
├── index.html         # Estrutura base do jogo
├── style.css          # Estilização das cores e botões
└── script.js          # Lógica do jogo Genius
```

## ▶Como jogar

1. Abra o arquivo `index.html` em um navegador moderno (Google Chrome, Firefox, etc).
2. Clique na área central para iniciar o jogo.
3. Siga a sequência de luzes clicando nas cores corretas.
4. Tente chegar o mais longe possível!

## Aprendizados

Durante o desenvolvimento deste projeto, diversos conceitos fundamentais de **desenvolvimento web com JavaScript puro** foram consolidados, com destaque para:

### Manipulação do DOM
- Prática intensa com `document.querySelector`, `addEventListener` e `classList` para alterar dinamicamente o estado visual dos elementos HTML conforme a interação do usuário.
- Controle visual das cores através da adição e remoção de classes CSS em tempo real.

### Estruturação lógica
- Implementação de algoritmos simples, mas precisos, para gerar sequências aleatórias e comparar com a entrada do usuário.
- Controle de fluxo de jogo por meio de estados, como `sequence`, `userSequence`, `level` e `lockInput`.

### Gerenciamento de tempo e interações
- Uso de funções como `setTimeout` para criar intervalos controlados entre os flashes das cores, simulando o ritmo do jogo original.
- Tratamento de cliques apenas em momentos permitidos, evitando que o usuário interaja enquanto a sequência ainda está sendo exibida.

### Feedback multimodal
- Integração de sons e efeitos visuais para tornar a experiência mais imersiva.
- Criação de uma resposta imediata aos acertos e erros do usuário, com mensagens e animações correspondentes.

### Boas práticas e organização
- Separação clara entre HTML (estrutura), CSS (estilo) e JavaScript (lógica).
- Declaração de funções reutilizáveis e uso de arrays para manter o controle das sequências.
- Desenvolvimento de lógica própria sem depender de bibliotecas externas, o que fortalece a compreensão do funcionamento da linguagem JavaScript em seu nível mais puro.



Este projeto está sob a licença MIT. Sinta-se à vontade para usar, modificar e distribuir.


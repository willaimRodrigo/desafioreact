# Desaio Genio da Lampada Loreal

Essa é uma aplicação simples ministrada pela escola [VaiNaWeb], no curso de front end.

Com as tecnologias [Html], [Sass], [React].

## Sobre o projeto

Esse é um desafio no módulo de react usando o [useState], o hook do react na prática. O desafio consite em usar o useState para alterar o estado da variavél e alterar a imagem, enyre lâmpada e gênio da lampada.
Como plus, componentizei com uma página e usei [props], para passar as propriedades do estado da variavél para o componente e adicionei tanto o clicque na imagem da lâmpada para aparecer o gênio, quanto clicar 3 vezes no botão para aparecer o gênio.

### Código

`app` no app apenas chamei o useState, importando o hook do react, as variavéis que tinham o useState eram count e lampada. Dentro do return no app, chame o componente [Page] e passei por props o count, setCount, lamparina, setLamparina.

`Page` o page recebe os imports das imagens do gênio, lampada e a do castelo, que é usada como background da aplicação. Dentro da função Page, tenho duas funções, um [trocaLampada] e uma [clique]. No return temos um H1 que contém o título da aplicação, uma div que recebe a imagem com ternário, para renderizar uma ou outra dependendo da condição, se é false ou true recebendo o onClick e chamando a função trocarLampada. E abaixo vem o button, que chama pelo onClick a função clique.

`trocarLampada` essa função somente troca o estado inicial da variável lamparina, que inicialmente é falso e como o clique se torna verdadeiro.

`clique` essa função tem um contador que armazena quantos cliques foram dados, assim que atinge os 3 cliques, ele altera o estado da variavel lamparina para true e zera o contador para quando somar mais 3 cliques, altera novamente para false.

`Styles` uma pasta que recebe os arquivos [globalStyles], que recebe as configurações globais da aplicação, [reset], com os resets gerais da página, [index] que recebe os imports para que não precisemos chamar inúmeros imports no app e ficar poluído. O que deixa um código limpo e de fácil manutenção.



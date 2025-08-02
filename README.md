# SuperHeroes Card Generator

Aplicação desenvolvida com HTML, CSS e JavaScript puro. Este projeto busca e exibe informações (nome e imagem) de super-heróis ou super-heroínas aleatórios utilizando a SuperHero API.

## Funcionalidades

- Busca heróis aleatórios gerando um ID entre 1 e 731
- Exibe nome e imagem do super-herói ou heroína
  
## Tecnologias Utilizadas

- HTML5 — estrutura semântica da aplicação  
- CSS3 — estilização e layout responsivo  
- JavaScript — lógica de sorteio, chamadas à API e manipulação do DOM  
- SweetAlert2 — exibição de alertas amigáveis em caso de erro  

## Como Funciona

1. O usuário clica no botão **Sortear** para gerar um número aleatório.  
2. O número é um ID usado para buscar os dados do super-herói na SuperHero API.  
3. A aplicação atualiza a imagem e o nome na tela com os dados retornados.  
4. Se houver algum erro na requisição, um alerta é exibido informando o problema.  

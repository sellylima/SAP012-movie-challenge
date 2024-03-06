# Movie Challenge

## Índice

- [1. Preâmbulo](#1-preâmbulo)
- [2. Resumo do Projeto](#2-resumo-do-projeto)
- [3. Objetivos de Aprendizagem](#3-objetivos-de-aprendizagem)
- [4. Considerações Gerais](#4-considerações-gerais)
- [5. Considerações Técnicas](#5-considerações-técnicas)
- [6. Critérios mínimos de aceitação do projeto](#6-critérios-mínimos-de-aceitação-do-projeto)
- [7. Deploy](#7-deploy)
- [8. Considerações para solicitar seu feedback do projeto](#8-considerações-para-solicitar-seu-feedback-do-projeto)
- [9. Dicas, guias e leituras complementares](#9-dicas-guias-e-leituras-complementares)

---

## 1. Preâmbulo

A forma como assistimos à filmes mudou radicalmente nos últimos anos devido,
em parte, ao surgimento dos serviços de
[_streaming_](https://pt.wikipedia.org/wiki/Streaming)
que nos permitem fazê-lo de onde estivermos e a qualquer momento. O melhor
reflexo desse fenômeno é o sucesso da Netflix, HBO, Disney+ e outros.

Acreditamos que há uma grande oportunidade de propor produtos/experiências
inovadoras de todos os tipos usando dados de filmes
(diretores, atores, sagas, sequências, datas, etc.). Podemos pensar em jogos,
comunidades, catálogos, recomendações com base em preferências pessoais, etc.
(apenas para citar algumas ideias óbvias).

![Filmes](https://live.staticflickr.com/117/257368762_38bf6fcf9f_h.jpg)

## 2. Resumo do projeto

Neste projeto, você criará uma página da web destinada a visualizar, filtrar e
ordenar o catálogo de filmes da
[_The Movie Database API V3_](https://developer.themoviedb.org/docs).
Esta página pode servir como um catálogo de filmes geral, mas também, se você
quiser, pode considerar a possibilidade de projetá-la para um público específico
com preferências como "filmes western" ou "filmes dos anos 80", por exemplo.

Ainda que a decisão do que fazer é inteiramente sua, há algumas considerações
gerais que se apresentam a seguir. Pode atender esses requisitos em
projetos muitos distintos, depende de sua criatividade e do entendimento
dos seus potenciais usuários!

## 3. Objetivos de aprendizagem

Reflita e depois enumere os objetivos que quer alcançar e aplique no seu projeto. Pense nisso para decidir sua estratégia de trabalho.

### HTML

- [ ] **Uso de HTML semântico**

  <details><summary>Links</summary><p>

  * [HTML semântico](https://curriculum.laboratoria.la/pt/topics/html/html5/semantic-html)
  * [Semantics in HTML - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
</p></details>

### CSS

- [ ] **Uso de seletores de CSS**

  <details><summary>Links</summary><p>

  * [Intro a CSS](https://curriculum.laboratoria.la/pt/topics/css/css/intro-css)
  * [CSS Selectors - MDN](https://developer.mozilla.org/pt_BR/docs/Web/CSS/CSS_Selectors)
</p></details>

- [ ] **Modelo de caixa (box model): borda, margem, preenchimento**

  <details><summary>Links</summary><p>

  * [Modelo de Caixa e Display](https://curriculum.laboratoria.la/pt/topics/css/css/boxmodel-and-display)
  * [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  * [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  * [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  * [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
</p></details>

- [ ] **Uso de flexbox em CSS**

  <details><summary>Links</summary><p>

  * [A Complete Guide to Flexbox - CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  * [Flexbox Froggy](https://flexboxfroggy.com/#pt-br)
  * [Flexbox - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
</p></details>

### Web APIs

#### DOM (Document Object Model)

- [ ] **Uso de seletores de DOM**

  <details><summary>Links</summary><p>

  * [Modificando o DOM](https://curriculum.laboratoria.la/pt/topics/browser/dom/1-dom-methods-selection)
  * [Introdução ao DOM - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction)
  * [Locating DOM elements using selectors - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
</p></details>

- [ ] **Manipulação de eventos de DOM (listeners, propagação, delegação)**

  <details><summary>Links</summary><p>

  * [Introdução a eventos - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Events)
  * [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener)
  * [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/removeEventListener)
  * [Objeto Event](https://developer.mozilla.org/pt-BR/docs/Web/API/Event)
</p></details>

- [ ] **Manipulação dinâmica de DOM**

  <details><summary>Links</summary><p>

  * [Introdução ao DOM](https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM/Introdu%C3%A7%C3%A3o)
  * [Node.appendChild() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/appendChild)
  * [Document.createElement() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement)
  * [Document.createTextNode()](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createTextNode)
  * [Element.innerHTML - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML)
  * [Node.textContent - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/textContent)
</p></details>

### JavaScript

- [ ] **Variáveis (declaração, atribuição, escopo)**

  <details><summary>Links</summary><p>

  * [Valores, tipos de dados e operadores](https://curriculum.laboratoria.la/pt/topics/javascript/basics/values-variables-and-types)
  * [Variáveis](https://curriculum.laboratoria.la/pt/topics/javascript/basics/variables)
</p></details>

- [ ] **Uso de condicionais (if-else, switch, operador ternário, lógica booleana)**

  <details><summary>Links</summary><p>

  * [Estruturas condicionais e repetitivas](https://curriculum.laboratoria.la/pt/topics/javascript/flow-control/conditionals-and-loops)
  * [Tomando decisões no seu código — condicionais - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals)
</p></details>

- [ ] **Uso de laços (while, for, for..of)**

  <details><summary>Links</summary><p>

  * [Laços (Loops)](https://curriculum.laboratoria.la/pt/topics/javascript/flow-control/loops)
  * [Laços e iterações - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration)
</p></details>

- [ ] **Funções (params, args, return)**

  <details><summary>Links</summary><p>

  * [Funções (controle de fluxo)](https://curriculum.laboratoria.la/pt/topics/javascript/flow-control/functions)
  * [Funções clássicas](https://curriculum.laboratoria.la/pt/topics/javascript/functions/classic)
  * [Arrow Functions](https://curriculum.laboratoria.la/pt/topics/javascript/functions/arrow)
  * [Funções — blocos reutilizáveis de código - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Functions)
</p></details>

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descritivos (Nomenclatura e Semântica)**

- [ ] **Diferença entre expressões (expressions) e declarações (statements)**

#### Tipos de dados

- [ ] **Diferenciar entre tipos de dados primitivos e não primitivos**

- [ ] **Arrays (arranjos)**

  <details><summary>Links</summary><p>

  * [Arranjos](https://curriculum.laboratoria.la/pt/topics/javascript/arrays)
  * [Array - MDN](https://developer.mozilla.org//pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/)
  * [Array.prototype.sort() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  * [Array.prototype.forEach() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  * [Array.prototype.map() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  * [Array.prototype.filter() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  * [Array.prototype.reduce() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
</p></details>

- [ ] **Objetos (key, value)**

  <details><summary>Links</summary><p>

  * [Objetos em JavaScript](https://curriculum.laboratoria.la/pt/topics/javascript/objects/objects)
</p></details>

#### Testing em Javascript

- [ ] **Testes unitários (unit tests)**

  <details><summary>Links</summary><p>

  * [Introdução ao Jest - Documentação oficial](https://jestjs.io/docs/pt-BR/getting-started)
</p></details>

#### Módulos

- [ ] **Módulos de ECMAScript (ES modules)**

  <details><summary>Links</summary><p>

  * [import - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import)
  * [export - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export)
</p></details>

### Controle de Versões (Git e GitHub)

#### Git

- [ ] **Git: Instalação e configuração**

- [ ] **Git: Controle de versão com git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **Git: Integração de mudanças entre ramos (branch, checkout, fetch, merge, reset, rebase, tag)**

#### GitHub

- [ ] **GitHub: Criação de contas e repositórios, configuração de chave SSH**

- [ ] **GitHub: Implantação com GitHub Pages**

  <details><summary>Links</summary><p>

  * [Site oficial do GitHub Pages](https://pages.github.com/)
</p></details>

- [ ] **GitHub: Colaboração pelo Github (branches | forks | pull requests | code review | tags)**

### Centrado no usuário

- [ ] **Desenhar e desenvolver um produto ou serviço colocando as usuárias no centro**

### Design de produto

- [ ] **Criar protótipos para obter feedback e iterar**

- [ ] **Aplicar os princípios de desenho visual (contraste, alinhamento, hierarquia)**

### Pesquisa

- [ ] **Planejar e executar testes de usabilidade**

## 4. Considerações gerais

Este projeto deve ser resolvido individualmente.

O prazo estimado para concluir o projeto é de 2 a 3 Sprints.

Os testes unitários devem cobrir no mínimo 90% de _statements_,
_functions_, _lines_ e _branches_.

Além disso, você deve definir a estrutura de pastas e arquivos que
considerar necessária.
Portanto, os testes e a configuração necessária para executá-los
serão de sua responsabilidade, mas você pode se basear nos projetos anteriores.

## 5. Considerações Técnicas

A aplicação deve ser uma _Single Page App_.

A aplicação não precisa ser _responsiva_.

Para poder usar a API da
[_The Movie Database API V3_](https://developer.themoviedb.org/docs),
você deve criar uma conta e, em seguida, uma chave de acesso (_key_)
e usá-la em cada solicitação que fizer ao servidor. Lembre-se de que
você tem um limite máximo de 1.000 solicitações diárias à API por cada
[IP](https://pt.wikipedia.org/wiki/Endere%C3%A7o_IP), portanto, aconselhamos
a fazer um uso responsável desse recurso gratuito.

## 6. Critérios mínimos de aceitação do projeto

### Protótipo de Baixa Fidelidade

O [_Product Owner_](https://www.youtube.com/watch?v=r2hU7MVIzxs&t=202s)
nos fornece uma primeira iteração do protótipo de baixa fidelidade da
aplicação nesta [imagem](./docs/movie-list.png) e nesta
[outra](./docs/movie-detail.png).

### Definição do Produto

O
[_Product Owner_](https://www.youtube.com/watch?v=r2hU7MVIzxs&t=202s)
nos apresenta
este _backlog_ que é o resultado de seu trabalho com o cliente até
o momento.

---

#### [História do Usuário 1] Lista de Filmes

Eu, como usuária, quero visualizar um catálogo de filmes em uma tabela
(linhas e colunas).

##### Critérios de aceitação

- Deve ser utilizado o _endpoint_
[/discover/movie](https://developer.themoviedb.org/reference/discover-movie).
- A aplicação deve incluir paginação para explorar o catálogo por páginas.
- Cada filme deve exibir pelo menos: pôster, título original e ano de lançamento.

##### Definição de Pronto

- Os componentes desenvolvidos devem ter testes unitários.

---

#### [História do Usuário 2] Detalhes de um Filme

Eu, como usuária, quero consultar os detalhes de um filme.

##### Critérios de Aceitação

- Deve ser usado o _endpoint_
[/movie/{movie_id}](https://developer.themoviedb.org/reference/movie-details).
- Para o filme, devem ser exibidos pelo menos: pôster, título original, ano
de lançamento, gêneros, média de votação e total de votos.
- A interface deve permitir retornar à lista de filmes, mantendo o filtro
e a ordenação.

##### Definição de Pronto

- Os componentes desenvolvidos devem ter testes unitários.

---

#### [História do Usuário 3 - Hacker Edition] Filtro e Ordenação

Eu, como usuária, quero filtrar e ordenar o catálogo de filmes usando os
critérios suportados pela _TheMovie Database API V3_.

##### Critérios de Aceitação

- Para filtrar, deve ser usado o _endpoint_
[/discover/movie](https://developer.themoviedb.org/reference/discover-movie),
e um ou mais de seus parâmetros, como, por exemplo, _with_genres_.
- Para ordenar, deve ser usado o _endpoint_
[/discover/movie](https://developer.themoviedb.org/reference/discover-movie),
e um ou mais de seus parâmetros, como, por exemplo, _sort_by_.
- A paginação deve manter o filtro e a ordenação.
- Cada filme deve exibir pelo menos: pôster, título original e ano de lançamento.

##### Definição de Pronto

- Os componentes desenvolvidos devem ter testes unitários.

---

## 7. Deploy

Você pode escolher o provedor (ou provedores) que preferir, juntamente com
o mecanismo de deploy e estratégia de hospedagem. Recomendamos explorar
as seguintes opções:

- [Vercel](https://vercel.com/) é uma plataforma que permite
fazer deploy da nossa aplicação web estática (HTML, CSS e JavaScript) e também
permite fazer deploy de aplicativos da web que são executados no servidor (Node.js).
- [Netlify](https://www.netlify.com/) é semelhante ao Vercel, sendo uma
plataforma que permite fazer deploy da nossa aplicação web estática
(HTML, CSS e JavaScript) e também permite fazer deploy de aplicativos
da web que são executados no servidor (Node.js).

## 8. Considerações para solicitar seu feedback do projeto

Antes de agendar seu feedback do projeto com um coach, certifique-se de que seu projeto:

- [ ] Tenha protótipo de alta fidelidade no Figma
- [ ] Atende a todos os [critérios mínimos de aceitação](#6-criterios-minimos-de-aceitacao-do-projeto)
- [ ] Está hospedado no GitHub
- [ ] Está com o [deploy](#7-Deploy) realizado
- [ ] Possui um README com a definição do produto

Lembre-se de fazer uma autoavaliação dos objetivos de aprendizagem e habilidades
pessoais em seu painel de estudante.

Se você não concluiu todos os itens acima, não consideramos que você está pronto
para sua sessão de feedback do projeto.

## 9. Dicas, guias e leituras complementares

### Protótipo de Alta Fidelidade

Com base no protótipo de baixa fidelidade fornecido, crie um protótipo de alta
fidelidade no Figma. Defina uma paleta de cores e um design gráfico. Tente concluir
isso em 1 ou 2 dias.

### Explore e consuma a API do The Movie Database

Explore a [documentação](https://developer.themoviedb.org/docs) da API do
The Movie Database. Comece lendo a seção
[Getting Started](https://developer.themoviedb.org/docs/getting-started),
depois
[AUTHENTICATION --> Application](https://developer.themoviedb.org/docs/authentication-application)
e, finalmente, as referências dos endpoints
[/discover/movie](https://developer.themoviedb.org/reference/discover-movie)
e
[/movie/{movie_id}](https://developer.themoviedb.org/reference/movie-details).

Em seguida, crie uma conta e gere uma chave (key) de acesso para consumir a API.

Finalmente, faça solicitações HTTP de teste à API usando ferramentas como
[Postman](https://www.postman.com/) ou
[REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client).
Identifique os cabeçalhos, corpo, verbos, códigos de resposta
e codificações das solicitações.

### Planeje a implementação da primeira história de usuário

Pegue a primeira história de usuário e divida-a em tarefas menores. Identifique
a ordem e a prioridade de cada tarefa. Documente seu planejamento no Trello ou
Github Project.

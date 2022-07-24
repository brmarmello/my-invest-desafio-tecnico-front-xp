# Boas vindas ao repositório de Bruno Marmello/XP!

Sou aspirante à Software Engineer na XP e aluno da Trybe terminando o módulo de Back-End na Turma XP/Tribo A.
Esse repositório tem o desafio técnico para a oportunidade de Mobile, o App my-invest.

De agora em diante, te convido para ir comigo nessa jornada que vou apresentar abaixo.  _Desafio Mobile/Front-End - Ingresso para o foguete chamado XP_! #vqv 🚀

Aqui você vai encontrar os detalhes das minhas tomadas de decisão na abordagem do desafio; instrução para compilar e executar o projeto e outras infos importantes.


# Documentação do Projeto:

Aqui você terá acesso ao contexto geral de todo App, desde como instalar e rodar o projeto, ou seja, ter o App rodando aí no seu celular, saber detalhes do desenvolvimento, tecnologias envolvidas, etc. Para navegar por esta documentação, basta clicar nas opções abaixo.

<details>
  <summary><strong>🗂 Resumo do Projeto</strong></summary><br />

  Esta é uma aplicação mobile com intuito de atuar como uma carteira digital responsável por comprar e vender ações no mercado de financeiro. Chamei ela carinhosamente de "my-invest" por ser um nome pequeno, sonoro e que representa bem sua utilidade. Obviamente é um nome fictício e não houve nenhuma pesquisa nos órgãos de registro de marcas.

  Para o desenvolvimento utilizei:
    
  1️⃣ **JavaScript com React Native -** Nunca havia estudado ou usado esta ferramenta, mas quando descobri no processo que poderia fazer uma aplicação mobile e me candidatar para área me vi realizado e arrisquei essa ferramenta para desenvolver o Front-End, por já ter estudado React na Trybe e a linguagem ser a mesma, salvo algumas diferenças como sintaxe, libs, etc.
    
  2️⃣ **Expo e Expo Go -** Por falta de dispositivos com sistema operacional iOS, optei por instalar o React Native e algumas dependências com a lib Expo que conta com o App Expo Go nas lojas de aplicativos Android e Apple para que o projeto rode facilmente nos smartphones e iphones. Também não conhecia esta ferramenta e usei pela primeira vez.

  3️⃣ **Firebase -** Para o Back-End, mesmo sem conhecer também essa ferramenta, descobri o poder do Firebase. Ferramenta responsável por criar e administrar banco de dados, gerenciar requisições, fazer de forma rápida e segura autenticações e validações e qualquer outra ação dos bastidores do projeto, onde tudo acontece. Foi instalado também o Firebase App, para instalar usei a biblioteca React Native Firebase, que descobri ser a melhor opção atualmente para trabalhar com Firebase no eco sistema React Native. Ela foi instalada como uma biblioteca nativa, o que permite usar todos os recursos do Firebase, incluindo a função de realtime (se for implementado), consumir uma base de dados(API) e fazer autenticações.

  4️⃣ **Ferramentas Complementares -** Além das dependências exigidas pelo projeto, usei algumas libs como a Collection, Animatable, React Navigation e algumas para fazê-lo funcionar melhor, como: Screens, Safe Area Context, Stack, sem esquecer de citar o nodeJS e o VS Code como editor de código, terminal e outas funções.

  Telas da Aplicação:

    • WELCOME - Tela de Boas-Vindas Animada;
    • SIGNIN - Tela de Login;
    • SIGNUP - Tela de Cadastro;
    • WALLET - Tela que liste todas as ações disponíveis (Carteira Digital);
    • BYSELL - Tela de Compra/Venda de Ações;
    • DEPWITDRA - Tela de Depósito e Saque.

  Padrão Cromático:

    • AMARELO: #FFC708 || rgb(255,199,8);
    • PRETO: #000000 || rgb(0,0,0);
    • BRANCO BG: #EFEEEE || rgb(239,238,238).

  Cabe observar, que não tive todas as competências técnicas necessárias para entregar o projeto completo e funcional como planejei. Foi uma consequência da minha tomada de decisão de investir em uma área - mobile - que nunca havia tido contato. Demorei muito estudando praticamente todas as principais ferramentas utilizadas enquanto desenvolvia e isso me colocou em um ciclo demorado de tentativas e erros, me deixando sem tempo para ter sucesso no produto final, mas certamente me envolvendo ainda mais com um sonho cada vez mais próximo de se tornar real - o de desenvolver para iOS.
</details>

<details>
  <summary><strong>🤷🏽‍♀️ Como Instalar e Rodar o App "my-invest"?</strong></summary><br />

  1. No seu celular, acesse a loja de aplicativos para o seu sistema operacional, Baixe e Instale o App Expo Go;
  [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR&gl=US).<br />
  [iOS App Store](https://apps.apple.com/br/app/expo-go/id982107779).
  
  <strong>Com o Expo Go instalado e aberto podemos ir para o computador!</strong>

  2. Clone o repositório:
	* `git clone git@github.com:brmarmello/my-invest-desafio-tecnico-front-xp.git`.
  - Entre na pasta do repositório que você acabou de clonar:
	* `cd my-invest-desafio-tecnico-front-xp`

  3. Instale as dependências:
	*`npm install`
</details>
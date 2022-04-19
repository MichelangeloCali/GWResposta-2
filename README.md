# Layout do projeto
![resposta2](https://user-images.githubusercontent.com/90471567/164086609-ee65c2d0-c476-4fc6-9ab9-fb8867a731c5.jpg)


# GWResposta-2
Resposta da 2º questão do teste da GW.

# Descrição
A questão 2º pedia para "passar a lista de arquivos texto em um diretório específico, e nestes arquivos deve possuir em seu conteúdo números de telefone em um formato específico que você deve determinar". Dessa forma, criei uma pasta com 10 arquivos ``.txt`` contendo um número de telefone, cada arquivo. Utilizei módulo ``fs`` File System e com a função ``readdirSync``, utilizando ainda o ``forEach``, pude acessar os arquivos dentro da pasta ``phones``.
Tendo os arquivos contido dentro do diretório, declarei ``AsyncFunction``, utilizando também o módulo ``readline`` com a função ``createInterface`` para ler o conteúdo (telefones) de todos os arquivos .txt, linha por linha, com módulo ``rl.on("line", (line) => {console.log(`Line from file: ${line}`);})`` na linha 17 é dado um console.log no conteúdo, imprimindo linha por linha no terminal todos os números de telefones contido nos arquivos de texto.

# Como rodar o programa
Basta o usuário acessar o terminal através de sua IDE com comando ``node script.js``, também tem a opção de acessar pela linha de comando do próprio Node JS, acessando o diretório onde o programa se encontra.

# Ferramentas utilizadas
Node Js, Javascript e VSCode IDE.

# Desenvolvedor
LinkedIn:
https://www.linkedin.com/in/michelangelocali/

E-mail:
michelangelocali@hotmail.com

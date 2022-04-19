const testFolder = "./phones";
const fs = require("fs");

const events = require("events");
const readline = require("readline");

fs.readdirSync(testFolder).forEach(async (file) => {
  //Comando para listar os arquivos .txt criados no diretório "phones":
  console.log(file);

  //Módulo Readline do NodeJS para ler linha por linha:
  const rl = readline.createInterface({
    input: fs.createReadStream("phones/" + file),
    crlfDelay: Infinity,
  });

  rl.on("line", (line) => {
    console.log(`Line from file: ${line}`);
  });
  //espera o evento do print do conteudo dos arquivos para fechar os arquivos já lidos, evitando que fiquem abertos.
  await events.once(rl, "close");
});

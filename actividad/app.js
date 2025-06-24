const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

// console.log(chalk.green("✅ Todo Ok"));

// 1 crear la carpeta nota (si no existe)
const notesDir = path.join(__dirname, 'notas');
if(!fs.existsSync(notesDir)){
    fs.mkdirSync(notesDir);
    console.log(chalk.green("✅ Carpeta creada con exito.!"));
} else {
    console.log(chalk.yellow("⚠️ La carpeta ya existia.!"));
}

// 2. Crear una nota simple
const notaPath = path.join(notesDir, 'nota1.txt');
const contenido = "Esta es mi primera nota creada con fs";

fs.writeFileSync(notaPath, contenido);
console.log(chalk.green("✅ Nota creada con exito.!"), notaPath);


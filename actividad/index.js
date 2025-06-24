const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const NOTAS_DIR = path.join(__dirname, 'notas');

// crear la carpeta si no existe
if(!fs.existsSync(NOTAS_DIR)){
    fs.mkdirSync(NOTAS_DIR);
};

// Crear una Nota
function crearNota(nombre, contenido){
    const filePath = path.join(NOTAS_DIR, `${nombre}.txt`);
    fs.writeFileSync(filePath, contenido, 'utf-8');
    console.log(chalk.green("✅ Nota creada con exito.!"));
}

// Listar todas las Notas
function listarNotas() {
    const archivos = fs.readdirSync(NOTAS_DIR);
    console.log("🗂 Notas");
    archivos.forEach(archivo => console.log("- " + archivo));
}

// Leer una nota especifica
function leerNota(nombre){
    const filePath = path.join(NOTAS_DIR, `${nombre}.txt`);
    if(!fs.existsSync(filePath)){
        console.log(chalk.red("❌ Nota no encontrada.!"));
        return;
    }

    const contenido = fs.readFileSync(filePath, 'utf-8');
    console.log(chalk.green(`✅ Nombre: ${nombre}.txt:\n${contenido}`));
}

function renombrarNota(nombreViejo, nombreNuevo){
    const filePathViejo = path.join(NOTAS_DIR, `${nombreViejo}.txt`);
    const filePathNuevo = path.join(NOTAS_DIR, `${nombreNuevo}.txt`);
    if(!fs.existsSync(filePathViejo)){
        console.log(chalk.red("❌ Nota no encontrada.!"));
        return;
    }

    fs.renameSync(filePathViejo, filePathNuevo);
    console.log(chalk.green(`✅ Nombre viejo: ${filePathViejo}.txt:\nNombre Nuevo: ${filePathNuevo}`));
}


// ----------------------------------------------------------- 

crearNota('recodatorio', 'Estudiar JS para aprobar el Curso.!');
crearNota('compras', 'Pan/Leche/Harina/Dulce');

listarNotas()

leerNota('compras')
leerNota('recodatorio')

renombrarNota('compras', 'lista_de_compras');
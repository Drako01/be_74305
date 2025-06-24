const fs = require('fs');

// Lectura de forma Sincronica
// const data = fs.readFileSync('archivo.txt', 'utf-8');
// console.log("Contenido de Data: " , data);

// Lectura de forma Asincronica
// fs.readFile('archivo.txt', 'utf-8', (error, data) => {
//     if (error) return console.error("Error ocurrido: ", error);
//     console.log("Contenido de Data: " , data);
// })

// Crear un archivo y escribir en El
// Sincronica
// fs.writeFileSync('nuevo.txt', 'Hola desde el nuevo Archivo.!');
// console.log("El archivo fue generado exitosamente.!");
// const data = fs.readFileSync('nuevo.txt', 'utf-8');
// console.log("Contenido de Data: " , data);

// Asincronicamente
// fs.writeFile('nuevo2.txt', 'Contenido asincronico del archivo nuevo2.txt', (err) => {
//     if (err) return console.error("Error ocurrido: ", err);
//     console.log("El archivo fue generado exitosamente.!");
// })

// Agregar contenido a un archivo existente (append)
// fs.appendFile('log.txt', '\nNueva linea agregada otra cosa', (err) => {
//     if (err) return console.error("Error ocurrido: ", err);
//     console.log("El archivo log.txt tiene generada exitosamente una nueva linea.!");
// })

// Verificar si un archivo existe
// if (fs.existsSync('archivo1.txt')) {
//     console.log("El archivo existe");
// } else {
//     console.error("El Archivo no existe");
// }

// Eliminar un archivo
// fs.unlink('./ejemplo/archivo_a_borrar.txt', (err) => {
//     if (err) return console.error("Error, " , err);
//     console.log("El archivo fue eliminado exitosamente.!!");
// })

// Crear una carpeta
// fs.mkdir('nueva_carpeta', (err) => {
//     if (err) return console.error("Error, ", err);
//     console.log("El directorio fue creado exitosamente.!!");
// })

// Leer el contenido de un directorio
// fs.readdir('.', (err, files) => {
//     if (err) return console.error("Error, al leer el directorio. ", err);
//     console.log("Archivos existentes en el Directorio: ", files);
// })

// Obtener informacion de un archivo
// fs.stat('archivo.txt', (error, stats) => {
//     if (error) return console.error("Error, ", error);
//     console.log("Tamaño: " , stats.size, ' bytes');
//     console.log("¿Es un Archivo? ", stats.isFile());
//     console.log("¿Es un Directorio? ", stats.isDirectory());
// })

// Renombrar o mover un archivo
// fs.rename('viejo.txt', 'nueva_carpeta/nuevo_nombre.txt', (err) => {
//     if (err) return console.error("Error, ", err);
//     console.log('El archivo fue renombrado exitosamente.!');
// })
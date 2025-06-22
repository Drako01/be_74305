# Backend con NodeJS

---

## 🛠 Actividad Práctica: "Gestor de Archivos Simple con Node.js"

### 🎯 Objetivo

Crear una pequeña app de consola que permita al usuario crear, leer, actualizar y borrar archivos usando `Node.js`, con distintas estrategias (sincrónica, callback y promesa).

---

## 📂 Paso 1: Inicializar el proyecto

```bash
mkdir gestor-archivos
cd gestor-archivos
npm init -y
code .
```

---

## 📦 Paso 2: Crear archivo principal

Crea un archivo llamado `index.js` y pegá este código inicial:

```js
console.log("Bienvenido al gestor de archivos con Node.js");
```

Corrélo con:

```bash
node index.js
```

---

## 🔌 Paso 3: Usar módulo nativo `fs` de forma sincrónica

Agregá esto a `index.js`:

```js
const fs = require('fs');

// Crear archivo
fs.writeFileSync('nota.txt', 'Primera nota escrita');

// Leer archivo
const contenido = fs.readFileSync('nota.txt', 'utf8');
console.log('Contenido del archivo:', contenido);

// Actualizar archivo
fs.writeFileSync('nota.txt', 'Nota actualizada');

// Leer nuevamente
console.log('Nuevo contenido:', fs.readFileSync('nota.txt', 'utf8'));

// Borrar archivo
fs.unlinkSync('nota.txt');
```

---

## 🔄 Paso 4: Versión asíncrona con callbacks

```js
fs.writeFile('callback.txt', 'Texto callback', (err) => {
  if (err) return console.error('Error al escribir:', err);

  fs.readFile('callback.txt', 'utf8', (err, data) => {
    if (err) return console.error('Error al leer:', err);

    console.log('Contenido callback:', data);

    fs.unlink('callback.txt', (err) => {
      if (err) return console.error('Error al borrar:', err);
      console.log('Archivo eliminado');
    });
  });
});
```

---

## 📘 Paso 5: Versión moderna con `fs.promises`

Creamos un archivo nuevo `promesa.js`:

```js
const fs = require('fs/promises');

async function ejecutar() {
  try {
    await fs.writeFile('promesa.txt', 'Contenido con promesas');
    const data = await fs.readFile('promesa.txt', 'utf8');
    console.log('Leído con promesas:', data);
    await fs.unlink('promesa.txt');
    console.log('Archivo borrado');
  } catch (err) {
    console.error('Error:', err);
  }
}

ejecutar();
```

Ejecutálo con:

```bash
node promesa.js
```

---

## 📚 Paso 6: Instalar y usar un módulo de terceros

```bash
npm install figlet
```

Agregá al principio de `index.js`:

```js
const figlet = require('figlet');

figlet('Gestor de Archivos', (err, data) => {
  if (err) return console.log('Error con figlet');
  console.log(data);
});
```

---

## 🧪 Paso 7: Actividad final

1. Creen una función para registrar notas en archivos distintos.
2. Cada nota se guarda con timestamp en su nombre (`nota_20250622.txt`).
3. Que se lean todas las notas con un `fs.readdir` y las muestren por consola.

---

## 📌 Bonus

**Desafío adicional (opcional para los más avanzados):**
Agregar un pequeño menú por consola usando `readline` para elegir si quieren crear, leer o borrar un archivo.

---

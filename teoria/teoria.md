# Backend con NodeJS

## 🧠 **Unidad 3: Desarrollo Avanzado de Backend con Node.js**

### 🔹 **1. ¿Qué es Node.js y para qué se usa?**

**Explicación simple:**
Node.js es un entorno de ejecución para JavaScript fuera del navegador. Nos permite escribir código JS en el servidor.

**Ejemplo para mostrar en consola:**

```bash
node
> console.log("Hola desde Node.js");
```

**Explicación visual:**

* Cliente (navegador) → Frontend
* Servidor (Node.js) → Backend

---

### 🔹 **2. Módulos nativos vs. módulos de terceros**

**👉 Módulo nativo:** Ya viene con Node.js (ej: `fs`, `http`, `path`, etc.)

**👉 Módulo de terceros:** Lo instalás con NPM. No viene con Node. (ej: `express`, `lodash`, etc.)

**Ejemplo práctico:**

```js
// Módulo nativo
const path = require('path');
console.log(path.basename('/ruta/archivo.txt')); // archivo.txt
```

```js
// Módulo de terceros
const _ = require('lodash'); // instalar primero con npm install lodash
console.log(_.capitalize('hola mundo')); // Hola mundo
```

---

### 🔹 **3. ¿Qué es NPM y cómo se usan las dependencias?**

**Explicación:**
NPM (Node Package Manager) es la herramienta para instalar paquetes (dependencias).

**Pasos para mostrar:**

```bash
mkdir clase-node
cd clase-node
npm init -y
npm install lodash
```

Explicales el archivo `package.json` y `node_modules`.

---

### 🔹 **4. ¿Cómo se actualizan las dependencias?**

**Mostrar comandos:**

```bash
npm outdated          # Muestra qué paquetes están viejos
npm update            # Actualiza a la versión permitida por package.json
npm install lodash@latest   # Actualiza lodash a su última versión
```

---

### 🔹 **5. Sincronía y asincronía (con archivos)**

**Explicación simple:**

* *Sincrónico:* Ejecuta una cosa, espera, y luego sigue.
* *Asíncrono:* Llama a algo, y sigue con lo demás sin esperar.

---

### 🔹 **6. El módulo `fs` (File System)**

**Mostrar cómo crear, leer y borrar un archivo:**

#### 🟡 **Versión Sincrónica**

```js
const fs = require('fs');

fs.writeFileSync('archivo.txt', 'Hola desde Node!');
const contenido = fs.readFileSync('archivo.txt', 'utf8');
console.log('Contenido leído:', contenido);
```

#### 🔵 **Versión Asíncrona con Callbacks**

```js
fs.writeFile('archivo_async.txt', 'Texto asíncrono', (err) => {
  if (err) return console.error(err);
  fs.readFile('archivo_async.txt', 'utf8', (err, data) => {
    if (err) return console.error(err);
    console.log('Contenido leído async:', data);
  });
});
```

#### 🔷 **Versión con Promesas (`fs.promises`)**

```js
const fs = require('fs/promises');

async function manejarArchivo() {
  await fs.writeFile('archivo_promesa.txt', 'Texto usando promesas');
  const contenido = await fs.readFile('archivo_promesa.txt', 'utf8');
  console.log('Contenido con promesas:', contenido);
}

manejarArchivo();
```

---

### 🔹 **7. Ventajas y desventajas del FileSystem**

**Ventajas:**

* Control total del archivo
* Permite almacenamiento rápido y local

**Desventajas:**

* No es escalable en apps grandes (por eso se usan bases de datos)
* Puede bloquear procesos si se usa sincrónicamente

---

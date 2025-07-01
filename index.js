const express = require('express');
const app = express();
const PORT = 3000;

// Esto permite a la aplicacion recibir solicitudes en formato JSON
app.use(express.json());

// Simular un BD con un Array
let productos = [
    { id: 1, nombre: "Mouse", precio: 3000 },
    { id: 2, nombre: "Teclado", precio: 5000 }
];

app.get('/', (req, res) => {
    res.send("Bienvenido a mi Servidor de Express");
})

app.get('/productos', (req, res) => {
    res.status(200).json(productos);
})

app.get('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const producto = productos.find(p => p.id === id);
    if (!producto) {
        return res.status(404).json({ mensaje: "Producto no encontrado" });
    }
    res.json(producto);
})

app.post('/productos', (req, res) => {
    const { nombre, precio } = req.body;
    const nuevo = {
        id: productos.length ? productos[productos.length - 1].id + 1 : 1,
        nombre,
        precio
    }
    productos.push(nuevo);
    res.status(201).json(nuevo);
});

app.put('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const producto = productos.find(p => p.id === id);
    if (!producto) return res.status(404).json({ mensaje: "Producto no encontrado" });

    const { nombre, precio } = req.body;
    if (nombre) producto.nombre = nombre;
    if (precio) producto.precio = precio;

    res.json(producto);
})

app.delete('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    productos = productos.filter(p => p.id !== id);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})
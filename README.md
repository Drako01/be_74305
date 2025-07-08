# Estructura del Proyecto

```bash
express‑unidad5/
├── package.json
├── app.js
├── .gitignore
├── /routes
│   ├── home.router.js
│   └── upload.router.js
├── /views
│   ├── /layouts
│   │   └── main.hbs
│   ├── home.hbs
│   ├── 404.hbs
│   └── upload.hbs
├── /public
│   ├── css
│   │   └── style.css
│   └── img
│       └── logo.png
└── /uploads            ← Multer guardará aquí los archivos subidos
```
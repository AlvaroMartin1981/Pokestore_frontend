# Pokestore - Frontend

Este repositorio contiene el frontend de una aplicación web desarrollada en React para la tienda en línea 'Pokestore'. La aplicación permite a los usuarios explorar y comprar productos Pokémon desde un catálogo en línea.

## Índice

- [Estructura de archivos](#estructura-de-archivos)
- [Descripción de los archivos](#descripción-de-los-archivos)
- [Componentes](#componentes)
- [Rutas](#rutas)
- [Contextos](#contextos)
- [Funcionamiento de la aplicación](#funcionamiento-de-la-aplicación)

## Estructura de archivos

El frontend de la aplicación 'Pokestore' tiene la siguiente estructura de archivos:

```
.
├── src
│   ├── assets
│   │   ├── pokemonBaner.jpeg
│   │   └── pokemonLogo.jpg
│   ├── componentes
│   │   ├── Buttons  
│   │   │   ├── Logout.css
│   │   │   └── Logout.jsx
│   │   ├── Cards  
│   │   │   ├── Cards.css
│   │   │   └── Cards.jsx
│   │   ├── Cart
│   │   │   ├── Cart.css
│   │   │   └── Cart.jsx
│   │   ├── Footer
│   │   │   ├── Footer.css
│   │   │   └── Footer.jsx
│   │   ├── Forms
│   │   │   ├── LoginForm.css
│   │   │   ├── LoginForm.jsx
│   │   │   ├── RegisterForm.css
│   │   │   └── RegisterForm.jsx
│   │   ├── NavBar
│   │   │   ├── NavBar.css
│   │   │   └── NavBar.jsx
│   │   ├── ProductDetail
│   │   │   ├── ProductDetail.css
│   │   │   └── ProductDetail.jsx
│   │   ├── ProductType
│   │   │   ├── CardHome.jsx
│   │   │   ├── Legendario.jsx
│   │   │   ├── Mythical.jsx
│   │   │   └── ProductType.jsx
│   │   └── SearchBar
│   │       ├── SearchBar.css
│   │       └── SearchBar.jsx
│   ├── Pages
│   │   ├── Home.css
│   │   └── Home.jsx
│   ├── Routes
│   │   └── routes.jsx
│   ├── useContext
│   │   ├── CarritoContext.jsx
│   │   ├── ProductContext.jsx
│   │   └── UserContext.jsx   
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html.env
└── package.json

```


## Descripción de los archivos

- **Assets (`assets/`)**: Contiene imágenes utilizadas en la aplicación, como el banner y el logotipo de Pokémon.

- **Componentes (`componentes/`)**: Contiene componentes reutilizables de la interfaz de usuario, organizados por funcionalidad.

- **Páginas (`Pages/`)**: Contiene los componentes de las páginas principales de la aplicación, como la página de inicio.

- **Rutas (`Routes/`)**: Define las rutas y los componentes asociados a ellas. Esto facilita la navegación dentro de la aplicación.

- **Contextos (`useContext/`)**: Contiene los contextos de React utilizados para compartir datos entre componentes de manera eficiente.

- **Estilos (`*.css`)**: Archivos de hojas de estilo CSS asociados a los componentes y páginas.

- **`index.html.env`**: Archivo HTML que sirve como punto de entrada para la aplicación React.

## Componentes

Los componentes en la carpeta `componentes/` representan diferentes partes de la interfaz de usuario, como botones, tarjetas de producto, carrito de compras, barra de navegación, etc.

## Rutas

El archivo `Routes/routes.jsx` define las rutas y los componentes asociados a ellas. Esto permite la navegación entre las diferentes páginas de la aplicación.

## Contextos

Los contextos en la carpeta `useContext/` se utilizan para compartir datos entre componentes de manera eficiente. Esto es útil para mantener el estado de la aplicación y compartir información relevante entre componentes sin tener que pasar props manualmente.

## Funcionamiento de la aplicación

La aplicación 'Pokestore' utiliza React para crear una interfaz de usuario interactiva y receptiva. Los usuarios pueden explorar productos Pokémon, agregarlos al carrito de compras y realizar compras de manera segura. La aplicación utiliza estilos CSS para una apariencia atractiva y amigable para el usuario.




Este es el repositorio del proyecto PokeStore, una aplicación web que ofrece una tienda virtual para comprar artículos y accesorios relacionados con el mundo de Pokémon. La tienda incluye una variedad de ítems, desde Poke Balls hasta objetos de curación y más.

Características
Explora una amplia gama de artículos disponibles en la tienda.
Filtra los artículos por categoría para encontrar lo que necesitas más fácilmente.
Detalles completos de cada artículo, incluyendo descripción, precio y más.
Interfaz de usuario intuitiva y fácil de usar.
Tecnologías Utilizadas
Node.js
Express.js
MongoDB
React.js
Vite
Instalación
Clona este repositorio en tu máquina local.
Navega a la carpeta del proyecto.
Instala las dependencias del servidor utilizando el siguiente comando:
bash
Copy code
npm install
Navega a la carpeta "front" y también instala las dependencias del cliente:
bash
Copy code
cd front
npm install
Vuelve a la carpeta principal del proyecto:
bash
Copy code
cd ..
Inicia el servidor de desarrollo y el cliente simultáneamente con:
bash
Copy code
npm run dev
Contribución
¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, sigue estos pasos:

Haz un fork del repositorio.
Crea una rama para tu funcionalidad:
bash
Copy code
git checkout -b feature/NuevaFuncionalidad
Haz tus cambios y realiza commits descriptivos:
bash
Copy code
git commit -m "Agrega nueva funcionalidad: X"
Sube tus cambios a tu fork:
bash
Copy code
git push origin feature/NuevaFuncionalidad
Abre un pull request a la rama principal del repositorio original.
Licencia
Este proyecto está bajo la licencia MIT. Para más detalles, consulta el archivo LICENSE.
# MEVIC

> **Aprende. Analiza. Protege.**
> Un marco metodológico para evaluar, auditar y entender la ciberseguridad en entornos controlados.

MEVIC es una aplicación web educativa hecha con **React + Vite**. Reúne en un solo lugar la parte teórica (fundamentación, equipos, metodología, áreas y referencias) y un repositorio de **laboratorios prácticos en PDF** que se pueden abrir o descargar desde el navegador.

---

## Tabla de contenidos

1. [Características](#características)
2. [Cómo funciona](#cómo-funciona)
3. [Tecnologías](#tecnologías)
4. [Requisitos previos](#requisitos-previos)
5. [Instalación](#instalación)
6. [Scripts disponibles](#scripts-disponibles)
7. [Estructura del proyecto](#estructura-del-proyecto)
8. [Agregar un nuevo laboratorio](#agregar-un-nuevo-laboratorio)
9. [Despliegue](#despliegue)
10. [Aviso de uso ético](#aviso-de-uso-ético)

---

## Características

- **Dashboard** con acceso rápido a todas las secciones, las fases de la metodología y los laboratorios más recientes.
- **Contenido teórico** organizado por capítulos:
  - **I. Fundamentación**: distribuciones Linux, Kali Linux, cómo instalarlo en VirtualBox y comandos básicos de la terminal.
  - **II. Equipos**: los modelos Red Team, Blue Team y Purple Team.
  - **III. Metodología**: las fases del marco de evaluación (Preparación → Prevención → Identificación → Análisis → Mitigación → Verificación).
  - **IV. Áreas**: OSINT, redes, forense, aplicaciones web, factor humano, seguridad en IA, entre otras.
  - **V. Laboratorios**: prácticas guiadas en PDF.
  - **VII. Referencias**: marcos y estándares (NIST, MITRE ATT&CK, OWASP, ISO).
- **15 laboratorios** listos para abrir o descargar (Kali, DNS, HTTrack, Steghide, Maltego, Burp Suite, DVWA, OWASP ZAP, prompt injection, etc.).
- Navegación lateral (sidebar) con rutas del lado del cliente e iconos de [Lucide](https://lucide.dev).

---

## Cómo funciona

MEVIC es una **SPA (Single Page Application)** sin backend. Todo el contenido es estático y se sirve desde el navegador.

```
index.html
   └── src/main.jsx          → monta React en <div id="root">
         └── src/App.jsx     → define las rutas con React Router
               └── Layout    → Sidebar fijo + <Outlet /> donde se carga cada página
                     ├── /                → Dashboard
                     ├── /fundamentacion  → Fundamentacion
                     ├── /equipos         → Equipos
                     ├── /metodologia     → Metodologia
                     ├── /areas           → Areas
                     ├── /laboratorios    → Laboratorios
                     └── /referencias     → Referencias
```

1. **Enrutamiento:** `App.jsx` usa `BrowserRouter` de `react-router-dom`. Todas las rutas comparten el componente `Layout`, que pinta el `Sidebar` y, a su derecha, la página activa.
2. **Navegación:** los enlaces del menú lateral se definen en [`src/data/navigation.js`](src/data/navigation.js) (título, ruta e icono).
3. **Laboratorios:** la lista de prácticas está en [`src/data/laboratorios.js`](src/data/laboratorios.js). La página *Laboratorios* y el *Dashboard* leen ese archivo para generar las tarjetas automáticamente, así que no hace falta tocar componentes para añadir uno nuevo.
4. **Archivos estáticos:** los PDF (`public/laboratorios/`) y las imágenes (`public/imagenes/`) se sirven tal cual desde la raíz del sitio (por ejemplo, `/laboratorios/lab07-burp-suite.pdf`).
5. **Estilos:** CSS plano repartido en `src/styles/` (global, dashboard y sidebar) y la fuente *Manrope* de Google Fonts.

---

## Tecnologías

| Herramienta | Uso |
|---|---|
| [React 19](https://react.dev) | Librería de interfaz |
| [Vite 8](https://vite.dev) | Servidor de desarrollo y empaquetado |
| [React Router 7](https://reactrouter.com) | Rutas del lado del cliente |
| [Lucide React](https://lucide.dev) | Iconos |
| [ESLint](https://eslint.org) | Análisis estático del código |

---

## Requisitos previos

- **Node.js** 20.19 o superior (se recomienda la versión LTS más reciente) → [descargar](https://nodejs.org)
- **npm** (viene incluido con Node.js)
- **Git** (opcional, solo si vas a clonar el repositorio)

Para comprobar que están instalados:

```bash
node -v
```

```bash
npm -v
```

---

## Instalación

### 1. Obtener el proyecto

Clona el repositorio:

```bash
git clone <URL-del-repositorio>
```

O descarga el `.zip` desde GitHub y descomprímelo.

### 2. Entrar en la carpeta del proyecto

```bash
cd proyecto-mevic-ciberseguridad
```

### 3. Instalar las dependencias

```bash
npm install
```

Esto crea la carpeta `node_modules/` con todo lo que necesita el proyecto, usando las versiones fijadas en `package-lock.json`.

### 4. Iniciar el servidor de desarrollo

```bash
npm run dev
```

### 5. Abrir en el navegador

Vite mostrará una dirección en la terminal, normalmente:

```
http://localhost:5173/
```

Ábrela en el navegador. Los cambios que hagas en el código se ven al instante (Hot Module Replacement).

Para detener el servidor, pulsa `Ctrl + C` en la terminal.

---

## Scripts disponibles

| Comando | Qué hace |
|---|---|
| `npm run dev` | Arranca el servidor de desarrollo con recarga en caliente |
| `npm run build` | Genera la versión de producción optimizada en la carpeta `dist/` |
| `npm run preview` | Sirve localmente la carpeta `dist/` para probar el build |
| `npm run lint` | Revisa el código con ESLint |

---

## Estructura del proyecto

```
proyecto-mevic-ciberseguridad/
├── public/
│   ├── imagenes/            # Imágenes usadas en las páginas (Kali, VirtualBox…)
│   ├── laboratorios/        # PDF de cada laboratorio
│   └── favicon.svg
├── src/
│   ├── assets/              # Recursos importados desde el código
│   ├── components/
│   │   ├── Layout.jsx       # Estructura general: sidebar + contenido
│   │   ├── Sidebar.jsx      # Menú lateral de navegación
│   │   └── Header.jsx
│   ├── data/
│   │   ├── navigation.js    # Elementos del menú lateral
│   │   └── laboratorios.js  # Catálogo de laboratorios
│   ├── pages/               # Una página por sección
│   │   ├── Dashboard.jsx
│   │   ├── Fundamentacion.jsx
│   │   ├── Equipos.jsx
│   │   ├── Metodologia.jsx
│   │   ├── Areas.jsx
│   │   ├── Laboratorios.jsx
│   │   ├── Evaluacion.jsx   # (todavía sin ruta asignada)
│   │   └── Referencias.jsx
│   ├── styles/              # global.css, dashboard.css, sidebar.css
│   ├── App.jsx              # Definición de rutas
│   └── main.jsx             # Punto de entrada
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

---

## Agregar un nuevo laboratorio

1. Copia el PDF en `public/laboratorios/`, por ejemplo `lab12-mi-practica.pdf`.
2. Añade una entrada al final del arreglo en [`src/data/laboratorios.js`](src/data/laboratorios.js):

   ```js
   {
     num: "12",
     title: "Título del laboratorio",
     desc: "Breve descripción de lo que se practica.",
     area: "Aplicaciones web",
     pdf: "/laboratorios/lab12-mi-practica.pdf",
   },
   ```

3. Guarda los cambios. El laboratorio aparecerá en la página **Laboratorios** y, por ser el más reciente, también en el **Dashboard**.

---

## Despliegue

1. Genera el build:

   ```bash
   npm run build
   ```

2. Sube el contenido de la carpeta `dist/` a cualquier hosting estático (Vercel, Netlify, GitHub Pages, etc.).

> **Importante:** como la app usa `BrowserRouter`, el servidor debe redirigir todas las rutas a `index.html`. Si no, al recargar una página como `/laboratorios` aparecerá un error 404.
> - **Netlify:** crea `public/_redirects` con la línea `/* /index.html 200`.
> - **Vercel:** añade un `vercel.json` con una regla `rewrites` hacia `/index.html`.
> - **GitHub Pages:** configura `base` en `vite.config.js` con el nombre del repositorio y usa `HashRouter` o un `404.html` de respaldo.

---

## Aviso de uso ético

Este proyecto tiene fines **exclusivamente educativos**. Las técnicas que se describen en los laboratorios (reconocimiento, interceptación de tráfico, explotación de vulnerabilidades, ingeniería social, etc.) solo deben practicarse en **entornos controlados y con autorización explícita**, como máquinas virtuales propias o aplicaciones vulnerables a propósito (DVWA). Usarlas contra sistemas de terceros sin permiso puede ser ilegal.

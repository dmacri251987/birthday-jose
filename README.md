# ✨ Mis 15 Años — Josefina Casara

> **Invitación web premium** para la celebración de los 15 años de Josefina Casara.  
> Una experiencia digital elegante, animada y completamente responsive.

📅 **Fecha del evento:** 30 de octubre de 2026  
🌐 **Sitio:** Invitación web single-page (SPA)  
📱 **Diseño:** Mobile-first, optimizada para compartir por WhatsApp

---

## ✨ Características

| Característica | Detalle |
|---|---|
| 🎬 **Animaciones al scroll** | Cada sección aparece con animaciones suaves usando `IntersectionObserver` |
| ⏱️ **Cuenta regresiva en vivo** | Countdown en tiempo real que se detiene al llegar al día del evento |
| 🎵 **Reproductor de música** | Botón flotante con ondas animadas y toggle play/pause |
| 📱 **100% responsive** | Mobile-first con breakpoints progresivos y `100dvh` para viewport real |
| ♿ **Accesibilidad** | Respeta `prefers-reduced-motion`, soporte completo de teclado |
| 🔗 **Open Graph** | Preview optimizado al compartir por WhatsApp y redes sociales |
| 📋 **Confirmación RSVP** | Integración con Google Forms para confirmar asistencia |
| 👗 **Dress Code** | Sección elegante con código de vestimenta y animación al scroll |
| 🗺️ **Google Maps** | Botón "Cómo llegar" con enlace directo a la ubicación |
| ⚡ **Ultra liviana** | Sin backend, sin base de datos, sin dependencias CSS externas |
| 🎨 **Design system propio** | Variables CSS, tipografías premium, sin librerías UI de terceros |

---

## 🖼️ Secciones de la invitación

La página se compone de las siguientes secciones, en orden de aparición:

### 1. 🏠 Hero — Portada
Pantalla completa (`100dvh`) con el nombre de Josefina en tipografía script (*Great Vibes*), animaciones escalonadas de entrada, ornamentos SVG decorativos y un botón "Descubrir" que invita a hacer scroll hacia el contenido.

### 2. ⏱️ Countdown — Cuenta regresiva
Cuenta regresiva en tiempo real mostrando **días, horas, minutos y segundos** hasta el evento. Al expirar, se detiene automáticamente y muestra el mensaje **"¡Hoy es el día!"**. Configurada para la zona horaria **UTC-3 (Argentina)**.

### 3. 📍 EventInfo — Detalles del evento
Cards elegantes con iconos SVG inline que muestran:
- **Horario** de la fiesta
- **Lugar** de celebración (nombre del salón)
- **Dirección** completa
- Botón **"Cómo llegar"** que abre Google Maps

### 4. 💌 RSVP — Confirmación de asistencia
Sección emotiva con un botón **"Confirmar Asistencia"** que abre un Google Form en una nueva pestaña. Incluye validación para no abrir URLs que contengan placeholders sin reemplazar.

### 5. 👗 DressCode — Código de vestimenta
Sección minimalista y elegante que indica el dress code **"Elegante Sport"**. Incluye un ícono SVG sutil de un vestido de noche, tipografía Playfair Display y animación de entrada al scroll.

### 6. 🌟 Footer — Cierre
Mensaje final emotivo, firma **"Josefina ♡"** y estrellas decorativas con animaciones sutiles.

### 7. 🎵 MusicPlayer — Reproductor flotante
Botón fijo en la esquina inferior derecha con ondas animadas que indican la reproducción. Permite alternar entre **play** y **pause** de la música de fondo.

---

## 🛠️ Tecnologías

| Tecnología | Versión | Uso |
|---|---|---|
| **React** | 19.0 | Librería UI — componentes funcionales con hooks |
| **Vite** | 6.3 | Build tool y dev server ultrarrápido |
| **CSS Variables** | Nativo | Design system completo sin preprocesadores |
| **Google Fonts** | CDN | Playfair Display, Montserrat, Great Vibes |
| **IntersectionObserver** | Nativo | Animaciones al scroll de alto rendimiento |
| **ESLint** | 9.x | Linting con flat config |

> **Sin dependencias externas de CSS** (no usa Tailwind, Bootstrap, ni librerías UI).  
> **Sin backend ni base de datos** — es una SPA estática.

---

## 🚀 Instalación y uso

### Requisitos previos

- **Node.js** 18+ ([descargar](https://nodejs.org/))
- **npm** 9+ (incluido con Node.js)

### Pasos

```bash
# 1. Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>
cd BirthdayJose

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en **http://localhost:5173**.

### Scripts disponibles

| Script | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo con Hot Module Replacement |
| `npm run build` | Genera el build de producción en la carpeta `dist/` |
| `npm run preview` | Preview local del build de producción |
| `npm run lint` | Ejecuta ESLint sobre todo el proyecto |

---

## 📁 Estructura del proyecto

```
BirthdayJose/
├── index.html                          ← HTML base con Google Fonts + meta tags Open Graph
├── package.json                        ← Dependencias: React 19 + Vite 6
├── vite.config.js                      ← Configuración de Vite
├── eslint.config.js                    ← ESLint flat config
├── README.md                           ← Este archivo
│
├── public/                             ← Archivos estáticos (se sirven tal cual)
│   ├── images/                         ← Imágenes estáticas
│   │   ├── og-preview.jpg             ←    Imagen para preview en WhatsApp
│   │   └── .gitkeep
│   ├── audio/                          ← 🎵 Música de fondo
│   │   ├── musica.mp3                  ←    (agregar por el usuario)
│   │   └── .gitkeep
│   └── vite.svg                        ← Favicon
│
└── src/                                ← Código fuente
    ├── main.jsx                        ← Entry point de React (ReactDOM.createRoot)
    ├── App.jsx                         ← Componente raíz, integra todas las secciones
    ├── App.css                         ← Estilos del contenedor principal
    ├── index.css                       ← Design system completo (variables, reset, animaciones)
    │
    ├── data/
    │   └── event.js                    ← ⭐ Datos centralizados del evento (personalizar aquí)
    │
    ├── hooks/
    │   └── useScrollAnimation.js       ← Hook reutilizable con IntersectionObserver
    │
    ├── assets/                         ← Assets estáticos internos (si se necesitan)
    │
    └── components/
        ├── Hero.jsx + Hero.css         ← Portada fullscreen con animaciones
        ├── Countdown.jsx + Countdown.css ← Cuenta regresiva en tiempo real
        ├── EventInfo.jsx + EventInfo.css ← Detalles del evento (horario, lugar, dirección)
        ├── RSVP.jsx + RSVP.css         ← Confirmación de asistencia (Google Forms)
        ├── DressCode.jsx + DressCode.css ← Código de vestimenta (Elegante Sport)
        ├── MusicPlayer.jsx + MusicPlayer.css ← Reproductor de música flotante
        └── Footer.jsx + Footer.css     ← Cierre emotivo con firma
```

---

## ⚙️ Personalización

Toda la información del evento se centraliza en un único archivo:

```
src/data/event.js
```

### Tabla de placeholders

Abrí el archivo `src/data/event.js` y reemplazá los siguientes valores:

| Placeholder | Campo | Descripción | Ejemplo |
|---|---|---|---|
| `[HORARIO]` | `horario` | Horario de inicio de la fiesta | `"21:00 hs"` |
| `[NOMBRE DEL SALÓN]` | `lugar` | Nombre del lugar de celebración | `"Salón Dorado"` |
| `[DIRECCIÓN]` | `direccion` | Dirección completa del salón | `"Av. Siempre Viva 123, Buenos Aires"` |
| `[GOOGLE_MAPS_URL]` | `googleMapsUrl` | Enlace a Google Maps del lugar | `"https://maps.google.com/..."` |
| `[GOOGLE_FORM_URL]` | `googleFormUrl` | Enlace al formulario de confirmación | `"https://forms.gle/..."` |

### Ejemplo de personalización

**Antes** (con placeholders):

```js
horario: "[HORARIO]",
lugar: "[NOMBRE DEL SALÓN]",
direccion: "[DIRECCIÓN]",
googleMapsUrl: "[GOOGLE_MAPS_URL]",
googleFormUrl: "[GOOGLE_FORM_URL]",
```

**Después** (con datos reales):

```js
horario: "21:00 hs",
lugar: "Salón Dorado",
direccion: "Av. Libertador 4500, Buenos Aires",
googleMapsUrl: "https://maps.google.com/?q=Salon+Dorado+Av+Libertador+4500",
googleFormUrl: "https://forms.gle/abc123xyz",
```

### Otros campos personalizables

| Campo | Descripción | Valor actual |
|---|---|---|
| `nombre` | Nombre de la quinceañera | `"Josefina Casara"` |
| `titulo` | Subtítulo de la invitación | `"Mis 15 años"` |
| `fecha` | Fecha y hora en formato ISO 8601 | `"2026-10-30T21:00:00-03:00"` |
| `fechaDisplay` | Fecha formateada para mostrar | `"30 · 10 · 2026"` |
| `fechaDia` | Día del mes | `"30"` |
| `fechaMes` | Mes en texto | `"Octubre"` |
| `fechaAnio` | Año | `"2026"` |
| `mensajeFinal` | Mensaje del footer | `"Te espero para compartir juntos una noche inolvidable."` |

> 💡 **Importante:** Si modificás la `fecha`, asegurate de usar el formato ISO 8601 con zona horaria (`-03:00` para Argentina). El countdown depende de este valor.

---

## 🎵 Agregar música

El archivo de música se ubica en `public/audio/`.

### Requisitos

| Propiedad | Detalle |
|---|---|
| **Archivo** | `public/audio/musica.mp3` |
| **Formato** | `.mp3` (recomendado), también acepta `.ogg` o `.m4a` |
| **Duración** | 2-4 minutos (se reproduce en loop) |
| **Peso** | Menos de 3 MB para carga rápida |
| **Bitrate** | 128 kbps o 192 kbps (buen balance calidad/peso) |

### Pasos

1. Elegí la canción que querés para la invitación
2. Convertila a `.mp3` si es necesario (podés usar [CloudConvert](https://cloudconvert.com/))
3. Renombrala como `musica.mp3`
4. Copiala en la carpeta `public/audio/`

> 💡 **Tip:** Si querés usar otro nombre de archivo o formato, modificá el campo `musica` en `src/data/event.js`.

---

## 🗺️ Configurar Google Maps

Para obtener el enlace de Google Maps del salón:

1. Abrí **Google Maps** en tu navegador → [maps.google.com](https://maps.google.com)
2. Buscá el nombre o la dirección del salón
3. Hacé clic en el resultado para ver los detalles
4. Hacé clic en el botón **"Compartir"**
5. Copiá el enlace corto (formato `https://maps.app.goo.gl/...`)
6. Pegalo en el campo `googleMapsUrl` de `src/data/event.js`

### Ejemplo

```js
googleMapsUrl: "https://maps.app.goo.gl/aBcDeFgHiJkLmNoP9",
```

> 💡 **Alternativa:** También podés usar el enlace largo de Google Maps. Ambos formatos funcionan correctamente.

---

## 📋 Configurar Google Forms

Para crear el formulario de confirmación de asistencia:

### Paso 1: Crear el formulario

1. Ingresá a [Google Forms](https://forms.google.com)
2. Creá un nuevo formulario en blanco
3. Agregá los campos que necesités, por ejemplo:

| Campo | Tipo | Sugerencia |
|---|---|---|
| Nombre completo | Respuesta corta | Obligatorio |
| Cantidad de acompañantes | Opción múltiple | 1, 2, 3, 4+ |
| ¿Asistirá? | Opción múltiple | Sí / No |
| Restricciones alimentarias | Respuesta corta | Opcional |
| Mensaje para Josefina | Párrafo | Opcional |

### Paso 2: Obtener el enlace

1. Hacé clic en el botón **"Enviar"** (arriba a la derecha)
2. Seleccioná el ícono de **enlace** (🔗)
3. Activá **"Acortar URL"** para un enlace más limpio
4. Copiá el enlace

### Paso 3: Configurar en el proyecto

Pegá el enlace en el campo `googleFormUrl` de `src/data/event.js`:

```js
googleFormUrl: "https://forms.gle/abc123xyz",
```

> 💡 **Tip:** Configurá notificaciones por email en Google Forms para recibir cada confirmación automáticamente.

---

## 📤 Deploy / Publicación

La invitación es una SPA estática, por lo que puede publicarse en cualquier hosting de archivos estáticos.

### Opción 1: Vercel (recomendado) ⭐

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desde la raíz del proyecto
vercel
```

Seguí las instrucciones en pantalla. El deploy se realiza en segundos y obtenés una URL pública como `https://birthday-jose.vercel.app`.

### Opción 2: Netlify

```bash
# Generar el build
npm run build

# Subir la carpeta dist/ a Netlify
# → https://app.netlify.com/drop
```

O conectá el repositorio de GitHub para deploy automático.

### Opción 3: GitHub Pages

```bash
# Generar el build
npm run build

# Subir el contenido de dist/ a la rama gh-pages
# O usar GitHub Actions para automatizar
```

### Opción 4: Cualquier hosting estático

```bash
# Generar el build de producción
npm run build
```

Subí el contenido de la carpeta `dist/` a tu hosting (Hostinger, Firebase Hosting, Cloudflare Pages, etc.).

> 💡 **Importante:** Después del deploy, actualizá la meta tag `og:image` en `index.html` con la URL absoluta de la imagen de preview:
> ```html
> <meta property="og:image" content="https://tu-dominio.com/images/og-preview.jpg" />
> ```

---

## 📱 Compatibilidad

### Navegadores soportados

| Navegador | Versión mínima |
|---|---|
| Chrome / Edge | 90+ |
| Firefox | 90+ |
| Safari | 15.4+ |
| Samsung Internet | 16+ |
| Opera | 76+ |

### Dispositivos

| Dispositivo | Soporte |
|---|---|
| 📱 Smartphones (iOS / Android) | ✅ Completo |
| 📱 Tablets (iPad / Android) | ✅ Completo |
| 💻 Desktop (Windows / Mac / Linux) | ✅ Completo |

### Características de CSS/JS utilizadas

- `100dvh` (dynamic viewport height) — soportado desde iOS 15.4+
- `IntersectionObserver` — soportado en todos los navegadores modernos
- CSS `clamp()` — soportado desde Chrome 79+, Firefox 75+, Safari 13.1+
- CSS Custom Properties — soporte universal en navegadores modernos
- `prefers-reduced-motion` — respetado para usuarios con sensibilidad al movimiento

---

## 🎨 Diseño

### Paleta de colores

La paleta está definida como variables CSS en `src/index.css` y sigue una estética **elegante, cálida y femenina**:

| Variable | Color | Hex | Uso |
|---|---|---|---|
| `--color-ivory` | 🤍 | `#FFFEF9` | Fondo principal |
| `--color-ivory-warm` | 🤍 | `#FFF8F0` | Fondos secundarios |
| `--color-rose-soft` | 🩷 | `#F5E6E0` | Acentos suaves |
| `--color-rose-muted` | 🩷 | `#E8C4C4` | Bordes y separadores |
| `--color-rose-accent` | 🩷 | `#D4A0A0` | Detalles en rosa |
| `--color-champagne` | 🥂 | `#D4A574` | Acentos cálidos |
| `--color-champagne-dark` | 🥂 | `#C9A96E` | Dorado oscuro |
| `--color-gold` | ✨ | `#D4AF37` | Detalles dorados |
| `--color-gold-dark` | ✨ | `#B8860B` | Dorado intenso |
| `--color-gray-dark` | ⬛ | `#2C2C2C` | Textos principales |
| `--color-gray-medium` | 🔲 | `#4A4A4A` | Textos secundarios |
| `--color-gray-light` | ⬜ | `#8A8A8A` | Textos terciarios |

### Tipografías

| Tipografía | Tipo | Uso | Fuente |
|---|---|---|---|
| **Playfair Display** | Serif elegante | Títulos y encabezados | [Google Fonts](https://fonts.google.com/specimen/Playfair+Display) |
| **Montserrat** | Sans-serif moderna | Textos de cuerpo y UI | [Google Fonts](https://fonts.google.com/specimen/Montserrat) |
| **Great Vibes** | Script manuscrita | Nombre y acentos decorativos | [Google Fonts](https://fonts.google.com/specimen/Great+Vibes) |

### Convenciones CSS

- **BEM naming** — `bloque__elemento--modificador` para clases CSS
- **Mobile-first** — Los estilos base son para móvil, se amplían con media queries
- **Fluid typography** — `clamp()` para tamaños de fuente que escalan suavemente
- **Design tokens** — Todas las magnitudes (colores, espacios, radios, sombras) están tokenizadas como variables CSS

---

## 📝 Notas adicionales

- **Sin dependencias de CSS externas:** Todo el diseño visual está construido con CSS puro y variables CSS. No se utiliza Tailwind, Bootstrap, Material UI ni ninguna librería de componentes.
- **Componentes autocontenidos:** Cada componente tiene su propio archivo `.jsx` y `.css`, facilitando el mantenimiento y la modificación individual.
- **Datos centralizados:** Toda la información personalizable está en `src/data/event.js` — no es necesario tocar los componentes para actualizar datos del evento.
- **Rendimiento:** Las imágenes usan lazy loading nativo, las animaciones se ejecutan en la GPU (`transform`, `opacity`) y el `IntersectionObserver` evita cálculos innecesarios.

---

## 📄 Licencia

Este proyecto fue desarrollado como una invitación personal. El código está disponible para uso personal y modificación.

---

<p align="center">
  <em>Hecho con 💛 para Josefina</em>
</p>

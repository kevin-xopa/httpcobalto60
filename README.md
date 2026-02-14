# ☢️ HTTP Cobalto 60

> Los códigos HTTP explicados desde lo más oscuro, crudo y real de México.

**HTTP Cobalto 60** es una guía interactiva y educativa de códigos de estado HTTP donde cada código se explica a través de sucesos reales, oscuros y crudos de México: desastres, tragedias, corrupción, desapariciones, crimen, negligencia gubernamental y la realidad que no sale en las postales turísticas.

El nombre es un homenaje al **incidente radioactivo del Cobalto-60 en Ciudad Juárez (1983)**, donde una fuente de radioterapia fue desmantelada por chatareros sin saber qué era, contaminando a cientos de personas y generando un desastre nuclear que el gobierno intentó minimizar. Así como ese cobalto irradiaba en silencio matando sin que nadie entendiera qué pasaba, los códigos HTTP están en cada request y la mayoría de los desarrolladores no los comprenden.

**No es un proyecto "chistoso".** Es una guía técnica seria envuelta en la realidad mexicana sin filtros.

## Características

- **40+ códigos HTTP** con contexto mexicano real y definición técnica RFC
- **Ejemplos funcionales en 5 lenguajes:** JavaScript (Express), Python (FastAPI), PHP (Laravel), Rust (Actix Web), C++ (Crow)
- **Filosofía HTTP:** El código HTTP ES el mensaje. Sin envolturas innecesarias.
- **Tema claro/oscuro** con paleta Material Design 3
- **Búsqueda rápida** con `Ctrl+K` / `Cmd+K`
- **Navegación por teclado** entre códigos (`←` `→`)
- **PWA instalable** — todo el catálogo disponible offline
- **SEO optimizado** — una URL por código (`/codigos/[code]`)
- **SSG** — sitio estáticamente generado

## Stack Tecnológico

| Tecnología | Uso |
|---|---|
| **Nuxt 4** | Framework (Vue 3 + Composition API) |
| **Vuetify 3** | Sistema de componentes UI (MD3) |
| **Shiki** | Syntax highlighting multi-lenguaje |
| **@vite-pwa/nuxt** | Progressive Web App |
| **@nuxtjs/seo** | SEO, meta tags, Open Graph |

## Inicio Rápido

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo en http://localhost:3000
npm run dev

# Generar sitio estático (deploy target)
npm run generate

# Preview del build
npm run preview
```

## Estructura del Proyecto

```
httpcobalto60/
├── app/
│   ├── pages/                  # Rutas (thin wrappers)
│   │   ├── index.vue           # Landing page
│   │   ├── codigos/
│   │   │   ├── index.vue       # Explorador de códigos
│   │   │   └── [code].vue      # Página individual por código
│   │   └── about.vue           # Sobre el proyecto
│   ├── components/
│   │   ├── home/               # Componente Page del landing
│   │   ├── catalogo/           # Componente Page del explorador
│   │   ├── codigo/             # Componente Page de código individual
│   │   ├── about/              # Componente Page del about
│   │   ├── landing/            # Hero, categorías, destacados, filosofía
│   │   ├── code/               # CodeCard, CodeExample, LanguageTabs
│   │   ├── navigation/         # NavBar, Footer, CodeNavigator
│   │   └── ui/                 # CategoryBadge, CopyButton, SearchModal
│   ├── composables/            # useCodes, useCategories, useThemeToggle
│   ├── data/
│   │   ├── codes.ts            # Catálogo completo de códigos HTTP
│   │   └── examples/           # Ejemplos por lenguaje (5 archivos)
│   ├── assets/css/main.scss    # Estilos globales mínimos
│   ├── layouts/default.vue     # Layout con NavBar y Footer
│   └── plugins/vuetify.ts      # Configuración Vuetify + temas MD3
└── .github/workflows/deploy.yml # Deploy automático a GitHub Pages
```

## Filosofía HTTP

HTTP Cobalto 60 promueve el uso correcto de códigos HTTP:

```
// ❌ El envoltorio innecesario
{ "data": [], "message": "OK", "status": 200, "success": true }

// ✅ El código HTTP ES el mensaje
HTTP 200 → [{ "id": 1, "nombre": "Juan" }]
HTTP 201 → { "id": 3, "nombre": "Pedro" }   + Header Location
HTTP 204 → (sin body)
HTTP 422 → { "errors": { "email": ["Ya registrado"] } }
```

## Catálogo de Códigos

| Categoría | Ejemplo | Contexto Mexicano |
|---|---|---|
| **1xx** Informativos | 100 Continue | La Espera en el IMSS |
| **2xx** Éxito | 201 Created | Fundación de Tenochtitlan |
| **3xx** Redirección | 301 Moved Permanently | El Aeropuerto de Texcoco Cancelado |
| **4xx** Error del Cliente | 404 Not Found | Los 43 de Ayotzinapa |
| **5xx** Error del Servidor | 500 Internal Server Error | La Explosión de San Juanico |

## Deploy

El sitio se genera estáticamente y se despliega en **GitHub Pages** automáticamente con cada push a `main`.

```bash
npm run generate   # Genera en .output/public/
```

## Autor

**Kevin Ochoa Xopa**
- [GitHub](https://github.com/kevin-xopa)
- [LinkedIn](https://linkedin.com/in/kevin-ochoa-xopa-88a454219)
- xopa.kevin.x@gmail.com

## Licencia

Este proyecto es de código abierto. El contenido editorial (textos, contextos mexicanos) es propiedad del autor.

---

*☢️ Porque la realidad de México explica mejor los errores que cualquier RFC.*

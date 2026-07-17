# Portafolio Personal - Guía de Estructura

## Estructura de Carpetas Actual

```
frontend/
├── index.html            # HTML principal
├── css/
│   └── main.css         # Estilos globales
├── js/
│   └── main.js          # Lógica del portafolio
└── img/                 # Carpeta para imágenes (necesarias)
```

## Imágenes Requeridas

Debes subir las siguientes imágenes a la carpeta `frontend/img/`:

### Imágenes Críticas (para que el portafolio funcione óptimamente):

1. **profile.jpg** - Tu foto de perfil (recomendado: 300x300px)
   - Ubicación: `img/profile.jpg`
   - Usada en: Sección "Acerca de mí"

### Imágenes de Proyectos:

2. **project-sirbull.jpg** - Portada del proyecto Sirbull Banking Core
3. **project-architecture.jpg** - Arquitectura Modular Desacoplada
4. **project-testing.jpg** - Suite de Testing con TDD
5. **project-api.jpg** - API REST Transaccional
6. **project-persistence.jpg** - Capa de Persistencia Avanzada
7. **project-portfolio.jpg** - Este Portafolio Personal

(Recomendado para proyectos: 400x200px)

### Imágenes de Certificados:

8. **cert-1.jpg** - Clean Code & Architecture Patterns
9. **cert-2.jpg** - Backend Mastery 2025
10. **cert-3.jpg** - Test-Driven Development Mastery

(Recomendado para certificados: 400x200px)

### Imágenes Opcionales:

11. **hero-bg.mp4** - Video de fondo para la sección hero (opcional, pero recomendado)
12. **hero-poster.jpg** - Imagen de placeholder para el video (si usas hero-bg.mp4)

## Cómo Agregar Imágenes

1. Copia tus imágenes a la carpeta `frontend/img/`
2. Asegúrate de usar los nombres exactos listados arriba
3. Los formatos soportados son: `.jpg`, `.png`, `.webp`

## Colores y Paleta

- **Primario**: `#0066cc` (Azul oscuro)
- **Primario Claro**: `#3399ff` (Azul)
- **Acento**: `#0ea5e9` (Cyan)
- **Fondo**: `#0a1428` (Azul muy oscuro)
- **Texto**: `#ffffff` (Blanco)
- **Texto secundario**: `#a8b8c8` (Gris azulado)

## Características Implementadas

✅ Header responsivo con navegación
✅ Hero section centrado con video de fondo
✅ Sección "Acerca de mí" con foto circular
✅ Sección de experiencia laboral
✅ Stack técnico organizado en categorías
✅ Proyectos con filtros interactivos
✅ Sección de certificados
✅ Contacto
✅ Menú móvil responsivo
✅ Animaciones suaves
✅ Intersección observer para scroll animations

## Personalización

### Cambiar Nombre
En `index.html`, busca "Héctor" y reemplázalo con tu nombre.

### Cambiar Email de Contacto
En `index.html`, busca `mailto:hector@example.com` y actualízalo.

### Cambiar Links de Redes Sociales
En `index.html`, busca los links de LinkedIn y CV para actualizarlos.

### Modificar Contenido de Secciones
Edita directamente en `index.html` el contenido de cada sección:
- Hero
- Sobre mí
- Experiencia
- Stack Técnico
- Proyectos
- Certificados
- Contacto

## Deployment

El portafolio está listo para desplegar en:
- Vercel
- Netlify
- GitHub Pages
- Cualquier servidor estático

Solo necesitas subir el contenido de la carpeta `frontend/` a tu hosting.

## Notas Importantes

- El CSS usa variables CSS para fácil personalización
- El JavaScript es vanilla (sin dependencias)
- El portafolio es completamente responsivo
- Las imágenes se pueden cambiar sin tocar el código HTML/CSS si mantienen los mismos nombres

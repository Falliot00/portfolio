# Portfolio de Fermín Alliot

## Pedido

Crear en este proyecto una landing profesional, creativa y concisa que funcione como portfolio y CV digital. Investigar todos los repositorios del usuario en GitHub para documentar su recorrido. Instalar las skills de Matt Pocock dentro del proyecto y aplicar las relevantes. Crear un repositorio nuevo en GitHub y subir el resultado.

## Criterios de aceptación

- Contenido en español basado en evidencia de los 27 repositorios existentes al inicio de la investigación (10 públicos y 17 privados), sin inventar métricas, empleadores, títulos ni resultados.
- Presentación personal, proyectos seleccionados, habilidades comprobables, recorrido y contacto.
- Los detalles de repositorios privados se mantienen fuera del historial público; su presentación dependerá de la preferencia del usuario. Por defecto, descripciones anónimas y sin código, nombres de clientes ni datos internos.
- Diseño original, responsive, navegación por teclado, contraste legible y respeto por movimiento reducido.
- CV imprimible y proyectos con detalle accesible. Los enlaces de código llevan únicamente a repositorios públicos.
- Sitio estático con contenido disponible sin JavaScript; sin backend ni formulario que simule envíos.
- Scripts reproducibles para desarrollo, typecheck, lint, pruebas y build; comprobación visual en móvil y escritorio.
- Documentación de arquitectura, contenido, decisiones y validación. Skills instaladas con su lockfile.
- Commits atómicos revisados y push al nuevo repositorio. Publicar el sitio en un hosting no forma parte del pedido inicial.

## Dirección de diseño

Estudio editorial de software: fondo marfil, tipografía de gran escala, acentos terracota, grilla rigurosa, ilustración técnica propia en HTML/CSS/SVG y proyectos presentados por el problema que resuelven. La precisión del contenido prima sobre los adornos.

## Revisión

La carpeta inicial estaba vacía y no tenía Git ni HEAD. Se registra una base vacía antes de incorporar todos los archivos de esta tarea; la revisión final incluye desde esa base hasta HEAD, staged, unstaged y nuevos archivos.

## Ampliación autorizada: Vercel

El usuario pidió publicar este portfolio en Vercel y reemplazar el sitio anterior en `https://fermin-alliot.vercel.app/`.

- Reutilizar el proyecto y conservar el dominio existente.
- Configurar la compilación estática de Astro y conectar el nuevo repositorio `Falliot00/portfolio`, rama `main`.
- Excluir investigación privada, credenciales y archivos locales de la carga a Vercel.
- Comprobar en producción la landing, el CV, los recursos y una ruta 404 antes de declarar el reemplazo completo.
- Documentar la configuración y los resultados. Base de esta ampliación: `3111c46`.

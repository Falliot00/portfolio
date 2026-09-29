# Fermín Alliot — Portfolio

Portfolio y CV digital en español, construido con Astro, TypeScript y CSS. Presenta proyectos seleccionados, tecnologías, recorrido y contacto a partir del análisis de **27 repositorios de GitHub: 10 públicos y 17 privados** al 29 de septiembre de 2026. Los casos privados se describen de forma anónima.

## Desarrollo local

Usá Node.js **24.18.0**, fijado en `.nvmrc`, y npm. Desde la raíz del proyecto:

```sh
npm ci
npx playwright install chromium
npm run dev
```

El servidor de desarrollo abre el sitio en `http://127.0.0.1:4321`. La ruta `/cv` ofrece una versión imprimible: usá **Imprimir / Guardar PDF** o la función de impresión del navegador.

## Comprobaciones

```sh
npm run typecheck
npm run lint
npm run build
npm test
```

`npm run check` ejecuta esas cuatro comprobaciones en secuencia. `npm run preview` permite revisar el resultado estático de `dist/`. Los comandos anteriores describen cómo validar el proyecto; no constituyen un registro de resultados.

## Arquitectura y edición

- `src/data/portfolio.ts`: perfil, casos seleccionados, tecnologías, recorrido y archivo de proyectos.
- `src/pages/index.astro`: landing; `src/pages/cv.astro`: CV y formación; `src/pages/404.astro`: página de error.
- `src/components/`: piezas de presentación e ilustraciones técnicas originales.
- `src/layouts/Layout.astro`: idioma, metadatos y fuentes locales.
- `src/styles/global.css`: diseño, adaptación a pantallas e impresión.
- `docs/spec.md`: alcance y criterios de aceptación.
- `docs/content-sources.md`: evidencia, cobertura y decisiones editoriales.
- `docs/validation.md`: resultados efectivos de pruebas, revisión y limitaciones.

Astro genera HTML estático. El contenido principal se entrega sin JavaScript; los scripts del navegador se reservan para interacciones puntuales. El contacto usa enlaces de correo y perfiles públicos. No requiere API, base de datos ni credenciales para funcionar.

La dirección visual combina fondo marfil, acentos terracota, tipografía editorial e ilustraciones de interfaces. Las representaciones de casos son composiciones originales con datos demostrativos, no capturas de sistemas privados. Las fuentes Manrope e IBM Plex Mono se sirven desde el propio sitio.

Para actualizar un caso, editá los datos y conservá su fuente o evidencia local. Las fechas describen el recorrido de los proyectos; no implican fechas de contratación. Evitá publicar nombres de clientes, URLs privadas, datos internos o resultados sin respaldo.

## Skills y flujo de trabajo

Se instalaron **38 skills de Matt Pocock** dentro de `.agents/skills`, con versiones registradas en `skills-lock.json`, mediante:

```sh
npx skills@latest add mattpocock/skills
```

El flujo del proyecto es investigación con `research`, implementación según `docs/spec.md` y revisión desde la base Git con `code-review` en sus ejes de estándares y cumplimiento del pedido. Las notas de investigación con referencias privadas permanecen en `.research/`, excluida de Git; la documentación pública contiene únicamente la síntesis anonimizada y fuentes públicas.

## Publicación

La compilación produce `dist/`. **No se realizó un despliegue a hosting como parte de esta entrega.** Subir el repositorio a GitHub y publicar un sitio web son pasos independientes. Antes de un futuro despliegue, definí el dominio y comprobá las rutas `/`, `/cv` y la página 404 en el proveedor elegido.

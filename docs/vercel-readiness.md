# Preparación para Vercel

Investigación del 29 de septiembre de 2026 para reemplazar el sitio de `https://fermin-alliot.vercel.app/` con este repositorio. Esta nota registra criterios de configuración y el procedimiento; los resultados efectivos están en [validation.md](validation.md#publicación-en-vercel).

## Configuración requerida

La aplicación usa `output: 'static'` en `astro.config.mjs`. Astro documenta que una publicación estática en Vercel no requiere adaptador ni configuración adicional de servidor. [Astro: Vercel](https://docs.astro.build/en/guides/deploy/vercel/).

Al reutilizar el proyecto de Vercel del sitio anterior, comprobar estos valores:

| Opción | Valor de este proyecto |
| --- | --- |
| Repositorio | `Falliot00/portfolio` |
| Rama de producción | `main` |
| Framework | `Astro` (`astro`) |
| Root Directory | Raíz del repositorio |
| Install Command | `npm ci` |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Node.js | `24.x` |

La compilación y salida siguen las recomendaciones de Astro. Los overrides del proyecto Vercel y su directorio raíz se conservan hasta modificarlos; por eso deben revisarse al migrar desde otro framework, especialmente comandos de Angular y rutas como `dist/<proyecto>`. Un `vercel.json` puede declarar `framework`, `buildCommand`, `installCommand` y `outputDirectory`, pero el directorio raíz se administra en Vercel. [Astro: publicación](https://docs.astro.build/en/guides/deploy/), [Vercel: builds](https://vercel.com/docs/builds/configure-a-build), [Vercel: configuración](https://vercel.com/docs/project-configuration/vercel-json).

`package.json` exige Node `>=24.18.0 <25`; `.nvmrc` fija `24.18.0` para desarrollo. Vercel admite Node 24 y garantiza la versión mayor, con actualizaciones de minor/patch administradas por la plataforma. Comprobar la versión efectiva en el log de build; no dar por hecho que coincida exactamente con `.nvmrc`. [Vercel: Node.js](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions).

## Conexión y publicación

Vercel permite cambiar el repositorio conectado desde Settings → Git. Conectar `Falliot00/portfolio` y comprobar `main` evita que futuros cambios del repositorio anterior vuelvan a publicar el sitio viejo. Esta última consecuencia es una inferencia del funcionamiento de despliegues automáticos. [Vercel: GitHub](https://vercel.com/docs/git/vercel-for-github), [Astro: Vercel](https://docs.astro.build/en/guides/deploy/vercel/).

Para una subida desde la CLI, declarar exclusiones en `.vercelignore`: investigación local `.research/`, skills `.agents/`, temporales `.scratch/`, informes de pruebas, dependencias y archivos de entorno. El build necesita `src/`, `public/`, configuración y manifiestos de dependencias. Vercel documenta que sube los archivos no excluidos; servir únicamente `dist` no equivale a excluir archivos de la carga. [Vercel: .vercelignore](https://vercel.com/docs/deployments/vercel-ignore).

Como ajuste de publicación, `site` puede fijarse en `https://fermin-alliot.vercel.app` y usarse para construir las URLs canónicas de las páginas. No es requisito para que el HTML estático funcione. [Astro: site](https://docs.astro.build/en/reference/configuration-reference/#site).

Antes de declarar el reemplazo completo, verificar que el despliegue de producción está listo, que el dominio sirve la nueva landing, que `/cv/` y los recursos estáticos cargan y que una ruta inexistente devuelve 404. Registrar los resultados efectivos en la documentación de validación, sin confundir la configuración prevista con una comprobación realizada.

## Publicación por CLI

La primera publicación reutilizó `portfolio-front-end` dentro de `fermins-projects`, con Vercel CLI 61.0.0. Se ajustaron los valores remotos de Angular a Astro y se mantuvo el dominio. La conexión al repositorio anterior quedó desvinculada; la nueva conexión depende del permiso específico de la integración de GitHub.

Para una futura publicación manual desde un checkout validado:

```sh
npx vercel@61.0.0 link --project portfolio-front-end --scope fermins-projects
npx vercel@61.0.0 deploy --prod --skip-domain --scope fermins-projects
npx vercel@61.0.0 promote <URL-del-despliegue-verificado> --scope fermins-projects
```

Revisar el despliegue preparado antes de promoverlo y comprobar después el dominio público. No subir archivos de autenticación ni la carpeta `.vercel`; están ignorados. La configuración no requiere variables de entorno.

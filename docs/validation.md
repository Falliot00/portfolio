# Registro de validación

Fecha: 29 de septiembre de 2026. Entorno: Windows, Node.js 24.18.0, npm 12.0.1. El proyecto fija Node 24 en `.nvmrc` y en `engines`, y dependencias en `package-lock.json`.

## Resultados finales

| Comprobación | Resultado | Evidencia y alcance |
| --- | --- | --- |
| `npm run typecheck` | PASS | Astro check: 14 archivos, 0 errores, 0 warnings, 0 hints. |
| `npm run lint` | PASS | ESLint sobre código, configuración y tests propios. Skills vendorizadas y artefactos generados excluidos. |
| `npm run build` | PASS | HTML estático generado para `/`, `/cv/` y `/404.html`. |
| `npm test` | PASS | 16 casos en Chromium: 8 comportamientos en escritorio y móvil, 10,6 segundos en la pasada final. |
| Accesibilidad automática | PASS | Axe WCAG 2 A/AA y 2.1 A/AA: sin infracciones en landing, casos/archivo expandidos y CV. No equivale a certificación integral. |
| Responsive | PASS | Sin desborde horizontal a 320, 375 y 1440 px en landing cerrada/expandida y CV. Inspección visual adicional en el navegador, escritorio y móvil de 375 px. |
| Navegación sin JavaScript | PASS | Contenido visible, detalles nativos por teclado, activación del enlace al CV y alternativa de impresión. |
| Impresión | PASS | El botón invoca `window.print`; la barra de controles se oculta en media print. No se envió un trabajo a una impresora física. |
| Contenido publicable | PASS | 26 archivos propios del índice y 5 textos del build contrastados con 17 identificadores privados y nombres de clientes conocidos: sin coincidencias. Sin referencias privadas, credenciales ni registros operativos detectados. |
| Investigación local | PASS | Tres notas en `.research/` ignoradas y fuera del índice. Inventario público anonimizado de los 27 repositorios. |
| React Doctor | NO EJECUTADO — no corresponde | El proyecto utiliza Astro; no se implementó ni modificó React/Next.js. Mencionar React como habilidad no introduce código React. |

El build se realizó después del último cambio de implementación; posteriormente solo se ajustaron pruebas y documentación, sin invalidar ese resultado. La suite completa se volvió a ejecutar tras resolver los fallos, sin omitir casos ni desactivar reglas.

## Correcciones durante la validación

- Se oscurecieron textos secundarios de las ilustraciones que no alcanzaban contraste AA.
- Se mejoró el foco de teclado sobre el fondo oscuro de contacto.
- Se alineó el rango Node con las dependencias fijadas.
- La prueba sin JavaScript usaba un selector de texto que omite `noscript`. Se comprobó visualmente el mensaje y se corrigió el test para verificar visibilidad y `textContent` directamente.
- La navegación al CV en esa prueba ahora verifica activación nativa por teclado con foco explícito. La prueba original de clic esperó indefinidamente estabilidad geométrica durante el desplazamiento; no se fuerza el clic ni se altera la aplicación para obtener PASS. El test acredita navegación por teclado, no demuestra la causa interna de aquella espera.

## Code review de Matt Pocock

Base fija: `840db6c906a28efa622cfe283a12e17788917aec`, commit vacío creado al iniciar el repositorio. La carpeta inicial no contenía archivos ni historial ajeno.

La revisión cubrió todas las adiciones de la tarea mediante el diff desde la base, el índice, el working tree y los nuevos archivos. Se ejecutaron dos revisiones independientes en paralelo. No se tomó el diff vacío de `base...HEAD` como una revisión válida del trabajo staged.

### Standards

Se detectaron dos hallazgos P2: contraste del foco en contacto y rango de Node incompatible con una dependencia. Ambos fueron corregidos y revisados de nuevo. **0 hallazgos pendientes.**

### Spec

La implementación concuerda con el pedido y los criterios documentados, incluida la anonimización, el contenido respaldado y el CV. **0 hallazgos de implementación.** Los resultados de tests fueron verificados por separado.

## Límites

- Las pruebas automatizadas usan Chromium de escritorio y emulación móvil; no se ejecutaron Firefox, Safari ni dispositivos físicos.
- La investigación de los repositorios fuente fue estática; no certifica sus despliegues ni los resultados de sus pruebas.
- No se verificó la recepción de correo ni se enviaron mensajes de prueba.
- No se publicó el sitio en un hosting; esa acción es independiente de subir el código a GitHub.

## Decisiones técnicas

Se utilizó Astro en modo estático para entregar contenido sin JavaScript y mantener las interacciones principales en HTML nativo. La única interacción con script propio es el botón de impresión del CV. Las fuentes se sirven localmente y las ilustraciones se construyen en HTML/CSS/SVG, sin datos de clientes. Referencias: [instalación de Astro](https://docs.astro.build/en/install-and-setup/) y [fuentes personalizadas](https://docs.astro.build/en/guides/fonts/).

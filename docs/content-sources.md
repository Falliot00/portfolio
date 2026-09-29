# Fuentes y decisiones de contenido

## Alcance de la investigación

Corte: **29 de septiembre de 2026**, antes de crear el repositorio de este portfolio. Se consultaron los **27 repositorios de la cuenta Falliot00: 10 públicos y 17 privados**, incluido un fork académico. El recuento se verificó mediante GitHub CLI autenticado:

```sh
gh repo list Falliot00 --limit 100 --json name,isPrivate,isFork,createdAt,pushedAt,url
```

Se examinaron metadatos, árboles de archivos, README, manifiestos y código representativo. Cada repositorio figura en el inventario, aunque esté vacío, conserve una versión anterior o comparta contenido con otro. **27 repositorios no significa 27 productos, clientes o entregas.**

La investigación fue de solo lectura. No se ejecutaron los sistemas originales ni sus pruebas, no se consultaron bases de datos y no se validaron despliegues, cantidad de usuarios o resultados comerciales. Tener una dependencia o un script de tests no demuestra uso completo, cobertura ni resultado PASS.

Las notas detalladas se conservan localmente en `.research/`, ignorada por Git. Los casos privados utilizan los identificadores anónimos de esta página. Se omiten sus nombres, enlaces, clientes, código y datos internos, según la preferencia confirmada por el titular.

## Perfil, contacto y formación

| Contenido | Evidencia pública | Tratamiento |
| --- | --- | --- |
| Fermín Alliot | [Portfolio académico de 2026](https://github.com/Falliot00/msi-herramientas-de-desarrollo-semana-1-Alliot/blob/main/PORTFOLIO.md) y [banner del portfolio anterior](https://github.com/Falliot00/portfolio_FrontEnd/blob/main/portfolio_FrontEnd/src/app/components/banner/banner.component.html) | Nombre confirmado por el titular. |
| Desarrollador full stack | Código frontend y backend de los casos documentados, además del rol confirmado por el titular | Describe el tipo de trabajo. No atribuye un cargo laboral, empresa ni seniority. |
| Correo y LinkedIn | [Contacto del proyecto Argentina Programa](https://github.com/Falliot00/portfolio-FrontEnd-ArgentinaPrograma/blob/main/README.md#-contacto) y [footer del portfolio anterior](https://github.com/Falliot00/portfolio_FrontEnd/blob/main/portfolio_FrontEnd/src/app/components/footer/footer.component.html) | `ferminalliot@gmail.com` y [LinkedIn](https://www.linkedin.com/in/fermin-alliot-350752251/), datos previamente publicados por el titular. No se comprobó la recepción de correo. |
| Santa Fe, Argentina | [Footer de Argentina Programa](https://github.com/Falliot00/portfolio-FrontEnd-ArgentinaPrograma/blob/main/src/app/components/footer/footer.component.html) | Referencia geográfica previamente publicada; no se agrega domicilio. |
| Tecnicatura Universitaria en Programación, UTN | [README de Programación 2](https://github.com/Falliot00/UTN-TUPaD-P2/blob/main/README.md) y [portfolio académico de junio de 2026](https://github.com/Falliot00/msi-herramientas-de-desarrollo-semana-1-Alliot/blob/main/PORTFOLIO.md) | Formación documentada mediante trabajos académicos. No se afirma graduación ni fecha de egreso. |
| Argentina Programa / #YoProgramo, 2023 | [Descripción del trabajo integrador](https://github.com/Falliot00/portfolio-FrontEnd-ArgentinaPrograma/blob/main/README.md) | Se presenta como formación y proyecto integrador. |

El titular indicó su [portfolio anterior](https://fermin-alliot.vercel.app/) como referencia para datos personales. La nueva identidad visual y estructura se desarrollaron para este proyecto. Se excluyeron edad, experiencia de ejemplo, porcentajes subjetivos de habilidades y datos cuya vigencia no estaba acreditada. Los placeholders del antiguo componente de experiencia no se trataron como empleos reales.

## Inventario público — 10 repositorios

| ID | Repositorio y fuentes | Evidencia observada | Uso en el portfolio |
| --- | --- | --- | --- |
| PUB-01 | [TRABAJO-FINAL-INTEGRADOR](https://github.com/Falliot00/TRABAJO-FINAL-INTEGRADOR), [diseño de base de datos](https://github.com/Falliot00/TRABAJO-FINAL-INTEGRADOR/blob/main/database/README.md) | Diseño académico de 2026 en equipo con Gabriel Antuña: relevamiento, arquitectura, reglas de negocio y DDL. Las carpetas de aplicación no acreditan una implementación ejecutable. | Evidencia de formación y modelado. No se presenta como software terminado ni se atribuye experiencia práctica a su stack propuesto. |
| PUB-02 | [msi-herramientas-de-desarrollo-semana-1-Alliot](https://github.com/Falliot00/msi-herramientas-de-desarrollo-semana-1-Alliot), [PORTFOLIO.md](https://github.com/Falliot00/msi-herramientas-de-desarrollo-semana-1-Alliot/blob/main/PORTFOLIO.md) | Ejercicio documental de 2026 sobre Git, GitHub y herramientas de desarrollo. | Evidencia reciente de formación; no se destaca como aplicación. |
| PUB-03 | [UTN-TUPaD-P2](https://github.com/Falliot00/UTN-TUPaD-P2), [README](https://github.com/Falliot00/UTN-TUPaD-P2/blob/main/README.md) | Prácticas Java de 2025: estructuras, POO, UML, colecciones, herencia, interfaces, excepciones y JDBC. Incluye una copia del TFI de PUB-04. | Trayectoria y formación. El TFI repetido no se cuenta como otro producto. |
| PUB-04 | [UTN-TUPaD-P2-TFI](https://github.com/Falliot00/UTN-TUPaD-P2-TFI), [servicio de productos](https://github.com/Falliot00/UTN-TUPaD-P2-TFI/blob/main/TFI-Programacion2/src/main/java/edu/utn/p2/tfi/service/ProductoService.java), [manifiesto](https://github.com/Falliot00/UTN-TUPaD-P2-TFI/blob/main/TFI-Programacion2/pom.xml) | Aplicación académica de consola Java 21/MySQL/JDBC. Productos y códigos de barras, CRUD, baja lógica y transacciones con rollback. | Caso seleccionado “Datos con integridad”; código público enlazado. |
| PUB-05 | [UTN-TUPaD-P1](https://github.com/Falliot00/UTN-TUPaD-P1), [README del integrador](https://github.com/Falliot00/UTN-TUPaD-P1/blob/main/Trabajo%20Integrador/README.md), [comparación con upstream](https://github.com/sbruselario/UTN-TUPaD-P1/compare/main...Falliot00:UTN-TUPaD-P1:main) | Fork académico con 15 commits propios observados frente a la plantilla. Prácticas Python y explorador de algoritmos HTML/JavaScript/Tailwind/Chart.js, realizado con Gabriel Antuña. | Archivo de proyectos y recorrido de 2025, identificado como trabajo colaborativo. No se atribuyen al usuario la plantilla ni todo el material de soluciones. |
| PUB-06 | [Growthness-web](https://github.com/Falliot00/Growthness-web), [manifiesto](https://github.com/Falliot00/Growthness-web/blob/main/growthness-web/package.json), [contenido del método](https://github.com/Falliot00/Growthness-web/blob/main/growthness-web/src/app/components/metodo/metodo.component.html) | Landing de marketing para el sector fitness, 2023–2024, con Angular 16 y Bootstrap. | Archivo de proyectos y recorrido. No se adjudican al desarrollo los resultados o promesas comerciales del contenido. |
| PUB-07 | [portfolio_FrontEnd](https://github.com/Falliot00/portfolio_FrontEnd), [manifiesto](https://github.com/Falliot00/portfolio_FrontEnd/blob/main/portfolio_FrontEnd/package.json) | Portfolio personal Angular 15/Bootstrap de 2023. Conserva placeholders de experiencia y de un segundo proyecto. | Antecedente visual y fuente de datos publicados; los placeholders se excluyen. |
| PUB-08 | [portfolio-BackEnd-ArgentinaPrograma](https://github.com/Falliot00/portfolio-BackEnd-ArgentinaPrograma), [pom.xml](https://github.com/Falliot00/portfolio-BackEnd-ArgentinaPrograma/blob/main/pom.xml) | API del portfolio formativo de 2023: Java, Spring Boot, JPA, MySQL y autenticación JWT. | Se agrupa con PUB-09 como un proyecto full stack, no dos productos. |
| PUB-09 | [portfolio-FrontEnd-ArgentinaPrograma](https://github.com/Falliot00/portfolio-FrontEnd-ArgentinaPrograma), [README](https://github.com/Falliot00/portfolio-FrontEnd-ArgentinaPrograma/blob/main/README.md), [manifiesto](https://github.com/Falliot00/portfolio-FrontEnd-ArgentinaPrograma/blob/main/package.json) | Interfaz Angular del mismo proyecto, con login y edición de perfil, formación, experiencia, habilidades y proyectos. | Trayectoria de 2023, formación y fuentes de contacto. |
| PUB-10 | [fermin-alliot](https://github.com/Falliot00/fermin-alliot) | El árbol observado contiene únicamente `.gitattributes`. | Inventariado sin atribuir una aplicación ni una entrega. |

## Inventario privado — 17 repositorios anonimizados

Los identificadores siguientes sirven para documentar cobertura. No permiten acceder al código privado y no representan contratos ni clientes distintos. El soporte detallado se mantiene únicamente en las notas locales. “Implementación observada” significa código inspeccionado, no operación en producción comprobada.

| ID | Dominio y período del repositorio | Evidencia observada | Decisión editorial |
| --- | --- | --- | --- |
| PRIV-01 | Gestión inmobiliaria, 2026 | Aplicación de propiedades, contratos y operaciones administrativas. Next.js, TypeScript, Express, PostgreSQL y Prisma. | Caso anonimizado “Gestión inmobiliaria”. |
| PRIV-02 | Gestión de siniestros, 2026 | Registro y seguimiento de incidentes, documentación multimedia y acceso por roles. Next.js, Express y SQL Server. | Archivo de proyectos, sin nombres ni capturas internas. |
| PRIV-03 | Analítica de transporte, 2026 | Tableros de operación y mantenimiento, filtros y series temporales. Next.js, SQL Server y Recharts. Algunas áreas están documentadas como pendientes. | Archivo “Indicadores y recorridos”, limitado a capacidades implementadas. |
| PRIV-04 | Administración de servicios de taller, 2026 | Clientes, vehículos, servicios, renovaciones y cobranzas. Next.js, Prisma y PostgreSQL. | Síntesis anónima de gestión de servicios. |
| PRIV-05 | Antecedente inmobiliario, 2025 | API NestJS y modelo relacional para propiedades, contratos, cuotas y pagos. | Antecedente del dominio; no se cuenta como otro cliente ni se afirma una migración comprobada. |
| PRIV-06 | API de captura e integración, 2025–2026 | Recepción de lecturas y registro transaccional con Node.js, Express y SQL Server. | Agrupado con PRIV-11 en “Del dispositivo al sistema”. |
| PRIV-07 | Operaciones de transporte, 2025–2026 | Revisión de alertas, evidencias, roles, reportes y documentación. Next.js, Express, SQL Server y S3. | Caso anonimizado “Operaciones de transporte”. |
| PRIV-08 | Analítica de recorridos, 2025–2026 | Consulta de registros y tiempos mediante filtros y visualizaciones. Next.js, TypeScript y SQL Server. | Archivo “Indicadores y recorridos”. No se presenta como optimización automática de rutas. |
| PRIV-09 | Portal de información al pasajero A, 2025–2026 | Horarios, tarifas, paradas y mapa de vehículos. Next.js, TypeScript y Leaflet. | Síntesis conjunta de portales; disponibilidad del proveedor externo no comprobada. |
| PRIV-10 | Portal de información al pasajero B, 2025–2026 | Portal con funciones y arquitectura similares a PRIV-09. | Se reconoce el contenido compartido y se agrupa editorialmente. |
| PRIV-11 | Captura con dispositivo físico, 2025–2026 | Python, Raspberry Pi, SQLite y sincronización HTTP posterior. | Agrupado con PRIV-06. No se publican lecturas, datos personales ni configuración de dispositivos. |
| PRIV-12 | Antecedente de portal de movilidad, 2024–2025 | Astro, JavaScript y consulta de próximas salidas desde horarios. | Antecedente técnico de los portales; no se afirma reemplazo productivo o migración directa. |
| PRIV-13 | Iteración de portfolio formativo, 2023 | Angular 15 y Spring Boot/MySQL, con perfil y experiencia. | Se agrupa en la etapa formativa, evitando otra tarjeta del mismo tipo. |
| PRIV-14 | Variante de portfolio, 2023 | Angular 13, Material y Spring Boot/MySQL. | No se atribuye un encargo de cliente ni lanzamiento por falta de evidencia. |
| PRIV-15 | Iteración de portfolio formativo, 2023 | Angular 15 y Spring Boot/MySQL, con contenido solapado con otras iteraciones. | Se considera antecedente, no producto independiente. |
| PRIV-16 | Repositorio sin aplicación, 2023 | Solo `.gitattributes` en el árbol observado. | Inventariado y excluido de proyectos entregados. |
| PRIV-17 | Iteración inicial de portfolio, 2023 | Angular 15 y Spring Boot/MySQL. | Se agrupa en la etapa formativa. |

## Relación entre evidencia y presentación

- **Gestión inmobiliaria:** PRIV-01 respalda las capacidades actuales; PRIV-05 respalda el antecedente de 2025. El período conjunto no afirma que toda la tecnología actual estuviera implementada desde 2025.
- **Operaciones de transporte:** PRIV-07 respalda alertas, documentación, reportes, API y persistencia. Los gráficos ilustrativos no son métricas reales.
- **Del dispositivo al sistema:** PRIV-06 y PRIV-11 respaldan la conexión entre captura física, persistencia local y recepción en API. No se promete entrega garantizada ni comportamiento certificado sobre hardware.
- **Datos con integridad:** PUB-04 respalda el caso Java/MySQL. Su código demuestra transacciones y rollback; no se afirma que esta investigación haya ejecutado la aplicación.
- **Tecnologías:** se eligieron herramientas con uso observado en manifiestos y código. El stack propuesto de PUB-01 no se empleó como prueba de implementación.
- **Recorrido:** se sintetizan etapas de proyectos, sin transformar actividad de GitHub en antigüedad laboral, títulos, empleadores o métricas de impacto.
- **CV:** utiliza los mismos datos de perfil, casos, herramientas y recorrido que la landing. La formación se describe sin atribuir un título obtenido.

## Límites y mantenimiento

No se publican código de terceros privados, logos de clientes, capturas internas, credenciales, direcciones de servicios ni datos operativos. Las ilustraciones del sitio son originales y demostrativas. No se inventan cifras de usuarios, ahorros, facturación, número de clientes ni porcentajes de dominio técnico.

Los enlaces de casos llevan a repositorios públicos. Las antiguas URLs de despliegue no se usan como demostración de disponibilidad actual. Los repositorios vacíos, versiones anteriores, pares frontend/backend y forks se distinguen para no inflar el trabajo mostrado.

Para actualizar el contenido, contrastá primero el README, manifiesto y código pertinente. Editá `src/data/portfolio.ts` y las referencias de esta página. Si el cambio afecta una fuente privada, conservá la evidencia en `.research/` y actualizá solamente su resumen anónimo. Las pruebas del nuevo portfolio se documentan por separado de esta investigación; este inventario no acredita un resultado PASS de validación.

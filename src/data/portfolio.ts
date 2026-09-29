export const profile = {
  name: 'Fermín Alliot',
  role: 'Desarrollador full stack',
  location: 'Santa Fe, Argentina',
  email: 'ferminalliot@gmail.com',
  github: 'https://github.com/Falliot00',
  linkedin: 'https://www.linkedin.com/in/fermin-alliot-350752251/',
  summary: 'Desarrollo aplicaciones web que conectan interfaces claras, lógica de negocio y datos. Mi recorrido va de los primeros proyectos con Angular y Java a sistemas de gestión, transporte e integraciones con TypeScript.',
};

export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  period: string;
  description: string;
  stack: string[];
  challenge: string;
  solution: string;
  features: string[];
  kind: 'property' | 'transport' | 'hardware' | 'catalog';
  privacy: 'Caso anonimizado' | 'Proyecto académico';
  source?: string;
}

export const projects: Project[] = [
  {
    id: 'gestion-inmobiliaria', number: '01', name: 'Gestión inmobiliaria',
    category: 'APLICACIÓN WEB', period: '2025 — 2026', kind: 'property', privacy: 'Caso anonimizado',
    description: 'Propiedades, contratos y operaciones en un mismo sistema de gestión.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    challenge: 'Conectar la información de propiedades y contratos con los procesos administrativos de una operación inmobiliaria.',
    solution: 'Una aplicación con módulos de gestión y persistencia relacional, que reúne la interfaz y las reglas del negocio.',
    features: ['Gestión de propiedades y contratos', 'Modelado de datos relacionales', 'Flujos administrativos y permisos'],
  },
  {
    id: 'operaciones-transporte', number: '02', name: 'Operaciones de transporte',
    category: 'SISTEMA DE GESTIÓN', period: '2025 — 2026', kind: 'transport', privacy: 'Caso anonimizado',
    description: 'Seguimiento de alarmas y documentación para la gestión de una flota.',
    stack: ['Next.js', 'Express', 'SQL Server', 'Prisma'],
    challenge: 'Ordenar el seguimiento de alarmas, vehículos y documentación dentro de una operación de transporte.',
    solution: 'Un sistema web con API, base de datos y almacenamiento de archivos para consultar y gestionar información operativa.',
    features: ['Gestión de alarmas y vehículos', 'Documentos y reportes PDF', 'Almacenamiento de archivos en S3'],
  },
  {
    id: 'captura-e-integracion', number: '03', name: 'Del dispositivo al sistema',
    category: 'HARDWARE + SOFTWARE', period: '2025 — 2026', kind: 'hardware', privacy: 'Caso anonimizado',
    description: 'Captura de documentos con Raspberry Pi y una API para integrar las lecturas.',
    stack: ['Python', 'Raspberry Pi', 'SQLite', 'Node.js'],
    challenge: 'Conectar un lector físico de documentos con el procesamiento y almacenamiento de sus lecturas.',
    solution: 'Un cliente en Python para Raspberry Pi y una API independiente para recibir y registrar los eventos de lectura.',
    features: ['Lectura desde un dispositivo físico', 'Persistencia local con SQLite', 'Integración con una API transaccional'],
  },
  {
    id: 'catalogo-productos', number: '04', name: 'Datos con integridad',
    category: 'JAVA + BASES DE DATOS', period: '2025', kind: 'catalog', privacy: 'Proyecto académico',
    description: 'Gestión de productos y códigos de barras con transacciones y persistencia.',
    stack: ['Java 21', 'MySQL', 'JDBC'],
    challenge: 'Mantener consistentes los productos y sus códigos de barras al crear, consultar, actualizar y eliminar datos.',
    solution: 'Trabajo integrador académico con una aplicación de consola, acceso a datos con JDBC y transacciones con rollback.',
    features: ['Operaciones CRUD', 'Relación entre productos y códigos', 'Transacciones y manejo de errores'],
    source: 'https://github.com/Falliot00/UTN-TUPaD-P2-TFI',
  },
];

export const expertise = [
  { number: '01', name: 'Interfaces', description: 'Experiencias web claras, desde una landing hasta un panel de gestión.', tools: ['React', 'Next.js', 'Angular', 'Astro', 'TypeScript', 'CSS'] },
  { number: '02', name: 'Lógica & datos', description: 'Reglas de negocio, APIs y bases de datos que sostienen la aplicación.', tools: ['Node.js', 'Express', 'Java', 'PostgreSQL', 'SQL Server', 'Prisma'] },
  { number: '03', name: 'Integraciones', description: 'Conexiones entre software, servicios y dispositivos físicos.', tools: ['Python', 'Raspberry Pi', 'SQLite', 'S3', 'Git', 'GitHub'] },
];

export const timeline = [
  { year: '2026', title: 'Sistemas que conectan procesos', description: 'Gestión inmobiliaria, siniestros, indicadores y taller. Más foco en reglas de negocio, datos e integración entre servicios.' },
  { year: '2025', title: 'De la web a la operación', description: 'Sistemas para transporte, registro de recorridos y portales web. Proyectos académicos con Python, Java y bases de datos.' },
  { year: '2023 — 24', title: 'Las primeras piezas', description: 'Portfolios full stack con Angular y Spring Boot, y una web de marketing para el sector fitness. La base de mi recorrido.' },
];

export const archive = [
  { name: 'Gestión de siniestros', type: 'Sistema web · TypeScript', description: 'Registro, seguimiento y documentación de incidentes en una aplicación de gestión.' },
  { name: 'Indicadores y recorridos', type: 'Datos · Transporte', description: 'Consulta y análisis de información operativa y recorridos de transporte.' },
  { name: 'Gestión de taller', type: 'Aplicación web · TypeScript', description: 'Administración de clientes, vehículos, servicios, renovaciones y cobranzas.' },
  { name: 'Portales de transporte', type: 'Web · Información al pasajero', description: 'Páginas para consultar información del servicio e integrar ubicación de vehículos.' },
  { name: 'Growthness', type: 'Angular · Bootstrap · 2023–24', description: 'Sitio de marketing para negocios del sector fitness.', source: 'https://github.com/Falliot00/Growthness-web' },
  { name: 'Explorador de algoritmos', type: 'Proyecto académico colaborativo · 2025', description: 'Trabajo junto a Gabriel Antuña para explorar y comparar algoritmos, más prácticas de programación en Python.', source: 'https://github.com/Falliot00/UTN-TUPaD-P1' },
];

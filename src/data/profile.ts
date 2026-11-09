import type { Lang } from '../i18n/ui';

type Localized = Record<Lang, string>;

export const profile = {
  name: 'Danild Pérez',
  email: 'danildperez2@gmail.com',
  github: 'https://github.com/danildperez04',
  linkedin: 'https://www.linkedin.com/in/danild-perez2',
  timeZone: 'America/Managua',
  /** Ruta dentro de `public/` cuando haya CV; `null` oculta el botón. */
  cv: { es: null, en: null } as Record<Lang, string | null>,
};

export interface StackGroup {
  label: Localized;
  main: string[];
  /** Una etiqueta que cambia según el idioma va como objeto `{ es, en }`. */
  extra: (string | Localized)[];
}

export const stack: StackGroup[] = [
  {
    label: { es: 'lenguajes', en: 'languages' },
    main: ['TypeScript', 'JavaScript'],
    extra: ['SQL'],
  },
  {
    label: { es: 'backend', en: 'backend' },
    main: ['NestJS', 'Express'],
    extra: ['JWT', 'Passport', 'RBAC', '2FA', 'Swagger', 'class-validator', 'Helmet'],
  },
  {
    label: { es: 'frontend', en: 'frontend' },
    main: ['React', 'Vite', 'Tailwind CSS', 'MUI'],
    extra: ['TanStack Query', 'Zustand', 'React Hook Form', 'Zod', 'React Router'],
  },
  {
    label: { es: 'datos', en: 'data' },
    main: ['PostgreSQL', 'TypeORM'],
    extra: [
      { es: 'Migraciones', en: 'Migrations' },
      'Seeds',
      { es: 'Transacciones', en: 'Transactions' },
    ],
  },
  {
    label: { es: 'móvil', en: 'mobile' },
    main: ['React Native', 'Expo'],
    extra: ['Expo Router', 'Reanimated', 'Secure Store'],
  },
  {
    label: { es: 'calidad', en: 'quality' },
    main: ['Vitest', 'Jest'],
    extra: ['Testing Library', 'Supertest', 'Husky'],
  },
  {
    label: { es: 'devops', en: 'devops' },
    main: ['Docker', 'GitHub Actions', 'pnpm'],
    extra: ['Docker Compose', 'Monorepos', 'Scrum', 'Conventional Commits'],
  },
];

export interface ExperienceItem {
  period: Localized;
  title: Localized;
  org?: string;
  description: Localized;
}

export const experience: ExperienceItem[] = [
  {
    period: { es: '2026 — hoy', en: '2026 — now' },
    title: { es: 'Pasantía full-stack', en: 'Full-stack intern' },
    org: 'Fundación Ayuda en Acción',
    description: {
      es: 'Sistema de gestión de medios (vehículos, conductores y bitácora de viajes) con NestJS, React, Expo y PostgreSQL.',
      en: 'Resource management system (vehicles, drivers and trip log) with NestJS, React, Expo and PostgreSQL.',
    },
  },
  {
    period: { es: '2026', en: '2026' },
    title: { es: 'Proyecto de salud', en: 'Health project' },
    org: 'salud-movil',
    description: {
      es: 'Seguimiento de pacientes con enfermedades crónicas: API, panel web y app móvil.',
      en: 'Follow-up of patients with chronic diseases: API, web dashboard and mobile app.',
    },
  },
  {
    period: { es: '2025', en: '2025' },
    title: { es: 'Hackathon Nicaragua', en: 'Hackathon Nicaragua' },
    description: {
      es: 'Propuesta de turismo: API y web de departamentos y lugares turísticos del país.',
      en: 'Tourism proposal: API and website of the country’s departments and tourist spots.',
    },
  },
  {
    period: { es: 'en curso', en: 'ongoing' },
    title: { es: 'Ingeniería de Sistemas', en: 'Systems Engineering' },
    description: {
      es: 'En proceso de titulación.',
      en: 'Degree in progress.',
    },
  },
];

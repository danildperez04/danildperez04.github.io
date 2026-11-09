# AGENTS.md

Portafolio personal de Danild Pérez. Proyecto sencillo: **no** sigue la metodología
completa del playbook (sin Sprint 0, docs numerados ni historias). Sí aplica:

- Documentación y textos en español; código, commits y ramas en inglés.
- Conventional Commits con alcance: `ui`, `theme`, `i18n`, `content`, `seo`, `deps`,
  `cicd`, `repo`.
- Commits locales sí; `git push` y PR los hace Danild.

## Comandos

```bash
pnpm check && pnpm build   # antes de dar algo por terminado
pnpm format
```

Con el servidor de desarrollo en segundo plano: `astro dev --background`
(`astro dev stop`, `astro dev status`, `astro dev logs`).

## Reglas

1. **Todo texto visible va en los dos idiomas.** Claves en `src/i18n/ui.ts`; datos en
   `src/data/profile.ts` como `{ es, en }`; proyectos en `src/content/projects/es/` y
   `en/` con el mismo nombre de archivo.
2. **Los colores salen de los tokens** de `src/styles/global.css` (`bg`, `surface`,
   `fg`, `muted`, `border`, `accent`, `accent-soft`, `on-accent`). Nada de colores
   literales en componentes. Contraste AA en ambos temas.
3. **El tema** se aplica con la clase `dark` en `<html>` desde el script en línea de
   `BaseLayout.astro` (preferencia guardada > sistema). No moverlo a un script diferido:
   aparecería un destello del tema equivocado.
4. **Rutas con `base`.** El sitio vive en `/portfolio/`: los enlaces internos usan
   `homeUrl()` de `src/i18n/utils.ts` o `import.meta.env.BASE_URL`, nunca `/` a secas.
5. Sin trackers ni scripts de terceros; sin secretos en el repo.

## Documentación de Astro

<https://docs.astro.build> — rutas, componentes, colecciones de contenido, estilos e
internacionalización.

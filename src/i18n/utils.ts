import { getRelativeLocaleUrl } from 'astro:i18n';
import { defaultLang, languages, ui, type Lang, type UiKey } from './ui';

export function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && value in languages;
}

/** Idioma a partir de `Astro.currentLocale`, con español como respaldo. */
export function getLang(locale: string | undefined): Lang {
  return isLang(locale) ? locale : defaultLang;
}

export function useTranslations(lang: Lang) {
  return (key: UiKey): string => ui[lang][key] ?? ui[defaultLang][key];
}

export function otherLang(lang: Lang): Lang {
  return lang === 'es' ? 'en' : 'es';
}

/** URL de la portada en un idioma (incluye el `base` de GitHub Pages). */
export function homeUrl(lang: Lang, hash = ''): string {
  return getRelativeLocaleUrl(lang, '') + hash;
}

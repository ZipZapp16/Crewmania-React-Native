import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en.json';
import es from '../locales/es.json';

const resources = {
    en: {
        translation: en,
    },
    es: {
        translation: es,
    },
};
i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: navigator.language.split('-')[0], // Use the user's system language as the default language
        fallbackLng: 'en', // Fallback language if the translation is not available
        interpolation: {
            escapeValue: false, // React already protects against XSS
        },
    });

export default i18n;
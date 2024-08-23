import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslations from './shared/locales/en.json'
import ruTranslations from './shared/locales/ru.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      ru: {
        translation: ruTranslations
      }
    },
    lng: 'en', // Язык по умолчанию
    fallbackLng: 'en', // Язык по умолчанию, если перевод не найден
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
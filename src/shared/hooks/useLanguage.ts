import { useState, useEffect } from 'react'
import i18n from '../../i18n'

export const useLanguage = () => {
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    const tg = window.Telegram.WebApp

    if (tg) {
      // Получаем язык из Telegram
      const userLang = tg.initDataUnsafe.user?.language_code || 'en'
      const initialLanguage = userLang === 'ru' ? 'ru' : 'en'

      i18n.changeLanguage(initialLanguage)
        .then(() => {
          setLanguage(initialLanguage)
        })
        .catch((e) => {
          console.log('Failed to change language: ', e)
        })

      const handleLanguageChange = (lng: string) => {
        setLanguage(lng)
      }

      i18n.on('languageChanged', handleLanguageChange)

      return () => {
        i18n.off('languageChanged', handleLanguageChange)
      }
    }
  }, [i18n.language])

  const toggleLanguage = () => {
    const newLanguage = language === 'ru' ? 'en' : 'ru'

    i18n.changeLanguage(newLanguage)
      .then(() => {
        setLanguage(newLanguage)
      })
      .catch((e) => {
        console.log('Failed to change language: ', e)
      })
  }

  return { language, toggleLanguage }
}

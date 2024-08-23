import { useState, useEffect } from 'react'
import i18n from '../i18n'

export const useLanguage = () => {
  const [language, setLanguage] = useState(i18n.language)

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setLanguage(lng)
    }

    i18n.on('languageChanged', handleLanguageChange)

    return () => {
      i18n.off('languageChanged', handleLanguageChange)
    }
  }, [])

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

import { useState, useEffect } from 'react'
import i18n from '../../i18n'

const langHandler = async (initialLanguage: string, setLanguage: (s: string) => void) => {
  try {
    await i18n.changeLanguage(initialLanguage)
    setLanguage(initialLanguage)
  } catch (e) {
    console.error('Failed to change language:', e)
  }
}

export const useLanguage = () => {
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    const tg = window.Telegram.WebApp

    const initializeLanguage = async () => {
      if (tg) {
        const userLang = tg.initDataUnsafe.user?.language_code || 'en'
        const initialLanguage = userLang === 'ru' ? 'ru' : 'en'

        await langHandler(initialLanguage, setLanguage)

        const handleLanguageChange = (lng: string) => {
          setLanguage(lng);
        }

        i18n.on('languageChanged', handleLanguageChange)

        return () => {
          i18n.off('languageChanged', handleLanguageChange)
        }
      }
    }

    initializeLanguage()
  }, [])

  const toggleLanguage = async () => {
    const newLanguage = language === 'ru' ? 'en' : 'ru'
    await langHandler(newLanguage, setLanguage)
  }

  return { language, toggleLanguage }
}
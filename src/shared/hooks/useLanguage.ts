import { useState } from 'react'
import i18n from '../../i18n'

export const useLanguage = () => {
  const tg = window.Telegram?.WebApp
  const tgLanguageCode = tg?.initDataUnsafe?.user?.language_code
  const [language, setLanguage] = useState(() => tgLanguageCode || localStorage.getItem('language') || 'en')

  const toggleLanguage = async () => {
    const newLanguage = language === 'ru' ? 'en' : 'ru'
    await i18n.changeLanguage(newLanguage)
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  return { language, toggleLanguage }
}
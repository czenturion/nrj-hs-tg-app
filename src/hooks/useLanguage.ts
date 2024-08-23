import { useState, useEffect } from 'react'

export const useLanguage = () => {
  const [language, setLanguage] = useState<'ru' | 'en'>('en')

  useEffect(() => {
    const tg = window.Telegram.WebApp
    const userLang = tg.initDataUnsafe.user?.language_code
    setLanguage(userLang === 'ru' ? 'ru' : 'en')
  }, [])

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'ru' ? 'en' : 'ru'))
  }

  return { language, toggleLanguage }
}

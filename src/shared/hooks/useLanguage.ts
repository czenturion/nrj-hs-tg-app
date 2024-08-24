import { useEffect, useState } from 'react'
import i18n from '../../i18n'

export const useLanguage = () => {
  const [language, setLanguage] = useState(() => 'en')

  useEffect(() => {
    const tg = window.Telegram?.WebApp
    const tgLanguageCode = tg?.initDataUnsafe?.user?.language_code

    if (tgLanguageCode) {
      setLanguage(tgLanguageCode)
    }
  }, [])


  const toggleLanguage = async () => {
    const newLanguage = language === 'ru' ? 'en' : 'ru'

    await i18n.changeLanguage(newLanguage)
    setLanguage(newLanguage)
  }

  return { language, toggleLanguage }
}
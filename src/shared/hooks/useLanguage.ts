import { useEffect, useState } from 'react'
import i18n from '../../i18n'

export const useLanguage = () => {
  const [language, setLanguage] = useState(() => 'ru')

  useEffect(() => {
    const tg = window.Telegram?.WebApp
    const tgLanguageCode = tg?.initDataUnsafe?.user?.language_code

    if (tgLanguageCode) {
      setLanguage(tgLanguageCode)
      i18n.changeLanguage(tgLanguageCode)
    } else {
      console.warn('No language code found in Telegram user data')
    }
  }, [])


  const toggleLanguage = async () => {
    const newLanguage = language === 'ru' ? 'en' : 'ru'
    console.log(newLanguage)

    await i18n.changeLanguage(newLanguage)
    setLanguage(newLanguage)
  }

  return { language, toggleLanguage }
}
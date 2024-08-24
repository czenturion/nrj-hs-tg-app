import React from 'react'
import { useTranslation } from 'react-i18next'
import { fetchHoroscope } from '../api/horoscope'

interface LanguageSwitcherProps {
  selectedSign: string | null
  language: string
  toggleLanguage: () => void
  setDescription: (s: string) => void
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
                                                             selectedSign,
                                                             language,
                                                             toggleLanguage,
                                                             setDescription
                                                           }) => {
  const { t } = useTranslation()

  const updateDesc = async () => {
    if (selectedSign) {
      const horoscope = await fetchHoroscope(selectedSign, language === 'ru' ? 'en' : 'ru')
      setDescription(horoscope)
    }
  }

  return (
    <button
      className="button toggle-language"
      onClick={ () => {
        toggleLanguage()
        updateDesc()
      } }
    >
      { t('btn.lang') }
    </button>
  )
}

export default LanguageSwitcher
import React from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher: React.FC = () => {
  const { language, toggleLanguage } = useLanguage()
  const { t } = useTranslation()

  return (
    <button
      className="button toggle-language"
      onClick={ toggleLanguage }
    >
      {t('btn.lang')}
    </button>
  )
}

export default LanguageSwitcher
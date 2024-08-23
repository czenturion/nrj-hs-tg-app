import React from 'react'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '../hooks/useLanguage'

const LanguageSwitcher: React.FC = () => {
  const { toggleLanguage } = useLanguage()
  const { t } = useTranslation()

  return (
    <button
      className="button toggle-language"
      onClick={ toggleLanguage }
    >
      { t('btn.lang') }
    </button>
  )
}

export default LanguageSwitcher
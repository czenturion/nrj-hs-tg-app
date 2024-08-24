import React from 'react'
import { useTranslation } from 'react-i18next'

interface LanguageSwitcherProps {
  toggleLanguage: () => void
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ toggleLanguage }) => {
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
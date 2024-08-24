import React from 'react'
import { useTranslation } from 'react-i18next'

interface ZodiacDescriptionProps {
  sign: string
  description: string
  onBack: () => void
}

export const ZodiacDescription: React.FC<ZodiacDescriptionProps> = ({ sign, description, onBack }) => {
  const { t } = useTranslation()



  return (
    <div className="zodiac-description">
      <h2>{ t(sign) }</h2>
      <p>{ description }</p>
      <button className="button" onClick={ onBack }>{ t('btn.back') }</button>
    </div>
  )
}

import React from 'react'
import { useTranslation } from 'react-i18next'

interface ZodiacItemProps {
  sign: string
  period: string
  icon: string
  onClick: () => void
}

export const ZodiacItem: React.FC<ZodiacItemProps> = ({ sign, period, icon, onClick }) => {
  const { t } = useTranslation()

  return (
    <div className="zodiac-item" onClick={ onClick }>
      <div className="zodiac-icon">{ icon }</div>
      <div className="zodiac-sign">{ t(sign) }</div>
      <div className="zodiac-period">{ period }</div>
    </div>
  )
}
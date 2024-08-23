import React from 'react'
import { ZodiacItem } from './ZodiacItem'
import { zodiacSigns } from '../shared/consts'
import LanguageSwitcher from './LanguageSwitcher'

interface ZodiacGridProps {
  onSelect: (sign: string) => void
}

export const ZodiacGrid: React.FC<ZodiacGridProps> = ({ onSelect }) => {

  return (
    <div>
      <div className="zodiac-grid">
        { zodiacSigns.map((zodiac) => (
          <ZodiacItem
            key={ zodiac.sign }
            sign={ zodiac.sign }
            period={ zodiac.period }
            icon={ zodiac.icon }
            onClick={ () => onSelect(zodiac.sign) }
          />
        )) }
      </div>
      <LanguageSwitcher/>
    </div>
  )
}
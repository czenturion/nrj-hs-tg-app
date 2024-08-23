import React from 'react'
import { ZodiacItem } from './ZodiacItem'

const zodiacSigns = [
  { sign: 'aries', period: '21 Mar - 19 Apr', icon: '♈' },
  { sign: 'taurus', period: '20 Apr - 20 May', icon: '♉' },
  { sign: 'gemini', period: '21 May - 20 Jun', icon: '♊' },
  { sign: 'cancer', period: '21 Jun - 22 Jul', icon: '♋' },
  { sign: 'leo', period: '23 Jul - 22 Aug', icon: '♌' },
  { sign: 'virgo', period: '23 Aug - 22 Sep', icon: '♍' },
  { sign: 'libra', period: '23 Sep - 22 Oct', icon: '♎' },
  { sign: 'scorpio', period: '23 Oct - 21 Nov', icon: '♏' },
  { sign: 'sagittarius', period: '22 Nov - 21 Dec', icon: '♐' },
  { sign: 'capricorn', period: '22 Dec - 19 Jan', icon: '♑' },
  { sign: 'aquarius', period: '20 Jan - 18 Feb', icon: '♒' },
  { sign: 'pisces', period: '19 Feb - 20 Mar', icon: '♓' }
]

interface ZodiacGridProps {
  onSelect: (sign: string) => void
}

export const ZodiacGrid: React.FC<ZodiacGridProps> = ({ onSelect }) => {
  return (
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
  )
}
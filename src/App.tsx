import React, { useState } from 'react'
import { useLanguage } from './shared/hooks/useLanguage'
import { ZodiacGrid } from './components/ZodiacGrid'
import { ZodiacDescription } from './components/ZodiacDescription'
import { fetchHoroscope } from './api/horoscope'
import './styles/styles.css'

const App: React.FC = () => {
  const { language } = useLanguage()
  const [selectedSign, setSelectedSign] = useState<string | null>(null)
  const [description, setDescription] = useState<string | null>(null)

  const handleSelectSign = async (sign: string) => {
    const horoscope = await fetchHoroscope(sign, language)
    setSelectedSign(sign)
    setDescription(horoscope)
  }

  return (
    <div className="app">
      { !selectedSign ? (
        <ZodiacGrid onSelect={ handleSelectSign }/>
      ) : (
        <ZodiacDescription
          sign={ selectedSign }
          description={ description || '' }
          onBack={ () => {
            setSelectedSign(null)
            setDescription(null)
          } }
        />
      ) }
    </div>
  )
}

export default App
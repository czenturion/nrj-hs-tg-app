import React, { useState } from 'react'
import { useLanguage } from './hooks/useLanguage'
import { ZodiacGrid } from './components/ZodiacGrid'
import { ZodiacDescription } from './components/ZodiacDescription'
import { fetchHoroscope } from './api/horoscope'
import './styles/styles.css'

const App: React.FC = () => {
  const { language, toggleLanguage } = useLanguage()
  const [selectedSign, setSelectedSign] = useState<string | null>(null)
  const [description, setDescription] = useState<string | null>(null)

  const handleSelectSign = async (sign: string) => {
    setSelectedSign(sign)
    const horoscope = await fetchHoroscope(sign, language)
    setDescription(horoscope)
  }

  return (
    <div className="app">
      {!selectedSign ? (
        <ZodiacGrid onSelect={handleSelectSign} />
      ) : (
        <ZodiacDescription
          sign={selectedSign}
          description={description || ''}
          onBack={() => {
            setSelectedSign(null)
            setDescription(null)
          }}
        />
      )}
      <button className="button toggle-language" onClick={toggleLanguage}>
        {language === 'ru' ? 'Switch to English' : 'Переключить на русский'}
      </button>
    </div>
  )
}

export default App
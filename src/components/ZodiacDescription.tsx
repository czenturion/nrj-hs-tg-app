import React from 'react'

interface ZodiacDescriptionProps {
  sign: string
  description: string
  onBack: () => void
}

export const ZodiacDescription: React.FC<ZodiacDescriptionProps> = ({ sign, description, onBack }) => {
  return (
    <div className="zodiac-description">
      <h2>{sign}</h2>
      <p>{description}</p>
      <button className="button" onClick={onBack}>Назад</button>
    </div>
  )
}

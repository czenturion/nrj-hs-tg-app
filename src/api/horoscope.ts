export const fetchHoroscope = async (sign: string | null, language: string) => {
  try {
    const response = await fetch('https://poker247tech.ru/get_horoscope/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sign: sign,
        language: language === 'ru' ? 'original' : 'translated',
        period: 'today'
      })
    })

    const data = await response.json()
    return data.horoscope as string || 'No description available'

  } catch (e) {
    console.error('Error fetching horoscope: ', e)
    return 'Error fetching horoscope'
  }
}

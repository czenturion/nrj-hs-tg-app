export const fetchHoroscope = async (sign: string, language: string) => {
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

    if (!response.ok) {
      console.log(response.body)
    }

    const data = await response.json()
    return data.horoscope || 'No description available'

  } catch (e) {
    console.error('Error fetching horoscope:', e)
    return 'Error fetching horoscope'
  }
}

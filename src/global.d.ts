interface TelegramWebApp {
  initDataUnsafe: {
    user?: {
      language_code?: string
    }
  }
  close(): void
}

interface Window {
  Telegram: {
    WebApp: TelegramWebApp
  }
}
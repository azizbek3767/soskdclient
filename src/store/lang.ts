import { defineStore } from 'pinia'
import { ref } from 'vue'

export const supportedLocales = ['uz', 'en', 'ru'] as const
export type SupportedLocale = typeof supportedLocales[number] // 'uz' | 'en' | 'ru'

export const useLangStore = defineStore('lang', () => {
  const DEFAULT_LOCALE: SupportedLocale = 'ru'

  const saved = localStorage.getItem('lang')
  const browserLang = navigator.languages?.[0]?.slice(0, 2) ?? DEFAULT_LOCALE

  const initialLang: SupportedLocale =
    supportedLocales.includes(saved as SupportedLocale)
      ? (saved as SupportedLocale)
      : supportedLocales.includes(browserLang as SupportedLocale)
      ? (browserLang as SupportedLocale)
      : DEFAULT_LOCALE

  const locale = ref<SupportedLocale>(initialLang)

  function setLocale(lang: SupportedLocale) {
    locale.value = lang
    localStorage.setItem('lang', lang)
  }

  return {
    locale,
    supportedLocales,
    setLocale
  }
})
import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'

import App from './App.vue'
import router from './router'

import { useLangStore, supportedLocales, type SupportedLocale } from './store/lang'


// Step 1: Load translations
const messages = {
  uz: await import('./locales/uz.json'),
  en: await import('./locales/en.json'),
  ru: await import('./locales/ru.json')
}

// Step 2: Create app and pinia
const app = createApp(App)
const pinia = createPinia()
app.use(pinia)

// Step 3: Use Lang Store
const langStore = useLangStore()
const { locale } = storeToRefs(langStore)

// Step 4: Create i18n
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: locale.value, // here .value
  fallbackLocale: 'en',
  messages
})

router.beforeEach((to, from, next) => {
  const lang = to.params.locale as string | undefined

  if (!lang) {
    return next(`/${locale.value}${to.fullPath}`)
  }

  if (!supportedLocales.includes(lang as any)) {
    return next(`/${locale.value}${to.fullPath}`)
  }

  document.documentElement.lang = lang
  langStore.setLocale(lang as any)
  i18n.global.locale.value = lang as SupportedLocale
  next()
})

// Step 6: Mount app
app.use(router)
app.use(i18n)
app.mount('#app')

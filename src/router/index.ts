import { createRouter, createWebHistory } from 'vue-router'

import NotFound from '@/views/NotFound.vue'
import { supportedLocales } from '@/store/lang'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: () => {
        const browserLang = navigator.language.slice(0, 2)
        const defaultLocale = supportedLocales.includes(browserLang as any) ? browserLang : 'ru'
        return `/${defaultLocale}`
      }
    },
    {
      path: '/:locale',
      beforeEnter: (to, from, next) => {
        const locale = to.params.locale as string
        if (!supportedLocales.includes(locale as any)) {
          return next('/ru')
        }
        next()
      },
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/HomeView.vue') // ✅ lazy loaded
        },
        {
          path: 'about',
          name: 'About',
          component: () => import('@/views/AboutView.vue') // ✅ lazy loaded
        },
        {
          path: 'donate',
          name: 'Donate',
          component: () => import('@/views/DonateView.vue') // ✅ lazy loaded
        },
        {
          path: 'contact',
          name: 'Contact',
          component: () => import('@/views/ContactView.vue') // ✅ lazy loaded
        },
        {
          path: ':pathMatch(.*)*',
          name: 'NotFound',
          component: NotFound
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'HardNotFound',
      component: NotFound
    }
  ]
})

export default router

import Alpine from 'alpinejs'
import '@iconify/iconify'

import './header'
import './cookieConsent'
import './toast'

declare global {
  interface Window {
    Alpine: typeof Alpine
  }
}

window.Alpine = Alpine

Alpine.start()

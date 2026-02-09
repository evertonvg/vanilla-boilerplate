import Alpine from 'alpinejs'
import '@iconify/iconify'
import 'lite-youtube-embed'
import 'lite-youtube-embed/src/lite-yt-embed.css'

import './header'
import './cookieConsent'
import './toast'
import './testCities'
import './banner'


declare global {
  interface Window {
    Alpine: typeof Alpine
  }
}

window.Alpine = Alpine

Alpine.start()

import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import '@iconify/iconify'
import 'lite-youtube-embed'
import 'lite-youtube-embed/src/lite-yt-embed.css'

// register shared Alpine components; keep imports uncommented when you
// need the behaviour on every page.  if a component carries its own
// <script> tag with client: directives, you don't need to import it here.
import '../components/layout/Header/header.ts'
import './cookieConsent'
import './toast'
import './testCities'
import './banner'



declare global {
  interface Window {
    Alpine: typeof Alpine
  }
}
Alpine.plugin(collapse)
window.Alpine = Alpine

Alpine.start()

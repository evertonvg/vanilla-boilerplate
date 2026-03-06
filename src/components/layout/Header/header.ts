import Alpine from 'alpinejs'

Alpine.data('header', () => ({
  open: false,
  lastScroll: 0,
  isVisible: true,
  headerHeight: 72,

  init() {
    this.lastScroll = window.scrollY

    window.addEventListener('scroll', () => {
      const current = window.scrollY

      if (current > this.lastScroll && current > this.headerHeight) {
        this.isVisible = false
      } else {
        this.isVisible = true
      }

      this.lastScroll = current
    })
  },

  toggle() {
    this.open = !this.open
    document.body.style.overflow = this.open ? 'hidden' : ''
  },

  close() {
    this.open = false
    document.body.style.overflow = ''
  },

  scrollToAnchor(anchor: string) {
    const el = document.querySelector(anchor)
    if (!el) return

    const top =
      el.getBoundingClientRect().top +
      window.scrollY -
      this.headerHeight

    window.scrollTo({
      top,
      behavior: 'smooth'
    })

    this.close()
  }
}))
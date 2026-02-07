document.addEventListener('alpine:init', () => {
    Alpine.data('header', () => ({
        open: false,
        lastScroll: 0,
        headerHeight: 72,

        init() {
            if (this.$root.classList.contains('header--sticky-smart')) {
                window.addEventListener('scroll', () => this.handleSmartSticky())
            }
        },

        toggle() {
            this.open = !this.open
            this.handleBodyLock()
        },

        close() {
            this.open = false
            this.handleBodyLock()
        },

        handleBodyLock() {
            document.body.style.overflow = this.open ? 'hidden' : ''
        },

        handleSmartSticky() {
            const current = window.scrollY
            const header = this.$root

            if (current > this.lastScroll && current > 80) {
                header.classList.add('is-hidden')
            } else {
                header.classList.remove('is-hidden')
            }

            this.lastScroll = current
        },

        scrollToAnchor(hash) {
            this.close()
            const id = hash.replace('#', '')
            const el = document.getElementById(id)
            if (!el) return

            const y =
                el.getBoundingClientRect().top +
                window.pageYOffset -
                this.headerHeight

            window.scrollTo({
                top: y,
                behavior: 'smooth',
            })

            this.close()

            // Atualiza URL sem pular
            history.pushState(null, '', hash)
        },
    }))
})

document.addEventListener('alpine:init', () => {
    Alpine.data('cookieConsent', () => ({
        visible: false,

        init() {
            const saved = localStorage.getItem('cookie-consent')
            this.visible = !saved
        },

        accept() {
            localStorage.setItem('cookie-consent', 'accepted')
            this.visible = false
        },

        reject() {
            localStorage.setItem('cookie-consent', 'rejected')
            this.visible = false
        },
    }))
})

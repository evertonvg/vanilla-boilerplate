document.addEventListener('alpine:init', () => {
    Alpine.store('toast', {
        show({ title, message, type = 'info', duration = 4000 }) {
            window.dispatchEvent(
                new CustomEvent('toast', {
                    detail: { title, message, type, duration },
                })
            )
        },
    })

    Alpine.data('toast', () => ({
        items: [],

        init() {
            window.addEventListener('toast', (e) => {
                this.add(e.detail)
            })
        },

        add({ title, message, type, duration }) {
            const id = Date.now() + Math.random()

            const item = {
                id,
                title,
                message,
                type,
                visible: true,
            }

            this.items.push(item)

            setTimeout(() => {
                this.remove(id)
            }, duration)
        },

        remove(id) {
            const toast = this.items.find((t) => t.id === id)
            if (!toast) return

            toast.visible = false

            setTimeout(() => {
                this.items = this.items.filter((t) => t.id !== id)
            }, 300)
        },
    }))
})

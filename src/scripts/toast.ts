import Alpine from 'alpinejs'

export type ToastType = 'success' | 'error' | 'info'

interface ToastStore {
    show: boolean
    message: string
    type: ToastType
    _timer?: number

    open: (message: string, type?: ToastType, timeout?: number) => void
    close: () => void
}

Alpine.store('toast', {
    show: false,
    message: '',
    type: 'success' as ToastType,
    _timer: undefined,

    open(message, type = 'success', timeout = 3000) {
        console.log('Opening toast:', message, type)

        this.message = message
        this.type = type
        this.show = true

        if (this._timer) {
            clearTimeout(this._timer)
        }

        this._timer = window.setTimeout(() => {
            this.show = false
        }, timeout)
    },

    close() {
        this.show = false
    }
} satisfies ToastStore)

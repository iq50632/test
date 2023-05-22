import { defineStore } from 'pinia'

export const useDefaultStore = defineStore('default', {
    state: () => ({
        isSidebar: false,
        isLogin: false,
        userName: '',
        snackbar: {
            show: false,
            text: '',
            color: 'bronzing'
        },
    }),
    actions: {
        setSidebar() {
            this.isSidebar = !this.isSidebar
            window.sessionStorage.setItem('isSidebar', this.isSidebar)
        },
        setLogin(userName) {
            this.userName = userName || 'User'
            this.isLogin = true
        },
        setLogout() {
            this.userName =''
            this.isLogin = false
        },
        setSnackbar(text, color) {
            this.snackbar = {
                show: true,
                text: text,
                color: color || 'bronzing' 
            }
        },
        closeSnackbar() {
            this.snackbar = {
                show: false,
                text: '',
                color: 'bronzing'
            }
        },
    },
})

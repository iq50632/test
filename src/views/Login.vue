<template>
    <div>
        <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path :fill="fill" >
            <animate 
                attributeName="d"
                dur="3s"
                repeatCount="indefinite"
                values="
                    m0,109l48,5.3c48,5.7 132,17.7 227,42.7c95,25 127,40.6 217,64.3c90,23.7 173,35.1 286,37.4c113,2.3 245,-63.3 347,-90c102,-26.7 171,-54.7 269,-77.7l45,-11l1,-80l-48,0c-48,0 -144,0 -240,0c-96,0 -192,0 -288,0c-96,0 -192,0 -288,0c-96,0 -192,0 -288,0c-96,0 -192,0 -240,0l-48,0l0,109z;
                    m0,161l48,5.3c48,5.7 144,15.7 240,-5.3c96,-21 195,-6.4 289,24.3c94,30.7 144,51.1 258,47.4c114,-3.7 230,-68.3 321,-75c91,-6.7 142,38.3 229,57.3l56,11l-1,-226l-48,0c-48,0 -144,0 -240,0c-96,0 -192,0 -288,0c-96,0 -192,0 -288,0c-96,0 -192,0 -288,0c-96,0 -192,0 -240,0l-48,0l0,161z;
                    m1,161l48,14.3c49,14.7 131,30.7 227,9.7c96,-21 208,-30.4 302,0.3c94,30.7 144,82.1 258,78.4c114,-3.7 207,-150.3 298,-157c91,-6.7 192,54.3 252,108.3l57,42l-2,-257l-48,0c-48,0 -144,0 -240,0c-96,0 -192,0 -288,0c-96,0 -192,0 -288,0c-96,0 -192,0 -288,0c-96,0 -192,0 -240,0l-48,0l0,161z;
                    m0,161l48,5.3c48,5.7 144,15.7 240,-5.3c96,-21 195,-6.4 289,24.3c94,30.7 144,51.1 258,47.4c114,-3.7 230,-68.3 321,-75c91,-6.7 142,38.3 229,57.3l56,11l-1,-226l-48,0c-48,0 -144,0 -240,0c-96,0 -192,0 -288,0c-96,0 -192,0 -288,0c-96,0 -192,0 -288,0c-96,0 -192,0 -240,0l-48,0l0,161z;
                    m0,109l48,5.3c48,5.7 132,17.7 227,42.7c95,25 127,40.6 217,64.3c90,23.7 173,35.1 286,37.4c113,2.3 245,-63.3 347,-90c102,-26.7 171,-54.7 269,-77.7l45,-11l1,-80l-48,0c-48,0 -144,0 -240,0c-96,0 -192,0 -288,0c-96,0 -192,0 -288,0c-96,0 -192,0 -288,0c-96,0 -192,0 -240,0l-48,0l0,109z;"
            />
            </path>
        </svg>
        <div class="background"/>
        <div class="content">
            <h1 class="title text-center">{{title}}</h1>
            <v-card elevation="10" rounded="xl" class="pa-5 mx-auto card" v-if="!isSm">
                <form class="px-5">
                    <div class="d-flex justify-space-between align-center">
                        <span class="pr-3 text-white">帳 號 : </span>
                        <v-text-field v-model="account" hide-details required class="py-5" />
                    </div>
                    <div class="d-flex justify-space-between align-center">
                        <span class="pr-3 text-white">密 碼  : </span>
                        <v-text-field v-model="password" hide-details required class="py-5"
                            :append-icon="'mdi-eye' + (showpw ? '' : '-off')" :type="showpw ? 'text' : 'password'"
                            @click:append="showpw = !showpw"/>
                    </div>
                    <v-btn color="main" block dark class="py-7 my-5" @click="submit" rounded="xl">
                        <h2 class="text-white">登入</h2>
                    </v-btn>
                </form>
            </v-card>
            <v-row justify="center" v-else>
                <v-col cols="12" sm="6">
                    <form>
                        <div class="mx-10">
                            <v-text-field v-model="account" solo placeholder="帳 號" hide-details required class="my-4" />
                            <v-text-field v-model="password" solo hide-details required placeholder="密 碼" class="my-4"
                                :append-icon="'mdi-eye' + (showpw ? '' : '-off')" :type="showpw ? 'text' : 'password'"
                                @click:append="showpw = !showpw"/>
                            <v-btn dark block class="py-7 mt-10" @click="submit" rounded="xl">
                                <h2>登入</h2>
                            </v-btn>
                        </div>
                    </form>
                </v-col>
            </v-row>
        </div>
        <div :class="{ enlarge: loginSuccess, mask: true }"/>
    </div>
</template>

<script>
import { useDisplay } from 'vuetify'
import { useDefaultStore } from '@/stores/default'

export default {
    setup() {
		const store = useDefaultStore()
        const { smAndDown } = useDisplay()

        return { store, 'isSm': smAndDown }
    },
    data() {
        return {
            account: '',
            password: '',
            showpw: false,
            loginSuccess: false
        }
    },
    computed: {
        title() {
            return import.meta.env.VITE_NAME
        },
        fill() {
            return this.$vuetify.theme.themes[this.$vuetify.theme.global.name == 'dark' ? 'dark' : 'light'].colors.main
        }
    },
    methods: {
        submit() {
            // this.account
            // this.password
            this.store.setLogin('User')
            // this.setSnackbar({title: '登入成功'})
            this.loginSuccess = true
            setTimeout(this.toHome, 1000)
        },
        toHome() {
            this.$router.push({name: 'home'})
        }
    }
}
</script>
<style lang="scss" scoped>
.svg {
    position: fixed;
    left: 0;
    top: 24%;
    transition: path 0.5s;

}

.background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background: rgb(var(--v-theme-main));
    height: 24%;
}

.content {
    z-index: 1;
    color: white;
    position: fixed;
    left: 0;
    width: 100vw;
    top: 18%;
}

.v-application .title {
    padding-bottom: 7% !important;
    letter-spacing: 5px !important;
    font-size: 2.8rem !important;
}

.card {
    color: #4e4e4e;
    width: 25%;
}

.mask {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
}

.enlarge {
    background: rgb(var(--v-theme-main));
    height: 100vh;
    width: 100vw;
    animation: mask 1s;
}

@media (max-width: 960px) {
    .svg {
        top: 65%;
    }

    .background {
        height: 65%;
    }

    .v-application .title {
        padding-bottom: 4% !important;
        letter-spacing: 4px !important;
        font-size: 2rem !important;
    }
}

@media (max-width: 1264px) {
    .card {
        width: 50%;
    }
}

@keyframes mask {
    0% {
        clip-path: circle(0 at center center);
    }
    100% {
        clip-path: circle(100vw at center center);
    }
}

.icon-mt-0 .v-input__control .v-input__append-inner, .v-text-field.v-text-field--solo .v-input__append-inner {
    margin-top: 0 !important;
}

</style>
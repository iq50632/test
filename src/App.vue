
<template>
<v-app>
	<v-app-bar elevation="10" color="main" class="text-white" floating v-if="$route.name != 'login'">
		<v-btn v-if="$route.name=='product'" variant="text" icon="mdi-arrow-left" @click="$router.push({name: 'shopping'})"/>
		<v-app-bar-nav-icon v-else-if="isSidebar" @click="showSidebar = !showSidebar"/>
		<img src="@/assets/image/dabe.png" alt="" style="height:50px" @click="$router.push({name: 'home'})">
		<v-tabs v-model="router" v-if="!isSidebar" class="ml-5" :dark="showDark">
			<v-tab v-for="tab in tabs" :key="tab.name" :to="{ name: tab.name }">
				{{tab.text}}
			</v-tab>
		</v-tabs>
		<div class="ml-auto">
			<v-btn :dark="showDark" @click="$router.push({name: 'login'})">登入</v-btn>
			<v-btn :dark="showDark" icon="mdi-cog" @click="$router.push({name: 'setting'})"/>
		</div>
	</v-app-bar>
    <v-navigation-drawer v-model="showSidebar" temporary>
        <v-list v-model="router" nav color="main">
            <v-list-item v-for="tab in tabs" :key="tab.name"
				:to="{ name: tab.name }" :class="showDark">
				{{tab.text}}
			</v-list-item>
			
        </v-list>
    </v-navigation-drawer>

	<v-container>
		<router-view v-slot="{ Component, route }" class="page">
			<transition :name="transitionName">
				<component :is="Component" :key="route.path" />
			</transition>
		</router-view>
	</v-container>
	<v-snackbar v-model="store.snackbar.show" :color="store.snackbar.color" location="top" timeout="5000">
		<strong v-text="store.snackbar.text"/>
		<template v-slot:action="{ attrs }">
			<v-btn :color="store.snackbar.color" icon="mdi-close" v-bind="attrs" @click="store.snackbar.show = false"/>
		</template>
	</v-snackbar>
	<!-- <v-footer color="main" class="text-center d-flex flex-column pa-0" app v-if="this.$route.name != 'login'">
		<div>
			<v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="text"/>
		</div>
		2023 — Vuetify
	</v-footer> -->
</v-app>
</template>

<script>
import { RouterView } from 'vue-router'
import { useDefaultStore } from './stores/default'
import { useDisplay } from 'vuetify'

export default {
    setup() {
		const store = useDefaultStore()
		const { mdAndDown, smAndUp } = useDisplay()
		return { store, mdAndDown, smAndUp }
	},
    data() {
        return {
			icons: [
				'mdi-facebook',
				'mdi-twitter',
				'mdi-linkedin',
				'mdi-instagram',
			],
            router: '',
			showSidebar: false,
			transitionName: ''
		}
	},
	created() {
		const theme = window.sessionStorage.getItem('theme') || 'light'
		const color = window.sessionStorage.getItem('color') || 'light-blue'
		const isSidebar = window.sessionStorage.getItem('isSidebar') || false
		
		this.$vuetify.theme.global.name = theme
		this.$vuetify.theme.themes.dark.colors.main = this.$vuetify.theme.themes.dark.colors[color]
		this.$vuetify.theme.themes.light.colors.main = this.$vuetify.theme.themes.light.colors[color]
		if (isSidebar === 'true') {
			this.store.setSidebar()
		} else if (this.smAndUp) {
			this.store.setSidebar()
		}
	},
	watch:{
		'$route' (to, from) {
			const routes = ['home', 'HRManagement', 'shopping', 'chat', 'product', 'setting', 'login', 'map', 'parkingSeats']
			const toDepth = routes.indexOf(to.name)
			const fromDepth = routes.indexOf(from.name)
			if (to.name == 'login' || from.name == 'login') {
				this.transitionName = 'mask'
			} else if (from.name == 'product') {
				this.transitionName = 'mask'
			} else {
				this.transitionName = `slide-fade-${toDepth > fromDepth ? 'left' : 'right'}`
			}
		},
		'store.snackbar.show'(value) {
			if (!value) {
				this.store.closeSnackbar()
			}
		}
	},
    computed: {
        isSidebar() {
            return this.store.isSidebar
        },
		showDark() {
			this.$vuetify.theme.global.name == 'dark'
		},
        tabs() {
            const list = [...this.$router.options.routes]
            return list.slice(0, 5)
        }
	}
}
</script>

<style lang="scss" scoped>
.v-toolbar {
	transition: all 0.3s;
	&-title {
		flex: inherit;
	}
}
.v-list-item {
	font-size: .95rem;
	letter-spacing: .15em;

	&-title {
		font-size: .75rem;
		font-weight: normal;
		letter-spacing: .1em;
		color: #656565;
	}
	&__prepend {
		align-items: center;
		align-self: center;
		display: flex;
		grid-area: prepend;
		margin-right: -20px;
	}
}

.v-snackbar__wrapper {
	top: 64px !important;
}

.v-container {
	margin-top: 84px;
	min-height: 100vh;
    position: relative;
	//margin-bottom: 100px;
}

.page {
    position: relative;
    top: 0;
    width: 100%;
    height: 100%;
}

/* - - - - - - - - - - - - - - - - - - transitions - - - - - - - - - - - - - - - - - - */
	
.slide-fade {
	&-right-enter-from, &-left-leave-to {
		transform: translateX(-120%);
	}
	&-right-leave-to, &-left-enter-from {
		transform: translateX(120%);
	}

	/* transition */
	&-left-enter-active, &-left-leave-active,
	&-right-enter-active, &-right-leave-active,
	&-enter, &-leave-to {
		transition: all 1s cubic-bezier(0.41, 1.11, 0.86, 1.04);
	}

	/* opacity */
	&-left-leave-to, &-right-leave-to, &-leave-to {
		opacity: 0;
	}
}

.mask {
	&-enter {
        clip-path: circle(0 at center center);
	}
	&-leave-to {
        clip-path: circle(100vw at center center);
	}

	&-enter-active, &-leave-active {
		transition: all .5s cubic-bezier(0.41, 1.11, 0.86, 1.04);
	}

	&-enter, &-leave-to {
		opacity: 0;
	}
}
</style>

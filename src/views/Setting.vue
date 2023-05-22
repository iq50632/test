<template>
    <h2>主題顏色</h2>
    <v-row>
        <v-col cols="12" sm="6" md="4" xl="3" v-for="item in themes" :key="item">
            <v-list-item @click="toggleMainColorTone(item)">
                <div class="ml-2"> 
                    <v-icon v-for="n in [4,3,2,1]" :key="n + 'd'" :color="item + '-darken-' + n" class="ml-n2">mdi-circle</v-icon>
                    <v-icon v-for="n in 4" :key="n + 'l'" :color="item + '-lighten-' + n" class="ml-n2">mdi-circle</v-icon>
                </div>
                <v-list-item-title class="ml-2">{{item}}</v-list-item-title>
            </v-list-item>
        </v-col>
    </v-row>
    <v-row>
        <v-col v-for="title in ['主題模式', '換頁標籤']" :key="title" cols="6" lg="4" xl="2">
            <h2>{{title}}</h2>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="3" lg="2" xl="1">
            <v-btn :color="!isDark ? 'main' : ''" height="100" width="100" @click="toggleTheme">
                <div>
                    <v-icon style="font-size: 35px;">mdi-weather-sunny</v-icon>
                    <p class="pt-2">淺色模式</p>
                </div>
            </v-btn>
        </v-col>
        <v-col cols="3" lg="2" xl="1">
            <v-btn :color="isDark ? 'main' : ''" height="100" width="100" @click="toggleTheme">
                <div>
                    <v-icon style="font-size: 35px;">mdi-weather-night</v-icon>
                    <p class="pt-2">深色模式</p>
                </div>
            </v-btn>
        </v-col>
        <v-col cols="3" lg="2" xl="1">
            <v-btn :color="isSidebar ? 'main' : ''" height="100" width="100" @click="setSidebar">
                導航欄
            </v-btn>
        </v-col>
        <v-col cols="3" lg="2" xl="1">
            <v-btn :color="!isSidebar ? 'main' : ''" height="100" width="100" @click="setSidebar">
                側邊攔
            </v-btn>
        </v-col>
    </v-row>
</template>

<script>
import { useDefaultStore } from '@/stores/default'
import { useTheme } from 'vuetify'

export default {
    setup() {
		const store = useDefaultStore()
        const theme = useTheme()
        return { store , theme }
    },
    data() {
        return {
            currentTheme: 0,
            themes: ['red', 'blue', 'indigo', 'light-blue', 'teal', 'brown', 'blue-grey']
        }
    },
    computed: {
        isSidebar() {
            return this.store.isSidebar
        },
        isDark() {
            return this.$vuetify.theme.global.name == 'dark'
        }
    },
    methods: {
        setSidebar() {
            this.store.setSidebar()
        },
        toggleTheme() {
            this.$vuetify.theme.global.name = this.isDark ? 'light' : 'dark'
            window.sessionStorage.setItem('theme', this.$vuetify.theme.global.name)
        },
        toggleMainColorTone(color) {
            let newColor =  color
            if (color.includes('-')) {
                let text = color.split('-')
                text[1] = text[1][0].toUpperCase() + text[1].slice(1)
                newColor = text.join('')
            }
            window.sessionStorage.setItem('color', color)
            this.$vuetify.theme.themes.dark.colors.main = this.$vuetify.theme.themes.dark.colors[color]
            this.$vuetify.theme.themes.light.colors.main = this.$vuetify.theme.themes.light.colors[color]
        }
    }
}
</script>

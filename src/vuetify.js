import { createVuetify } from 'vuetify'

import 'vuetify/lib/styles/main.sass'
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as labs from 'vuetify/labs/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
    ssr: true,
    components: {
        ...components,
        ...labs
    },
    directives,
    icons: {
        defaultSet: 'mdi',
    },
    theme: {
        themes: {
            light: {
                colors: {
                    main: '#343a40',
                    primary: '#343a40',
                    red: '#963F3F',
                    blue: '#325678',
                    indigo: '#323278',
                    'light-blue': '#343a40',
                    teal: '#327578',
                    'blue-grey': '#272828',
                    brown: '#522A1D',
                    bronzing: '#bdad72',
                    accent: '#2B3B4B',
                    grey: '#f5f2f0'

                }
            },
            dark: {
                colors: {
                    main: '#5075aa',
                    primary: '#343a40',
                    red: '#B86A6A',
                    blue: '#718FA9',
                    indigo: '#7178A9',
                    'light-blue': '#5075aa',
                    teal: '#71A7A9',
                    'blue-grey': '#ACACAC',
                    brown: '#A98671',
                    bronzing: '#bdad72',
                    accent: '#2B3B4B',
                    grey: '#f5f2f0'
                }
            }
        },
        options: {
            customProperties: true
        },
    }
})
import { createApp } from 'vue'
import router from './router.js'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import { definePreset } from '@primevue/themes';
import Button from "primevue/button";
import Menubar from "primevue/menubar";
import ToggleSwitch from 'primevue/toggleswitch';
import Card from 'primevue/card';

const portobello = definePreset(Aura, {
    components: {
        card: {
            colorScheme: {
                light: {
                    root: {
                        background: '{slate.50}',
                        color: '{slate.700}'
                    },
                    subtitle: {
                        color: '{slate.500}'
                    }
                },
                dark: {
                    root: {
                        background: '{slate.800}',
                        color: '{slate.300}'
                    },
                    subtitle: {
                        color: '{slate.400}'
                    }
                }
            }
        }
    },

    semantic: {
        focusRing: {
            width: '2px',
            style: 'dashed',
            color: '{primary.color}',
            offset: '1px'
        },

        primary: {
            50: '{sky.50}',
            100: '{sky.100}',
            200: '{sky.200}',
            300: '{sky.300}',
            400: '{sky.400}',
            500: '{sky.500}',
            600: '{sky.600}',
            700: '{sky.700}',
            800: '{sky.800}',
            900: '{sky.900}',
            950: '{sky.950}'
        },
        colorScheme: {
            light: {
                background: '{sky.200}',
                backgroundAlt: '{sky.300}',
                vibrance: '100%',
                surface: {
                    0: '#ffffff',
                    50: '{slate.50}',
                    100: '{slate.100}',
                    200: '{slate.200}',
                    300: '{slate.300}',
                    400: '{slate.400}',
                    500: '{slate.500}',
                    600: '{slate.600}',
                    700: '{slate.700}',
                    800: '{slate.800}',
                    900: '{slate.900}',
                    950: '{slate.950}'
                },

            },
            dark: {
                background: '{slate.700}',
                backgroundAlt: '{slate.900}',
                vibrance: '40%',
                surface: {
                    0: '#ffffff',
                    50: '{slate.50}',
                    100: '{slate.100}',
                    200: '{slate.200}',
                    300: '{slate.300}',
                    400: '{slate.400}',
                    500: '{slate.500}',
                    600: '{slate.600}',
                    700: '{slate.700}',
                    800: '{slate.800}',
                    900: '{slate.900}',
                    950: '{slate.950}'
                },
            }
        }
    }
});

const app = createApp(App);
app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: portobello,
        options:{
            darkModeSelector: '.dark-mode',
        }
    }
})
app.component('Button', Button);
app.component('Card', Card);
app.component('Menubar', Menubar);
app.component('ToggleSwitch', ToggleSwitch);
app.mount('#app');
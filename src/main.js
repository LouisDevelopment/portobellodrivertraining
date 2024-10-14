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

const portobello = definePreset(Aura, {
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
                }
            },
            dark: {
                surface: {
                    0: '#000000',
                    50: '{slate.950}',
                    100: '{slate.900}',
                    200: '{slate.800}',
                    300: '{slate.700}',
                    400: '{slate.600}',
                    500: '{slate.500}',
                    600: '{slate.400}',
                    700: '{slate.300}',
                    800: '{slate.200}',
                    900: '{slate.100}',
                    950: '{slate.50}'
                }
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
app.component('Menubar', Menubar);
app.component('ToggleSwitch', ToggleSwitch);
app.mount('#app');
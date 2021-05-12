import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import vSelect from 'vue-select';

library.add(fas)


createApp(App).use(router).component('v-select', vSelect).use(VueSweetalert2).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue) {
  Vue.use(Vuetify, { iconfont: 'mdi' });
  Vue.component('Layout', DefaultLayout);
};

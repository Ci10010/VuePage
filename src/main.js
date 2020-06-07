import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import less from 'less';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.css';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import '../src/plugins/highlight';
import Viewer from 'v-viewer';
import 'viewerjs/dist/viewer.css';
import vGallery from 'v-gallery';

Vue.config.productionTip = false;
Vue.use(less);
Vue.use(ElementUI);
Vue.use(mavonEditor);
Vue.use(vGallery);
Vue.use(Viewer, {
  defaultOptions: {
    zIndex: 9999
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

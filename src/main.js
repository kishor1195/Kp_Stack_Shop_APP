import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCarousel from 'vue-carousel'
import StarRating from 'vue-star-rating'
import ProductZoomer from 'vue-product-zoomer'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.component('star-rating', StarRating)
Vue.use(ProductZoomer)
Vue.use(VueCarousel)
Vue.use(Buefy)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

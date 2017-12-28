import Vue from 'vue';
import Marked from 'marked'
import App from './components/App.vue'

var app = new Vue({
  el: '#app',
  render: h => h(App)
})

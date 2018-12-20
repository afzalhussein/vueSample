import Vue from 'vue';
import Vuesax from 'vuesax';

import 'vuesax/dist/vuesax.css';
Vue.use(Vuesax);

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!!'
  }
})

Vue.component('showmessage', {
  props: ['message'],
  template: `
  <span>
    <input v-model="message" placeholder="Change message here"/><br/>
  {{message}}<br/>
  <showalert :msg="message"> </showalert>
  </span>`
})

Vue.component('showalert', {
  props: ['msg'],
  template: `<span @click="showAlert()">{{message}}
  </span>`,
  data() {
    return {
      message: 'You\'re looking at an alert',
    }
  },
  methods: {
    showAlert() {
      alert(this.msg)
    }
  }
})
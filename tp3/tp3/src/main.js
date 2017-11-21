import Vue from 'vue'
import App from './App.vue'
import User from './User.vue'
import Info from './Info.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

var userView = new Vue({
  el: '#app-user',
  render: h => h(User),
  methods: {
    init: function() {
        new Vue({
            el: '#app-info',
            render: h => h(Info)
        })
    } 
}
})
userView.init();

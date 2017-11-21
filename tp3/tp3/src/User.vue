<template>
  <div id="app">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import Info from './Info.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'User Cécile'
    }
  }
  
}

</script>
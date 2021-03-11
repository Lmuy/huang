<template>
  <router-view/>
</template>

<script lang="ts">
import Layout from '@views/layout/index.vue'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'APP',
  components: {
    Layout,
  },
  setup() {
    
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

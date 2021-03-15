<template>
  <div id="addComic">
    <!-- 标题 -->
    <div class="title">
      动漫推荐
    </div>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AddComic',
  components: {
  },
  setup(props) {
    
  }
});
</script>
<style lang="scss">
#addComic {
  height: calc(100vh - 180px);
  .title {
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
    border-bottom: 1px solid rgba(0,0,0,.11);
  }
}
</style>

<template>
  <div>main</div>
</template>

<script lang='ts'>
import { ref } from 'vue'
export default {
  name: 'index-vue',
  setup () {
    const name = ref('悟能')
    return {
      name
    }
  }
}
</script>
<style>
</style>

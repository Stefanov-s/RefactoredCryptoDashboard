
<template>
  <div class="demo page">
    <grid />
  </div>
</template>

<script>
import Grid from '@/components/grid/Grid'
export default {
  name: 'Demo',
  components: {
    'grid': Grid
  }
}
</script>

<style lang="scss">
@import "./../styles/variables";

.page.demo {
  .back-btn {
    cursor: pointer;
  }
}
</style>

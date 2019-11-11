<template>
  <div id="app">
    <router-view
      class="router-view" />
    </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    if (process.env.NODE_ENV === 'production') {
      const script = document.createElement('script')
      script.setAttribute('data-timestamp', +new Date())
    }
  }
}
</script>

<style lang="scss">
@import "styles/variables";

#app {
  min-height: 100vh;
  h1{
    margin: 0 auto;
  }

  .router-view {
    min-height: calc(100vh - 80px);
  }
}
</style>

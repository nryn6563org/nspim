<template>
  <div id="container">
    <div class="catch_wrap">
      <div class="catch_content">
        <ContentOne></ContentOne>
      </div>
    </div>
  </div>
</template>

<script>
import ContentOne from '~/components/IssueCatch/ContentOne'
export default {
  components: {
    ContentOne
  },
  layout: 'defaultLayout'

}
</script>

<style scoped>
@import "../assets/css/main.css";
</style>

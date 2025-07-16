<template>
  <div id="container">
    <div class="catch_wrap">
      <div class="catch_content">
        <IssueContent></IssueContent>
      </div>
    </div>
  </div>
</template>

<script>
import IssueContent from '~/components/Newspim/NspimContent'
export default {
  components: {
    IssueContent
  },
  layout: 'defaultLayout'

}
</script>

<style scoped>
@import "~/assets/css/nspim/main.css";
</style>

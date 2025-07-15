<template>
  <section class="content_one">
    <div class="issue_w">
      <!-- 이슈탭 -->
      <div class="issue_tab_content">
        <TodayIssue></TodayIssue>
      </div>
      <!-- 이슈 탭 컨텐츠 -->
    </div>
  </section>
</template>

<script>
import TodayIssue from '~/components/IssueCatch/TodayIssue'

export default {
  components: {
    TodayIssue
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

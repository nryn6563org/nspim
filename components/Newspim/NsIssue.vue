<template>
  <div id="tab01" class="tabContent">
    <div class="quick_catch">
      <div class="chart-w">
        <div class="top">
          <span>오늘의 핫이슈</span>
          <!-- <button class="relv">
            <em>이슈</em><span>관련주 보기</span>
          </button> -->
          <button @click="toggleOffcanvas">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M13.3658 6.65138L13.3723 6.65546L13.379 6.65933C14.4292 7.27158 14.4292 8.69656 13.379 9.3088L13.3723 9.31268L13.3658 9.31676L4.93688 14.5847C3.81561 15.2593 2.5 14.4725 2.5 13.2542V2.78718C2.5 1.51477 3.80421 0.766084 4.94531 1.38868L13.3658 6.65138Z"
                stroke="white"
              />
            </svg>
            PLAY
          </button>
        </div>
        <!-- top -->

        <div class="chartbox">
          <img src="~/assets/img/nspim/quick_catch.png" alt="" />
        </div>
        <!-- chartbox -->
      </div>

      <div
        id="chartPlay"
        :class="{ 'offcanvas-open': isOffcanvasOpen }"
        class="offcanvas-wrap"
      >
        <div class="offcanvas-bottom">
          <!-- Offcanvas Content -->
          <div class="offcanvas-content">
            <div class="offcanvas-header">
              <strong>날짜선택</strong>

              <button class="close-button" @click="closeOffcanvas">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
                    stroke="#111111"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <!-- 오프캔버스 헤더 -->
            <div class="offcanvas-body">
              <div class="ch-date">
                <button class="active">
                  <span>2024.01.31 (오늘)</span>
                  <em>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="12"
                      viewBox="0 0 18 12"
                      fill="none"
                    >
                      <path
                        d="M1.5 4.99995L8.23183 11L16.5 1"
                        stroke="#2151D1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </em>
                </button>
                <button>
                  <span>2024.01.30</span>
                  <em>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="12"
                      viewBox="0 0 18 12"
                      fill="none"
                    >
                      <path
                        d="M1.5 4.99995L8.23183 11L16.5 1"
                        stroke="#2151D1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </em>
                </button>
                <button>
                  <span>2024.01.29</span>
                  <em>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="12"
                      viewBox="0 0 18 12"
                      fill="none"
                    >
                      <path
                        d="M1.5 4.99995L8.23183 11L16.5 1"
                        stroke="#2151D1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </em>
                </button>
                <button>
                  <span>2024.01.28</span>
                  <em>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="12"
                      viewBox="0 0 18 12"
                      fill="none"
                    >
                      <path
                        d="M1.5 4.99995L8.23183 11L16.5 1"
                        stroke="#2151D1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </em>
                </button>
                <button>
                  <span>2024.01.27</span>
                  <em>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="12"
                      viewBox="0 0 18 12"
                      fill="none"
                    >
                      <path
                        d="M1.5 4.99995L8.23183 11L16.5 1"
                        stroke="#2151D1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </em>
                </button>
                <button>
                  <span>2024.01.26</span>
                  <em>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="12"
                      viewBox="0 0 18 12"
                      fill="none"
                    >
                      <path
                        d="M1.5 4.99995L8.23183 11L16.5 1"
                        stroke="#2151D1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </em>
                </button>
                <button>
                  <span>2024.01.25</span>
                  <em>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="12"
                      viewBox="0 0 18 12"
                      fill="none"
                    >
                      <path
                        d="M1.5 4.99995L8.23183 11L16.5 1"
                        stroke="#2151D1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </em>
                </button>
                <button>
                  <span>2024.01.24</span>
                  <em>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="12"
                      viewBox="0 0 18 12"
                      fill="none"
                    >
                      <path
                        d="M1.5 4.99995L8.23183 11L16.5 1"
                        stroke="#2151D1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </em>
                </button>
                <button>
                  <span>2024.01.23</span>
                  <em>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="12"
                      viewBox="0 0 18 12"
                      fill="none"
                    >
                      <path
                        d="M1.5 4.99995L8.23183 11L16.5 1"
                        stroke="#2151D1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </em>
                </button>
              </div>
            </div>
            <!-- 오프캔버스 내용 -->
          </div>
        </div>
        <div class="offcanvas-overlay" @click="closeOffcanvas"></div>
      </div>
      <!-- 리스트 상세 내용 -->
    </div>
    <!-- 한발빠른 이슈 캐치 -->

    <div class="day_issue">
      <div class="day">
        <strong> <em>12월 19일</em> 이슈 </strong>
      </div>
      <!-- 이슈날짜 -->

      <div class="issue_list swiper">
        <div class="swiper-wrapper">
          <button class="swiper-slide active" type="button">STO</button>
          <button class="swiper-slide" type="button">암호화폐</button>
          <button class="swiper-slide" type="button">이슈1</button>
          <button class="swiper-slide" type="button">이슈2</button>
          <button class="swiper-slide" type="button">이슈3</button>
          <button class="swiper-slide" type="button">이슈4</button>
          <button class="swiper-slide" type="button">이슈5</button>
        </div>
      </div>
      <!-- 이슈 항목 -->

      <div class="issue_news">
        <strong class="title">
          마이크론, 뉴욕 반도체 공장 설립에 1천억달러 투자 계획이 다 있구나
        </strong>
        <!-- 이슈뉴스 타이틀 -->
        <span class="contxt">
          미국 메모리 반도체 제조사인 마이크론 테크놀로지(NAS:MU)가 뉴욕에
          반도체 공장을 짓기 위해 최대 1천억 달러를 투자할 예정이라고 밝혔다.
          4일(현지시간) 뉴욕타임스에 따르면 마이크론은 이날 뉴욕주에 새로운
          컴퓨터 반도체 공장을 건설하는 데 앞으로 20년 이상 최대 1천억 달러를
          투자할 계획이라고 말했다. 미국에서 반도체 법이 통과한 이후 기업들이
          속속 미국내 투자를 강화하고 있다고 한다. 미국 메모리 반도체 제조사인
          마이크론 테크놀로지(NAS:MU)가 뉴욕에 반도체 공장을 짓기 위해 최대
          1천억 달러를 투자할 예정이라고 밝혔다. 4일(현지시간) 뉴욕타임스에
          따르면 마이크론은 이날 뉴욕주에 새로운 컴퓨터 반도체 공장을 건설하는
          데 앞으로 20년 이상 최대 1천억 달러를 투자할 계획이라고 말했다.
          미국에서 반도체 법이 통과한 이후 기업들이 속속 미국내 투자를 강화하고
          있다고 한다.
        </span>
        <!-- 이슈 뉴스 내용 -->
      </div>
      <!-- 이슈 뉴스 -->

      <div class="issue_item">
        <div class="top">
          <strong class="obj"> <em>STO</em> 관련종목 </strong>
          <span class="date"> <em>2023.12.19</em> 기준 </span>
        </div>
        <!-- top -->

        <div class="list">
          <div class="lead">
            <div class="obj">
              <!-- <span class="bullet">주도</span> -->
              <span class="name">한국경제TV아무거나길게적어보자</span>
            </div>
            <div class="price">1,000,000</div>
            <div class="per up">+00.00%</div>
          </div>

          <div class="lead">
            <div class="obj">
              <!-- <span class="bullet">주도</span> -->
              <span class="name">한국경제TV아무거나길게적어보자</span>
            </div>
            <div class="price">1,000,000</div>
            <div class="per up">+00.00%</div>
          </div>

          <div class="lead">
            <div class="obj">
              <!-- <span class="bullet">주도</span> -->
              <span class="name">한국경제TV아무거나길게적어보자</span>
            </div>
            <div class="price">1,000,000</div>
            <div class="per up">+00.00%</div>
          </div>

          <div>
            <div class="obj">
              <span class="name">한국경제TV아무거나길게적어보자</span>
            </div>
            <div class="price">999,999</div>
            <div class="per dn">+00.00%</div>
          </div>

          <div>
            <div class="obj">
              <span class="name">한국경제TV아무거나길게적어보자</span>
            </div>
            <div class="price">99,999</div>
            <div class="per dn">+00.00%</div>
          </div>
        </div>
      </div>
      <!-- 연관종목 -->
    </div>
    <!-- 오늘의 이슈 -->
  </div>
  <!-- // -->
</template>

<script>

export default {
  data() {
    return {
      isOffcanvasOpen: false
    }
  },
  mounted() {
    const script = document.createElement('script')
    script.src =
      'https://cdn.jsdelivr.net/npm/swiper@10.2.0/swiper-bundle.min.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      new window.Swiper('.issue_list', {
        slidesPerView: 'auto',
        spaceBetween: 4,
        pagination: false,
        slideToClickedSlide: true
      }).mount()
      //
    }
  },
  methods: {
    goToPage() {
      this.$router.push('/todayIssueTip/')
    },
    toggleOffcanvas() {
      this.isOffcanvasOpen = !this.isOffcanvasOpen
    },
    closeOffcanvas() {
      this.isOffcanvasOpen = false
    }
  }
}
</script>

<style scoped>
@import "~/assets/css/nspim/nsissue.css";
@import "~/assets/css/offcanvas.css";
</style>

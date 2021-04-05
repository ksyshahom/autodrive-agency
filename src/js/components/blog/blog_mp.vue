<script>

import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/swiper.scss'

export default {
  name: 'blog_mp',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 'auto',
        spaceBetween: 20,
        direction: 'horizontal',
        navigation: {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        },
      }
    }
  },
  methods: {

    prev: function () {
      this.$refs.swiper.$swiper.slidePrev();
    },

    next: function () {
      this.$refs.swiper.$swiper.slideNext();
    },
  },
}
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="section__title">
        <h2>Блог</h2>
      </div>
    </div>
    <div class="blog">
      <div class="container">
        <swiper class="swiper" ref="swiper" :options="swiperOptions">
          <swiper-slide class="swiper-slide">
            <div class="blog__slide">
              <div class="blog__article-pic"></div>
              <div class="blog__article-info">
                <div class="blog__article-badges">
                  <div class="blog__article-badge badge"><span>Разработка</span></div>
                  <div class="blog__article-badge badge"><span>Реклама</span></div>
                </div>
                <div class="blog__article-title">Название статьи/события1</div>
                <div class="blog__article-date-views">
                  <div class="blog__article-date">02 марта 2021</div>
                  <div class="blog__article-views">1258</div>
                </div>
              </div>
              <a href="#" class="blog__read-article"><span>Читать статью</span></a>
            </div>

          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <div class="blog__slide">
              <div class="blog__article-pic"></div>
              <div class="blog__article-info">
                <div class="blog__article-badges">
                  <div class="blog__article-badge badge"><span>Разработка</span></div>
                  <div class="blog__article-badge badge"><span>Реклама</span></div>
                </div>
                <div class="blog__article-title">Название статьи/события2</div>
                <div class="blog__article-date-views">
                  <div class="blog__article-date">02 марта 2021</div>
                  <div class="blog__article-views">1258</div>
                </div>
              </div>
              <a href="#" class="blog__read-article"><span>Читать статью</span></a>
            </div>

          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <div class="blog__slide">
              <div class="blog__article-pic"></div>
              <div class="blog__article-info">
                <div class="blog__article-badges">
                  <div class="blog__article-badge badge"><span>Разработка</span></div>
                  <div class="blog__article-badge badge"><span>Реклама</span></div>
                </div>
                <div class="blog__article-title">Название статьи/события3</div>
                <div class="blog__article-date-views">
                  <div class="blog__article-date">02 марта 2021</div>
                  <div class="blog__article-views">1258</div>
                </div>
              </div>
              <a href="#" class="blog__read-article"><span>Читать статью</span></a>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <div class="blog__slide">
              <div class="blog__article-pic"></div>
              <div class="blog__article-info">
                <div class="blog__article-badges">
                  <div class="blog__article-badge badge"><span>Разработка</span></div>
                  <div class="blog__article-badge badge"><span>Реклама</span></div>
                </div>
                <div class="blog__article-title">Название статьи/события4</div>
                <div class="blog__article-date-views">
                  <div class="blog__article-date">02 марта 2021</div>
                  <div class="blog__article-views">1258</div>
                </div>
              </div>
              <a href="#" class="blog__read-article"><span>Читать статью</span></a>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <div class="blog__slide">
              <div class="blog__article-pic"></div>
              <div class="blog__article-info">
                <div class="blog__article-badges">
                  <div class="blog__article-badge badge"><span>Разработка</span></div>
                  <div class="blog__article-badge badge"><span>Реклама</span></div>
                </div>
                <div class="blog__article-title">Название статьи/события5</div>
                <div class="blog__article-date-views">
                  <div class="blog__article-date">02 марта 2021</div>
                  <div class="blog__article-views">1258</div>
                </div>
              </div>
              <a href="#" class="blog__read-article"><span>Читать статью</span></a>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <div class="blog__slide">
              <div class="blog__article-pic"></div>
              <div class="blog__article-info">
                <div class="blog__article-badges">
                  <div class="blog__article-badge badge"><span>Разработка</span></div>
                  <div class="blog__article-badge badge"><span>Реклама</span></div>
                </div>
                <div class="blog__article-title">Название статьи/события6</div>
                <div class="blog__article-date-views">
                  <div class="blog__article-date">02 марта 2021</div>
                  <div class="blog__article-views">1258</div>
                </div>
              </div>
              <a href="#" class="blog__read-article"><span>Читать статью</span></a>
            </div>
          </swiper-slide>
          <div v-on:click="prev" class="swiper-button-prev" slot="button-prev"></div>
          <div v-on:click="next" class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
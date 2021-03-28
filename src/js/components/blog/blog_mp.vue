<script>
export default {
  name: 'blog_mp',
};

</script>

<template>
  <section class="section">

    <div class="container">
      <div class="section__title">
        <h2>Блог</h2>
      </div>
    </div>
    <div class="container container--white">
      <div class="blog">
        <div class="blog__slide">
          <div class="blog__article-pic"></div>
          <div class="blog__article-info">
            <div class="blog__article-badges">
              <div class="blog__article-badge badge"><span>Разработка</span></div>
              <div class="blog__article-badge badge"><span>Реклама</span></div>
            </div>
            <div class="blog__article-title">Название статьи/события</div>
            <div class="blog__article-date-views">
              <div class="blog__article-date">02 марта 2021</div>
              <div class="blog__article-views">1258</div>
            </div>
          </div>
          <a href="#" class="blog__read-article"><span>Читать статью</span></a>
        </div>

        <div class="blog__slide">
          <div class="blog__article-pic"></div>
          <div class="blog__article-info">
            <div class="blog__article-badges">
              <div class="blog__article-badge badge"><span>Менеджмент</span></div>
              <div class="blog__article-badge badge"><span>Кейс</span></div>
            </div>
            <div class="blog__article-title">Название статьи/события</div>
            <div class="blog__article-date-views">
              <div class="blog__article-date">28 февраля 2021</div>
              <div class="blog__article-views">1258</div>
            </div>
          </div>
          <a href="#" class="blog__read-article"><span>Читать статью</span></a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
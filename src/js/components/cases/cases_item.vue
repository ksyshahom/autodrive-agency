<script>

export default {
  name: 'cases_item',
  props: {
    caseImg: {
      type: String,
      default: null,
      required: false,
    },
    imgAlt: {
      type: String,
      default: '',
      required: false,
    },
    viewCount: {
      type: Number,
      default: 0,
      required: false,
    },
    caseTitle: {
      type: String,
      default: null,
      required: true,
    },
    caseDescription: {
      type: String,
      default: '',
      required: false,
    },
  },
}
</script>

<template>
  <div class="cases__case-item">
    <div class="cases__case-pic">
      <img :src="'src/images/cases/' + caseImg"
           :alt="imgAlt">
    </div>
    <div class="row row--sb">
      <div class="cases__case-badges column column--direction-row">
        <div class="cases__case-badge badge"><span>Разработка</span></div>
        <div class="cases__case-badge badge"><span>Продвижение</span></div>
        <div class="cases__case-badge badge"><span>Контекст</span></div>
      </div>
      <div class="column">
        <div class="cases__case-views views">{{viewCount}}</div>
      </div>
    </div>
    <div class="cases__case-title">{{caseTitle}}</div>
    <div class="cases__case-description">{{caseDescription}}</div>
  </div>
</template>

<style scoped>

</style>
<script>

import cases_item from "./cases_item";
import tab from "../common/tab";

export default {
  name: 'cases',
  components: {
    tab,
    cases_item,
  },
  data: function () {
    return {
      'selectedTabs': ['sites'],
    };
  },
  computed: {
    //
  },
  methods: {

    toggleTab: function (id) {
      console.log(111, id);
      if (!this.selectedTabs.includes(id)){
        this.selectedTabs.push(id);
      }
      else {
        if (this.selectedTabs.length>1){

          for (var i = 0; i < this.selectedTabs.length; i++) {
            if (this.selectedTabs[i] === id) {
              this.selectedTabs.splice(i, 1);
            }
          }
        }
      }
    },

  },
  provide: function () {
    return {
      toggleTab: this.toggleTab,
    };
  },
}
</script>

<template>

  <section class="cases">
    <div class="section">
      <div class="container">
        <div class="row row--sb row--mb45">
          <div class="section__title section__title--mb0 column">
            <h2>Кейсы</h2>
          </div>
          <div class="cases__tabs tabs-wrapper column column--last">
            <tab :selected-tabs="selectedTabs" tab-id="sites" tab-text="#Сайты"></tab>
            <tab :selected-tabs="selectedTabs" tab-id="seo" tab-text="#SEO"></tab>
            <tab :selected-tabs="selectedTabs" tab-id="ctx" tab-text="#Контекст"></tab>
            <tab :selected-tabs="selectedTabs" tab-id="smm" tab-text="#SMM"
                 :custom-classes="['tab--last']"></tab>
          </div>
        </div>

        <div class="cases__case-list">

          <cases_item case-img="211618501.jpg"
                      img-alt="РОЛЬФ ЯСЕНЕВО"
                      :view-count="201"
                      case-title="Автомобильный дилер «РОЛЬФ ясенево»"
                      case-description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                     ullamco laboris nisi ut aliquip ex ea commodo consequat."></cases_item>
          <cases_item case-img="15 2.jpg"
                      img-alt="Райффайзен банк"
                      :view-count="25401"
                      case-title="Серия проектов для «Райффайзен банк»">
          </cases_item>
          <cases_item case-img="211618501.jpg"
                      img-alt="РОЛЬФ ЯСЕНЕВО"
                      :view-count="201"
                      case-title="Автомобильный дилер «РОЛЬФ ясенево»"
                      case-description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                     ullamco laboris nisi ut aliquip ex ea commodo consequat."></cases_item>
          <cases_item case-img="211618501.jpg"
                      img-alt="РОЛЬФ ЯСЕНЕВО"
                      :view-count="201"
                      case-title="Автомобильный дилер «РОЛЬФ ясенево»"
                      case-description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                     ullamco laboris nisi ut aliquip ex ea commodo consequat."></cases_item>


        </div>
        <div class="cases__see-more">
          <a href="#" class="link link--see-more">Все кейсы</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
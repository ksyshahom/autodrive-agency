<script>

import cases_item from "./cases_item";
import btn from "../common/btn";
import tab from "../common/tab"

export default {
  name: 'cases',
  components: {
    // btn,
    tab,
    cases_item,
  },
  props: {
    cases_items: {
      type: String,
      default: null,
      required: false,
    },
  },

  // data: function () {
  //   return {
  //     service: null,
  //     name: {
  //       value: null,
  //       focused: false,
  //     },
  //     phone: {
  //       value: null,
  //       focused: false,
  //     },
  //     email: {
  //       value: null,
  //       focused: false,
  //     },
  //     files: null,
  //     description: {
  //       value: null,
  //       focused: false,
  //     },
  //     agree: false,
  //   };
  // // },
  // computed: {
  //
  //   nameClasses: function () {
  //     let valid = this.name.value && (this.name.value.length > 1) ? true : false;
  //     return {
  //       'calc__fields-item--valid': valid,
  //       'calc__fields-item--active': this.name.focused,
  //     };
  //   },
  //
  //   phoneClasses: function () {
  //     //let valid = this.phone.value && (this.name.value.length > 1) ? true : false;
  //     return {
  //       //'calc__fields-item--valid': valid,
  //       'calc__fields-item--active': this.phone.focused,
  //     };
  //   },
  //
  //   emailClasses: function () {
  //     //let valid = this.phone.value && (this.name.value.length > 1) ? true : false;
  //     return {
  //       //'calc__fields-item--valid': valid,
  //       'calc__fields-item--active': this.email.focused,
  //     };
  //   },
  //
  //   descriptionClasses: function () {
  //     //let valid = this.phone.value && (this.name.value.length > 1) ? true : false;
  //     return {
  //       //'calc__fields-item--valid': valid,
  //       'calc__fields-item--active': this.description.focused,
  //     };
  //   },
  //
  // },
  // methods: {
  //
  //   setActive: function (field, status) {
  //     // console.log(111, field, status);
  //     this[field].focused = status;
  //   }
  //
  // },
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
            <tab tab-text="#Сайты"></tab>
            <tab tab-text="#SEO"></tab>
            <tab tab-text="#Контекст"></tab>
            <tab tab-text="#SMM"
                 :custom-classes="['tab--last']"></tab>
          </div>
        </div>

        <div class="cases__case-list">

          <cases_item case-img="211618501.jpg"
                      img-alt="РОЛЬФ ЯСЕНЕВО"
                      view-count="201"
                      case-title="Автомобильный дилер «РОЛЬФ ясенево»"
                      case-description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                     ullamco laboris nisi ut aliquip ex ea commodo consequat."></cases_item>
          <cases_item case-img="15 2.jpg"
                      img-alt="Райффайзен банк"
                      view-count="25401"
                      case-title="Серия проектов для «Райффайзен банк»">
<!--                      case-description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor-->
<!--                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation-->
<!--                     ullamco laboris nisi ut aliquip ex ea commodo consequat.">-->
          </cases_item>

          <div class="cases__case-item">
            <div class="cases__case-pic">
              <img src="src/images/cases/211618501.jpg" alt="РОЛЬФ ЯСЕНЕВО">
            </div>
            <div class="row row--sb">
              <div class="cases__case-badges column column--direction-row">
                <div class="cases__case-badge badge"><span>Разработка</span></div>
                <div class="cases__case-badge badge"><span>Продвижение</span></div>
                <div class="cases__case-badge badge"><span>Контекст</span></div>
              </div>
              <div class="column">
                <div class="cases__case-views views">1258</div>
              </div>
            </div>
            <div class="cases__case-title">Автомобильный дилер «РОЛЬФ ясенево»</div>
            <div class="cases__case-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>


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
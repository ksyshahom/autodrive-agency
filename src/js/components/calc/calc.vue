<script>
import service_item from "./service_item";
import btn from "../common/btn";
export default {
  name: 'calc',
  data: function () {
    return {
      service: null,
      name: {
        value: null,
        focused: false,
      },
      phone: {
        value: null,
        focused: false,
      },
      email: {
        value: null,
        focused: false,
      },
      files: null,
      description: {
        value: null,
        focused: false,
      },
      agree: false,
    };
  },
  computed: {

    nameClasses: function () {
      let valid = this.name.value && (this.name.value.length > 1) ? true : false;
      return {
        'calc__fields-item--valid': valid,
        'calc__fields-item--active': this.name.focused,
      };
    },

    phoneClasses: function () {
      //let valid = this.phone.value && (this.name.value.length > 1) ? true : false;
      return {
        //'calc__fields-item--valid': valid,
        'calc__fields-item--active': this.phone.focused,
      };
    },

    emailClasses: function () {
      //let valid = this.phone.value && (this.name.value.length > 1) ? true : false;
      return {
        //'calc__fields-item--valid': valid,
        'calc__fields-item--active': this.email.focused,
      };
    },

    descriptionClasses: function () {
      //let valid = this.phone.value && (this.name.value.length > 1) ? true : false;
      return {
        //'calc__fields-item--valid': valid,
        'calc__fields-item--active': this.description.focused,
      };
    },

  },
  methods: {

    setActive: function (field, status) {
      // console.log(111, field, status);
      this[field].focused = status;
    }

  },
  components: {
    btn,
    service_item
  },
}
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="section__title">
        <h2>Получите расчет вашего проекта</h2>
      </div>
      <div class="calc">
        <form enctype="multipart/form-data">

          <div class="calc__service">
            <div class="calc__service-title">Выберите услугу</div>
            <div class="calc__service-list">
              <service_item service-key="dev" label="Разработка" :checked="true"></service_item>
              <service_item service-key="ctx" label="Контекст"></service_item>
              <service_item service-key="smm" label="SMM"></service_item>
              <service_item service-key="seo" label="SEO"></service_item>
            </div>
          </div>

          <div class="calc__fields">
            <div class="row">
              <div class="column column--1-3">
                <div class="calc__fields-item"
                     :class="nameClasses">
                  <input class="calc__fields-input"
                         type="text"
                         name="name"
                         placeholder="Имя"
                         v-on:focus="setActive('name', true)"
                         v-on:blur="setActive('name', false)"
                         v-model="name.value">
                </div>
              </div>
              <div class="column column--1-3">
                <div class="calc__fields-item calc__fields-item--phone"
                     :class="phoneClasses">
                  <input class="calc__fields-input"
                         type="tel"
                         name="phone"
                         placeholder="+7 (___) ___-__-__"
                         v-mask="'+7 (###) ###-##-##'"
                         v-on:focus="setActive('phone', true)"
                         v-on:blur="setActive('phone', false)"
                         v-model="phone.value">
                </div>
              </div>
              <div class="column column--1-3  column--last">
                <div class="calc__fields-item"
                     :class="emailClasses">
                  <input class="calc__fields-input"
                         type="text"
                         name="email"
                         placeholder="Электронная почта"
                         v-on:focus="setActive('email', true)"
                         v-on:blur="setActive('email', false)"
                         v-model="email.value">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="column column--1-3">
                <div class="calc__fields-item calc__fields-item--files">
                  <input class="calc__fields-input" type="file" multiple name="files" id="calc-files">
                  <label for="calc-files">Добавить файл(ы)</label>
                </div>
              </div>
              <div class="column column--2-3  column--last">
                <div class="calc__fields-item calc__fields-description"
                     :class="descriptionClasses">
                  <textarea name="description"
                            placeholder="Сообщение"
                            rows="1"
                            v-on:focus="setActive('description', true)"
                            v-on:blur="setActive('description', false)"
                            v-model="description.value">
                  </textarea>
                </div>
              </div>
            </div>
          </div>

          <div class="calc__submit">
            <div class="row row--center">
              <div class="column column--1-3">
                <btn btn-text="Отправить"
                     :custom-wrapper-classes="['calc__submit-btn-wrapper']"
                     :custom-classes="['calc__submit-btn']"></btn>
              </div>
              <div class="column column--2-3 column--last">
                <div class="calc__submit-agree-wrapper">
                  <input type="checkbox" name="agree" value="true" id="calc-checkbox">
                  <label for="calc-checkbox" class="calc__submit-agree">
                    <div class="calc__submit-agree-checkbox"></div>
                    <div class="calc__submit-agree-text">
                      Нажимая на кнопку «Отправить» вы соглашаетесь на обработку персональных
                      данных в соответствии с
                      <a href="#" target="_blank">политикой конфиденциальности.</a>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
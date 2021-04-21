<script>

export default {
  name: 'tab',
  props: {
    tabId: {
      type: String,
      default: null,
      required: true,
    },
    tabText: {
      type: String,
      default: null,
      required: true,
    },
    customClasses: {
      type: Array,
      default: function () {
        return [];
      },
      required: false,
    },
    selectedTabs: {
      type: Array,
      default: function () {
        return [];
      },
      required: true,
    },
  },
  computed: {

    activeClass: function () {
      return {
        'cases__tab--active': this.selectedTabs.includes(this.tabId),
      };
    },

  },
  inject: ['toggleTab'],
}

</script>

<template>
  <div>
    <button class="tab cases__tab"
            :class="[customClasses, activeClass]"
            v-on:click="toggleTab(tabId)">
      {{ tabText }}
    </button>
  </div>
</template>

<style scoped>

</style>
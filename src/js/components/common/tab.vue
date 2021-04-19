<script>

export default {
  name: 'tab',
  props: {
    tabText: {
      type: String,
      default: null,
      required: true,
    },
    customWrapperClasses: {
      type: Array,
      default: [],
      required: false,
    },
    customClasses: {
      type: Array,
      default: [],
      required: false,
    },
    isActive: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  methods: {
    activeClassToggle: function() {
      console.log("1 " + this.isActive);
      this.isActive = !this.isActive;
      console.log("2 " + this.isActive);
      console.log(this.customClasses);
      if (this.isActive == true) {
        this.customClasses.push("cases__tab--active");
      }
      else {
        for( var i = 0; i < this.customClasses.length; i++){
          if ( this.customClasses[i] === "cases__tab--active") {
            this.customClasses.splice(i, 1);
          }
        }
      }
      console.log(this.customClasses);
    }
  }
}

</script>

<template>
  <div :class="customWrapperClasses">
    <button class="tab cases__tab"
            :class="customClasses"
            v-on:click="activeClassToggle">
      {{ tabText }}
    </button>
  </div>
</template>

<style scoped>

</style>
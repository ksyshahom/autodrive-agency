<script>

export default {
  name: 'btn',
  props: {
    btnText: {
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
  },
  computed: {
    //
  },
}

</script>

<template>
  <div :class="customWrapperClasses">
    <button :class="customClasses">{{ btnText }}</button>
  </div>
</template>

<style scoped>

</style>
<script>

export default {
  name: 'service_item',
  props: {
    serviceKey: {
      type: String,
      default: null,
      required: true,
    },
    label: {
      type: String,
      default: null,
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
}
</script>

<template>
  <div class="calc__service-item">

    <input type="radio"
           name="service"
           :value="serviceKey"
           :id="'service-' + serviceKey"
           :checked="checked">

    <label class="calc__service-label"
           :class="'calc__service-label--' + serviceKey"
           :for="'service-' + serviceKey">
      <div>{{ label }}</div>
    </label>

  </div>
</template>

<style scoped>

</style>
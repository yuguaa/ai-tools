<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
const configProviderSettings = ref({
  'theme-vars-scope': 'global',
  theme: 'dark',
  themeVars: {
    'primary-color': '#9a82ea',
    'slider-button-width': '20px',
    'slider-button-height': '20px',
  },
})

</script>

<template>
  <van-config-provider v-bind="configProviderSettings">
    <RouterView />
  </van-config-provider>
</template>

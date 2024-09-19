<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import { setToastDefaultOptions } from 'vant'
const configProviderSettings = ref({
  'theme-vars-scope': 'global',
  theme: 'dark',
  themeVars: {
    'primary-color': '#9a82ea',
    'slider-button-width': '20px',
    'slider-button-height': '20px',
    'toast-text-color': '#f00',
    'toast-font-color': '#f00',
  },
})
setToastDefaultOptions({
  className: 'text-white text-sm px-2 py-2 rounded-lg !bg-[#9a82ea]',
})
</script>

<template>
  <van-config-provider v-bind="configProviderSettings">
    <RouterView />
  </van-config-provider>
</template>

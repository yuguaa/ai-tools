<template>
  <div class="border-[#9a82ea] border-[1px] border-dashed h-60 flex justify-center items-center rounded-md">
    <van-image :src="value"></van-image>
  </div>
</template>
<script setup>
import { ref, defineProps, defineEmits } from 'vue'
const props = defineProps({
  value: {
    type: String,
    default: ''
  }
})
</script>
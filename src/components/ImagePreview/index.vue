<template>
  <div class="border-[#9a82ea] border-[1px] border-dashed h-60 flex justify-center items-center rounded-md relative">
    <van-image class="h-full" show-menu-by-longpress fit="contain" :src="value"></van-image>
    <div v-if="value"
      class="px-2 py-0 absolute top-1 right-1 border-l-[1px] border-[1px] border-[#9a82ea] border-solid rounded-md bg-[#9a82ea] text-white/80"
      @click="handleDownload">
      <van-icon :size="10" name="down" />
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps, defineEmits } from 'vue'
const props = defineProps({
  value: {
    type: String,
    default: ''
  },
  downloadName: {
    type: String,
    default: 'download'
  }
})
const handleDownload = () => {
  const a = document.createElement('a')
  a.href = props.value
  a.download = props.downloadName
  a.click()
}
</script>
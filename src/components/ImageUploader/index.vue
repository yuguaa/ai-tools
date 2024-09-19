<template>
  <van-uploader class="w-full flex flex-col justify-center items-center" :after-read="handleAfterRead"
    :preview-image="false">
    <div v-if="!photo"
      class="border-[#9a82ea] border-[1px] border-dashed h-60 flex justify-center items-center rounded-md">
      <div>
        <van-icon :size="30" color="#d9d9d9" name="plus" />
      </div>
    </div>
    <div class="w-full flex flex-col justify-center items-center relative border-[#9a82ea] border-[1px] border-dashed rounded-md" v-else>
      <van-image class="h-60" :src="photo" alt="" fit="contain" />
    </div>
  </van-uploader>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'
const props = defineProps({
  photo: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['update:photo'])
const fileList = ref([])
const handleAfterRead = ({ file }) => {
  fileList.value = [file]
  const url = URL.createObjectURL(file)
  emit('update:photo', url)
}
</script>
<style scoped>
:deep(.van-uploader__input-wrapper) {
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div class="text-[12px] p-4 overflow-auto h-[calc(100vh-44px)]">
    <div class="flex justify-between">
      <div>
        <span>*</span>
        <span>上传图片</span>
      </div>
    </div>
    <ImageUploader />
    <div v-for="(item, index) in 100" :key="index">{{ item }}</div>
  </div>
</template>
<script setup>
import ImageUploader from '@/components/ImageUploader/index.vue'
</script>

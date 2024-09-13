<template>
  <main class="p-2">
    <div class="grid grid-cols-2 gap-4 mt-4">
      <div v-for="tool in tools" :key="tool.id" class="bg-white rounded-lg shadow-md overflow-hidden relative">
        <img :src="tool.image" alt="" class="w-full h-48 object-contain" />
        <div class="p-1 absolute top-0 right-0 bg-slate-100 rounded-lg">
          <div class="text-lg font-bold">{{ tool.name }}</div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import { ref } from 'vue'
// 旧照片修复，证件照制作，图片转卡通，模板换脸
const tools = ref([
  {
    id: 1,
    name: '旧照片修复',
    image: 'https://img.yzcdn.cn/vant/apple-1.jpg',
  },
  {
    id: 2,
    name: '证件照制作',
    image: 'https://img.yzcdn.cn/vant/apple-2.jpg',
  },
  {
    id: 3,
    name: '图片转卡通',
    image: 'https://img.yzcdn.cn/vant/apple-3.jpg',
  },
  {
    id: 4,
    name: '模板换脸',
    image: 'https://img.yzcdn.cn/vant/apple-4.jpg',
  },
])
</script>

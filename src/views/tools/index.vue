<template>
  <main class="bg-black h-screen w-screen text-white text-sm overflow-hidden">
    <van-tabs v-model:active="active" v-bind="tabStyle">
      <van-tab title="旧照片修复">
        <Renew />
      </van-tab>
      <van-tab title="证件照制作">
        <IdCard />
      </van-tab>
      <van-tab title="图片转卡通">
        <Cartoon />
      </van-tab>
      <van-tab title="模板换脸">
        <FaceSwap />
      </van-tab>
    </van-tabs>
  </main>
</template>
<script setup>
import { ref } from 'vue'
// 旧照片修复，证件照制作，图片转卡通，模板换脸
import Renew from './components/Renew/index.vue'
import IdCard from './components/IdCard/index.vue'
import Cartoon from './components/Cartoon/index.vue'
import FaceSwap from './components/FaceSwap/index.vue'
const active = ref(1)
const tabStyle = {
  background: '#000',
  border: true,
  'line-height': 2,
  'title-active-color': '#f5f5f5',
  // animated: true,
}
</script>

<template>
  <div class="text-[12px] p-4  overflow-auto h-[calc(100vh-44px)]">
    <div class="flex justify-between">
      <div>
        <span>*</span>
        <span>上传图片</span>
      </div>
    </div>
    <ImageUploader class="mt-2" v-model:photo="photo" />
    <div class="flex justify-between mt-2">
      <div>
        <span>*</span>
        <span>生成图片</span>
      </div>
    </div>
    <ImagePreview class="mt-2" downloadName="复原图" v-model:value="preview" />
    <div class="mt-2 flex justify-between">
      <div>
        <span>*</span>
        <span>配置</span>
      </div>
    </div>
    <div class="mt-2">
      <van-row>
        <van-col span="12">
          <van-checkbox v-model="Background_Enhance">背景增强</van-checkbox>
        </van-col>
        <van-col span="12">
          <van-checkbox v-model="Face_Upsample">人脸采集</van-checkbox>
        </van-col>
        <van-col class="mt-2" span="12">
          <van-stepper button-size="20" theme="round" v-model="Rescaling_Factor" disable-input :min="-100" /><span
            class="ml-2">变化因子</span>
        </van-col>
        <van-col class="mt-2" span="24">
          <div>
            <div class="mb-3">
              <span class="mr-2">精确度</span>
              <span>{{ Codeformer_Fidelity }}</span>
            </div>
            <van-slider v-model="Codeformer_Fidelity" :min="0" :max="1" :step="0.01"></van-slider>
          </div>
        </van-col>
      </van-row>
      <div class="flex mt-4">
        <van-button class="w-full" color="linear-gradient(to right, #9a55ea, #9a82ea)" size="small" @click="handleGen">
          生 成
        </van-button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { showToast } from 'vant';
import { Client } from "@gradio/client";
import ImageUploader from '@/components/ImageUploader/index.vue'
import ImagePreview from '@/components/ImagePreview/index.vue'
import useLoading from '@/hook/useLoading.js'
const photo = ref('')
const Background_Enhance = ref(true)
const Face_Upsample = ref(true)
const Rescaling_Factor = ref(2)
const Codeformer_Fidelity = ref(0.5)
const preview = ref('')
const [showLoading, setLoading] = useLoading()
const handleGen = async () => {
  try {
    if (!photo.value) {
      showToast('请上传图片');
      return
    }
    setLoading(true)
    const response_0 = await fetch(photo.value);
    const exampleImage = await response_0.blob();
    const url = import.meta.env.VITE_APP_RENEW_URL
    console.log(`🚀 ~ url:`, url)
    const client = await Client.connect(url);
    const result = await client.predict("/predict", {
      image: exampleImage,
      background_enhance: Background_Enhance.value,
      face_upsample: Face_Upsample.value,
      upscale: Rescaling_Factor.value,
      codeformer_fidelity: Codeformer_Fidelity.value,
    });
    const [outputImage, downloadImage] = result.data;
    console.log(`🚀 ~ outputImage,downloadImage:`, outputImage, downloadImage)
    preview.value = downloadImage.url;
  } catch (error) {
    console.log(`🚀 ~ error:`, error)
  } finally {
    setLoading(false)
  }

}
</script>

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
    <div>
      <div class="flex justify-between mt-2">
        <div>
          <span>标准照</span>
        </div>
      </div>
      <ImagePreview class="mt-2" downloadName="标准照" v-model:value="preview.hd" />
    </div>
    <!-- <van-row :gutter="[20, 20]" class="px-2">
      <van-col :span="12">
        <div class="flex justify-between mt-2">
          <div>
            <span>标准照</span>
          </div>
        </div>
        <ImagePreview class="mt-2" downloadName="标准照" v-model:value="preview.hd" />
      </van-col>
      <van-col :span="12">
        <div class="flex justify-between mt-2">
          <div>
            <span>高清照</span>
          </div>
        </div>
        <ImagePreview class="mt-2" downloadName="高清照" v-model:value="preview.common" />
      </van-col>
    </van-row> -->
    <!-- <div class="mt-2 px-2">
      <div class="flex justify-between mt-2">
        <div>
          <span>六寸排版照</span>
        </div>
      </div>
      <ImagePreview class="mt-2" downloadName="六寸排版照" v-model:value="preview.screen" />
    </div> -->

    <div class="mt-2 flex justify-between">
      <div>
        <span>*</span>
        <span>配置</span>
      </div>
    </div>
    <div class="mt-2">
      <!-- <PsPicker label="人脸检测模型" v-model:value="params.renlianjiancemoxing" :columns="params.renlianjiancemoxingList" /> -->
      <!-- <PsPicker class="mt-2" label="抠图模型" v-model:value="params.koutumoxing" :columns="params.koutumoxingList" /> -->
      <div class="mt-2">
        <!-- <van-tabs v-model:active="active" v-bind="tabStyle"> -->
        <!-- <van-tab class="p-4" title="核心参数"> -->
        <div>
          <span>证件照尺寸选项</span>
        </div>
        <van-radio-group v-model="chicun" direction="horizontal">
          <van-radio class="mt-2 ml-2" name="chicunliebiao">尺寸列表</van-radio>
          <!-- <van-radio class="mt-2 ml-2" name="zhihuandi">只换底</van-radio> -->
          <van-radio class="mt-2 ml-2" name="zidingyichicun">自定义尺寸</van-radio>
        </van-radio-group>
        <PsPicker v-if="chicun === 'chicunliebiao'" class="mt-2" label="预设尺寸" v-model:value="params.yushechicun"
          :columns="params.yushechicunList" />
        <div class="mt-2 ml-2" v-if="chicun === 'zidingyichicun'">
          <div>
            <span>自定义尺寸</span>
          </div>
          <van-row class="mt-1" :gutter="[14]">
            <van-col>
              <van-stepper button-size="20" theme="round" v-model="params.height" /><span class="ml-2">height</span>
            </van-col>
            <van-col>
              <van-stepper button-size="20" theme="round" v-model="params.width" /><span class="ml-2">width</span>
            </van-col>
          </van-row>
        </div>
        <div class="mt-4">
          <span>背景色</span>
        </div>
        <van-radio-group v-model="params.beijingse" direction="horizontal">
          <!-- 蓝色，白色，红色，黑色，深蓝色，自定义底色 -->
          <van-radio class="mt-2 ml-2" name="0000FF">蓝色</van-radio>
          <van-radio class="mt-2 ml-2" name="FFFFFF">白色</van-radio>
          <van-radio class="mt-2 ml-2" name="FF0000">红色</van-radio>
          <van-radio class="mt-2 ml-2" name="000000">黑色</van-radio>
          <van-radio class="mt-2 ml-2" name="00008B">深蓝色</van-radio>
          <van-radio class="mt-2 ml-2" name="自定义底色">自定义底色</van-radio>
        </van-radio-group>
        <div v-if="params.beijingse === '自定义底色'" class="mt-2 ml-2">
          <div class="mt-2">
            <span>自定义颜色</span>
          </div>
          <van-row class="mt-1" :gutter="[4, 4]">
            <van-col>
              <van-stepper button-size="20" theme="round" v-model="params.r" /><span class="ml-2">R</span>
            </van-col>
            <van-col>
              <van-stepper button-size="20" theme="round" v-model="params.g" /><span class="ml-2">G</span>
            </van-col>
            <van-col>
              <van-stepper button-size="20" theme="round" v-model="params.b" /><span class="ml-2">B</span>
            </van-col>
          </van-row>
        </div>
        <!-- <div class="mt-4">
              <span>渲染方式</span>
            </div>
            <van-radio-group v-model="params.xuanranfangshi" direction="horizontal">
              <van-radio class="mt-2 ml-2" name="纯色">纯色</van-radio>
              <van-radio class="mt-2 ml-2" name="上下渐变 (白)">上下渐变 (白)</van-radio>
              <van-radio class="mt-2 ml-2" name="中心渐变 (白)">中心渐变 (白)</van-radio>
            </van-radio-group> -->
        <!-- </van-tab> -->
        <!-- <van-tab class="p-4" title="高级参数">
            <div>
              <div class="mb-3">
                <span class="mr-2">面部比例</span>
                <span>{{ params.mianbubili }}</span>
              </div>
              <van-slider v-model="params.mianbubili" :min="0.1" :max="0.5" :step="0.01"></van-slider>
            </div>
            <div class="mt-4">
              <div class="mb-3">
                <span class="mr-2">头距顶距离</span>
                <span>{{ params.toujudingjuli }}</span>
              </div>
              <van-slider v-model="params.toujudingjuli" :min="0.02" :max="0.5" :step="0.01"></van-slider>
            </div>
            <div class="mt-4">
              <div>
                <span>设置 KB 大小</span>
              </div>
              <van-radio-group v-model="params.shezhikbdaxiao" direction="horizontal">
                <van-radio class="mt-2" name="不设置">不设置</van-radio>
                <van-radio class="mt-2 ml-2" name="自定义">自定义</van-radio>
              </van-radio-group>
              <div v-if="params.shezhikbdaxiao === '自定义'" class="mt-2">
                <div class="mb-3">
                  <span class="mr-2">KB大小</span>
                  <span>{{ params.kbdaxiao }}</span>
                </div>
                <van-slider v-model="params.kbdaxiao" :min="10" :max="1000" :step="1"></van-slider>
              </div>
            </div>
          </van-tab> -->
        <!-- <van-tab class="p-4" title="水印">
            <div>
              <span>添加水印</span>
            </div>
            <van-radio-group v-model="params.shuiyin" direction="horizontal">
              <van-radio class="mt-2" name="不添加">不添加</van-radio>
              <van-radio class="mt-2 ml-2" name="添加">添加</van-radio>
            </van-radio-group>
            <div class="mt-4">
              <div>
                <span>水印文字</span>
              </div>
              <van-field v-model="params.shuiyinwenzi" />
            </div>
            <div class="mt-4">
              <div>
                <span>水印颜色</span>
              </div>
              <van-field v-model="params.shuiyinyanse" />
            </div>
            <div class="mt-4">
              <div class="mb-3">
                <span class="mr-2">文字大小</span>
                <span>{{ params.wenzidaxiao }}</span>
              </div>
              <van-slider v-model="params.wenzidaxiao" :min="10" :max="100" :step="1"></van-slider>
            </div>
            <div class="mt-4">
              <div class="mb-3">
                <span class="mr-2">水印透明度</span>
                <span>{{ params.shuiyintoumingdu }}</span>
              </div>
              <van-slider v-model="params.shuiyintoumingdu" :min="0" :max="1" :step="0.01"></van-slider>
            </div>
            <div class="mt-4">
              <div class="mb-3">
                <span class="mr-2">水印角度</span>
                <span>{{ params.shuiyinjiaodu }}</span>
              </div>
              <van-slider v-model="params.shuiyinjiaodu" :min="0" :max="360" :step="1"></van-slider>
            </div>
            <div class="mt-4">
              <div class="mb-3">
                <span class="mr-2">水印间距</span>
                <span>{{ params.shuiyinjianju }}</span>
              </div>
              <van-slider v-model="params.shuiyinjianju" :min="10" :max="200" :step="1"></van-slider>
            </div>
          </van-tab> -->
        <!-- </van-tabs> -->
      </div>
      <div class="flex mt-4">
        <van-button class="w-full" color="linear-gradient(to right, #9a55ea, #9a82ea)" size="small" @click="handleGen">
          生 成
        </van-button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { showToast } from 'vant';
import { Client } from "@gradio/client";
import ImageUploader from '@/components/ImageUploader/index.vue'
import ImagePreview from '@/components/ImagePreview/index.vue'
import PsPicker from '@/components/PsPicker/index.vue'
import useLoading from '@/hook/useLoading.js'
const [showLoading, setLoading] = useLoading()
const photo = ref('')
const preview = ref({
  hd: '',
  common: '',
  screen: ''
})
const tabStyle = {
  background: '#000',
  border: true,
  'line-height': 2,
  'title-active-color': '#f5f5f5',
  // animated: true,
}
const params = ref({
  yuyan: '中文',
  renlianjiancemoxing: 'mtcnn',
  renlianjiancemoxingList: ['mtcnn', 'face++ (联网API)'],
  koutumoxing: 'birefnet-v1-lite',
  koutumoxingList: ['modnet_photographic_portrait_matting', 'birefnet-v1-lite', 'hivision_modnet', 'rmbg-1.4'],
  yushechicun: '一寸[413, 295]',
  yushechicunList: ['一寸[413, 295]', '二寸[626, 413]', '小一寸[378, 260]', '小二寸[531, 413]', '大一寸[567, 390]', '大二寸[626, 413]', '五寸[1499, 1050]', '教师资格证[413, 295]', '国家公务员考试[413, 295]', '初级会计考试[413, 295]', '英语四六级考试[192, 144]', '计算机等级考试[567, 390]', '研究生考试[709, 531]', '社保卡[441, 358]', '电子驾驶证[378, 260]', '美国签证[600, 600]', '日本签证[413, 295]', '韩国签证[531, 413]'],
  beijingse: '0000FF',
  xuanranfangshi: '纯色',
  r: 0,
  g: 0,
  b: 0,
  height: 413,
  width: 295,
  mianbubili: 0.1,
  toujudingjuli: 0.1,
  shezhikbdaxiao: '不设置',
  kbdaxiao: 50,
  shuiyin: '添加',
  shuiyinwenzi: '菠萝吹雪',
  shuiyinyanse: '黑色',
  wenzidaxiao: 20,
  shuiyintoumingdu: 0.15,
  shuiyinjiaodu: 30,
  shuiyinjianju: 25,
})
const chicun = ref('chicunliebiao')
const active = ref(0)

let IDURL = import.meta.env.VITE_APP_IDCARD_URL
if (import.meta.env.MODE === 'development') {
  IDURL = '/idcard'
}
console.log(`🚀 ~ IDURL:`, IDURL)
const generateIdPhoto = async (inputImagePath, height, width) => {
  const url = `${IDURL}/idphoto`;
  const formData = new FormData();
  formData.append("input_image", new File([await fetch(inputImagePath).then(res => res.blob())], "test.jpg"));
  formData.append("height", height);
  formData.append("width", width);

  const response = await fetch(url, {
    method: 'POST',
    body: formData
  });
  const result = await response.json();
  return result;
}
const addBackground = async (inputImagePath, color, kb = 200) => {
  const url = `${IDURL}/add_background`;
  const formData = new FormData();
  formData.append("input_image", new File([await fetch(inputImagePath).then(res => res.blob())], "test.png"));
  formData.append("color", color);
  formData.append("kb", kb);

  const response = await fetch(url, {
    method: 'POST',
    body: formData
  });

  const result = await response.json();
  console.log(`🚀 ~ result:`, result)
  return result;
}

const generateLayoutPhotos = async (inputImagePath, height, width, kb = 200) => {
  const url = `${IDURL}/generate_layout_photos`;
  const formData = new FormData();
  formData.append("input_image", new File([await fetch(inputImagePath).then(res => res.blob())], "test.jpg"));
  formData.append("height", height);
  formData.append("width", width);
  formData.append("kb", kb);

  const response = await fetch(url, {
    method: 'POST',
    body: formData
  });

  const result = await response.json();
  console.log(`🚀 ~ result:`, result)
  return result;
}

const rgbToHex = (r, g, b) => {
  const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  return componentToHex(r) + componentToHex(g) + componentToHex(b);
};
const handleGen = async () => {
  try {
    if (!photo.value) {
      showToast('请上传图片');
      return
    }
    setLoading(true)
    let height, width
    if (chicun.value) {
      [height, width] = params.value.yushechicun.match(/\d+/g)
    } else {
      height = params.value.height
      width = params.value.width
    }
    let color = params.value.beijingse
    if (params.value.beijingse === '自定义底色') {
      color = rgbToHex(params.value.r, params.value.g, params.value.b)
    }
    const res = await generateIdPhoto(photo.value, height, width)
    console.log(`🚀 ~ res:`, res)

    if (res.status) {
      setLoading(true)
      const [hd, common] = await Promise.all([addBackground(res.image_base64_hd, color), addBackground(res.image_base64_standard, color)])
      console.log(`🚀 ~ hd:`, hd)
      if (hd.status) {
        preview.value.hd = hd.image_base64
      } else {
        showToast('高清图生成失败~')
        setLoading(false)
      }
      if (common.status) {
        preview.value.common = common.image_base64
      } else {
        showToast('标准图生成失败')
        setLoading(false)
      }
      // if (!hd.status && !common.status) {
      //   showToast('背景添加失败')
      //   setLoading(false)
      //   return
      // } else {
      //   setLoading(true)
      //   let screen
      //   if (common.status) {
      //     screen = common.image_base64
      //   }
      //   if (hd.status) {
      //     screen = hd.image_base64
      //   }
      //   const screenRes = await generateLayoutPhotos(screen, height, width)
      //   console.log(`🚀 ~ screenRes:`, screenRes)
      //   if (screenRes.status) {
      //     preview.value.screen = screenRes.image_base64
      //     setLoading(false)
      //   } else {
      //     setLoading(false)
      //     showToast('排版照生成失败了~')
      //   }
      // }
    } else {
      showToast('生成失败了~')
      setLoading(false)
    }
  } catch (error) {
    console.log(`🚀 ~ error:`, error)
  } finally {
    setLoading(false)
  }
}
</script>

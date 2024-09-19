<template>
  <div>
    <van-field v-model="fieldValue" is-link readonly :label="label" placeholder="选择城市" @click="showPicker = true" />
    <van-popup v-model:show="showPicker" round position="bottom">
      <van-picker :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
    </van-popup>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'
const props = defineProps({
  value: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  columns: {
    type: Array,
    default: () => []
  }
})
const emit = defineEmits(['update:value'])
const showPicker = ref(false)
const fieldValue = ref(props.value)
const columns = props.columns.map(item => ({ text: item, value: item }))
const onConfirm = ({ selectedOptions }) => {
  showPicker.value = false;
  fieldValue.value = selectedOptions[0].value;
  emit('update:value', selectedOptions[0].value)
};
</script>

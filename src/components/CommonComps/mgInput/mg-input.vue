<template>
  <div class="mg-input">
    <el-icon class="mg-input__prefix"><Search /></el-icon>
    <input
      class="mg-input__inner"
      placeholder="搜索歌曲、歌手"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
    >
    <el-icon class="mg-input__suffix" v-show="modelValue.length" @click="$emit('update:modelValue', '')"><Close /></el-icon>
  </div>
</template>

<script setup>
import './mg-input.scss'
import { Search, Close } from '@element-plus/icons-vue'
defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})
defineEmits(['focus', 'blur', 'update:modelValue'])
</script>

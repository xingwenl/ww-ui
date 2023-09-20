<script setup lang="ts">
import { WForm, useForm } from 'ww-laas';
const [register, { resetFields }] = useForm({
  schemas: [
    {
      label: 'input',
      field: 'test',
      component: 'Input',
      componentProps: {
        placeholder: '你妹的'
      }
    },
    {
      label: 'radio',
      field: 'test1',
      component: 'DatePicker',
      componentProps: {}
    }
  ]
});
</script>

<template>
  <WForm @register="register" />
  <el-button @click="resetFields">重制</el-button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { WForm, FormSchema } from 'ww-laas';

const schemas = ref<FormSchema[]>([
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
]);
</script>

<template>
  <WForm :schemas="schemas" />
</template>

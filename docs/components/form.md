---
title: Form 表单
lang: zh-CN
---

# Form 表单

常用的表单。

## 基础用法

<script setup>
import Form from '../examples/form/basic.vue'
import UseForm from '../examples/form/use.vue'

</script>
<Form/>

::: detail

:::

```vue
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
```

## 高阶用法

<UseForm/>

---
title: Button 按钮
lang: zh-CN
---

# Button 按钮

常用的操作按钮。

## 基础用法

<script setup>
import Button from '../examples/button/basic.vue'
</script>

:::主要
使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。
:::
<Button/>

<el-button>你好</el-button>

<span v-for="i in 3">{{ i }}</span>

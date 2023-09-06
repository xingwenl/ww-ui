<template>
  <ElInput v-bind="$attrs" :placeholder="placeholder" />
</template>

<script lang="ts" setup>
import { ElInput } from "element-plus";
import { inputProps } from "./input";
// type InputProps = {
//   placeholder: string;
// };

defineOptions({
  name: "WInput",
});
defineProps(inputProps);
</script>

<style scoped></style>

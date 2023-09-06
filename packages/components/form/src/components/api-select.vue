<template>
  <ElSelect v-bind="$attrs">
    <ElOption v-for="opt in getOptions" :label="opt.label" :value="opt.value" />
  </ElSelect>
</template>
<script lang="ts" setup>
import { ElSelect, ElOption } from "element-plus";
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    options: Recordable[];
    labelField?: string;
    valueField?: string;
    resultField?: string;
  }>(),
  {
    labelField: "label",
    valueField: "value",
    resultField: "",
  }
);

const getOptions = computed(() => {
  const { labelField, valueField, options: nativeOptions } = props;

  if (labelField !== "label" && valueField !== "value") {
    return nativeOptions.map((opt) => ({
      ...opt,
      label: opt[labelField],
      value: opt[valueField],
    }));
  }
  return nativeOptions;
});
</script>
<style lang="less"></style>

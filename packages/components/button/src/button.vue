<template>
  <div class="ww-button">
    {{ test }}
    <button>
      <slot />
    </button>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: "WButton",
});
const test = "et";
</script>

<style lang="less" scoped>
.ww-button {
  background-color: antiquewhite;
}
</style>

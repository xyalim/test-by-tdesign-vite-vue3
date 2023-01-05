<template>
  <t-input ref="inputRef" v-bind="itemProps" @change="onChangeInput" />
</template>
<script setup>
import { ref, defineProps, onMounted } from "vue";
defineProps({
  itemProps: {
    type: Object,
    default: {},
  },
});

const inputRef = ref(null);
const onChangeInput = (val) => {
  console.log("onChangeInput", val);
};
onMounted(() => {
  console.log(inputRef.value);
});
</script>

<style>
</style>
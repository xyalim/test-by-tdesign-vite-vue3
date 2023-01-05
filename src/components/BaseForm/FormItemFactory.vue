<template>
  <t-form-item ref="formItemRef" v-bind="formItemProps">
    <component :is="formItemTypeEnum[type]" v-bind="$attrs" />
  </t-form-item>
</template>

<script setup>
import {
  ref,
  computed,
  defineProps,
  defineAsyncComponent,
  defineExpose,
  onMounted,
} from "vue";

const formItemTypeEnum = {
  input: defineAsyncComponent(() =>
    import("@/components/BaseForm/BaseFormItem/Input.vue")
  ),
};

const formItemRef = ref(null);

const props = defineProps({
  type: {
    type: String,
    default: "input",
  },
  formItemProps: {
    type: Object,
    default: {},
  },
});

onMounted(() => {
  console.log(formItemRef.value);
});
defineExpose({
  reset: () => formItemRef.value.resetField(),
});
</script>

<style>
</style>
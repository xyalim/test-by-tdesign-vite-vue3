<template>
  <t-form ref="formRef" v-bind="$attrs">
    <!-- 插槽穿透 -->
    <template v-for="(item, key, index) in $slots" :key="index" v-slot:[key]>
      <slot :name="key"></slot>
    </template>
  </t-form>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup(props, {expose}){
    const formRef = ref(null);
    
    // const slots = useSlots();
    // console.log(slots);
    // console.log(slots.default());

    expose({
      formRef
    })
    return {
      formRef
    }
  }
})
</script>

<style>
</style>
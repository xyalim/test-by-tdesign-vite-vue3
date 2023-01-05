<template>
  <div>1212312</div>
  <BaseForm ref="BaseFormRef" :data="formData" class="mt-10px">
    <t-form-item name="testInput">
      <!-- v-model="formData.testInput" -->
      <!-- :modelValue="formData.testInput"
        :onChange="(val) => (formData.testInput = val)" -->
      <!-- v-bind="testBind" -->
      <t-input v-bind="testBind" />
    </t-form-item>
    <!-- <template
      v-for="(factoryItem, factoryItemIndex) in factoryList"
      :key="factoryItemIndex"
    >
      <FormItemFactory v-bind="factoryItem" />
    </template> -->
    <!-- <FormItemFactory v-bind="factoryList[0]" /> -->
  </BaseForm>

  <t-button @click="onClickReset" class="mt-10px">重置表单</t-button>
</template>

<script>
// import BaseForm from "@/components/BaseForm/index.vue";
// import FormItemFactory from "@/components/BaseForm/FormItemFactory.vue";
import { ref, reactive, onMounted, watchEffect } from "vue";

export default {
  setup(){
    
    const formData = {
      testInput: ref("testInput"),
      input1: "input1",
    };

    console.log(formData.value);

    watchEffect(() => {
      console.log("formData testInput ：", formData.testInput.value);
      // console.log("formData input1", formData.value.input1);
    });

    // setInterval(() => {
    //   formData.value.testInput += "1";
    // }, 3000);
    const testInputref = ref("testInput ref");

    const testBind = {
      modelValue: formData.testInput,
      // "onUpdate:value": (val) => {
      //   console.log(val);
      //   formData.value.testInput = val;
      // },
      "onUpdate:modelValue": (val) => {
        console.log("onUpdate:modelValue", val);
        formData.testInput.value = val;
      },
    };

    const onModelValueChange = (val) => {
      console.log("onModelValueChange", val);
      // formData.value.testInput = val;
    };

    const factoryList = [
      {
        type: "input",
        formItemProps: {
          label: "test1",
          name: "test1",
        },
        itemProps: {
          placeholder: "123",
          value: formData.input1,
          "onUpdate:modelValue": (val) => {
            console.log(val);
            formData.input1 = val;
          },
        },
      },
      // {
      //   type: "input",
      //   formItemProps: {
      //     label: "test2",
      //     name: "test1",
      //   },
      //   itemProps: {},
      // },
    ];

    const BaseFormRef = ref(null);
    const onClickReset = () => {
      console.log("BaseFormRef.value.formRef.reset");
      console.log(BaseFormRef.value);
      // BaseFormRef.value.formRef.reset();
      // BaseFormRef.value.reset();
      // formData.testInput.value = ''
    };
    onMounted(() => {});

    return {
      formData,
      testBind,
      onModelValueChange,
      factoryList,
      BaseFormRef,
      onClickReset,
    }

  }
}
</script>

<style scoped>
</style>
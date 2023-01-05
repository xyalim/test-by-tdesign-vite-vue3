<template>
  <t-tree :data="items" ref="treeRef" activable hover transition />
</template>

<script setup>
import { ref, onMounted } from "vue";
const items = [
  {
    label: "第一段",
    children: [
      {
        label: "第一段",
        children: [
          {
            label: "里面",
          },
        ],
      },
      {
        label: "第二段",
      },
    ],
  },
  {
    label: "第二段",
    children: [
      {
        label: "第一段",
      },
      {
        label: "第二段",
      },
    ],
  },
  {
    label: "第三段",
    children: [
      {
        label: "第一段",
      },
      {
        label: "第二段",
      },
    ],
  },
  {
    label: "第四段",
    children: [
      {
        label: "第一段",
      },
      {
        label: "第二段",
      },
    ],
  },
];

const treeRef = ref(null);

onMounted(() => {
  console.log("treeRef", treeRef);
  console.log(treeRef.value.getItems());
  const firstNode = treeRef.value.getItems()[3];
  console.log(treeRef.value.getPath(firstNode));
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

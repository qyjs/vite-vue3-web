<template>
<el-button @click="add">Add Item</el-button>
  <el-button @click="onDelete">Delete Item</el-button>
  <el-scrollbar max-height="400px">
    <p v-for="item in count" :key="item" class="scrollbar-demo-item">
      {{ item }}
    </p>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref, toRefs } from 'vue';


const count = ref(0);

const state = reactive({
  name: "1",
  value: "Ha"
})

const add = () => {
  count.value++
}
const onDelete = () => {
  if (count.value > 0) {
    count.value--
  }
}

const { name, value } = {...toRefs(state)}

onMounted(() => {
  console.log(value.value);
})


</script>

<style scoped>

</style>

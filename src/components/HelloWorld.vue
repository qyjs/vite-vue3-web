<script setup lang="ts">
import { computed, onBeforeUpdate, onMounted, ref, watchEffect } from 'vue';

// defineProps<{ msg: string }>()

// defineProps({
//   msg: String
// })

const props = defineProps({
  msg: String,
  default: () => "hahha"
})

const emit = defineEmits<{
  (e: 'click', msg: string): void
}>()

const clickThis = () => {
  emit("click", "hello")
}



const count = ref(null)
const count1 = ref(0)

onBeforeUpdate(() => {
})

onMounted(() => {
  console.log(count.value)
})


const plus = computed(() => {
  count1.value + 1
})

watchEffect(() => {
  console.log(count1.value);
}, {
})


</script>

<template>
<button  @click="clickThis">HAHAHA</button>
  <h1> {{plus}}</h1>
  <h1>{{ msg }}</h1>

  <input type="text" ref="count" value="doms">

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count1++">count is: {{ count1 }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}

.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>

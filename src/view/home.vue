<template>

{{data}}: {{option}}

<h1>{{name}}: {{value}}</h1>

  <div>
    <el-button @click="datas = !datas">Click Me</el-button>

    <div style="display: flex; margin-top: 20px; height: 100px">
      <transition name="el-fade-in-linear">
        <div v-show="datas" class="transition-box">.el-fade-in-linear</div>
      </transition>
      <transition name="el-fade-in">
        <div v-show="datas" class="transition-box">.el-fade-in</div>
      </transition>
    </div>
  </div>
  <img alt="Vue logo" src="@/assets/logo.png" />

  <!-- <component :is="HelloWorld" /> -->
  <HelloWorld @click="clickThis" msg="Hello Vue 3 + TypeScript + Vite" />
</template>
<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue';
import { reactive, ref, toRefs } from 'vue';

const data = ref(0);

console.log('====================================');
console.log(data.value);
console.log('====================================');

const objData = reactive({
  name: 'key',
  value: 'value'
})

const datas = ref(false);

const option = ref('');

const {name, value } = {...toRefs(objData)}

const handleOpen = (key: any, keyPath: any) => {
  console.log(key, keyPath)
}
const handleClose = (key: any, keyPath: any) => {
  console.log(key, keyPath)
}

const clickThis = (options: any) => {
  option.value = options;
}
</script>
<style scoped>
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

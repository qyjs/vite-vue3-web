<template>
  <el-container>
    <el-container>
      <el-header>
        <el-menu
        :default-active="activeIndex2"
        :router="true"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect"
      >
        <el-menu-item index="home">Home</el-menu-item>
        <el-menu-item index="hello">Hello</el-menu-item>
        <el-menu-item index="login">Login</el-menu-item>
        <el-menu-item index="orders">Orders</el-menu-item>
      </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs

import { ref } from 'vue';

const activeIndex2 = ref('home')
const handleSelect = (key: string, keyPath: any) => {
  console.log(key, keyPath)
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  padding: 0;
  margin: 0;
}

.el-menu {
  height: 100%;
}
.el-header {
  padding: 0px;
}
</style>

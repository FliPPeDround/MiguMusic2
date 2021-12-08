<template>
  <el-container id="app">
    <el-header height="5vh"><Header/></el-header>
    <el-container>
      <el-aside width="15.7vw"><Aside/></el-aside>
      <el-container>
        <el-main>
          <router-view/>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script setup>
import Header from './components/ContainerComps/Header.vue'
import Aside from './components/ContainerComps/Aside.vue'
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
:root {
  --el-border-radius-small: 8px;
  --el-color-primary: #E50078;
}
#app {
  width: 100vw;
  height: 100vh;
  background-color: #EEF4F9;
  .el-header {
    -webkit-app-region: drag;
  }
  .el-main {
    width: 100%;
    height: calc(100vh - 135px);
    background-color: #F1F6FA;
    overflow: scroll;
    overflow-x: hidden;
    &:hover {
      &::-webkit-scrollbar-thumb{
        background-color: rgba(150, 150, 150, .4);
      }
    }
    &::-webkit-scrollbar{
      width: 8px;
    }
    &::-webkit-scrollbar-track{
      display: none;
    }
    &::-webkit-scrollbar-thumb{
      border-radius: 8px;
      background-color: #F1F6FA;
    }
  }
  i,svg,path { 
    cursor: pointer !important;
  }
}
</style>

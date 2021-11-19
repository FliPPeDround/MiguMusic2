<template>
  <el-container id="app">
    <el-header height="5vh"><Header/></el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-main>
          <router-view/>
        </el-main>
        <el-footer class="qwe">Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script setup>
import Header from './components/ContainerComps/Header.vue'
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}
#app {
  background-color: #EEF4F9;
  .el-header {
    -webkit-app-region: drag;
  }
  .el-aside {
    background-color: rgba(255, 255, 255, 0.5);
  }
  .el-main {
    padding-bottom: 0;
    width: 100%;
    height: calc(100vh - 135px);
    background-color: #F1F6FA;
    overflow: scroll
    overflow-x hidden;
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
}
</style>

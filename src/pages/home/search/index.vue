<script setup lang="ts">
import {Search} from "@element-plus/icons-vue";
</script>

<template>
  <div class="search">
    <el-autocomplete
        clearable
        placeholder="请你输入行业的名称"
    />
    <el-button type="primary" size="default" :icon="Search">Search</el-button>
  </div>
</template>

<style scoped lang="scss">
.search {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;

  :deep(.el-input__wrapper) {
    width: 600px;
    margin-right: 10px;
  }
}
</style>
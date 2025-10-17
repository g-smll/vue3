<script setup lang="ts">
import level from '@/pages/home/level/index.vue'
import region from '@/pages/home/region/index.vue'
import card from '@/pages/home/card/index.vue'

import { ref } from 'vue'
let pageNo = ref<number>(1)
let pageSize = ref<number>(10)
</script>

<template>
  <el-row :gutter="20">
    <el-col :span="20">
      <level/>
      <region/>
      <div class="hospital">
        <card v-for="item in 10" :key="item"/>
      </div>
      <div class="pagination-container">
        <el-pagination
            v-model:current-page="pageNo"
            v-model:page-size="pageSize"
            :page-sizes="[10, 20, 30, 40]"
            :disabled="false"
            :background="true"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
        />
      </div>
    </el-col>
    <el-col :span="4">row 2</el-col>
  </el-row>
</template>

<style scoped lang="scss">
.hospital {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.pagination-container {
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
}
</style>
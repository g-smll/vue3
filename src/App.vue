<script setup lang="ts">
import request from '@/utils/request.ts'
import {onMounted} from "vue";
onMounted(async ()=>{
  try {
    const res = await request.get('/api/models')
    console.log('Health check response:', res)
  } catch (error) {
    console.error('Health check failed:', error)
  }
})
</script>

<template>
  <div class="container">
    <Header/>
    <div class="content">
      <router-view></router-view>
    </div>
    <Footer/>
  </div>

</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  .content {
    margin-top: 70px;
    margin-bottom: 20px;
    width: 1200px;
    min-height: 700px;
  }
}
</style>


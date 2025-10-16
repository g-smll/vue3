<script setup lang="ts">

</script>

<template>
  <div class="container">
    <Header />
    <div class="content">
      content
    </div>
    <div class="button">
      footer
    </div>
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
    width: 1200px;
    min-height: 700px;
  }
}
</style>


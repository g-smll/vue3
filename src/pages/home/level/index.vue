<script setup lang="ts">

</script>

<template>
  <div class="level">
    <h1>行业</h1>
    <div class="content">
      <span class="left">等级:</span>
      <ul class="hospital">
        <li class="active">全部</li>
        <li>三甲</li>
        <li>三乙</li>
        <li>三丙</li>
        <li>二甲</li>
        <li>二乙</li>
        <li>二丙</li>
        <li>一甲</li>
        <li>一乙</li>
        <li>一丙</li>
      </ul>
    </div>

  </div>
</template>

<style scoped lang="scss">
.level {
  color: #7f7f7f;

  h1 {
    font-weight: 900;
    margin: 10px 0px;
  }

  .content {
    display: flex;
    align-items: center;

    .left {
      margin-right: 10px;
    }

    .hospital {
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-right: 10px;

        &.active {
          color: #55a6fe;
        }
      }

      /* 鼠标进经过时变色 */
      li:hover {
        color: #55a6fe;
        /* 鼠标经过时出现小手 */
        cursor: pointer;
      }
    }
  }
}
</style>
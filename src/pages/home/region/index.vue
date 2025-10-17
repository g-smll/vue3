<script setup lang="ts">

</script>

<template>
  <div class="region">
    <div class="content">
      <span class="left">地区:</span>
      <ul class="district">
        <li class="active">全部</li>
        <li>东城区</li>
        <li>西城区</li>
        <li>朝阳区</li>
        <li>丰台区</li>
        <li>石景山区</li>
        <li>海淀区</li>
        <li>门头沟区</li>
        <li>房山区</li>
        <li>通州区</li>
        <li>顺义区</li>
        <li>昌平区</li>
        <li>大兴区</li>
        <li>怀柔区</li>
        <li>平谷区</li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.region {
  color: #7f7f7f;
  margin: 20px 0;

  .content {
    display: flex;
    align-items: center;
    white-space: nowrap;

    .left {
      margin-right: 10px;
      flex-shrink: 0;
    }

    .district {
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0;
      flex-wrap: nowrap;

      li {
        margin-right: 10px;
        white-space: nowrap;
        flex-shrink: 0;

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
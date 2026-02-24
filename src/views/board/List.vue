<script setup>
import BoardList from '@/components/BoardList.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const page = route.query.page
</script>

<template>
  <div v-if="page">
    <BoardList :page="page"></BoardList>
  </div>
  <div v-else>
    <div>페이지 번호 선택</div>
  </div>
  <div class="pageList">
    <a class="pageNumber" :href="`/board/list?page=1`">1</a>
    <a class="pageNumber" :href="`/board/list?page=2`">2</a>
    <a class="pageNumber" :href="`/board/list?page=3`">3</a>
    <a class="pageNumber" :href="`/board/list?page=4`">4</a>
    <a class="pageNumber" :href="`/board/list?page=5`">5</a>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
.pageList {
  display: flex;
}
.pageNumber {
  flex: 1;
}
</style>

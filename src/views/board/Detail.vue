<script setup>
import api from '@/api/board'
import { onMounted, watch, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const postId = route.query.postId

const details = ref([])
const isLoading = ref(true)

onMounted(async () => {
  isLoading.value = true
  details.value = await api.getDetail(postId)
  isLoading.value = false
})
</script>

<template>
  <div v-if="!isLoading" class="detailMain">
    <div class="titleArea">
      <div>제목 :</div>
      <div>{{ details.title }}</div>
    </div>
    <div class="contentArea">
      <div>내용 :</div>
      <div>{{ details.content }}</div>
    </div>
    <div class="authorArea">
      <div>작성자 :</div>
      <div>{{ details.author }}</div>
    </div>
  </div>
  <div v-else>로딩중</div>
  <div><button onclick="history.back()">뒤로가기</button></div>
</template>

<style scoped>
.detailMain {
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
}
.titleArea {
  flex: 1;
  display: flex;
}
.contentArea {
  flex: 5;
  padding: 10px;
}
.authorArea {
  flex: 1;
  display: flex;
}
</style>

<script setup>
import { onMounted, ref, watch } from 'vue'
import api from '@/api/board/index'

const props = defineProps({
  page: {
    type: [String, Number],
    default: '1',
  },
})

const boardList = ref([])
const isLoading = ref(true)

const loadList = async (pageNumber) => {
  return await api.getList(pageNumber)
}

onMounted(async () => {
  isLoading.value = true
  boardList.value = await loadList(props.page)
  isLoading.value = false
})
</script>

<template>
  <ul v-if="!isLoading">
    <li class="postListMain" v-for="item in boardList" :key="item.idx">
      <div class="title">
        <p>제목: {{ item.title }}</p>
      </div>
      <div class="author">
        <p>작성자 (ID) : {{ item.author }}</p>
      </div>
    </li>
  </ul>
  <div v-else>
    <p>게시글을 불러오는 중입니다...</p>
  </div>
</template>

<style scoped>
.postListMain {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
}
.title {
  width: 100px;
  font-weight: bold;
  color: #555;
  flex: 3;
}
.author {
  flex: 1;
  color: #333;
}
</style>

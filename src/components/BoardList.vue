<script setup>
import { onMounted, reactive, watch } from 'vue'
import api from '@/api/board/index'

const props = defineProps({
  page: {
    type: [String, Number],
    default: '1',
  },
})

const list = reactive({
  title: '',
  author: '',
})

const loadList = async (pageNumber) => {
  const res = await api.getList(pageNumber)
  list.title = res.title
  list.author = res.author
}

onMounted(() => {
  loadList(props.page)
})

watch(
  () => props.page,
  (newPage) => {
    loadList(newPage)
  },
)
</script>

<template>
  <div class="postListMain">
    <div class="title">
      <div>제목 :</div>

      <div>내용 여기에</div>
    </div>
    <div class="author">
      <div>작성자 (ID) :</div>
      <div>작성자 여기에</div>
    </div>
  </div>
</template>

<style scoped>
.postListMain {
  display: flex;
  flex-direction: row;
}
</style>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import PostEditor from '@/components/PostEditor.vue'
import api from '@/api/board/index'

const route = useRoute()
const postId = route.query.postId

const isLoading = ref(true)

const edittedPost = ref({
  title: '',
  content: '',
  author: '',
})

onMounted(async () => {
  isLoading.value = true
  edittedPost.value = await api.getDetail(postId)
  isLoading.value = false
})
</script>

<template>
  <div v-if="!isLoading" class="editmain">
    <div><b1>게시글 수정하기</b1></div>
    <PostEditor
      v-model:title="edittedPost.title"
      v-model:content="edittedPost.content"
      v-model:author="edittedPost.author"
    ></PostEditor>
    <div><button>수정하기</button></div>
  </div>
  <div v-else>불러오는중</div>
</template>

<style scoped>
.editmain {
  display: flex;
  flex-direction: column;
}
</style>

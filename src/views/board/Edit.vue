<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import PostEditor from '@/components/PostEditor.vue'
import api from '@/api/board/index'

const route = useRoute()
const postId = route.query.postId

const isLoading = ref(true)
const badRequest = ref(false)

const edittedPost = ref({
  title: '',
  content: '',
  author: '',
})

const edittingBody = ref({
  idx: postId,
  title: '',
  content: '',
  author: '',
})

const submit = async () => {
  edittingBody.value.idx = postId
  edittingBody.value.title = edittedPost.value.title
  edittingBody.value.content = edittedPost.value.content
  console.log(edittingBody.value)
  await api.editContent(edittingBody.value)
}

onMounted(async () => {
  isLoading.value = true
  try {
    edittedPost.value = await api.getDetail(postId)
    edittingBody.value.author = edittedPost.value.author
  } catch (error) {
    if (error) {
      badRequest.value = true
    }
  }
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
    <div><button @click="submit">수정하기</button></div>
  </div>
  <div v-else-if="badRequest">불러오는중</div>
  <div v-else>
    <div>잘못된 접근</div>
    <button onclick="history.back()">뒤로가기</button>
  </div>
</template>

<style scoped>
.editmain {
  display: flex;
  flex-direction: column;
}
</style>

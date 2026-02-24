<script setup>
import { reactive } from 'vue'
import PostEditor from '@/components/PostEditor.vue'

const edittedPost = reactive({
  title: '',
  content: '',
  author: '1',
})
</script>

<template>
  <div class="editmain">
    <div><b1>게시글 수정하기</b1></div>
    <PostEditor
      v-model:title="edittedPost.title"
      v-model:content="edittedPost.content"
      v-model:author="edittedPost.author"
    ></PostEditor>
    <div><button @click="submitPost" id="postBtn">수정하기</button></div>
  </div>
</template>

<style scoped>
.editmain {
  display: flex;
  flex-direction: column;
}
</style>

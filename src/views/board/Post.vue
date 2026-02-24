<script setup>
import { reactive } from 'vue'
import api from '@/api/board'
import PostEditor from '@/components/PostEditor.vue'

const postNewData = reactive({
  title: '',
  content: '',
  author: '1',
})

const submitPost = async () => {
  try {
    const res = await api.postContent({
      title: postNewData.title,
      content: postNewData.content,
      author: postNewData.author,
    })

    console.log(res)
    alert('전송완료', res.title)
  } catch (error) {
    console.error('전송 에러:', error)
    alert('작성에 실패했습니다.')
  }
}
</script>

<template>
  <div class="postmain">
    <div><b1>게시글 작성하기</b1></div>
    <PostEditor
      v-model:title="postNewData.title"
      v-model:content="postNewData.content"
      v-model:author="postNewData.author"
    ></PostEditor>
    <div><button @click="submitPost">작성하기</button></div>
  </div>
</template>

<style scoped>
.postmain {
  display: flex;
  flex-direction: column;
}
</style>

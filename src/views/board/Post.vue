<script setup>
import { reactive } from 'vue'
import api from '@/api/board'

const postData = reactive({
  title: '',
  content: '',
  author: '1',
})

const submitPost = async () => {
  try {
    const res = await api.postContent({
      title: postData.title,
      content: postData.content,
      author: postData.author,
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
    <div class="input-row">제목 : <input v-model="postData.title" type="text" /></div>
    <div class="input-row">내용 : <textarea v-model="postData.content"></textarea></div>
    <div class="input-row">작성자(ID) : <input v-model="postData.author" value="1" /></div>
    <div><button @click="submitPost" id="postBtn">작성하기</button></div>
  </div>
</template>

<style scoped>
.postman {
  display: flex;
  flex-direction: column;
}
</style>

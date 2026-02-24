<script setup>
const post = () => {
  const title = document.getElementById(title).value
  const contents = document.getElementById(contents).value
  const author = document.getElementById(author).value
}
</script>

<template>
  <div class="postmain">
    <div><b1>게시글 작성하기</b1></div>
    <div>제목 : <input id="title" /></div>
    <div>내용 : <textarea id="contents"></textarea></div>
    <div>작성자(ID) : <input id="author" value="1" /></div>
    <div><button id="postBtn">작성하기</button></div>
  </div>
</template>

<style scoped>
.postman {
  display: flex;
  flex-direction: column;
}
</style>

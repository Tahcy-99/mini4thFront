<script setup>
const title = defineModel('title')
const content = defineModel('content')
const author = defineModel('author')
</script>

<template>
  <div class="editor">
    <div class="input-row">제목 : <input v-model="title" type="text" /></div>
    <div class="input-row">내용 : <textarea v-model="content"></textarea></div>
    <div class="input-row">작성자(ID) : <input v-model="author" /></div>
  </div>
</template>

<style scoped>
.editor {
  display: flex;
  flex-direction: column;
}
</style>

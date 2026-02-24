<script setup>
const title = defineModel('title')
const content = defineModel('content')
const author = defineModel('author')
</script>

<template>
  <div class="editor">
    <div class="input-row">
      <div>제목 :</div>
      <input v-model="title" type="text" class="titleField" />
    </div>
    <div class="input-row">
      <div>내용 :</div>
      <textarea class="editorField" v-model="content"></textarea>
    </div>
    <div class="input-row">작성자(ID) : <input v-model="author" /></div>
  </div>
</template>

<style scoped>
.editor {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.titleField {
  width: 800px;
}
.editorField {
  width: 800px;
  height: 500px;
}
.input-row {
  flex: 1;
}
</style>

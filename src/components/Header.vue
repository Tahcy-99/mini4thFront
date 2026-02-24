<script setup></script>

<template>
  <div class="headerMain">
    <div class="headerLinks"><a href="/board/list?page=1">게시판</a></div>
    <div class="headerLinks"><a href="/user/login">로그인</a></div>
    <div class="headerLinks"><a href="/user/signin">회원가입</a></div>
  </div>
</template>

<style scoped>
.headerMain {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.headerLinks {
  flex: 1;
}
</style>

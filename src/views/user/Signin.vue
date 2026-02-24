<script setup>
import { reactive } from 'vue'
import api from '@/api/user'

const signinForm = reactive({
  email: '',
  password: '',
  name: '',
})

const submitForm = async () => {
  try {
    const res = await api.signin({
      email: signinForm.email,
      password: signinForm.password,
      name: signinForm.name,
    })
  } catch (e) {
    alert('회원가입 실패')
  }
}
</script>

<template>
  <div class="signinMain">
    <div class="inputField">
      <div>이메일 :</div>
      <div><input v-model="signinForm.email" /></div>
    </div>
    <div class="inputField">
      <div>비밀번호 :</div>
      <div><input v-model="signinForm.password" /></div>
    </div>
    <div class="inputField">
      <div>이름 :</div>
      <div><input v-model="signinForm.name" /></div>
    </div>
    <div class="buttonField"><button @click="submitForm">제출하기</button></div>
  </div>
</template>

<style scoped>
.sigininMain {
  display: flex;
  gap: px;
}
.inputField {
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex: 1;
}
</style>

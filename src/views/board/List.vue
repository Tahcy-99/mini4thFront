<script setup>
import BoardList from '@/components/BoardList.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const page = route.query.page
</script>

<template>
  <BoardList :page="page"></BoardList>
</template>

<style scoped></style>

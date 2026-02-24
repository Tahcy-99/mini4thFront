import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: 'board/',
          children: [
            {
              path: 'post',
              name: 'Post',
              component: () => import('../views/board/Post.vue'),
              meta: { title: '게시글 올리기' },
            },
            {
              path: 'list',
              name: 'List',
              component: () => import('../views/board/List.vue'),
              meta: { title: '게시글 목록' },
            },
            {
              path: 'detail',
              name: 'Detail',
              component: () => import('../views/board/Detail.vue'),
              meta: { title: '게시글 상세' },
            },
            {
              path: 'edit',
              name: 'Edit',
              component: () => import('../views/board/Edit.vue'),
              meta: { title: '게시글 수정' },
            },
          ],
        },
        {
          path: 'user/',
          children: [
            {
              path: 'signin',
              name: 'Signin',
              component: () => import('../views/user/Signin.vue'),
            },
          ],
        },
        {
          path: 'test/',
          children: [
            {
              path: 'editor',
              name: 'editor',
              component: () => import('../components/PostEditor.vue'),
            },
          ],
        },
      ],
    },
  ],
})

export default router

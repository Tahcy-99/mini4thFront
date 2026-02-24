import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
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
              meta: { title: '게시글 목록' },
            },
          ],
        },
      ],
    },
  ],
})

export default router

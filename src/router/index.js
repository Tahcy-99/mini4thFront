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
          ],
        },
      ],
    },
  ],
})

export default router

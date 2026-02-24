import { apiFetch } from '@/plugins/axiosinterceptor'

const postContent = async (req) => {
  try {
    const res = await apiFetch('/board/post', {
      method: 'POST',
      body: {
        title: req.title,
        content: req.content,
        author: req.author,
      },
    })

    return res
  } catch (e) {
    alert('에러', e.message)
  }
}
export default { postContent }

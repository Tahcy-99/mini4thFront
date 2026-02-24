import api, { apiFetch } from '@/plugins/axiosinterceptor'

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

const getList = async (page) => {
  try {
    const res = await apiFetch(`/board/list?page=${page}`)
    return res
  } catch (e) {
    alert('페이지 호출 실패')
  }
}

export default { postContent, getList }

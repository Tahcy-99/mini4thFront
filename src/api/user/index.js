import api, { apiFetch } from '@/plugins/axiosinterceptor'

const signin = async (req) => {
  try {
    const res = await apiFetch('/user/signin', {
      method: 'POST',
      body: {
        email: req.email,
        password: req.password,
        name: req.name,
      },
    })

    return res
  } catch (e) {
    alert('에러')
  }
}

export default { signin }

import { request } from './request'

export function checkLoginData(data) {
  return request({
    url: 'login',
    method: 'POST',
    data: {
      username: data.username,
      password: data.password,
    },
  })
}

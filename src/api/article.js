import request from '../utils/request'

export function queryArticle (keyword) {
  return request({
    url: `/article/` + keyword,
    method: 'get',
  })
}

export function queryAllArticle () {
  return request({
    url: `/article/all`,
    method: 'get',
  })
}
import request from '../utils/request'

export function search (garName) {
  return request({
    url: `/garbage/` + garName,
    method: 'get',
  })
}
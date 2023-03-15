import request from '../utils/request'

export function search (garName) {
  return request({
    url: `/garbage/` + garName,
    method: 'get',
  })
}

export function getCategoryInclude (garCategory) {
  return request({
    url: `/garbage/category/` + garCategory,
    method: 'get',
  })
}
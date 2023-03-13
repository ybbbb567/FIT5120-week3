import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Mock from 'mockjs'
import _orderby from 'lodash.orderby'


const {Random, mock} = Mock


const articles = new Array(5).fill(null).map(() => {
    return mock({
        id: Random.natural(),
        built_date: Random.date(),
        author: Random.cname()
    })
})

const mockAPI = {
    start() 
    {
        const mock = new MockAdapter(axios)

        mock.onGet('/api/articles').reply((config) => {
            let{ filter, sortBy, page = 0, size = 10 } = config.params || {}

            let mockArticles = [...articles]

            if(filter) {
                mockArticles = articles.filter((built_date)) => {
                    return Object.values()
                }
            }


        })
}
import React, { Component, createContext, useContext } from 'react';
// import { withRouter } from "react-router";
import Header from '../partials/Header';
import { getCategoryInclude } from '../api/garbage'
import { message, Button, Card, Space, Table, Select, Input } from 'antd'

const { Column } = Table;

// const state = useLocation()
// console.log(state)

class RankOfYellow extends Component {

  state = {
    loading: false,
    productList: [],
    category: '',
    pageNum: 1,
    pageSize: 5,
    total: 0,
    productType: "productName",
    productValue: "",
  }

  componentDidMount () {
    this.init();
  }


  init = () => {
    this.setState({ loading: true })
    getCategoryInclude('recycling').then(res => {
      if (res.result) {
        this.setState({
          productList: res.result,
          total: res.result.length,
          loading: false
        })
      } else {
        this.setState({
          loading: false
        })
      }
      console.log(res.result.length)
    })
  }



  render () {

    const { loading, productList, total, productValue, pageSize, productType } = this.state
    return (
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*  Site header */}
        <Header />

        {/*  Page content */}
        <main className="growgrow" color='#34fc16'>

          <section className="relative">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-gray-800">
                  <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                          <h2 className="h2 mb-4 text-black">Rank of Recycling</h2>
                        </div>
                  <Table bordered pagination={{
                    defaultPageSize: pageSize,
                    showQuickJumper: true,
                    showSizeChanger: true,
                    pageSizeOptions: [5, 10, 15, 20],
                    total,
                    /*
                    * 页码或 pageSize 改变的回调，参数是改变后的页码及每页条数
                     */
                    onChange: (pageNum, pageSize) => {
                      this.setState({ pageNum }, () => {
                        if (productValue !== "") {
                          console.log('1')
                        } else {
                          console.log('12')
                        }
                      })
                    }
                  }} loading={loading} dataSource={productList} rowKey="_id">
                    <Column align={"center"} title="Name" dataIndex="name" key="name" />
                    <Column align={"center"} title="Category" dataIndex="category" key="category" />
                    <Column align={"center"} title="Degradation Time(Years)" dataIndex="degradation" key="degradation" sorter={true} defaultSortOrder='ascend' />
                  </Table>
                </div>
              </div>

            </div>

          </section>
        </main >


      </div >
    );

  }
}

export default RankOfYellow;


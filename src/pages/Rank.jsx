import React, { Component, createContext, useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../partials/Header';
import { message, Button, Card, Space, Table, Select, Input } from 'antd'

const { Column } = Table;


class Rank extends Component {
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

    this.setState({
      loading: true,
    })
    console.log(this.state.category)
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
                    <Column align={"center"} title="Category" dataIndex="desc" key="desc" />
                    <Column align={"center"} title="Degradation Time(Years)" dataIndex="price" key="price" />
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

export default Rank;



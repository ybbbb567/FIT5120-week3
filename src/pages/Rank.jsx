import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import { message, Button, Card, Space, Table, Select, Input } from 'antd'
import Footer from '../partials/Footer';

const { Column } = Table;

class Rubbish extends Component {
  state = {
    loading: false,
    productList: [],
    pageNum: 1,
    pageSize: 5,
    total: 0,
    productType: "productName",
    productValue: "",
  }

  render () {
    const { loading, productList, total, productValue, pageSize, productType } = this.state
    return (
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*  Site header */}
        <Header />

        {/*  Page content */}
        <main className="growgrow" color='#34fc16'>
          {/*  Page illustration */}
          <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
            <PageIllustration />
          </div>

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

export default Rubbish;



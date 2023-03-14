import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import { message, Button, Card, Space, Table, Select, Input } from 'antd'
import { SaveOutlined } from "@ant-design/icons";

const { Column } = Table;

class Articles extends Component {
  state = {
    loading: false,
    productList: [],
    pageNum: 1,
    pageSize: 5,
    total: 0,
    productType: "productName",
    productValue: "",
  }

  // componentDidMount () {
  //   this.init();
  // }

  // //初始化
  // init = () => {
  //   this.setState({ loading: true })
  //   setTimeout(() => {
  //     const { pageNum, pageSize } = this.state;
  //     list(pageNum, pageSize).then(res => {
  //       this.setState({ productList: res.data.list, total: res.data.total })
  //       this.setState({ loading: false })
  //     })
  //   }, 500)
  // }

  //搜索
  // search = () => {
  //   setTimeout(() => {
  //     this.setState({ loading: true, productValue: this.productValueNode.state.value }, () => {
  //       const { pageSize, pageNum, productType, productValue } = this.state
  //       search(pageNum, pageSize, productType, productValue).then(res => {
  //         this.setState({ productList: res.data.list, total: res.data.total })
  //         this.setState({ loading: false })
  //       })
  //     })
  //   }, 500)
  // }
  // //上下架
  // handUpdateStatus = (product) => {
  //   let { status, _id } = product
  //   return () => {
  //     //判断如果是上架那么修改的状态就需要改成下架
  //     if (status === 1) {
  //       status = 2;
  //     } else if (status === 2) {
  //       status = 1;
  //     }
  //     updateStatus({ "productId": _id, "status": status }).then(res => {
  //       if (res.status === 0) {
  //         message.success("操作成功")
  //         this.init();
  //       }
  //     })
  //   }
  // }


  render () {
    const { loading, productList, total, productValue, pageSize, productType } = this.state
    const title = (
      <span>
        <Input ref={c => this.productValueNode = c} placeholder={"Type in the keyword"}
          style={{ width: 150, margin: '0 15px' }}></Input>
        <Button onClick={this.search} type="primary">搜索</Button>
      </span>
    )
    return (
      <div className="flex flex-col min-h-screen overflow-hidden">

        {/*  Site header */}
        <Header />
        <main className="growgrow" color='#34fc16'>
          <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
            <PageIllustration />
          </div>
          <div>
            <Card title={title}
              extra={<Button icon={<SaveOutlined />}
                onClick={() => this.props.history.push("/product/addUpdate?title=添加")}
                type="primary">添加商品</Button>}
              style={{ width: '50%', height: '100%', marginTop: '100px', marginLeft: '400px' }}>
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
                <Column align={"center"} title="Title" dataIndex="name" key="name" />
                <Column align={"center"} title="Author" dataIndex="desc" key="desc" />
                <Column align={"center"} title="Created Time" dataIndex="price" key="price" />
              </Table>
            </Card>
          </div>
        </main>




      </div>
    );
  }

}

export default Articles;
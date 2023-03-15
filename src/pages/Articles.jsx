import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { queryArticle, queryAllArticle } from '../api/article'
import Header from '../partials/Header';
import { Button, Card, Table, Input, Drawer, Divider } from 'antd'
import { SaveOutlined } from "@ant-design/icons";

const { Column } = Table;

class Articles extends Component {
  state = {
    open: false,
    keyword: '',
    loading: false,
    productList: [],
    pageNum: 1,
    pageSize: 5,
    total: 0,
    productType: "productName",
    productValue: "",
  }

  componentDidMount () {
    this.init();
  }

  //初始化
  init = () => {
    this.setState({ loading: true })
    queryAllArticle().then(res => {
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

  openDrawer = () => {
    this.setState({
      open: true,
    })
  }

  render () {
    const { open, loading, productList, total, productValue, pageSize, productType } = this.state
    const title = (
      <span>
        <Input ref={c => this.productValueNode = c} placeholder={"Type in the keyword"}
          style={{ width: 150, margin: '0 15px' }}></Input>
        <Button onClick={this.search} type="primary">search</Button>
      </span>
    )
    return (
      <div className="flex flex-col min-h-screen overflow-hidden">

        {/*  Site header */}
        <Header />
        <main className="growgrow" color='#34fc16'>
          <div>
            <Card title={title}
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
              }} loading={loading} dataSource={productList} rowKey="id">
                <Column onClick={this.openDrawer} align={"center"} title="Title" dataIndex="title" key="title" />
                <Column align={"center"} title="Author" dataIndex="author" key="author" />
                <Column align={"center"} title="Created Time" dataIndex="createdTime" key="createdTime" />
              </Table>
            </Card>
            <Drawer width={640} placement="right" closable={false} onClose={open} open={open}>
              <p className="site-description-item-profile-p" style={{ marginBottom: 24 }}>
                User Profile
              </p>
              <p className="site-description-item-profile-p">Personal</p>
              <Divider />
              <p className="site-description-item-profile-p">Company</p>
              <Divider />
              <p className="site-description-item-profile-p">Contacts</p>
            </Drawer>
          </div>
        </main>




      </div>
    );
  }

}

export default Articles;
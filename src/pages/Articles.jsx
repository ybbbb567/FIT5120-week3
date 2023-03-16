import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { queryArticle, queryAllArticle } from '../api/article'
import Header from '../partials/Header';
import { Button, Card, Table, Input, Drawer, Divider, Space } from 'antd'
import { SaveOutlined } from "@ant-design/icons";
import Footer from '../partials/Footer';

const { Column } = Table;

class Articles extends Component {
  state = {
    open: false,
    author: '',
    createdTime: '',
    content: '',
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
    console.log(this.state.open)
  }

  render () {
    const { open, loading, productList, total, productValue, pageSize, productType } = this.state
    const title = (
      <span>
        <Input ref={c => this.productValueNode = c} placeholder={"Type in the keyword"}
          style={{ width: 150, margin: '0 15px' }}></Input>
        <Button onClick={this.search}  type="primary" style={{ background: "#73E68C", borderColor: "yellow" }} >search</Button>
      </span>
    )
    return (
      <div className="flex flex-col min-h-screen overflow-hidden">
   <main className="grow">

   <Header />

<section className="relative">
  <div className="pt-32 pb-12 md:pt-40 md:pb-20">





        {/*  Site header */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="py-12 md:py-20 border-t border-gray-800">
        <div>
</div>
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <h2 className="h2 mb-3 text-black">You can find the article related to recycling here</h2>
</div>

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
                <Column align={"center"} title="Title" dataIndex="title" key="title" />
                <Column align={"center"} title="Author" dataIndex="author" key="author" />
                <Column align={"center"} title="Created Time" dataIndex="createdTime" key="createdTime" />
                <Column
                  align={"center"}
                  width="100px"
                  title="Action"
                  key="action"
                  render={(category, record) => (
                    <Space size="middle">
                      <Button type="link"
                        onClick={() => this.setState({
                          open: true,
                          title: category.title,
                          author: category.author,
                          createdTime: category.createdTime,
                          content: category.content
                        })
                        }>Detail</Button>
                    </Space>
                  )}
                />
              </Table>
            </Card>
            <Drawer width='50%' placement="right" title='Article Detail' closable={true} onClose={() => this.setState({
              open: false,
            })
            } open={open}>
              <p className="text-xl text-black grow" style={{ marginBottom: 24 }}>
                {this.state.title}
              </p>
              <p className="text-lg text-black grow">Author - Created Time</p>
              <p className="text-sm text-black grow">{this.state.author} -  {this.state.createdTime}</p>
              <Divider />
              <p className="text-lg text-black grow">Content</p>
            </Drawer>
          </div>
          </div>


        <Footer />
        </div>

</section>

</main>

      </div>
      
    );
  }

}

export default Articles;
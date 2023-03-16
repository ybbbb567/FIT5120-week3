import React, { Component, createContext, useContext } from 'react';
// import { withRouter } from "react-router";
import Header from '../partials/Header';
import { getCategoryInclude } from '../api/garbage'
import { message, Button, Card, Space, Table, Select, Input } from 'antd'

const { Column } = Table;

// const state = useLocation()
// console.log(state)

class RankOfGreen extends Component {

  state = {
    loading: false,
    productList: [],
    category: '',
    productValue: "",
  }

  componentDidMount () {
    this.init();
  }


  init = () => {
    this.setState({ loading: true })
    getCategoryInclude('Garden%20waste').then(res => {
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

    const { loading, productList } = this.state
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
                  <Table bordered loading={loading} dataSource={productList} rowKey="_id">
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

export default RankOfGreen;


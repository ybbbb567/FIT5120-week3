import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { message, Button, Card, Space, Table, Select, Input } from 'antd'
import { search } from '../api/garbage'
import Modal from '../utils/Modal';


class HeroHome extends Component {


  state = {
    state: {
      showElem: false
    },
    garName: '',
    category: '',
    inputContent: '',
    loading: false,
    productList: [],
    total: 0,
  }


  constructor(props) {
    super(props);
    this.state = {
      showElem: false
    }
  }

  onSearch = () => {
    this.setState({
      loading: true,
      garName: this.inputContent.input.value
    }, () => {
      const { garName } = this.state
      search(garName).then(res => {
        if (res.result) {
          this.setState({
            show: true,
            category: res.result.category,
            degradation: res.result.degradation,
            loading: false
          })
        } else {
          this.setState({
            show: false,
            loading: false
          })
        }
        console.log(res)
      })
    })
  }

  render () {
    //  const [videoModalOpen, setVideoModalOpen] = useState(false);
    const { Search } = Input;


    return (
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

          {/* Hero content */}
          <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center text-green-600 pb-12 md:pb-16">
              <h1 className="h1 mb-4" data-aos="fade-up">
                A smart man never denies Recycling
              </h1>

              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                <form className="w-full lg:w-1/2">
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                    <Input ref={c => this.inputContent = c} placeholder={"Input the keyword"} allowClear
                      style={{ width: '400px', margin: '0 15px' }}></Input>
                    <Button onClick={this.onSearch} type="primary" size='large'>Search</Button>
                  </div>
                </form>
              </div>

              <div style={{ display: this.state.show ? 'block' : 'none' }}>
                <div style={{ marginTop: '50px', textAlign: 'center' }}>
                  <label style={{ color: 'black' }}>{this.state.garName} is belong to <span style={{ color: 'lightgreen' }}>{this.state.category}</span></label>
                </div>

                <div style={{ background: 'lightgrey', marginTop: '50px', marginLeft: '100px', marginRight: '100px' }}>
                  <div style={{ color: 'black' }}>How to dispose of waste</div>
                  <div style={{ color: 'black', marginTop: '50px' }}>some content here</div>
                </div>

                <div style={{ background: 'lightgrey', marginTop: '50px', marginLeft: '100px', marginRight: '100px' }}>
                  <div style={{ color: 'black' }}>Time required for degradation</div>
                  <div style={{ color: 'black', marginTop: '50px' }}>{this.state.degradation}</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }


}

export default HeroHome;

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
    disposeWay: '',
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
    }, async () => {
      const { garName } = this.state
      await search(garName).then(res => {
        if (res.result) {
          this.setState({
            show: true,
            garName: res.result.name,
            category: res.result.category,
            degradation: res.result.degradation,
            disposeWay: res.result.disposeWay,
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



          <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">

          </div>


          {/* Hero content */}
          <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="text-xl mb-4 text-green-500 " data-aos="fade-up">
                Ready to know more recycling knowledge?             </h1>
              <p className="h1 text-black mb-8" data-aos="fade-up" data-aos-delay="200">
                A smart man never denies Recycling.
              </p>
              <h1 className="text-xl mb-4 text-green-500 " data-aos="fade-up">
                Click the search below to find out how to dispose the waste  </h1>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div data-aos="fade-up" data-aos-delay="400">
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                    <Input ref={c => this.inputContent = c} placeholder={"Input the keyword"} allowClear
                      style={{ width: '400px', margin: '0 15px' }}></Input>
                    <Button onClick={this.onSearch} type="primary" style={{ background: "#22c53e", borderColor: "yellow" }} >Search</Button>
                  </div>
                </div>
              </div>
              <Card
                hoverable
                style={{ marginTop: '50px', display: this.state.show ? 'block' : 'none' }}
                title="INFORMATION"  >
                <div style={{ marginTop: '50px', textAlign: 'center' }}>
                  <label style={{ color: 'black' }}>{this.state.garName} is belong to {this.state.category}</label>
                </div>

                <Card type='inner' style={{ background: 'lightgreen', marginTop: '50px', marginLeft: '100px', marginRight: '100px' }}>
                  <div style={{ color: 'black' }}>How to dispose of waste</div>
                  <div style={{ color: 'black', marginTop: '50px' }}>{this.state.disposeWay}</div>
                </Card>

                <Card style={{ background: 'lightgrey', marginTop: '50px', marginLeft: '100px', marginRight: '100px' }}>
                  <div style={{ color: 'black' }}>Time required for degradation</div>
                  <div style={{ color: 'black', marginTop: '50px' }}>{this.state.degradation}</div>
                </Card>
              </Card>
            </div>

            <div>
              <div className="relative flex justify-center items-center" data-aos="fade-up" data-aos-delay="200">
                <img className="mx-auto" src="/public/images/waste.jpg" width="1024" height="504" alt="Hero" />
              </div>


            </div>
          </div>
        </div>
      </section>
    );

  }
}
export default HeroHome;

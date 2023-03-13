import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'element-react';

import 'element-theme-default';

ReactDOM.render(<Button type="primary">Hello</Button>, document.getElementById('app'));

constructor(props) {
    super(props);
  
    this.state = {
      columns: [
        {
            type: 'index'
          },
        {
          label: "created_date",
          prop: "date",
          width: 180
        },
        {
          label: "author",
          prop: "name",
          width: 180,
          render: function(data){
            return <Tag>{data.name}</Tag>
          }
        }
      ],
      data: [{
        date: '2016-05-02',
        name: '王小虎'
      }, {
        date: '2016-05-04',
        name: '王小虎'
      }, {
        date: '2016-05-01',
        name: '王小虎'
      }, {
        date: '2016-05-03',
        name: '王小虎'
      }]
    }
  }
  
  render() {
    return (
      <Table
        style={{width: '100%'}}
        columns={this.state.columns}
        data={this.state.data}
        border={true}
      />
    )
  };

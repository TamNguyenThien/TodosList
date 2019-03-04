import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider, Query, Mutation } from 'react-apollo'
import "antd/dist/antd.css";
import UpdateTodo from './update'
import DeleteTodo from './delete'
import './App.css'
import gql from 'graphql-tag'
import { Table } from 'antd'
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
})
const getTodo = gql`
   {
    Todos{
      _id
      title
      content
    }
  }
`

class GetTodo extends React.Component {
  columns () {
    return [
      {
        title: 'ID',
        dataIndex: '_id',
        width: '30%'
      },
      {
        title: 'Tiêu Đề',
        dataIndex: 'title',
        editable: true
      },
      {
        title: 'Nội Dung',
        dataIndex: 'content',
        editable: true
      },
      {
        title: 'Hành Động',
        dataIndex: 'action',
        width: '20%',
        render: (text, record) => (
          <div>
            <DeleteTodo _id={record._id} />
            <UpdateTodo record={record} />
          </div>
       )
      }
    ] //= > <UpdateTodo record={record}
  }
  render () {
    return (
      <Query query={getTodo} >
        {({ loading, error, data }) => {
          if (loading) return 'loading'
          if (error) return `error!: ${error}`
          return (
            <div >
              <h1 style={{ marginLeft: 700 }}>Quản Lý Công Việc🚀 </h1>
              <div style={{ width: 1238, marginTop: 50, marginLeft: 300, fontSize: 18 }}>
                <Table
                  style={{ fontSize: 18 }}
                  bordered
                  dataSource={data.Todos}
                  columns={this.columns()}
                />
              </div>
              {/* <li style={{ marginLeft: 500, fontSize: 18 }}>
                {data.Todos.map((value, index) => {
                  console.log(data)
                  return (
                    <div key={index}>
                      <ul key={index}>{value.title} --- {value.content} </ul>
                      <UpdateTodo data={value} />
                      <DeleteTodo _id={value._id} />
                    </div>

                  )
                }
                )}
              </li> */}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default GetTodo

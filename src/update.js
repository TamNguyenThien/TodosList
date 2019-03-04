import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider, Query, Mutation } from 'react-apollo'
import "antd/dist/antd.css"

import './App.css'
import gql from 'graphql-tag'
import { Modal, Button } from 'antd'


const updateTodo = gql`
  mutation UpdateTodo($_id:ID!,$title:String!,$content: String!){
    updateTodo(_id:$_id,title:$title,content:$content){
      _id
      title
      content
    }
  }
`

class UpdateTodo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      content: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount () {
    // console.log(this.props.record)
    this.setState({
      _id: this.props._id,
      title: this.props.record.title,
      content: this.props.record.content
    })
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    return (
      <Mutation mutation={updateTodo} >
        {(updateTodo) => (

          <div style={{ height: 95 }}>
            <form style={{ margin: '10px 0 0 0', fontSize: 18, float: 'left' }} onSubmit={(e) => {
              e.preventDefault()
              updateTodo({
                variables: {
                  _id: this.props.record._id,
                  title: this.state.title,
                  content: this.state.content
                }
              })
            }}>
              {/* <input style={{ height: 30, width: 250 }} name='title' value={this.state.title} onChange={this.handleChange} />
              <input style={{ height: 30, width: 250 }} name='content' value={this.state.content} onChange={this.handleChange} /> */}
              <button style={{ height: 45, width: 100, marginLeft: 10 }} type='submit'>Update</button>
            </form>
          </div>
        )}
      </Mutation>
    )
  }
}

export default UpdateTodo

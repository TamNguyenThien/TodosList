import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider, Query, Mutation } from 'react-apollo'
import "antd/dist/antd.css";

import './App.css'
import gql from 'graphql-tag'
import { Modal, Button } from 'antd'

const GET_TODO = gql`
   {
    Todos{
      _id
      title
      content
    }
  }
`
const createTodo = gql`
mutation CreateTodo($title:String!,$content: String!){
  createTodo(title:$title, content:$content){
    _id
    title
    content
    }
  }
`


class CreateTodo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      content: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

 

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <Mutation mutation={createTodo}
      update={(cache, { data: { createTodo } }) => {
        const { Todos } = cache.readQuery({ query: GET_TODO })
        console.log(Todos, createTodo)
        cache.writeQuery({
          query: GET_TODO,
          data: { Todos: Todos.concat([createTodo])
          }
        })
      }
      }>
      {(createTodo) => (
        <div style={{position:'relative', top: 80, left: 735 }}>
          <Button style={{width:200, fontSize:22 }} type="submit" onClick={this.showModal}>
            ADD
          </Button>
          <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onOk={()=>{
              createTodo({
                variables: {
                  title: this.state.title,
                  content: this.state.content
                  
                }
              })
              this.setState({
                visible: false
              })
            }}
            onCancel={this.handleCancel}
          >
            <input style={{ margin: 10, height: 30, width: 110 }} name='title' value={this.state.title} onChange={this.handleChange} />
            <input style={{ height: 30, width: 110 }} name='content' value={this.state.content} onChange={this.handleChange} />
          </Modal>
          </div>
        )}
        </Mutation>
    )
      
  }
}

  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     title: '',
  //     content: ''
  //   }
  //   this.handleChange = this.handleChange.bind(this)
  // }
  // handleChange (e) {
  //   this.setState({ [e.target.name]: e.target.value })
  // }

//   render () {
//     console.log(this.props._id)
//     return (
      // <Mutation mutation={createTodo}
        // updateCache={(cache, { data: { createTodo } }) => {
        //   const { Todos } = cache.readQuery({ query: GET_TODO })
        //   cache.writeQuery({
        //     query: GET_TODO,
        //     data: { Todos: Todos.concat([createTodo])
        //     }
        //   })
        // }
        // }
      // >
      //   {(createTodo) => (

      //     <div>
            
      //       <form style={{ margin: '50 50', fontSize: 30 }} onSubmit={(e) => {
      //         e.preventDefault()
              // createTodo({
              //   variables: {
              //     title: this.state.title,
              //     content: this.state.content
                  
              //   }
              // })
      //       }} >
      //         <input style={{ marginLeft: 500, height: 30, width: 250 }} name='title' value={this.state.title} onChange={this.handleChange} />
      //         <input style={{ height: 30, width: 250 }} name='content' value={this.state.content} onChange={this.handleChange} />
      //         <button style={{ height: 45, width: 120 }} type='submit'>ADD</button>
      //       </form>
      //     </div>

      //   )}
        
      // </Mutation>
//     )
//   }
//}

export default CreateTodo

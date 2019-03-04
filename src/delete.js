import React, { Component } from 'react'
import { Mutation } from 'react-apollo'

import gql from 'graphql-tag'

const deleteTodo = gql`
  mutation DeleteTodo($_id: ID!){
    deleteTodo(_id: $_id)
  }
`

class DeleteTodo extends Component {
  render () {
    //console.log(this.props._id)
    return (
      <Mutation mutation={deleteTodo} >
        { (deleteTodo) => <button onClick={() => deleteTodo({ variables: { _id: this.props._id } })} style={{ height: 45, width: 100, marginLeft: 10 }}>Delete</button> }
      </Mutation>
    )
  }
}

export default DeleteTodo

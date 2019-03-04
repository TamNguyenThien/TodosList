import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import 'antd/dist/antd.css'
// import UpdateTodo from './update'
// import DeleteTodo from './delete'
import CreateTodo from './create'
import GetTodo from './getTodo'
import './App.css'
// import gql from 'graphql-tag'
// import { Modal, Button } from 'antd'
// import UpdateTodo from './Update'
// import { Table } from 'antd'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})
// const GET_TODO = gql`
//    {
//     Todos{
//       _id
//       title
//       content
//     }
//   }
// `

// const deleteTodo = gql`
//   mutation DeleteTodo($_id: ID!){
//     deleteTodo(_id: $_id)
//   }
// `

// const updateCache = (cache, { data: { createTodo } }) => {
//   const { Todos } = cache.readQuery({ query: GET_TODO })

//   cache.writeQuery({
//     query: GET_TODO,
//     data: {
//       Todos: Todos.concat(createTodo)
//     }
//   })
// }

// class CreateTodo extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       title: '',
//       content: ''
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }
//   handleChange (e) {
//     this.setState({ [e.target.name]: e.target.value })
//   }

//   render () {
//     return (
//       <Mutation mutation={createTodo}
//       >
//         {(createTodo) => (

//           <div>
            
//             <form style={{ margin: '50 50', fontSize: 30 }} onSubmit={(e) => {
//               e.preventDefault()
//               createTodo({
//                 variables: {
//                   title: this.state.title,
//                   content: this.state.content
                  
//                 }
//               })
//             }} >
//               <input style={{ marginLeft: 500, height: 30, width: 250 }} name='title' value={this.state.title} onChange={this.handleChange} />
//               <input style={{ height: 30, width: 250 }} name='content' value={this.state.content} onChange={this.handleChange} />
//               <button style={{ height: 45, width: 120 }} type='submit'>ADD</button>
//             </form>
//           </div>

//         )}
        
//       </Mutation>
//     )
//   }
// }
// class DeleteTodo extends React.Component{
//     render(){

//     }
// }
// class UpdateTodo extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       title: this.state.title,
//       content: this.state.content,
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }
//   handleChange = (e) => this.setState({ [e.target.name]: e.target.value })
//   state = { visible: false }
//   showModal = () => {
//     this.setState({
//       visible: true,
//     });
//   }
//   showModal = () => {
//     this.setState({
//       visible: true,
//     });
//   }
//   handleOk = (e) => {
//     console.log(e);
//     this.setState({
//       visible: false,
//     });
//   }

//   handleCancel = (e) => {
//     console.log(e);
//     this.setState({
//       visible: false,
//     });
//   }
//   render() {
//     return (
//       <Mutation mutation={Update_Todo}>
//         {(updateTodo) => {
//           return (
//             <div>

//               <Button type="primary" onClick={this.showModal}>
//                 Open Modal
//                </Button>

//               <Modal
//                 title="Update TODO"
//                 visible={this.state.visible}
//                 onOk={this.handleOk}
//                 onCancel={this.handleCancel}
//               >
//                 <form onSubmit={(e) => {
//                   e.preventDefault();
//                   updateTodo({
//                     variables: {
//                       title: this.state.title,
//                       content: this.state.content
//                     }
//                   })
//                 }}>
//                   <input name="title" value={this.state.title} onChange={this.handleChange} />
//                   <input name="content" value={this.state.content} onChange={this.handleChange} />

//                 </form>
//               </Modal>
//             </div>
//           )
//         }}
//       </Mutation>
//     )
//   }
// }



// class UpdateTodo extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       _id: '',
//       title: '',
//       content: ''
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }

//   componentDidMount () {
//     this.setState({
//       _id: this.props.data._id,
//       title: this.props.data.title,
//       content: this.props.data.content
//     })
//   }

//   handleChange (e) {
//     this.setState({ [e.target.name]: e.target.value })
//   }

//   render () {
//     return (
//       <Mutation mutation={updateTodo} >
//         {(updateTodo) => (

//           <div>
//             <form style={{ margin: '50 50', fontSize: 30 }} onSubmit={(e) => {
//               e.preventDefault()
//               updateTodo({
//                 variables: {
//                   _id: this.state._id,
//                   title: this.state.title,
//                   content: this.state.content
//                 }
//               })
//             }}>
//               <input style={{ height: 30, width: 250 }} name='title' value={this.state.title} onChange={this.handleChange} />
//               <input style={{ height: 30, width: 250 }} name='content' value={this.state.content} onChange={this.handleChange} />
//               <button style={{ height: 45, width: 120 }} type='submit'>Update</button>
//             </form>
//           </div>
//         )}
//       </Mutation>
//     )
//   }
// }

// class GetTodo extends React.Component {
//   // columns () {
//   //   return [
//   //     {
//   //       title: 'ID',
//   //       dataIndex: '_id',
//   //       width: '20%'
//   //     },
//   //     {
//   //       title: 'Tieu De',
//   //       dataIndex: 'title',
//   //       editable: true
//   //     },
//   //     {
//   //       title: 'Noi Dung',
//   //       dataIndex: 'content',
//   //       editable: true
//   //     },
//   //     {
//   //       title: 'Hanh Dong',
//   //       dataIndex: 'action',
//   //       width: '20%',
//   //       render: () =>
          
//   //     }
//   //   ]
//   // }
//   render () {
//     return (
//       <Query query={GET_TODO} >
//         {({ loading, error, data }) => {
//           if (loading) return 'loading'
//           if (error) return `error!: ${error}`
//           return (
//             <div>
//               {/* <h1 style={{ marginTop: 50, marginLeft: 700 }}>Quản Lý Công Việc🚀 </h1>
//               <div style={{ width: 1238, marginTop: 50, marginLeft: 300, fontSize: 18 }}>
//                 <Table
//                   style={{ fontSize: 18 }}
//                   bordered
//                   dataSource={data.Todos}
//                   columns={this.columns()}
//                 />
//               </div> */}
//               <li style={{ marginLeft: 500, fontSize: 18 }}>
//                 {data.Todos.map((value, index) => {
//                   console.log(data)
//                   return (
//                     <div key={index}>
//                       <ul key={index}>{value.title} --- {value.content} </ul>          
//                       <UpdateTodo data={value} />
//                       <DeleteTodo _id={value._id} />
//                     </div>
  
//                   )
//                 }
//                 )}
//               </li>
//             </div>
//           )
//         }}
//       </Query>
//     )
//   }
// }


// const ToDo = () => (
//   <Query query={getTodo} >
//     {({ loading, error, data }) => {
//       if (loading) return 'loading'
//       if (error) return `error!: ${error}`
//       return (
//         <li style={{ marginLeft: 475, fontSize: 18 }}>
//           {data.Todos.map((value, index) => (
//             <ul key={index}>{value.title} --- {value.content}</ul>
//           ))}
//         </li>
//       )
//     }}
//   </Query>
// )

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <CreateTodo /> 
      <GetTodo /> 
    </div>
  </ApolloProvider>
)

export default App

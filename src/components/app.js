import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.updateTodo = this.updateTodo.bind(this)
    this.createTodo = this.createTodo.bind(this)

    this.state = {
      todo: ''
    }
  }

  updateTodo(event) {
    this.setState({todo: event.target.value})
  }

  createTodo(event) {
    event.preventDefault()

    this.props.store.dispatch({
      type: 'ADD_TODO', 
      payload: {
        title: this.state.todo
      }
    })

    this.setState({todo: ''})
  }

  deleteTodo(key) {
    this.props.store.dispatch({
      type: 'DELETE_TODO',
      index: key
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.store.getState().map((todo, key) => 
            <li key={key}>
              {todo.title}
              <button onClick={() => {
                this.deleteTodo(key)
              }}>x</button>
            </li> 
          )}
        </ul>
        <form onSubmit={this.createTodo}>
          <input value={this.state.todo} onChange={this.updateTodo} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

module.exports = App
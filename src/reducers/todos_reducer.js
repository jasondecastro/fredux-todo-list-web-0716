export default function todosReducer(state = [], action) {
  switch(action.type) {
    case 'ADD_TODO':
      console.log('added todo')
      return [...state, action.payload]
    case 'DELETE_TODO':
      console.log('deleted todo')
      return (
        [
          ...state.slice(0, action.index),
          ...state.slice(action.index + 1, state.length)
        ]
      )
      return 'nothing'
    default:
      return state
  }
}
import produce from 'immer'

export default function beer(state = [], action) {
  console.log(state)
  switch (action.type) {
    case `@cart/ADD_BEER`:
      //  return [...state, action.beer]
      return produce(state, draft => {
        draft.push(action.beer)
      })

    default:
      return state
  }
}

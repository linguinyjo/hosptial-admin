import { SAVE_PATIENT, CLEAR_PATIENT } from '../actions/types'

export default function(state = null, action) {
  console.log(action)
  switch (action.type) {
    case SAVE_PATIENT:
       return action.payload || false
    case CLEAR_PATIENT:
      return null
    default:
      return state
  }
}
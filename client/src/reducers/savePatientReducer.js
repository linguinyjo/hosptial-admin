import { SAVE_PATIENT } from '../actions/types'

export default function(state = null, action) {
  switch (action.type) {
    case SAVE_PATIENT:
       return action.payload || false
    default:
      return state
  }
}
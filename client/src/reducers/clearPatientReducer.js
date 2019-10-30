import { CLEAR_PATIENT } from '../actions/types'

export default function(state = null, action) {
  switch (action.type) {
    case CLEAR_PATIENT:
      return null
    default:
      return state
  }
}
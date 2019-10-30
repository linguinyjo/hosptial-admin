import { combineReducers } from 'redux'
import savePatientReducer from './savePatientReducer'

//these are the keys that appear in the state object
export default combineReducers({
  currentPatient: savePatientReducer,
})
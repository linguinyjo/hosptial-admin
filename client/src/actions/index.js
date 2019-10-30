import { SAVE_PATIENT, CLEAR_PATIENT } from './types'

export const savePatient = (patient) => (dispatch) => {
  dispatch({ type: SAVE_PATIENT, payload: patient})
}

export const clearPatient = () => (dispatch) => {
  dispatch({ type: CLEAR_PATIENT, payload: null})
}
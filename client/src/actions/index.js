import { SAVE_PATIENT } from './types'

export const savePatient = (patient) => (dispatch) => {
  dispatch({ type: SAVE_PATIENT, payload: patient})
}
import {
  OPEN_MODAL,
  CLOSE_MODAL,
  ModalActionTypes,
} from "../actions/modalActions";

interface ModalState {
  modalA: boolean;
  modalB: boolean;
}

const initialState: ModalState = {
  modalA: false,
  modalB: false,
};

const modalReducer = (
  state = initialState,
  action: ModalActionTypes
): ModalState => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, [action.payload.modalName]: true };
    case CLOSE_MODAL:
      return { ...state, [action.payload.modalName]: false };
    default:
      return state;
  }
};

export default modalReducer;

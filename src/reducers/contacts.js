import {
  GET_CONTACTS,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_FAILURE,
  GET_CONTACT,
  GET_CONTACT_SUCCESS,
  GET_CONTACT_FAILURE,
  CREATE_CONTACT,
  CREATE_CONTACT_SUCCESS,
  CREATE_CONTACT_FAILURE,
  UPDATE_CONTACT,
  UPDATE_CONTACT_SUCCESS,
  UPDATE_CONTACT_FAILURE,
  DELETE_CONTACT,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_FAILURE,
  UPDATE_LIST_PAGE,
} from "./../actions/contacts";

const ITEMS_PER_PAGE = 25;

const initialState = {
  list: [],
  item: {},
  pagination: {
    currentPage: 1,
    itemsPerPage: ITEMS_PER_PAGE,
    totalPages: 1,
  },
  isLoading: false,
};

export default function contacts(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CONTACTS_SUCCESS:
      return {
        ...state,
        list: action.payload.data,
        pagination: {
          ...state.pagination,
          totalPages: Math.ceil(action.payload.data.length / ITEMS_PER_PAGE),
        },
        isLoading: false,
      };
    case GET_CONTACTS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case GET_CONTACT:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CONTACT_SUCCESS:
      return {
        ...state,
        item: action.payload.data,
        isLoading: false,
      };
    case GET_CONTACT_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case CREATE_CONTACT:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_CONTACT_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case CREATE_CONTACT_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_CONTACT_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case UPDATE_CONTACT_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case DELETE_CONTACT:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case DELETE_CONTACT_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case UPDATE_LIST_PAGE:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          currentPage: action.payload.data,
        },
      };
    default:
      return state;
  }
}

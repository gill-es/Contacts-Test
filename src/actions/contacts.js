import ContactsAPI from "./../features/contacts/api";

export const GET_CONTACTS = "GET_CONTACTS";
export const GET_CONTACTS_SUCCESS = "GET_CONTACTS_SUCCESS";
export const GET_CONTACTS_FAILURE = "GET_CONTACTS_FAILURE";
export const GET_CONTACT = "GET_CONTACT";
export const GET_CONTACT_SUCCESS = "GET_CONTACT_SUCCESS";
export const GET_CONTACT_FAILURE = "GET_CONTACT_FAILURE";
export const UPDATE_CONTACT = "UPDATE_CONTACT";
export const UPDATE_CONTACT_SUCCESS = "UPDATE_CONTACT_SUCCESS";
export const UPDATE_CONTACT_FAILURE = "UPDATE_CONTACT_FAILURE";
export const CREATE_CONTACT = "CREATE_CONTACT";
export const CREATE_CONTACT_SUCCESS = "CREATE_CONTACT_SUCCESS";
export const CREATE_CONTACT_FAILURE = "CREATE_CONTACT_FAILURE";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const DELETE_CONTACT_SUCCESS = "DELETE_CONTACT_SUCCESS";
export const DELETE_CONTACT_FAILURE = "DELETE_CONTACT_FAILURE";
export const UPDATE_LIST_PAGE = "UPDATE_LIST_PAGE";

const getContacts = () => {
  return (dispatch) => {
    dispatch({ type: GET_CONTACTS });
    return ContactsAPI.getContacts().then(
      (data) => dispatch({ type: GET_CONTACTS_SUCCESS, payload: data }),
      (err) => dispatch({ type: GET_CONTACTS_FAILURE, err })
    );
  };
};

const getContact = (id) => {
  return (dispatch) => {
    dispatch({ type: GET_CONTACT });
    return ContactsAPI.getContact({ id }).then(
      (data) => dispatch({ type: GET_CONTACT_SUCCESS, payload: data }),
      (err) => dispatch({ type: GET_CONTACT_FAILURE, err })
    );
  };
};

const createContact = (params, { onSuccess }) => {
  return (dispatch) => {
    dispatch({ type: CREATE_CONTACT });
    return ContactsAPI.createContact(params).then(
      (data) => {
        dispatch({ type: CREATE_CONTACT_SUCCESS, data });
        if (onSuccess) {
          onSuccess();
        }
      },
      (err) => dispatch({ type: CREATE_CONTACT_FAILURE, err })
    );
  };
};

const updateContact = (id, params, { onSuccess, onError }) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_CONTACT });
    return ContactsAPI.updateContact(id, params).then(
      (data) => {
        dispatch({ type: UPDATE_CONTACT_SUCCESS, payload: data });
        if (onSuccess) {
          onSuccess();
        }
      },
      (err) => dispatch({ type: UPDATE_CONTACT_FAILURE, err })
    );
  };
};

const deleteContact = (id, { onSuccess, onError }) => {
  return (dispatch) => {
    dispatch({ type: DELETE_CONTACT });
    return ContactsAPI.deleteContact(id).then(
      (data) => {
        dispatch({ type: DELETE_CONTACT_SUCCESS, payload: data });
        if (onSuccess) {
          onSuccess();
        }
      },
      (err) => dispatch({ type: DELETE_CONTACT_FAILURE, err })
    );
  };
};

const updateListPage = (data) => {
  return (dispatch) => {
    return dispatch({ type: UPDATE_LIST_PAGE, payload: data });
  };
};

export default {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
  updateListPage,
};

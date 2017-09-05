const project = require('../project.config');

import axios from 'axios';
import {setAuthorizationHeader} from 'utils/AuthService'
export const API_SERVER_URL = project.apiUrl;
export const API_URL = `${API_SERVER_URL}/api/v1/user/graphql`;

export function fetchSignIn(auth0UserUrl, data) {
    return axios.post("https://" + auth0UserUrl + "/oauth/token", data).then(resp => resp.data)
}

export function fetchSignUp(auth0UserUrl, data) {
    return axios.post("https://" + auth0UserUrl + "/dbconnections/signup", data, {validateStatus: (status) => {
        return status < 500;
    }})
}

export function fetchChangePassword(auth0UserUrl, data) {
    return axios.post("https://" + auth0UserUrl + "/dbconnections/change_password", data).then(resp => resp.data)
}

export function fetchCurrentUser() {
  if(!axios.defaults.headers.common["Authorization"]) {
    setAuthorizationHeader(localStorage.getItem('authTokenDiokan'))
  }
  
  return axios.post(API_URL, {
      query: '{ current_user () { id name email phone country city address_1 address_2 province zip_code status } }',
  });
}

export function fetchUpdateUser(user_fields) {
  for (var field in user_fields) {
    if (user_fields.hasOwnProperty(field)) {
      if(user_fields[field] === null) delete user_fields[field];
    }
  }

  delete user_fields.identification_url;

  return axios.post(API_URL, {
    query: 'mutation UpdateUser($form:UpdateUserInput!) { update_user (input:$form) { id } }',
    variables: { form: user_fields },
  });
}

export function fetchSessions(filters = {order: 0, search_string: ''}, count = 10, offset = 0) {
  return axios.post(API_URL, {
    query: 'query Session($pagination:PaginationInput!, $filters:PhotoSessionFiltersInput!) { user_photo_sessions (pagination:$pagination, filters:$filters) { results { id date photo_start photo_end location session_photos { id }} total_count }}',
    variables: {
      pagination: { count: count, offset: offset },
      filters
    }
  }).then(resp => resp.data);
}

export function fetchSession(id) {
  if(!axios.defaults.headers.common["Authorization"]) {
    setAuthorizationHeader(localStorage.getItem('authTokenDiokan'))
  }
  
  return axios.post(API_URL, {
    query: 'query Session($id:ID!) { user_photo_session (id:$id) { id date photo_start photo_end location session_photos { id } }}',
    variables: { id }
  }).then(resp => resp.data);
}

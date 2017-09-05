import {
  API_URL,
  fetchSessions,
  fetchSession
} from 'api';
export const GET_SESSION = 'GET_SESSION';
export const GET_SESSIONS = 'GET_SESSIONS';
export const REMOVE_SELECTED_SESSION = 'REMOVE_SELECTED_SESSION';
export const SET_FILTERS = 'SET_FILTERS';
export const FETCHING_SESSIONS = 'FETCHING_SESSIONS';
export const CREATE_SESSION = 'CREATE_SESSION';

const initialState = {
  sessions: [],
  selectedSession: {},
  fetchingSessions: false,
  filters: {order: 0, search_string: ''},
  user: {}
};

export const getSession = (id) => {
  return (dispatch, getState) => {
    let state = getState();
    return new Promise((resolve, reject) => {
      return fetchSession(id).then(res => {
        let session = res.data.user_photo_session;
        let session_photos = session.session_photos.map(photo => ({
          id: photo.id,
          src: photo.file_url,
          srcset: [`${photo.largesize_url} 1920w`, `${photo.mediumsize_url} 1280w`],
          thumbnail: photo.thumbnail_url,
          small_size: photo.smallsize_url,
          medium_size: photo.mediumsize_url,
          large_size: photo.largesize_url
        }));

        dispatch({
          type: GET_SESSION,
          data: {user_photo_session: Object.assign({}, session, {session_photos})}
        });

        resolve(res);
      }).catch((err) => reject(err))
    })
  };
}

export const getSessions = () => {
  return (dispatch, getState) => {
    let state = getState();
    return new Promise((resolve, reject) => {
      if (state.sessions.fetchingSessions) {
        return resolve();
      }

      dispatch({
        type: FETCHING_SESSIONS,
        data: true
      });

      return fetchSessions(state.sessions.filters).then(res => {
        dispatch({
          type: GET_SESSIONS,
          data: res.data
        });

        dispatch({
          type: FETCHING_SESSIONS,
          data: false
        });
        resolve(res);
      }).catch((err) => reject(err))
    })
  };
}

export const setFilters = (filters) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      dispatch({
        type: SET_FILTERS,
        data: filters
      });
      resolve();
    })
  }
}

export const removeSelectedSession = () => {
  return (dispatch, getState) => {
    dispatch({
      type: REMOVE_SELECTED_SESSION
    });
  };
}

const ACTION_HANDLERS = {
  [GET_SESSIONS]: (state, action) => {
    return ({
      ...state,
      sessions: action.data.user_photo_sessions.results,
      total_count: action.data.user_photo_sessions.total_count,
    })
  },
  [GET_SESSION]: (state, action) => {
    return ({
      ...state,
      selectedSession: action.data.user_photo_session
    })
  },
  [REMOVE_SELECTED_SESSION]: (state, action) => {
    return ({
      ...state,
      selectedSession: {}
    })
  },
  [SET_FILTERS]: (state, action) => {
    let filters = {...state.filters, ...action.data};
    return ({
      ...state,
      filters
    })
  },
  [FETCHING_SESSIONS]: (state, action) => {
    return ({
      ...state,
      fetchingSessions: action.data
    })
  }
}

export default function sessionsReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
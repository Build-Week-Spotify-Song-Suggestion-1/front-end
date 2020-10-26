import * as actions from "../action/actions";

const initialState = {
  name: "",
  popularity: 0,
  isFetching: "",
  error: "",
  songListData: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {


    //REGISTER

    // case actions.REGISTER_START:
    //   console.log("Register start: reducer");

    //   return {
    //     ...state,
    //     user: action.payload,
    //     isFetching: true,
    //   };

    // case actions.REGISTER_SUCCESSFUL:
    //   console.log("Register successful: reducer");

    //   return {
    //     ...state,
    //     user: {
    //       ...state.user,
    //       id: action.payload.id,
    //       username: action.payload.username,
    //       password: action.payload.password,
    //       email: action.payload.email,
    //     },
    //     isFetching: false,
    //   };

    //LOGIN

    // case actions.LOGIN_START:
    //   console.log("Login start: reducer");

    //   return {
    //     ...state,
    //     user: action.payload,
    //     isFetching: true,
    //   };

    // case actions.LOGIN_SUCCESSFUL:
    //   console.log("Login successful: reducer");

    //   return {
    //     ...state,
    //     user: {
    //       ...state.user,
    //       message: action.payload.message,
    //       token: action.payload.token,
    //       user: {
    //         username: action.payload.user.username,
    //         id: action.payload.user.id,
    //       },
    //       isFetching: false,
    //     },
    //   };


      //GET USER LISTINGS

    case actions.ARTIST_SEARCH:
      console.log("Fetching artist");

      return {
        ...state,
        isFetching: true,
      };

    case actions.ARTIST_FETCHED:
      console.log("Fetched artist");

      return {
        ...state,
        name: action.payload.name,
        popularity: action.payload.popularity,
      };

    case actions.ARTIST_FAILED_TO_FETCH:
      console.log("Failed to fetch artist: reducer: ");

      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };


      case 'ADD_SONG_START':
        return {
            ...state,
            songListData: [...state.songListData, action.payload]
        }

      

    default:
      return state;
  }
};
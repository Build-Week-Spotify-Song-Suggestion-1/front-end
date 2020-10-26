// import { axiosWithAuth } from "../util/axiosWithAuth";
import axios from "axios";

// export const REGISTER_START = "REGISTER_START";
// export const REGISTER_SUCCESSFUL = "REGISTER_SUCCESSFUL";

// export const LOGIN_START = "LOGIN_START";
// export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";

// export const GET_ARTIST = "GET_ARTIST";

export const ARTIST_SEARCH = "ARTIST_SEARCH";
export const ARTIST_FETCHED = "ARTIST_FETCHED";
export const ARTIST_FAILED_TO_FETCH = "ARTIST_FAILED_TO_FETCH";

export const ADD_SONG_START = "ADD_SONG_START";
// export const ADD_SONG_SUCCESSFUL = "ADD_SONG_SUCCESSFUL";

export const EDIT_SONG_START = "EDIT_SONG_START";
export const EDIT_SONG_SUCCESSFUL = "EDIT_SONG_SUCCESSFUL";

export const DELETE_SONG = "DELETE_SONG";




//ACTION CREATOR : GET ARTIST INFO

export const getArtist = (id) => (dispatch) => {
  console.log("Get artist info async action creator: ", dispatch);

  console.log("GET ARTIST ID: ", id);

  dispatch({ type: ARTIST_SEARCH });

axios
    .get("https://spotify-dspt7-bw.herokuapp.com/artistinfo?input_artist=Taylor+Swift")
    .then((res) => {
      console.log("Action: getArtist: ", res.data);
      dispatch({
        type: ARTIST_FETCHED,
        payload: res.data,
      });


    })
    .catch((err) => {
      console.log("Action: FAIL to getArtist: ", err);
      dispatch({
        type: ARTIST_FAILED_TO_FETCH,
        payload: err.message,
      });
    });
};

//ACTION CREATOR : ADD A SONG 

export const addSong = (newSong, id) => {
  return dispatch => (
      axios
      .post(`https://spotify-dspt7-bw.herokuapp.com/getsongs?input_artist=${id}`, newSong)
      .then( res => {
        console.log("HERE", res.data)
          dispatch({
              type: 'ADD_SONG_START',
              payload: res.data
          })
      })
  )
}

          // ACTION CREATOR : DELETE A SONG

// export const deleteSong = (id) => (dispatch) => {
//   console.log("Action creator deleteSong: ", dispatch);

//   dispatch({ type: DELETE_SONG });


//   axios
//     .delete(``)
//     .then((res) => {

//     })
//     .catch((err) => {
//     });
// };
import { combineReducers } from "redux";

//TYPES
import {
  SongViewModel,
  SongActionViewModel,
  SongActionTypeViewModel
} from "../Components/Types/SongTypes";

//REDUCERS 
export const songsReducer = () => {
  return [
    {
      songName: "No Scrubs",
      id: 1,
      duration: '3:55'
    } as SongViewModel,
    {
      songName: "Ride The Lightning",
      id: 2,
      duration: '2:47'
    } as SongViewModel,
    {
      songName: "Ready Or Not!",
      id: 3,
      duration: '4:55'
    } as SongViewModel,
    {
      songName: "I Want it That Way",
      id: 4,
      duration: '4:55'
    } as SongViewModel,
  ]
}

export const selectedSongReducer = (selectedSong:SongViewModel, action:SongActionViewModel) => {
  if(action.type === SongActionTypeViewModel.SONG_SELECTED) {
    return action.payload
  }
  return selectedSong
}

export default combineReducers({songs:songsReducer, selectedSong:selectedSongReducer},)
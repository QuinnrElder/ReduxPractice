import {
  SongViewModel,
  SongActionViewModel, 
  SongActionTypeViewModel
} from "../Components/Types/SongTypes"

export const selectSong = (song:SongViewModel) => {
  //return an action
  return {
    type: SongActionTypeViewModel.SONG_SELECTED ,
    payload: song
  } as SongActionViewModel
}
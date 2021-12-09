export type SongViewModel = {
  songName: string,
  id: number,
  duration: string
}

export type SongActionViewModel = {
  type: SongActionTypeViewModel,
  payload: SongViewModel
}

export enum SongActionTypeViewModel {
  'SONG_SELECTED'
}

export type StateViewModel = {
  songs: SongActionViewModel[]
  selectedSong: SongActionViewModel
}
import React, { FunctionComponent } from "react";

//COMPONENTS
import SongList from '../SongList/SongList'
type AppProps = {}

export const App: FunctionComponent<AppProps> = ({ }) => {
  return (
    <div>
      <SongList />
    </div>
  )
};


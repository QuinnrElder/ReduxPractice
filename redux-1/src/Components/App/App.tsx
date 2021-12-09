import React, { FunctionComponent } from "react";

//COMPONENTS
import SongList from '../SongList/SongList'
type AppProps = {}

export const App: FunctionComponent<AppProps> = ({ }) => {
  return (
    <div className="ui container grid">
      <div className="row">
        <div className="column eight wide">
          <SongList />
        </div>
      </div>
    </div>
  )
};


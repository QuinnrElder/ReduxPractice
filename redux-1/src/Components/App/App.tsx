import React, { FunctionComponent } from "react";

//COMPONENTS
import SongList from '../SongList/SongList'
import SongDetails from "../SongDetails/SongDetails"

export const App: FunctionComponent = () => {
  return (
    <div className="ui container grid">
      <div className="row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetails />
        </div>
      </div>
    </div>
  )
};


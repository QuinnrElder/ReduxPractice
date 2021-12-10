import React, { Fragment, FunctionComponent } from 'react';

//REACT_REDUX
import { connect } from 'react-redux'

//TYPES
import { StateViewModel } from '../../Types/SongTypes';

//ACTIONS



export const SongDetails: FunctionComponent = ({ selectedSong }: any) => {

  if (!selectedSong) {
    return <div data-testid="Default-Message">Please Select a Song!</div>
  }

  return (
    <Fragment>
      <h3>Details For:</h3>
      <div style={{ display: "flex" }} className="" data-testid="Songs-Detail-Container">
        Title of Song: {selectedSong.songName}
        <br />
        Duration: {selectedSong.duration}
      </div >
    </Fragment>
  )

}

const mapStateToProps = (state: StateViewModel) => {
  return { selectedSong: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetails)
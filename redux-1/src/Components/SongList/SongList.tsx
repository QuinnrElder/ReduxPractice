import React, { Fragment, FunctionComponent, useState } from 'react';

//REACT_REDUX
import { StateViewModel } from '../../Types/SongTypes';

//TYPES
import { connect } from 'react-redux'

type SongListProps = {

}


const SongList: FunctionComponent<SongListProps> = ({ }) => {


  return (
    <Fragment>
      <div>Song List</div>
    </Fragment>
  );
}

const mapStateToProps = (state: StateViewModel) => {
  return {
    songs: state.songs
  }
}

export default connect(mapStateToProps)(SongList)
import React, { Fragment, Component } from 'react';

//REACT_REDUX
import { connect } from 'react-redux'

//TYPES
import { SongViewModel, StateViewModel } from '../../Types/SongTypes';


class SongList extends Component {

  renderSongList(props: any) {
    return props.songs.map((song: SongViewModel) => {
      return (
        <div key={song.id} data-testid="Song-Wrapper" className="item">
          <div className="right floated content">
            <button data-testid="Select-Song-Button" className="ui button primary">Select</button>
          </div>
          <div className="content" data-testid="Song-Name">
            {song.songName}
          </div>
        </div>
      )
    })
  }

  render() {

    let props = this.props
    return (
      <div className="ui divided list" data-testid="Songs-Container">
        {this.renderSongList(props)}
      </div >
    );
  }
}

const mapStateToProps = (state: StateViewModel) => {
  return {
    songs: state.songs
  }
}

export default connect(mapStateToProps)(SongList)
import React, { Fragment, Component } from 'react';

//REACT_REDUX
import { connect } from 'react-redux'

//TYPES
import { SongViewModel, StateViewModel } from '../../Types/SongTypes';

//ACTIONS
import { selectSong } from "../../Actions/index"


class SongList extends Component {

  renderSongList(props: any) {
    return props.songs.map((song: SongViewModel) => {
      return (
        <div key={song.id} data-testid="Song-Wrapper" className="item">
          <div className="right floated content" data-testid="Button-Wrapper">
            <button onClick={() => props.selectSong(song)} data-testid={`Select-Song-Button-${song.id}`} className="ui button primary">Select</button>
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
      <Fragment>
        <div className="ui divided list" data-testid="Songs-Container">
          {this.renderSongList(props)}
        </div >
      </Fragment>
    );
  }
}

const mapStateToProps = (state: StateViewModel) => {
  return state
}

export default connect(mapStateToProps, { selectSong })(SongList)
// import React, {Component} from 'react';
// import store from '../store';
// import Playlist from '../components/Playlist';
// import {toggleSong} from '../action-creators/player';

// class PlaylistContainer extends Component {

//   constructor() {
//     super();
//     this.state = store.getState();
//   }

//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState());
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   toggle(song, list) {
//     store.dispatch(toggleSong(song, list));
//   }

//   render() {
//     return (
//       <Playlist
//         {...this.state.player}
//         selectedPlaylist={this.state.playlists.selected}
//         toggleOne={this.toggle}
//       />
//     );
//   }

// }

// export default PlaylistContainer;

import {connect} from 'react-redux'
import Stations from '../components/Stations'
import Playlist from '../components/Playlist';
import {toggleSong} from '../action-creators/player'


function mapStateToProps (state) {
  return {
    selectedPlaylist: state.playlists.selected,
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    toggleOne: function(song, list) {
      dispatch(toggleSong(song, list));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist)
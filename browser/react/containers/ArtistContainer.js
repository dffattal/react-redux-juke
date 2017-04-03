// import React, {Component} from 'react';
// import store from '../store';
// import Artist from '../components/Artist';

// import {toggleSong} from '../action-creators/player';

// class ArtistContainer extends Component {

//   constructor() {
//     super();
//     this.state = store.getState();
//   }

//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState());
//       console.log(store.getState());
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
//       <Artist
//         {...this.state.player}
//         selectedArtist={this.state.artists.selected}
//         toggleOne={this.toggle}
//         children={this.props.children} />
//     );
//   }

// }

// export default ArtistContainer;

// 
import {connect} from 'react-redux'
import Artist from '../components/Artist';
import {toggleSong} from '../action-creators/player';

function mapStateToProps (state) {
  console.log("STATE: ", state);
  return {
    selectedArtist: state.artists.selected,
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

export default connect(mapStateToProps, mapDispatchToProps)(Artist)

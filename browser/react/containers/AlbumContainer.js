import {connect} from 'react-redux'
import Stations from '../components/Stations'
import Album from '../components/Album';
import {toggleSong} from '../action-creators/player'


function mapStateToProps (state) {
  return {
    selectedAlbum: state.albums.selected,
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

export default connect(mapStateToProps, mapDispatchToProps)(Album)

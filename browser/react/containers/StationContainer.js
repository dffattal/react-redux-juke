import {connect} from 'react-redux'
import Station from '../components/Station'
import {convertSong} from '../utils'
import {toggleSong} from '../action-creators/player'

function mapStateToProps (state, ownProps) {
  let songsByGenre = state.songs.filter(song => {
    return song.genre === ownProps.params.genreName;
  });
  songsByGenre = songsByGenre.map(song => convertSong(song));
  return {
    songsByGenre,
    genreName: ownProps.params.genreName,
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    toggleOne: function(song, list) {
      dispatch(toggleSong(song, list));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Station)

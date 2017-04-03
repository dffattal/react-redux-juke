import {connect} from 'react-redux'
import Stations from '../components/Stations'

function mapStateToProps (state) {
  function addStations (songs) {
    var stationsOutput = {}
    songs.forEach(song => {
      if (stationsOutput[song.genre]) stationsOutput[song.genre].push(song)
      else stationsOutput[song.genre] = [song]
    })
    return stationsOutput
  }

  return {
    stations: addStations(state.songs)
  }
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Stations)

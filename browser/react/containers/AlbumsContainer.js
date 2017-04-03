 import {connect} from 'react-redux'
import Stations from '../components/Stations'
import Albums from '../components/Albums';

function mapStateToProps (state) {
  const albums = state.albums.list;
  return {
    albums
  }
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums)

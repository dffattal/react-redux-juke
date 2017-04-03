import {connect} from 'react-redux'
import Artists from '../components/Artists';


function mapStateToProps (state) {
  console.log("GOT HERE");
  return {
    artists: state.artists.list,
  }
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Artists)
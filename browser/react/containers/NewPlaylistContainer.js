import React from 'react';
import NewPlaylist from '../components/NewPlaylist';
import {connect} from 'react-redux';
import Stations from '../components/Stations';
import Album from '../components/Album';
import {toggleSong} from '../action-creators/player';
import {addNewPlaylist} from '../action-creators/playlists';


class localNewPlayList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      dirty: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.props.handleSubmit.bind(this);
  }

  handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      inputValue: value,
      dirty: true
    });
  }

  render() {

    const dirty = this.state.dirty;
    const inputValue = this.state.inputValue;
    let warning = '';

    if (!inputValue && dirty) warning = 'You must enter a name';
    else if (inputValue.length > 16) warning = 'Name must be less than 16 characters';

    return (
      <NewPlaylist
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        inputValue={inputValue}
        warning={warning}
      />
    );
  }

}


function mapStateToProps (state) {
  return {};
}

function mapDispatchToProps (dispatch) {
  return {
    handleSubmit: function(evt) {
      evt.preventDefault();
      dispatch(addNewPlaylist(this.state.inputValue));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(localNewPlayList)


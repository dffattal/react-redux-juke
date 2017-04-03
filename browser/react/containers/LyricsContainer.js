import React, {Component} from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics';
import {connect} from 'react-redux';

import {searchLyrics} from '../action-creators/lyrics';

class localLyricsContainer extends Component {

  constructor(props) {

    super(props);

    this.state = Object.assign({
      artistQuery: '',
      songQuery: ''
    }, props);

    this.handleSubmit = this.props.handleSubmit.bind(this);
    this.handleArtistInput = this.handleArtistInput.bind(this);
    this.handleSongInput = this.handleSongInput.bind(this);

  }

  // componentDidMount() {
  //   this.unsubscribe = store.subscribe(() => {
  //     this.setState(store.getState());
  //   });
  // }

  handleArtistInput(artist) {
    this.setState({ artistQuery: artist });
  }

  handleSongInput(song) {
    this.setState({ songQuery: song });
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   if (this.state.artistQuery && this.state.songQuery) {
  //     store.dispatch(searchLyrics(this.state.artistQuery, this.state.songQuery));
  //   }
  // }

  // componentWillUnmount() {
  //   this.unsubscribe();
  // }

  render() {
    console.log('state in render', this.state)
    return (
      <Lyrics
        {...this.state}
        handleChange={this.handleChange}
        setArtist={this.handleArtistInput}
        setSong={this.handleSongInput}
        handleSubmit={this.handleSubmit} />
    );
  }

}

function mapStateToProps (state) {
  console.log(state)
  return {
    lyrics: state.lyrics
  };
}

function mapDispatchToProps (dispatch) {
  return {
    handleSubmit: function (e) {
      e.preventDefault()
      if (this.state.artistQuery && this.state.songQuery) {
        dispatch(searchLyrics(this.state.artistQuery, this.state.songQuery));
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(localLyricsContainer);


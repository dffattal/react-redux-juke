import React from 'react';
import Songs from './Songs'

export default function Station (props) {

  return (
    <div>
      <h3> {props.genre} Station </h3>
      <Songs
      songs={props.songs}
      currentSong={props.currentSong}
      isPlaying={props.isPlaying}
      toggle={props.toggleOne} />
    </div>
  )
}

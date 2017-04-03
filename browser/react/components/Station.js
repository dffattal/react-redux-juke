import React from 'react';
import Songs from './Songs'

export default function Station (props) {
  return (
    <div>
      <h3> {props.genreName} Station </h3>
      <Songs
      songs={props.songsByGenre}
      currentSong={props.currentSong}
      isPlaying={props.isPlaying}
      toggleOne={props.toggleOne} />
    </div>
  )
}

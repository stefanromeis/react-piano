// @flow
import * as React from "react";
import "./Key.css";

type Props = {
  note: string,
  color: string,
  audio: any,
  getKey: string => {}
};

type State = {
  audio: HTMLAudioElement
};

class Key extends React.Component<Props, State> {
  audio: HTMLAudioElement = new Audio("/sounds/" + this.props.note + ".mp3");

  playNote = () => {
    this.audio.play();
    this.props.getKey(this.props.note);
  };

  stopNote = () => {
    this.audio.pause();
    this.audio.currentTime = 0;
  };

  render() {
    return (
      <div
        className={this.props.color}
        id={this.props.note}
        onMouseDown={this.playNote}
        onMouseUp={this.stopNote}
        onMouseLeave={this.stopNote}
      />
    );
  }
}

export default Key;

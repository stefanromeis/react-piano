//@flow
import * as React from "react";
import "./Playlist.css";
import play from "../../icons/play.svg";

type Props = {
  songs: Array<Object>,
  handleNameChange: (Event, number) => {},
  isRecording: boolean
};

class Playlist extends React.Component<Props> {
  componentWillReceiveProps(nextProps: Props) {
    if (this.props.songs !== nextProps.songs) {
      if (nextProps.songs)
        localStorage.setItem("songs", JSON.stringify(nextProps.songs));
    }
  }

  play(notes: Array<string>) {
    for (let i = 0; i < notes.length; i++) {
      setTimeout(function timer() {
        let audio = new Audio("/sounds/" + notes[i] + ".mp3");
        audio.play();
      }, i * 300);
    }
  }

  render() {
    const { songs, handleNameChange, isRecording } = this.props;

    return (
      <div className="playlist">
        <h4 className="playlistHeader">Recordings:</h4>
        {songs && songs.length > 0
          ? songs.map((song, i) => {
              return (
                <div key={i} className="song">
                  <span className="songNumber">
                    {i + 1}.
                  </span>
                  <input
                    type="text"
                    defaultValue={song.name}
                    onChange={event => handleNameChange(event, i)}
                  />
                  <button onClick={() => this.play(song.notes)}>
                    <img src={play} alt="play" />
                  </button>
                </div>
              );
            })
          : <div className="helpText">
              You have no songs yet! Press the record button to start a new
              track.
            </div>}
        {isRecording && "Recording..."}
      </div>
    );
  }
}

export default Playlist;

//@flow
import React, { Component } from "react";
import logo from "./logo.svg";
import record from "./icons/record.svg";
import stop from "./icons/stop.svg";
import "./App.css";
import { Piano, Playlist } from "Components";

type State = {
  isRecording: boolean,
  songs: any,
  song: {
    name: string,
    notes: Array<string>
  }
};

class App extends Component<{}, State> {
  state = {
    isRecording: false,
    songs: [],
    song: {
      name: "New Song",
      notes: []
    }
  };

  componentDidMount() {
    const storedSongs = localStorage.getItem("songs");
    const parsedSongs = storedSongs ? JSON.parse(storedSongs) : [];
    this.setState({ songs: parsedSongs });
  }

  handleRecording = () => {
    const { isRecording, songs, song } = this.state;
    if (isRecording) {
      const songList = [...songs, song];
      this.setState({
        songs: songList,
        isRecording: false
      });
      return;
    }

    this.setState({
      isRecording: true,
      song: {
        name: song.name,
        notes: []
      }
    });
  };

  getKey = (key: string) => {
    const { isRecording, song } = this.state;
    if (isRecording) {
      this.setState({
        song: {
          name: song.name,
          notes: [...song.notes, key]
        }
      });
    }
  };

  handleNameChange = (event: Event, i: number) => {
    const { songs } = this.state;

    if (event.target instanceof HTMLInputElement) {
      const updatedSong = {
        notes: songs[i].notes,
        name: event.target.value
      };

      let songList = [...songs];
      songList[i] = updatedSong;

      this.setState({ songs: songList });
    }
  };

  render() {
    const { songs, isRecording } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Piano</h1>
        </header>
        <div className="App-record-bar">
          <button onClick={this.handleRecording}>
            {!isRecording
              ? <div className="recordButton">
                  <img src={record} alt="record" /> Record
                </div>
              : <div className="stopButton">
                  <img src={stop} alt="stop" /> Stop Record
                </div>}
          </button>
        </div>
        <Piano getKey={this.getKey} />
        <Playlist
          songs={songs}
          handleNameChange={this.handleNameChange}
          isRecording={isRecording}
        />
      </div>
    );
  }
}

export default App;

import React from 'react'

import './App.css';

import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import SearchBar from '../SearchBar/SearchBar'



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { searchResults: [{ name: "MiddleChild", artist: "J Cole", album: "New Era", id: 1 }, { name: "We Paid", artist: "42 Dugg, Lil Baby", album: "Smoke", id: 2 }], playlistName: "Boogey", playlistTracks: [{ name: "Bestfriends", artist: "Doja Cat, Saweetie", album: "Cow", id: 4 }] }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName= this.updatePlaylistName.bind(this);
  }

  updatePlaylistName(name){
    this.setState({playlistName:name})
  }

  addTrack(track){
    let tracks = this.state.playlistTracks;
    if(tracks.find(savedTrack=>savedTrack.id===track.id)){
      return;
    }
    else{
      tracks.push(track)
      this.setState({playlistTracks:tracks})
    }

  }

  removeTrack(track){
    let tracks = this.state.playlistTracks;
    let index= tracks.findIndex(savedTrack=>savedTrack.id===track.id)
    tracks.splice(index,1);

    this.setState({playlistTracks:tracks})


  }

  render() {
    


    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />

          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} />



          </div>
        </div>
      </div>
    );
  }
}

export default App;

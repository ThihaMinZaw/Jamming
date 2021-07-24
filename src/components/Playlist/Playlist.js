import React from 'react';
import ReactDOM from 'react-dom';

import 'Playlist.css'


export class Playlist extends React.Component{
    render(){
        return(<div className="Playlist">
        <input defaultValue={'New Playlist'} />
      
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>)
    }
}
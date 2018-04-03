import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {albums: albumData };
  }

  render() {
    return (
      <section className='library'>
        {
          this.state.albums.map( (album, index) =>
            <Link to={`/album/${album.slug}`} key={index} style={{ textDecoration: 'none', color: '#e50073', float: 'left'}}>
              <img src={album.albumCover} alt={album.title} className= "albumCoverImage" />
              <div id= "textGroups">
                <div id= "albumTitle">{album.title}</div>
                <div id= "albumArtist">{album.artist}</div>
                <div id= "songLength">{album.songs.length} songs</div>
              </div>
            </Link>
          )
        }
      </section>
    );
  }
}

export default Library;

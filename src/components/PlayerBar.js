import React, { Component } from 'react';

class PlayerBar extends Component {

  render() {
    return (
      <section className="player-bar">
        <table id="playerBarTable">
          <tbody>
            <tr id="currentlyPlaying">
              <td></td>
              <td>{this.props.currentSong.title}</td>
              <td></td>
            </tr>
            <tr id="buttons">
              <td>
                <button id="previous" onClick={this.props.handlePrevClick}>
                  <span className="ion-skip-backward"></span>
                </button>
              </td>
              <td>
                <button id="play-pause" onClick={this.props.handleSongClick} >
                  <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
                </button>
              </td>
              <td>
                <button id="next">
                  <span className="ion-skip-forward" onClick={this.props.handleNextClick}></span>
                </button>
              </td>
            </tr>
            <tr id="time-control">
              <td className="current-time">{this.props.formatTime}</td>
              <td>
                <input
                type="range"
                className="seek-bar"
                value={(this.props.currentTime / this.props.duration) || 0 }
                max="1"
                min="0"
                step="0.01"
                onChange={this.props.handleTimeChange}
                />
              </td>
              <td className="total-time">{this.props.formatDuration} </td>
            </tr>
            <tr id="volume-control">
              <td className="ion-volume-low"></td>
              <td><input
                type="range"
                className="seek-bar"
                value= {this.props.currentVolume}
                max="1"
                min="0"
                step="0.01"
                onChange={this.props.handleVolumeChange}
                />
              </td>
              <td className="ion-volume-high"></td>
            </tr>
          </tbody>
        </table>
      </section>

    );
  }
}

export default PlayerBar;

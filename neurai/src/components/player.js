import React, { useEffect, useRef, useState } from "react";
import axios from 'axios';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import {onAuthStateChanged } from "firebase/auth";
import { redirect } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {logOut} from "../components/auth"
import ".././css/player.css"
import YouTube from "react-youtube";
import 'https://kit.fontawesome.com/5f323a312e.js'


const YOUTUBE_API_KEY = 'AIzaSyB5j2iJXos8PMadR-Mh_U4VEQ3f5WGndqc';
const auth = getAuth();

export function MusicPlayer () {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const playerRef = useRef(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("Logged in")
    } else {
      navigate('/sign-up');
    }
  });

  const logOut = async () => {
    try {

        await signOut(auth)
    } catch (err) {
        console.error(err)
    }
}

function handleSearch(event) {
  
  
  event.preventDefault();
  axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&key=${YOUTUBE_API_KEY}`)
  .then(response => {
    setSearchResults(response.data.items);
  })
  .catch(error => {
    console.log(error);
  });
}

function handleSelectVideo(videoId) {
  setSelectedVideo(videoId);
}
const onPlayerReady = (event) => {
  playerRef.current = event.target; // save the player reference
  event.target.playVideo(); // start playing the video
};

// handle the player state change event
const onPlayerStateChange = (event) => {
  // do something based on the player state
  // see https://developers.google.com/youtube/iframe_api_reference#Events
};

// handle the custom play/pause button click
const onPlayPauseClick = () => {
  if (playerRef.current) {
    // check if the player reference is available
    const playerState = playerRef.current.getPlayerState(); // get the current player state
    if (playerState === 1) {
      // if the video is playing, pause it
      playerRef.current.pauseVideo();
    } else if (playerState === 2) {
      // if the video is paused, play it
      playerRef.current.playVideo();
    }
  }
};

const opts = {
  playerVars: {
    disablekb: 1,
    controls: 4,
    autoplay: 1,
    loop: 1,
  },
  width: 240,
  height: 160
};
return (
    <div>
      
      <button type="button" className="end-call-btn" onClick={onPlayPauseClick}>
        Play/Pause
      </button>
        <div className="conatiner">
      <form onSubmit={handleSearch}>

        <input className="searchint" type="text" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />
        <button className="searchbtn" type="submit">Search</button>
      </form>
      <button className="logout" onClick={logOut}>Log out</button>
        </div>
      <div className="cont">
        {searchResults.map(result => (
          
          <div className="card" key={result.id.videoId} onClick={() => handleSelectVideo(result.id.videoId)}>
            <img className="cardimg" src={result.snippet.thumbnails.default.url} alt={result.snippet.title} />
            <div className="cardtitle">{result.snippet.title}</div>
            <i class="fa-solid fa-star"></i>
          </div>
        ))}
      </div>
      {selectedVideo && (
        <div className="videoplayer">
          <YouTube 
        videoId={selectedVideo}
        className="videoplayer"
        opts={opts}
        onReady={onPlayerReady}
        onStateChange={onPlayerStateChange}
      />
        </div>
      )}
      
    </div>
  );
}


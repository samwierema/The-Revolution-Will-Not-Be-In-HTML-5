$(document).ready(function() {
  revolution = Revolution();
  revolution.init();
});

var Revolution = function() {
  var that = {};

  that.init = function() {
    that.preload_music();
    that.preload_mp3s();
  }

  that.preload_music = function() {
	  var audio = document.createElement('audio');
    audio.src = 'audio/the-revolution-will-not-be-televized.mp3';
    audio.preload = 'auto';
    audio.play();
  }

  that.preload_mp3s = function() {
    // iterates the lyrics and creates preloaded audio tags with the google tts urls
  }

  return that;
};


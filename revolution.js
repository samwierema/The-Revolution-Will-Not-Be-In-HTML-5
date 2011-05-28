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
	  that.audio = document.createElement('audio');
    that.audio.src = 'audio/the-revolution-will-not-be-televized.mp3';
    that.audio.preload = 'auto';
    that.audio.play();
  }

  that.preload_mp3s = function() {
    // iterates the lyrics and creates preloaded audio tags with the google tts urls
  }

  return that;
};


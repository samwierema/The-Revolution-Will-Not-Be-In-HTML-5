$(document).ready(function() {
  revolution = Revolution();
  revolution.init();
});

var Revolution = function() {
  var that = {};

  that.init = function() {
    that.preload_music();
    that.load_lyrics();
    that.preload_mp3s();
  }

  that.preload_music = function() {
    // load mp3 on an audio tag
  }

  that.preload_lyrics = function() {
    // create an array with the lyrics
  }

  that.preload_mp3s = function() {
    // iterates the lyrics and creates preloaded audio tags with the google tts urls
  }

  return that;
}


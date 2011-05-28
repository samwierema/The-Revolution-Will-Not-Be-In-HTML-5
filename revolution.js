$(document).ready(function() {
  revolution = Revolution();
  revolution.init();
});

var Revolution = function() {
  var that = {};

  that.init = function() {
    that.preload_music();
    that.preload_mp3s();
  };

  that.preload_music = function() {
	  that.audio = document.createElement('audio');
    that.audio.src = 'audio/the-revolution-will-not-be-televized.mp3';
    that.audio.load();
    $(that.audio).bind('play', that.fire_audio_phrases);
    
    that.audio.controls = 'controls';
    $('#player').append(that.audio);
    that.audio.play();
  };

  that.preload_mp3s = function() {
    // iterates the lyrics and creates preloaded audio tags with the google tts urls
    that.audio_phrases = [];
    for(var i = 0; i < lyrics.length; i++) {
      var timestamp = lyrics[i][0];
      var phrase = lyrics[i][1]
      var a = document.createElement('audio');
      a.src = 'http://translate.google.com/translate_tts?tl=en&q=' + escape(phrase);
      a.load();
      that.audio_phrases.push([timestamp, phrase, a]);
    }
  };


  that.fire_audio_phrases = function() { 
    var timestamp = 0;
    for(var i = 0; i < that.audio_phrases.length; i++) {
      setTimeout("revolution.fire_phrase(" + i + ")", timestamp += that.audio_phrases[i][0]);
    }
  };

  that.fire_phrase = function(position) {
    var bundle = that.audio_phrases[position];
    $('#phrase').text(bundle[1]);
    bundle[2].play();
  }


  return that;
};


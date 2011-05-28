$(document).ready(function() {
  revolution = Revolution();
  revolution.init();
});

var Revolution = function() {
  var that = {};

  that.init = function() {
    that.preload_images();
    that.preload_music();
    that.preload_mp3s();
  }
  
  that.preload_images = function() {
    $.getJSON('http://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=53fc02bccf3f3dfd4c135ed595f688e0&gallery_id=25241199-72157626699534155&format=json&nojsoncallback=1', function(data) {
      that.images = [];
      $.each(data.photos.photo, function(key, photo) {
        that.images.push('http://farm' + photo.farm  + '.static.flickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_b.jpg');
      });
      var i = 0;
      var interval_id = window.setInterval(function() {
        $('html').css('background','url(' + that.images[i] + ') no-repeat center center fixed');
        if((i+1) == that.images.length) {
          window.clearInterval(interval_id);
        }
        i++;
      }, 2000);
    });
  }

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
    // bundle[2].play();
  }


  return that;
};


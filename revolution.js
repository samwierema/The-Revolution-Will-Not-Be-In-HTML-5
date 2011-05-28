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
    that.audio.preload = 'auto';
    that.audio.play();
  }

  that.preload_mp3s = function() {
    // iterates the lyrics and creates preloaded audio tags with the google tts urls
  }

  return that;
};


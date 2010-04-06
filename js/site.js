soundManager.url = '/swf/';

$(document).ready(function() {
  var backgroundImage = $(document.body).attr('data-background-image');
  if (backgroundImage) { $.backstretch(backgroundImage, { hideUntilReady: true, speed: 400 }); }
})
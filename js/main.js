$(document).ready(function(){
  $("body,html").scrollTop(0,0);
  var continuousElements = $('.waypoint')
  for (var i = 0; i < continuousElements.length; i++) {
    new Waypoint({
      element: continuousElements[i],
      handler: function(direction) {
        $(this.element).addClass("show");
      },
      continuous: true,
      offset: 600
    });
  }


  var fadeStart = 100,
  fadeUntil = 300, 
  fading = $('.fading');
  container = $('.header-container');

  $(window).bind('scroll', function(){
    var offset = $(document).scrollTop(),
    opacity = 0;

    if( offset <= fadeStart ){
      opacity = 1;
    } else if( offset <= fadeUntil ){
      opacity = 1 - offset/fadeUntil;
    }

    fading.css('opacity',opacity);

    if(opacity === 0){
      container.css('display', 'none');
    } else{
      container.css('display', 'block');
    }
  });


});
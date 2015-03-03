'use strict';

$(document).ready(function() {

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $('.modal-footer button').click(function() {
  var button = $(this);

  if (button.attr('data-dismiss') !== 'modal') {
    var inputs = $('form input');
    var title = $('.modal-title');
    var progress = $('.progress');
    var progressBar = $('.progress-bar');

    inputs.attr('disabled', 'disabled');
    button.hide();
    progress.show();
    progressBar.animate({width : '100%'}, 100);
    progress.delay(1000).fadeOut(600);

    button.text('Close').removeClass('btn-primary').addClass('btn-success').blur().delay(1600).fadeIn(function() {
          title.text('Email Sent!');
          button.attr('data-dismiss', 'modal');
        });
  }
});

  $('#myModal').on('hidden.bs.modal', function() {
    var inputs = $('form input');
    var title = $('.modal-title');
    var progressBar = $('.progress-bar');
    var button = $('.modal-footer button');

    inputs.removeAttr('disabled');
    title.text('Log in');
    progressBar.css({'width' : '0%'});

    button.removeClass('btn-success').addClass('btn-primary').text('Ok').removeAttr('data-dismiss');
  });
});

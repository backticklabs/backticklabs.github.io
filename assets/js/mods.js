//Contact toggler
$('.tabbed-links li').on('click', function(){

  var target = $(this).attr('data-contact');

  $('.contact-block').addClass('is-hidden');
  $('#' + target).removeClass('is-hidden');

  $('.tabbed-links li.is-active').removeClass('is-active');
  $(this).addClass('is-active');
})
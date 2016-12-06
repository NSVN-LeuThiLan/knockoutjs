//tab
$(function() {
  var lBtn = $('#leftBtn')
  var rBtn = $('#rightBtn')
  lBtn.click('click', function() {
    if ($(this).next('.symptom-inner').hasClass('clicked')) {
        $(this).next('.symptom-inner').removeClass('clicked');
      } else {
        $(this).next('.symptom-inner').addClass('clicked');
        rBtn.next('.symptom-inner').removeClass('clicked');
      }
      $('.accordion ul').slideUp();
  })
  rBtn.click('click', function() {
    if ($(this).next('.symptom-inner').hasClass('clicked')) {
        $(this).next('.symptom-inner').removeClass('clicked');
      } else {
        $(this).next('.symptom-inner').addClass('clicked');
        lBtn.next('.symptom-inner').removeClass('clicked');
      }
  });
  //アコーディオン
	$(".accordion p").click(function(){
    $(this).next("ul").slideToggle();
    $(this).children("span").toggleClass("open");
	});
	$(".close").click(function(){
		$("ul li ul li").slideUp();
	});
});


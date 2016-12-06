
//スクロール
$(function(){
   $('a[href^=#]').click(function() {
      var speed = 400;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});


//スクロールが100に達したらボタン表示
$(function() {
	var topBtn = $('.pagetop');
	topBtn.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
});


// $(function() {
//   $('#symptom > div > a').click(function(){
//      $("+ div",this).toggle();
//      return false;
//   });
//   $("#symptom > div")
//   .mouseover(function(){
//     $("> div",this).show();
//   })
//   .mouseout(function(){
//     $("> div",this).hide();
//   });

//   //アコーディオン
// $(".accordion p").click(function(){
//     $(this).next("ul").slideToggle();
//     $(this).children("span").toggleClass("open");
// 	});
// 	$(".close").click(function(){
// 		$("ul li ul li").slideUp();
// 	});
// });
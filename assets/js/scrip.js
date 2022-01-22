
//imagenes en 3D
$(function(){

  $(".filter-button").click(function(){
    var value = $(this).attr('data-filter');

    if(value == "all")
    {
        //$('.filter').removeClass('hidden');
        $('.filter').show();
    }
    else
    {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
        $(".filter").not('.'+value).hide();
        $('.filter').filter('.'+value).show();

    }
});

if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

  });
  //filtro-fin
$(function(){
  var articles = $('article > .item-wrapper'),
  lightingRgb = '255,255,255';

articles.mousemove(function(e) {
var current = $(this),
    x = current.width() - e.offsetX * 2,
    y = current.height() - e.offsetY * 2,
    rx = -x / 30,
    ry = y / 24,
    deg = Math.atan2(y, x) * (180 / Math.PI) + 45;
current.css({"transform":"scale(1.05) rotateY("+rx+"deg) rotateX("+ry+"deg)"});
$('figure > .lighting',this).css('background','linear-gradient('+deg+'deg, rgba('+lightingRgb+',0.32) 0%, rgba('+lightingRgb+',0) 100%)');
});

articles.on({
'mouseenter':function() {
  var current = $(this);
  current.addClass('enter ease').removeClass("leave");
  setTimeout(function(){
    current.removeClass('ease');
  }, 280);
},
'mouseleave':function() {
  var current = $(this);
  current.css({"transform":"rotate(0)"});
  current.removeClass('enter').addClass("leave");
  $('figure > .lighting',this).removeAttr('style');
}}
);
});
//slider
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
})

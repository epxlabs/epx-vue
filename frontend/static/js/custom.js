
$(document).mousemove(function(event) {
  currentMousePos = event.target
});

// var clickEvents = function(){
//   $('#contact').mouseenter(function(){
//     $('li#contact').addClass('active')
//   })
//   $('#contact').mouseleave(function(){
//     var rawpage = window.location.pathname
//     if (rawpage == "/"){
//       var page = "home"
//     }
//     else {
//       var page = rawpage.slice(1).slice(0, -1)
//     }
//     $('li#contact').removeClass('active')
//     $('li#' + page).addClass('dropdown active')
//   })
//
//   $('#footer').mouseleave(function(){
//     $('li#contact-us').addClass('active')
//   })}
$(document).ready(function(){
  $('a[href="#contact"]').click(function(){
    $('html, body').animate({
      scrollTop: $(document).height()
    }, 1500);
    return false;
  })
  $('#learn-more-btn').click(function(){
    $('html, body').animate({
      scrollTop: $("#learn-more").offset().top - 150
    }, 750);
    return false;
  })
  /* var links = $('.nav-links')
  for (var i = 0; i < links.length; i++) {
  var link = links[i]
  var href = $(link).attr('href')
  $(link).attr('href', "/" + href)
} */
/* This function changes the title to match the blog post on a blog post page*/
if (window.location.pathname.includes("/blog")){
  var title = "EPX Labs, Inc. | Blog"
} else {
  var title = "EPX Labs, Inc. | " + $('h1').text()
}
$(document).prop('title', title)

var path = window.location.pathname.slice(1)
if (path.match(/blog.*/)) {
  var fullPath = "li#blog"
}
else if (path != "") {
  var fullPath = "li#" + path
}
$(fullPath).addClass('active')
$('section#contact').mouseenter(function(){
  $('li.active').removeClass('active')
  $('li#contact').addClass('active')
})
$('section#contact').mouseleave(function(){
  $('li#contact').removeClass('active')
  $(fullPath).addClass('active')
})
// clickEvents()
// setInterval(function(){
//   if ($('li.active').length > 1){
//     if ($(currentMousePos).attr('id') == "contact"){
//       $($('li.active')[0]).removeClass('dropdown active')
//     }
//     else {
//       $($('li.active')[1]).removeClass('dropdown active')
//     }
//   }
//   else if ($('li.active').length < 1){
//     $('li#contact-us').addClass('active')
//   }
//   clickEvents()
// }, 1)
})



var disqus_config = function () {
  this.page.url = "http://www.epxlabs.com";  // Replace PAGE_URL with your page's canonical URL variable
  this.page.identifier = window.location.pathname; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
$(window).load (function() { // DON'T EDIT BELOW THIS LINE
if ($("#disqus_thread").length) {
  //CONDITION ONLY LOADS DISQUS ON BLOGPOST PAGES
  var d = document, s = d.createElement('script');
  s.src = '//www-epxlabs-com.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
}
});

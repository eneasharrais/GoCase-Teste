//Owl Carrousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    dots:true,
    items:4
  });
});

//Menu sanduiche
function sidemenu_toggle(x){
  x.classList.toggle("change");
  document.getElementById('sidemenu').classList.toggle("change");
  document.getElementById('MainContainer').classList.toggle("dark");
  document.getElementById('FirstNavbar').classList.toggle("change");
}

//Mostrar Bottom Cart
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 1000) {
    document.getElementById('botomCart').classList.remove("hidden");
    document.getElementById('Fab').classList.remove("hidden");
  } else {
    document.getElementById('botomCart').classList.add("hidden");
    document.getElementById('Fab').classList.add("hidden");
  }
});

//scrolltop button
function scrollback(){
  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0) {
       window.requestAnimationFrame(scrollback);
       window.scrollTo (0,currentScroll - (currentScroll/10));
  }
}

//fechar a promoção
function close_promotion(){
  document.getElementById('promotion-box').style.display = "none";
}

//Funções de seleção
function select_capinha(x){
  document.getElementById('capinha1').classList.remove("selected");
  document.getElementById('capinha2').classList.remove("selected");
  document.getElementById('capinha3').classList.remove("selected");
  x.classList.add("selected");
}
function select_cor(x){
  document.getElementById('color1').classList.remove("selected");
  document.getElementById('color2').classList.remove("selected");
  document.getElementById('color3').classList.remove("selected");
  x.classList.add("selected");
}
function select_image(x){
  document.getElementById('image1').classList.remove("selected");
  document.getElementById('image2').classList.remove("selected");
  document.getElementById('image3').classList.remove("selected");
  document.getElementById("highlightedImage").src = x.src;
  x.classList.add("selected");
}

//pegar o tempo
var countDownDate = new Date("Jun 31, 2019 22:30:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = + hours + ":"
  + minutes + ":" + seconds;
}, 1000);

/*$(document).ready(function() {
  $("a[href*='#']:not([href='#])").click(function() {
    let target = $(this).attr("href");
    $('html,body').stop().animate({
      scrollTop: $(target).offset().top
    }, 1000);
    event.preventDefault();
  });
  function Hien() {
	  document.getElementsByClassName("formtruyen").style.display = "block";
  }
  function An() {
	  document.getElementsByClassName("formtruyen").style.display = "none";
  }*/
  
  
  
  var Request1()= new XMLHttpRequest();
  Request1.open('GET','https://github.com/TranCuong1312/ito/blob/master/main.json',true);
  Request1.onload=function(){
  var Data =JSON.parse(Request1.responseText);
  console.log(Data[0]);
  };
  Request1.send();
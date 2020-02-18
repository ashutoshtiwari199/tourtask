// $('#menu_icon').click(function(){
//     $('.menu_links_div').css({'transform':'scale('+58+')'})
// })

var menu=document.querySelector("#menu_icon");
var fullscreen= document.querySelector("body");
var close=document.querySelector("#close");
var link=document.querySelector('.menu_links_div');
var links=document.querySelector('.menu_links');
var modal=document.querySelector('#modals');
var booking=document.querySelector('#booknow');

links.style.display="none";
//modal.style.display="none";

menu.addEventListener("click",function(){
    link.style.transform="scale(150)";
    links.style.display="";
    menu.style.zIndex="-1";
    close.style.zIndex="8";
    fullscreen.style.overflow="hidden";
    // links.style.zIndex="8";
});
function myFunction() {
    setTimeout(function(){ links.style.zIndex="8"; }, 250);
  }

menu.addEventListener("click", myFunction);

close.addEventListener("click",function(){
    links.style.display="none";
    link.style.transform="scale(1)";
    close.style.zIndex="-1";
    links.style.zIndex="-1";
    menu.style.zIndex="7";
    fullscreen.style.overflow="auto";

});

booking.addEventListener("click",function(){
    //alert("hello");
    // scrollbars="disable";
    modal.style.display="initial";
    // modal.style.position="relative";
    // modal.style.position = 'fixed';
});
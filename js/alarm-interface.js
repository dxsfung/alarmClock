$(document).ready(function(){
  function live() {
  $('#time').text(moment().format("HH:mm:ss"));
  }
  setInterval(live, 1000);



});

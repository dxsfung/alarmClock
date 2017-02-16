$(document).ready(function(){
  $('#time').text(moment());
});

$(document).ready(function() {
   $('#alarmTime').click(function() {
     console.log ("clicked!");
      $('#time').text(moment());
      var time = $('#alarmTime').val();
      $('#showtime').text("The alarm time is " + time );
      console.log (time);
      $('#alarmTime').val("");
      $('.showtime').text("The alarm time is " + time );
  });
});

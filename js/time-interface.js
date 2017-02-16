var Alarm = require('./../js/time.js').alarmModule;

$(document).ready(function(){
  $('button').click(function(event) {
    event.preventDefault();
    var hours = parseInt($('#hours').val());
    var minutes = parseInt($('#minutes').val());
    var seconds = parseInt($('#seconds').val());
    if (hours > 24) {
      $('.error1').append('<strong>Please input a value between 1 and 24</strong>');
    }
    if (minutes > 60) {
      $('.error2').append('<strong>Please input a value between 1 and 60</strong>');
    }
    if (seconds > 60) {
      $('.error3').append('<strong>Please input a value between 1 and 60</strong>');
    }
    var newAlarm = new Alarm();
    newAlarm.someFunction(hours, minutes, seconds);
    
  });
});

var Time = require('./../js/alarm.js').timeModule;

var displayAlarm = function (theTime) {
  $('#alarm_output').text("Alarm!" + theTime);
}


$(document).ready(function(){

  setInterval(function clock(){
    var currentTime=moment().format('hh:mm:ss a');
    $('#time').text(currentTime);
    return clock;
  }(), 1000);

  $("#alarm_set_form").submit(function(event) {
    event.preventDefault();
    var alarmSet = $('#alarm_set').val();
    var alarmDisplay = new Time(alarmSet);
    alarmDisplay.alarmTime(alarmSet, displayAlarm);
      $('#alarm_output').text("You set the alarm for " + alarmSet + ". Time displays in Military Time, yo!");
  });
});

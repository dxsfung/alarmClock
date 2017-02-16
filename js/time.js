function Alarm() {

}

Alarm.prototype.ringRing = function(hours, minutes, seconds) {
  console.log(hours, minutes, seconds);
  var clear = 0;
  var currenthour = parseInt(moment().get('hour'));
  var currentminute = parseInt(moment().get('minute'));
  var currentsecond = parseInt(moment().get('second'));
  console.log(currenthour, currentminute, currentsecond);

  if ((currenthour === hours) && (currentminute === minutes) &&
  (currentsecond == seconds)) {
  var result = $('.alarm').append('<iframe src="//giphy.com/embed/Nwz6NZkToYC4M" width="480" height="368" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/july-great-Nwz6NZkToYC4M">via GIPHY</a></p>');
  clearInterval(clear);
  console.log("function ends");

  return result;
  }
  //setInterval(ringRing, 1000);
};

Alarm.prototype.someFunction = function (hours, minutes, seconds){
  var smallAlarm = new Alarm;
  setInterval(function(){
      smallAlarm.ringRing(hours, minutes, seconds);
  }, 1000);
};



exports.alarmModule = Alarm;

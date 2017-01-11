
var hexColor = '';
var rgbColor = '';

var hexToDecimalObject = {
  "0":"0",
  "1":"1",
  "2":"2",
  "3":"3",
  "4":"4",
  "5":"5",
  "6":"6",
  "7":"7",
  "8":"8",
  "9":"9",
  "a":"10",
  "b":"11",
  "c":"12",
  "d":"13",
  "e":"14",
  "f":"15"
};

var hexToDecimal = function(hexIn){
  var hexArray = hexIn.split('');
  var decimalString = "";
  hexArray.map(function(element){
    decimalString += hexToDecimalObject[element];
  });
  return decimalString;
};

console.log(hexToDecimal('bb3399'));


var hexToRgba = function(input){
  var hexArray = input.split("");
  var resultsArray = [];

  for (var i = 0; i<hexArray.length; i+=2){
    resultsArray.push( hexToDecimal(hexArray[i] + hexArray[i+1]) );
  }

  var rgbString = "rgb("+resultsArray[0]+","+resultsArray[1]+","+resultsArray[2]+")";
  console.log(rgbString);
  return rgbString;
};

var test = hexToRgba("663399");

$(document).ready(function(){

  $("#hex").on("keyup",function(){
    if( this.value.length === 6){
      $("html").css("backgroundColor", hexToRgba(this.value));
    }

  });

});

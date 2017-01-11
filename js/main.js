
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

// ====== Function that converts a hex input into decimal output ====== //
var hexToDecimal = function(hexIn){
  var hexArray = hexIn.split('');
  var decimalString = "";
  hexArray.map(function(element){
    decimalString += hexToDecimalObject[element];
  });
  var decimalInteger = parseInt(decimalString);
  return decimalInteger;
};

// ====== Function that converts a hex color into rgb color ====== //
// ====== Output is a string in format: rgb(xxx,xxx,xxx) ====== //
var hexToRgb = function(input){
  var hexArray = input.split("");
  var resultsArray = [];

  for (var i = 0; i<hexArray.length; i+=2){
    resultsArray.push( hexToDecimal(hexArray[i])*16 + hexToDecimal(hexArray[i+1]) );
  }

  var rgbString = "rgb("+resultsArray[0]+","+resultsArray[1]+","+resultsArray[2]+")";
  return rgbString;
};


$(document).ready(function(){

  // ====== Add event listener to hex input tag. Listen for keyup ======
  $("#hex").on("keyup",function(){
    // ====== If the length of hex input is 6, run the hexToRgb function ======
    if( this.value.length === 6){
      $("html").css("backgroundColor", "#"+this.value);
      var rgbValues = hexToRgb(this.value);

      // ====== Set the rgb equivalent value inside rgb input box ======
      $("#rgb").val(rgbValues);
    }

  });

});

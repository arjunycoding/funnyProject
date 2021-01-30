var i = 1;       // Set counter to 1
var msg = '';  // Message
var number = {
  one: 1,
  two : 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12
  }
    var msgOne = '';
    var msgTwo = '';
    var msgThree = '';
    var msgFour = '';
    var msgFive = '';
    var msgSix = '';
    var msgSeven = '';
    var msgEight = '';
    var msgNine = '';
    var msgTen = '';
    var msgEleven = '';
    var msgTwelve = '';

// Store 5 times table in a variable
while (i < 13) {
  msgOne += i + ' x ' + number.one + ' = ' + (i * number.one) + '<br />';
  i++;
}
while (i < 13) {
  msgTwo += i + ' x ' + number.two + ' = ' + (i * number.two) + '<br />';
  i++;
}
while (i < 13) {
  msgThree += i + ' x ' + number.three + ' = ' + (i * number.three) + '<br />';
  i++;
}
while (i < 13) {
  msgFour += i + ' x ' + number.four + ' = ' + (i * number.four) + '<br />';
  i++;
}

document.getElementById('board').innerHTML = msgOne;
//document.getElementById('board').innerHTML = msgTwo;
//document.getElementById('board').innerHTML = msgThree;
//document.getElementById('board').innerHTML = msgFour;
//document.getElementById('board').innerHTML = msgFive;
//document.getElementById('board').innerHTML = msgSix;
//document.getElementById('board').innerHTML = msgSeven;
//document.getElementById('board').innerHTML = msgEight;
//document.getElementById('board').innerHTML = msgNine;
//document.getElementById('board').innerHTML = msgTen;
//document.getElementById('board').innerHTML = msgEleven;
//document.getElementById('board').innerHTML = msgTwelve;


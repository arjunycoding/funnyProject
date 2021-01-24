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

document.getElementById('board1').innerHTML = msgOne;
document.getElementById('board2').innerHTML = msgTwo;
document.getElementById('board3').innerHTML = msgThree;
document.getElementById('board4').innerHTML = msgFour;
document.getElementById('board5').innerHTML = msgFive;
document.getElementById('board6').innerHTML = msgSix;
document.getElementById('board7').innerHTML = msgSeven;
document.getElementById('board8').innerHTML = msgEight;
document.getElementById('board9').innerHTML = msgNine;
document.getElementById('board10').innerHTML = msgTen;
document.getElementById('board11').innerHTML = msgEleven;
document.getElementById('board12').innerHTML = msgTwelve;


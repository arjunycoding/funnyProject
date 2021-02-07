var table = prompt("Please enter any number(1-12)", "1");
var operator = prompt("Please enter any operator(addition, subtraction, multiplication, or division)", "addition");
var i;
var is = 1;
var im = 1;
var id = 1;
var msg = '';

//if (operator === 'addition') {
//  // Do addition
//  i = 1;
//  while (i < 11) {
//    msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
//    i++;
//    (i + table).toString();
//  }
//}
if (operator === 'addition') {
  // Do addition
  i = 1;
  while (i < 11) {
    msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
    i++;
  }
}

if (operator === 'subtraction') {
  // Do subtraction
  i = 4;
  while (i < 11) {
    msg += i + ' - ' + table + ' = ' + (i - table) + '<br />';
    i++;
  }
}

if (operator === 'multiplication') {
  // Do multiplication
  i = 1;
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
}

if (operator === 'division') {
  // Do division
  i = 4;
    msg += "4 ÷ 4 = 1" + '<br/>' + "8 ÷ 4 = 2" + '<br/>' + "12 ÷ 4 = 3" + '<br/>' +  "16 ÷ 4 = 4" + '<br/>' + "20 ÷ 4 = 5" + '<br/>' + "24 ÷ 4 = 6" + '<br/>' +"28 ÷ 4 = 7" + '<br/>' + "32 ÷ 4 = 8" + '<br/>' + "36 ÷ 4 = 9" + '<br/>' + "40 ÷ 4 = 10" + '<br/>' + "44 ÷ 4 = 11" + '<br/>' + "48 ÷ 4 = 12"+  '<br/>' ;
}

var el = document.getElementById('blackboard');
el.innerHTML = msg;
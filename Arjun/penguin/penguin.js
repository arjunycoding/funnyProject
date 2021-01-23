/*
       function welcome() {
           var today = new Date();
           var hourNow = today.getHours();
           var greeting;

           if (hourNow > 18) {
               greeting = 'Good evening!';
           } else if (hourNow > 12) {
               greeting = 'Good afternoon!';
           } else if (hourNow > 0) {
               greeting = 'Good morning!';
           } else {
               greeting = 'Welcome!';
           }

           document.write('<h3>' + greeting + '</h3>');
       }

       function example {
           let sale = true;

           sale = false;

           if(sale) {
             document.write('Time to buy!');
           } else {
             document.write('Time to wait for a sale.')
           }
       }
       function myFunction() {
         document.getElementById("demo").innerHTML = example();

       }
*/
var i = 1;       // Set counter to 1
var msg1 = '';    // Message
var msg2 = '';
var msg3 = '';
var msg4 = '';
var msg5 = '';

// Store 5 times table in a variable
while (i < 13) {
  msg1 += i + ' x 1 = ' + (i * 1) + '<br />';
  i++;
}
while (i < 13) {
  msg2 += i + ' x 2 = ' + (i * 2) + '<br />';
  i++;
}
while (i < 13) {
  msg3 += i + ' x 3 = ' + (i * 3) + '<br />';
  i++;
}
while (i < 13) {
  msg4 += i + ' x 4 = ' + (i * 4) + '<br />';
  i++;
}

document.getElementById('answer1').innerHTML = msg1;
document.getElementById('answer2').innerHTML = msg2;
document.getElementById('answer3').innerHTML = msg3;
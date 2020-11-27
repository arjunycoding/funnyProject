    function startTime() {
          var today = new Date();
          var h = today.getHours();
          var m = today.getMinutes();
          var s = today.getSeconds();
          h = checkTime(h);
          h = regTime(h);
          m = checkTime(m);
          s = checkTime(s);
          document.getElementById('txt').innerHTML =
          h + ":" + m + ":" + s;
          var t = setTimeout(startTime, 100);
    }
    function regTime(i){
        if (i > 12){
        i = i - 12;
        }

    return i;
    }


    function checkTime(i) {
          if (i < 10) {
          i = "0" + i;
                       }
    return i;

    }
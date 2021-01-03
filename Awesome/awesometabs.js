 function eraser(evt, divContent) {
        var i, tabcontent, topb;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("topb");
        for (i = 0; i < topb.length; i++) {
            topb[i].className = topb[i].className.replace(" active", "");
        }
        document.getElementById(divContent).style.display = "block";
        evt.currentTarget.className += " active";
    }
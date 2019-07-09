	jQuery(function($){
    $(document).ready( function() {
    $('img').each( function() {
        if($(this).attr("alt") == "www.000webhost.com") {
            $(this).remove();
            console.log("");
        }
        else {
            console.log("")
        }
      });
    });
});

jQuery(function($){$(document).ready(function(){$('#isi').load("https://donnim.github.io/web/index.html");});});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

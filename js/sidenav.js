
$(document).ready(function(){
    $("#addcita").click(function(){
        $("#createCita").fadeToggle(2000);
    }
  );

  $("#btnEnviarCita").click(function(){
      $("#createCita").fadeOut(2000);
  }
);

$("#btnCancelarCita").click(function(){
    $("#createCita").fadeOut(2000);
}
);

});


function openNav() {

    document.getElementById("main").style.marginLeft = "15%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("mySidenav").className = " sidenav col-md-3 col-12";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("mySidenav").className = " sidenav  col-0";
}

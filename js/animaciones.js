

$(document).ready(function(){
	$("#divContenedor").click(function(){
		$("#laPasion").animate({fontSize:"26px"});
	});

    $("#laPasion").click(function(){
		$("#laPasion").animate({wordSpacing:"10px"},5000);
	});

    $("#primerCuadro").animate({
        left: 50,
        top: 10
    }, 'slow', function () { $(this).removeAttr('style'); });

    $("#segundoCuadro").animate({
        left: 50,
        top: 10
    }, 'slow', function () { $(this).removeAttr('style'); });

    $("#tercerCuadro").animate({
        left: 50,
        top: 10
    }, 'slow', function () { $(this).removeAttr('style'); });


});

$(document).ready(function() {

    $("#contenedorTexto").click(function(event) {
        $("#textoContenido").fadeIn(5000);
    });


    $("#contenedorTexto").click(function(event) {
        $("#textoContenido").fadeOut(5000);
    });

});
const ValorDeMercado = [ 

	{id:1, nombre:"Fabian Bordagaray", nacionalidad:"Argentina", edad:"34", posicion:"delantero", valor:325000, propiedad:"prestamo", imagen: "/img/bordagaray.png"},
	{id:2, nombre:"Ulises Sanchez", nacionalidad:"Argentina", edad:"23", posicion:"delantero", valor:125000, propiedad:"propio", imagen: "/img/ulisessanchez.png"},
	{id:3, nombre:"Pablo Vegetti", nacionalidad:"Argentina", edad:"32", posicion:"delantero", valor:450000, propiedad:"prestamo", imagen: "/img/vegetti.png"},
	{id:4, nombre:"Adrian Balboa", nacionalidad:"Uruguay", edad:"27", posicion:"delantero", valor:350000, propiedad:"prestamo" , imagen: "/img/balboa.png"},
	{id:5, nombre:"Santiago Longo", nacionalidad:"Argentina", edad:"24", posicion:"mediocampista", valor:150000, propiedad:"propio", imagen: "/img/longo.png"},
	{id:6, nombre:"Hernan Bernardello", nacionalidad:"Argentina", edad:"35", posicion:"mediocampista", valor:50000, propiedad:"prestamo" , imagen: "/img/Bernardello.png"},
	{id:7, nombre:"Emiliano Romero", nacionalidad:"Uruguay", edad:"28", posicion:"defensor", valor:325000, propiedad:"prestamo", imagen: "/img/romero.png"},
	{id:8, nombre:"Ariel Rojas", nacionalidad:"Argentina", edad:"36", posicion:"defensor", valor:300000, propiedad:"prestamo"},
	{id:9, nombre:"Maximiliano Lugo", nacionalidad:"Paraguay", edad:"31", posicion:"defensor", valor:250000, propiedad:"prestamo"},
	{id:10, nombre:"Geronimo Tomasetti", nacionalidad:"Argentina", edad:"21", posicion:"mediocampista", valor:100000, propiedad:"propio"},
	{id:11, nombre:"Tomas Asprea", nacionalidad:"Argentina", edad:"26", posicion:"mediocampista", valor:300000, propiedad:"prestamo"},
	{id:12, nombre:"Adolfo Lima", nacionalidad:"Uruguay", edad:"30", posicion:"mediocampista", valor:150000, propiedad:"prestamo"},
	{id:13, nombre:"Mariano Miño", nacionalidad:"Argentina", edad:"29", posicion:"mediocampista", valor:325000, propiedad:"prestamo", imagen: "/img/minio.png"},
	{id:14, nombre:"Bruno Zapelli", nacionalidad:"Argentina", edad:"19", posicion:"mediocampista", valor:100000, propiedad:"propio", imagen: "/img/zapelli.png"},
	{id:15, nombre:"Juan Pablo Ruiz Gomez", nacionalidad:"Argentina", edad:"27", posicion:"mediocampista", valor:450000, propiedad:"prestamo", imagen: "/img/ruizgomez.png"}

];

const selectJugador = document.querySelector('#datalistOptions');
const divJugador = document.querySelector('.jugador');

document.addEventListener('DOMContentLoaded', () => {
	llenarSelect();
})

function llenarSelect(){
	ValorDeMercado.forEach(jugador => {
		const option = document.createElement('option');
		option.value = jugador.nombre;
		option.classList.add('option-jugador')
		option.textContent = jugador.nombre;

		selectJugador.appendChild(option);
	})
}

selectJugador.addEventListener('change', () => {
	const jugadorSelecconado = selectJugador.value;
	
	const buscarJugador = ValorDeMercado.find( jugador => jugador.nombre === jugadorSelecconado);

	mostrarJugadorEnHtml(buscarJugador);
})


function mostrarJugadorEnHtml(jugador){
	divJugador.innerHTML = `
		<div class = "entradaGads">
			<img src="${jugador.imagen}" alt="">
			<p>Nombre: ${jugador.nombre}</p>
			<p>Nacionalidad: ${jugador.nacionalidad}</p>
			<p>Valor: USD ${jugador.valor}</p>
		</div>
	`
}


//! Por Posicion

const selectJugadorPosicion = document.querySelector('#datalistOptionsDos');
const divJugadorPosicion = document.querySelector('.jugador');

document.addEventListener('DOMContentLoaded', () => {
	llenarSelectPosicion();
})



function llenarSelectPosicion(){
	ValorDeMercado.forEach(jugador => {
		const option = document.createElement('option');
		option.value = jugador.edad;
		option.classList.add('option-jugador')
		option.textContent = jugador.edad;

		selectJugadorPosicion.appendChild(option);
	})
}

//!por edad

selectJugadorPosicion.addEventListener('change', () => {
	const jugadorPorEdad = selectJugadorPosicion.value;
	
	const buscarJugadorPorEdad = ValorDeMercado.find( jugador => jugador.edad === jugadorPorEdad);

	mostrarJugadorEnHtml(buscarJugadorPorEdad);
})


function mostrarJugadorEnHtml(jugador){
	divJugadorPosicion.innerHTML = `
		<div class = "entradaGads">
			<img src="${jugador.imagen}" alt="">
			<p>Nombre: ${jugador.nombre}</p>
			<p>Edad: ${jugador.edad} Años</p>
			<p>Nacionalidad: ${jugador.nacionalidad}</p>
			<p>Valor: USD ${jugador.valor}</p>
		</div>
	`
}


//!AGREGANDO JQUERY

$(document).ready(function() {

$('#ocultarTexto').addClass('uk-width-medium-7-10 uk-width-small-1-1 text');

$('#contenedorBody').addClass('tm-isblog tt-juadoresBelgrano-page');

$('p').fadeOut(2000);
$('p').fadeIn(2100);


$('p:first').animate({'font-size':15,},1000);

$("#tm-footer").click(function(){
    $(this).hide();
  });

  $("#textoPasion").mouseenter(function(){
    alert("Asociate! contactate con nosotros para mas info");
  });

});



let typed = new Typed('.typed', {
	strings: [
		'<i class="escribiendo">PERDON!!</i>',
		'<i class="escribiendo">Pagina no encontrada.</i>',

	],
	typeSpeed: 75,
	startDelay: 300, 
	backSpeed: 75, // Velocidad en milisegundos para borrrar
	smartBackspace: true,
	shuffle: false, 
	backDelay: 1500, 
	loop: true,
	loopCount: false, // INFINITO
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', 
	contentType: 'html', 
});

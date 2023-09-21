
window.addEventListener("load", function () {
	init();
});

function init() {
	let toolTimeline = new TimelineMax();
	let duration = 0.9;
	toolTimeline.from(
		"h1",
		duration,
		{
			opacity: 0,
			scale:2,
			ease: Linear.easeIn
		},
		0.8
	);
	toolTimeline.staggerFrom(
		".boxes__box",
		duration,
		{
			opacity: 0,
			scale: 0,
			ease: Back.easeInOut
		},
		0.1,
		0.2
	);

	toolTimeline.to(
		".boxes img",
		duration,
		{
			opacity: 1,
			right: 0,
			ease: Back.easeOut
		},
		0.4
	);

	toolTimeline.staggerTo(
		"li",
		duration,
		{
			top: 0,
			ease: Back.easeOut
		},
		0.1,
		0.9
	);
}



document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

const mostrarBtn = document.getElementById('rastreo');
const busqueda = document.getElementById('busqueda');

// Variable para controlar el estado de visibilidad
let busquedaVisible = false;

// Agregar un evento de clic al botón
mostrarBtn.addEventListener('click', () => {
	// Alternar la visibilidad de la información
	busqueda.style.display = busquedaVisible ? 'none' : 'block';
	
	// Actualizar el estado de visibilidad
	busquedaVisible = !busquedaVisible;
});
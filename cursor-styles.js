document.addEventListener('pointermove', (event) => {
	const element = event.target.closest(".glower");
	if (!element) return;

	const rect = element.getBoundingClientRect();
	const x = event.clientX - rect.left;
	const y = event.clientY - rect.top;

	requestAnimationFrame(() => {
		element.style.setProperty('--x', Math.round(x));
		element.style.setProperty('--y', Math.round(y));
	});
});

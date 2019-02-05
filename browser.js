// Try triggering on a different event.
alert('test');
document.addEventListener('DOMContentLoaded', () => {
	document.documentElement.classList.add(`os-${process.platform}`);
  document.documentElement.classList.add('dark-mode');
};

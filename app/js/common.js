
const items = document.querySelectorAll('.questions__item')

items.forEach(item => {
	item.addEventListener('click', function() {
		alert('hello world')
	})
})
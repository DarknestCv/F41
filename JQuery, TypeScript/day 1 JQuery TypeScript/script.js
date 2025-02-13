
// ! JQuery = $ - це для виклику (інтерфейс JQuery)

$('div').text('new text').on('click', () => console.log('!')) //* приклад роботи JQuery


// ? Приклад без JQuery
const divs = document.querySelectorAll('div')

for(let i = 0; i < dispatchEvent.length; i += 1){
    divs[i].textContent = 'new text2';
    divs[i].onclick = () => console.log('!')
}


// ! плюси JQuery і мінуси
// * $.ajax(),  $.animate()

// ! syntax - оце туфта
// * easy to learn/use
// ! cross-browser
// ! additional API
const bookOne = {
  title: '99 Bottles',
  author: 'Sandi Metz',
  pages: 777,
  read: false
}

const bookTwo = {
  title: 'Oynx and Crake',
  author: 'Margaret Atwood',
  pages: 400,
  read: true
}

let myLibrary = [bookOne, bookTwo];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

function displayBooks(array) {
  const table = document.querySelector('table')


  for (i = 0; i < array.length; i++) {
    let tempRow = document.createElement('tr')
    let tempIndex = document.createElement('th')
    let num = document.querySelectorAll('tr').length
    tempIndex.textContent = num
    tempRow.appendChild(tempIndex)
    let book = array[i]
    for (let key in book) {
      let tempCell = document.createElement('td')
      tempCell.textContent = book[key]
      tempRow.appendChild(tempCell)
    }
    table.insertAdjacentElement('beforeend', tempRow)
  }
}
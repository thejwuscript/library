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

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
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

const newButton = document.getElementById('new_book_button')
newButton.addEventListener('click', newForm)

const form = document.createElement('form');
  form.innerHTML = '<label for="title">Title</label>' + '<input type="text" id="title" name="title" placeholder="Title"><br>' + 
  '<label for="author">Author</label>' + '<input type="text" id="author" name="author" placeholder="Author"><br>' +
  '<label for="pages">Pages</label>' + '<input type="number" id="pages" name="pages" placeholder="Pages"><br>' +
  '<label for="read">Read</label>' + '<input type="checkbox" id="read" name="read">' + '<br>' + '<button type="submit">Submit</button>'

function newForm() {
  if (document.querySelector('form')) {
    document.querySelector('form').reset()
  } else {
    newButton.insertAdjacentElement('afterend', form)
  }
}
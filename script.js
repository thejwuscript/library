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

function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read)
  myLibrary.push(newBook)
  displayBooks(myLibrary)
  newForm()
}

function displayBooks(array) {
  const tableBody = document.querySelector('tbody')
  for (i = 0; i < array.length; i++) {
    let tempRow = document.createElement('tr')
    let tempIndex = document.createElement('th')
    tempIndex.textContent = i + 1
    tempRow.appendChild(tempIndex)
    let book = array[i]
    for (let key in book) {
      let tempCell = document.createElement('td')
      if (book[key] === true) {
        tempCell.textContent = 'Yes'
      } else if (book[key] === false) {
        tempCell.textContent = 'No'
      } else {
        tempCell.textContent = book[key]
      }
      tempRow.appendChild(tempCell)
    }
    AttachRemoveButton(tempRow, book)
    AttachReadButton(tempRow, book)
    tableBody.appendChild(tempRow)
    let oldChild = document.querySelector('tbody').childNodes[i+1]
    if (oldChild) {
      tableBody.replaceChild(tempRow, oldChild)
    } else {
      tableBody.appendChild(tempRow)
    }
  }
}

function newForm() {
  if (document.querySelector('form')) {
    document.querySelector('form').reset()
  } else {
    newButton.insertAdjacentElement('afterend', form)
    attachListenerToNewBookButton()
  }
}

function attachListenerToNewBookButton() {
  document.querySelector('.submit').addEventListener('click', function(e) {
    e.preventDefault()
    let title = document.getElementById('title').value
    let author = document.getElementById('author').value
    let pages = document.getElementById('pages').value
    let read = document.getElementById('read').checked
    addBookToLibrary(title, author, pages, read);
  })
}

function AttachRemoveButton(rowElement, book) {
    let removeBtn = document.createElement('button')
    removeBtn.textContent = 'Remove'
    removeBtn.addEventListener('click', () => {
      myLibrary.splice(myLibrary.indexOf(book), 1)
      rowElement.remove()
      displayBooks(myLibrary)
    })
    rowElement.appendChild(removeBtn)
}

function AttachReadButton(rowElement, book) {
  // create an element for the read button
  let readBtn = document.createElement('button')
  // assign text content of read button to be 'Read'
  readBtn.textContent = 'Read'
  // set an attribute type of the read button to be 'button'
  readBtn.setAttribute('type', 'button')
  // add event listener to read button that toggles the read property of the book object
  readBtn.addEventListener('click', () => {
    if (book.read) {
      book.read = false
    } else {
      book.read = true
    }
    displayBooks(myLibrary)
  })
  // add the read button to the row element
  rowElement.appendChild(readBtn)
}

const newButton = document.getElementById('new_book_button')
newButton.addEventListener('click', newForm)

const form = document.createElement('form');
  form.innerHTML = '<label for="title">Title</label>' + '<input type="text" id="title" name="title" placeholder="Title"><br>' + 
  '<label for="author">Author</label>' + '<input type="text" id="author" name="author" placeholder="Author"><br>' +
  '<label for="pages">Pages</label>' + '<input type="number" id="pages" name="pages" placeholder="Pages"><br>' +
  '<label for="read">Read</label>' + '<input type="checkbox" id="read" name="read">' + '<br>' + '<button class="submit" type="submit">Submit</button>'

displayBooks(myLibrary);

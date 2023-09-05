const main = document.querySelector('.main')
const lib = []

function book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

lib.push(new book('The Hobbit', 'J.R.R. Tolkien', 310, false))
lib.push(new book('Angels and Demons', 'Dan Brown', 768, true))

function display() {
  main.innerHTML = ''

  lib.forEach((book, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-index', index)
  
    const title = document.createElement('span');
    title.className = 'title';
    title.innerText = book.title;
  
    const hr = document.createElement('hr');
  
    const author = document.createElement('span');
    author.className = 'author';
    author.innerText = 'by ' + book.author;
  
    const pages = document.createElement('span');
    pages.className = 'pages';
    pages.innerText = book.pages + ' pages';
  
    const container = document.createElement('div')
    container.className = 'container'
  
    const read = document.createElement('button');
    read.className = 'read';
    read.innerText = book.read ? 'Read' : 'Not read yet';
  
    const remove = document.createElement('div')
    remove.className = 'remove'
    remove.innerHTML = '&times;'
    remove.title = 'Remove book'
  
    container.appendChild(read)
    container.appendChild(remove)
  
    card.appendChild(title)
    card.appendChild(hr)
    card.appendChild(author)
    card.appendChild(pages)
    card.appendChild(container)
  
    main.appendChild(card)
  })
}

const openSide = document.getElementById('open-side')
const closeSide = document.getElementById('close-side')
const addBook = document.getElementById('add-book')
const remove = document.getElementsByClassName('remove')

openSide.addEventListener('click', () => {
  const sidebar = document.getElementById('sidebar')
  sidebar.style.display = 'grid'
})

closeSide.addEventListener('click', () => {
  sidebar.style.display = 'none'
})

addBook.addEventListener('click', () => {
  const title = document.getElementById('title')
  const author = document.getElementById('author')
  const pages = document.getElementById('pages')
  const read = document.getElementById('read')

  lib.push(new book(title.value, author.value, pages.value, read.checked))

  sidebar.style.display = 'none'
  document.getElementById('reset').click()

  display()
})

display()
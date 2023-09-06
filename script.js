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
    read.setAttribute('onclick', 'read(this)')
  
    const remove = document.createElement('button')
    remove.className = 'material-icons remove'
    remove.innerHTML = 'close'
    remove.title = 'Remove book'
    remove.setAttribute('onclick', 'remove(this)')
  
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

function read(node) {
  let i = node.parentNode.parentNode.getAttribute('data-index')
  
  lib[i].read = lib[i].read ? false : true
  node.innerText = lib[i].read ? 'Read' : 'Not read yet'
}

function remove(node) {
  let i = node.parentNode.parentNode.getAttribute('data-index')
  let response = confirm(`Are you sure you want to remove '${lib[i].title}' from your library?`)
  
  if (response) {
    lib.splice(i, 1)
    display()
  }
}

const openSide = document.getElementById('open-side')
const closeSide = document.getElementById('close-side')
const addBook = document.getElementById('add-book')

openSide.addEventListener('click', () => {
  const sidebar = document.getElementById('sidebar')
  sidebar.style.left = '0'
})

closeSide.addEventListener('click', () => {
  sidebar.style.left = '-400px'
})

addBook.addEventListener('click', () => {
  const title = document.getElementById('title')
  const author = document.getElementById('author')
  const pages = document.getElementById('pages')
  const read = document.getElementById('read')

  if (title.checkValidity() && author.checkValidity() && pages.checkValidity()) {
    lib.push(new book(title.value, author.value, pages.value, read.checked))

    sidebar.style.left = '-400px'
    document.getElementById('reset').click()

    display()
  }
  else {alert('Input Error\nEnsure you have entered all details correctly')}
})

display()
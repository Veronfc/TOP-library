const sidebar = document.getElementById('siderbar')
const main = document.querySelector('.main')
const openSide = document.getElementById('open-side')
const lib = []

function book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

lib.push(new book('The Hobbit', 'J.R.R. Tolkien', 310, false))
lib.push(new book('Angels and Demons', 'Dan Brown', 768, true))

lib.forEach((book) => {
  const card = document.createElement('div');
  card.className = 'card';

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

  const read = document.createElement('button');
  read.className = 'read';
  read.innerText = book.read ? 'Read' : 'Not read yet';

  card.appendChild(title)
  card.appendChild(hr)
  card.appendChild(author)
  card.appendChild(pages)
  card.appendChild(read)

  main.appendChild(card)
})

openSide.addEventListener('click', () => {
  sidebar.style.width = '300px'

})
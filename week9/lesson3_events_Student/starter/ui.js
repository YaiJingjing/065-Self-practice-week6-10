

import {
  addQuote,
  deleteQuote,
  updateQuote,
  getAllQuotes,
} from './quote.js'

const quoteList = document.getElementById('quote-list')
const form = document.getElementById('quoteForm')
const contentInput = document.getElementById('content')
const authorInput = document.getElementById('author')
const idInput = document.getElementById('quoteId')
const randomBtn = document.getElementById('randomBtn')
const randomDisplay = document.getElementById('randomQuoteDisplay')

function createQuoteElement(quote) {

  const quoteDiv = document.createElement('div')
  quoteDiv.setAttribute('data-id', quote.id)

  const contentP = document.createElement('p')
  contentP.textContent = quote.content

  const authorP = document.createElement('p')
  authorP.textContent = quote.author

  const editBtn = document.createElement('button')
  editBtn.className = 'edit-btn'
  editBtn.setAttribute('data-id', quote.id)
  editBtn.textContent = 'Edit'


  const deleteBtn = document.createElement('button')
  deleteBtn.className = 'delete-btn'
  deleteBtn.setAttribute('data-id', quote.id)
  deleteBtn.textContent = 'Delete'

  quoteDiv.appendChild(contentP)
  quoteDiv.appendChild(authorP)
  quoteDiv.appendChild(editBtn)
  quoteDiv.appendChild(deleteBtn)

  quoteDiv.addEventListener('click', (event) => {
    const target = event.target
    const id = Number(target.getAttribute('data-id')) 
    if (!id) return 

    if (target.classList.contains('edit-btn')) {

      const quoteToEdit = getAllQuotes().find((q) => q.id === id)
      if (quoteToEdit) {

        contentInput.value = quoteToEdit.content
        authorInput.value = quoteToEdit.author
        idInput.value = quoteToEdit.id 
      }
    } else if (target.classList.contains('delete-btn')) {
      deleteQuote(id) 
      deleteQuoteFromDOM(id)
    }
  })

  return quoteDiv
}

function addQuoteToDOM(quote) {
  const quoteElement = createQuoteElement(quote)
  quoteList.appendChild(quoteElement)
}

function updateQuoteInDOM(quote) {

  const quoteDiv = quoteList.querySelector(`div[data-id="${quote.id}"]`)
  if (quoteDiv) {

    quoteDiv.children[0].textContent = quote.content 
    quoteDiv.children[1].textContent = quote.author
  }
}

function deleteQuoteFromDOM(id) {

  const quoteDiv = quoteList.querySelector(`div[data-id="${id}"]`)
  if (quoteDiv) {
    quoteDiv.remove()
  }
}



function renderQuotes() {
 
  quoteList.innerHTML = ''
  getAllQuotes().forEach(addQuoteToDOM)
}
form.addEventListener('submit', (event) => {
  event.preventDefault()
  const content = contentInput.value.trim()
  const author = authorInput.value.trim()
  const id = idInput.value
  if (!content || !author) {
    return
  }

  if (id) {
    const updatedQuote = updateQuote(Number(id), content, author)
    if (updatedQuote) {
      updateQuoteInDOM(updatedQuote)
    }
  } else {
    const newQuote = addQuote(content, author)
    if (newQuote) {
      addQuoteToDOM(newQuote)
    }
  }

  contentInput.value = ''
  authorInput.value = ''
  idInput.value = '' 
})

function showRandomQuote() {
  const allQuotes = getAllQuotes()

  if (allQuotes.length === 0) {
    randomDisplay.textContent = '-- No quotes to show --'
    return
  }
  const randomIndex = Math.floor(Math.random() * allQuotes.length)
  const randomQuote = allQuotes[randomIndex]
  randomDisplay.textContent = `"${randomQuote.content}" — ${randomQuote.author}`
}
randomBtn.addEventListener('click', showRandomQuote)
renderQuotes()
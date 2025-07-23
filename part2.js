

let quoteData = {
  text: '"A reader lives a thousand lives before he dies. The man who never reads lives only one."',
  author: '– George R.R. Martin'
};

let manOfTheMonthData = {
  name: 'David Corenswet',
  role: 'Superman (2025)',
  quote: '"I love, I get scared. I wake up every morning and despite not knowing what to do, I put one foot in front of the other and try to make the best choices I can."',
};

let currentlyReadingData = {
  book1: { title: 'The Seven Husbands of Evelyn Hugo', author: 'by Taylor Jenkins Reid' },
  book2: { title: 'Dune', author: 'by Frank Herbert' },
  book3: { title: 'The Midnight Library', author: 'by Matt Haig' },
  book4: { title: 'Knight of the Seven Kingdome', author:'by George R.R. Martin' }
};

let favesData = {
  'anime-0': 'Jujutsu Kaisen',
  'anime-1': 'Attack on Titan',
  'anime-2': 'Demon Slayer',
  'anime-3': 'Spy x Family',
  'anime-4': 'Your Name',
  'anime-5': 'Haikyuu!!',
  'show-0': 'Stranger Things',
  'show-1': 'The Bear',
  'show-2': 'Breaking Bad',
  'show-3': 'Bridgerton',
  'show-4': 'The Office',
  'show-5': 'Heartstopper',
  'movie-0': 'Inception',
  'movie-1': 'Pride & Prejudice',
  'movie-2': 'La La Land',
  'movie-3': 'Spirited Away',
  'movie-4': 'Past Lives',
  'movie-5': 'Interstellar',
  'book-0': 'The Atlas Six',
  'book-1': 'A Court of Thorns and Roses',
  'book-2': 'The Song of Achilles',
  'book-3': 'Throne of Glass',
  'book-4': 'The Love Hypothesis',
  'book-5': 'Fourth Wing'
};

document.addEventListener('DOMContentLoaded', function() {
  setupQuoteEditor();
  setupCurrentlyReadingEditor();
  setupManOfTheMonthEditor();
  setupFavesEditor();
});

function setupCurrentlyReadingEditor() {
  const bookTitles = document.querySelectorAll('.book-title');
  const bookAuthors = document.querySelectorAll('.book-author');
  
  bookTitles.forEach((titleElement, index) => {
    titleElement.style.cursor = 'pointer';
    titleElement.addEventListener('click', function() {
      const bookKey = `book${index + 1}`;
      const currentTitle = currentlyReadingData[bookKey].title;
      const newTitle = prompt('Edit book title:', currentTitle);
      if (newTitle !== null && newTitle.trim() !== '') {
        currentlyReadingData[bookKey].title = newTitle.trim();
        this.textContent = newTitle.trim();
      }
    });
  });
  
  bookAuthors.forEach((authorElement, index) => {
    authorElement.style.cursor = 'pointer';
    authorElement.addEventListener('click', function() {
      const bookKey = `book${index + 1}`;
      const currentAuthor = currentlyReadingData[bookKey].author;
      const newAuthor = prompt('Edit book author:', currentAuthor);
      if (newAuthor !== null && newAuthor.trim() !== '') {
        currentlyReadingData[bookKey].author = newAuthor.trim();
        this.textContent = newAuthor.trim();
      }
    });
  });
}

function setupManOfTheMonthEditor() {
  const manImage = document.querySelector('.man img');
  const manName = document.querySelector('.man-name');
  const manRole = document.querySelector('.man-role');
  const manQuote = document.querySelector('.man-quote');

  manImage.style.cursor = 'pointer';
  manImage.addEventListener('click', function() {
    const newImageUrl = prompt('Enter new image URL:', manOfTheMonthData.image);
    if (newImageUrl !== null && newImageUrl.trim() !== '') {
      manOfTheMonthData.image = newImageUrl.trim();
      this.src = newImageUrl.trim();
    }
  });

  manName.style.cursor = 'pointer';
  manName.addEventListener('click', function() {
    const newName = prompt('Edit name:', manOfTheMonthData.name);
    if (newName !== null && newName.trim() !== '') {
      manOfTheMonthData.name = newName.trim();
      this.textContent = newName.trim();
    }
  });

  manRole.style.cursor = 'pointer';
  manRole.addEventListener('click', function() {
    const newRole = prompt('Edit role:', manOfTheMonthData.role);
    if (newRole !== null && newRole.trim() !== '') {
      manOfTheMonthData.role = newRole.trim();
      this.textContent = newRole.trim();
    }
  });

  manQuote.style.cursor = 'pointer';
  manQuote.addEventListener('click', function() {
    const newQuote = prompt('Edit quote:', manOfTheMonthData.quote);
    if (newQuote !== null && newQuote.trim() !== '') {
      manOfTheMonthData.quote = newQuote.trim();
      this.textContent = newQuote.trim();
    }
  });
}

function setupQuoteEditor() {
  const quoteTextElement = document.getElementById('quote-text');
  const quoteAuthorElement = document.querySelector('.quote-author');
  
  quoteTextElement.addEventListener('click', function () {
    const newVal = prompt('Edit the quote:', quoteData.text);
    if (newVal !== null && newVal.trim() !== '') {
      quoteData.text = newVal.trim();
      this.textContent = quoteData.text;
    }
  });

  quoteAuthorElement.style.cursor = 'pointer';
  quoteAuthorElement.addEventListener('click', function() {
    const newAuthor = prompt('Edit the quote author:', quoteData.author);
    if (newAuthor !== null && newAuthor.trim() !== '') {
      quoteData.author = newAuthor.trim();
      this.textContent = newAuthor.trim();
    }
  });
}

function setupFavesEditor() {
  document.querySelectorAll('.fave-item').forEach((item) => {
    item.addEventListener('click', () => {
      const key = item.getAttribute('data-key');
      const current = favesData[key];
      const newVal = prompt('Edit your favorite item:', current);
      if (newVal !== null && newVal.trim() !== '') {
        favesData[key] = newVal.trim();
        item.textContent = newVal.trim();
      }
    });
  });
}

function addHoverEffects() {
  const faveItems = document.querySelectorAll('.fave-item');
  
  faveItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
}
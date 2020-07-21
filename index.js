const arrayOfQuotes = [
    {'author': 'Dalai Lamai', 
     'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {'author': 'Rick', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Stephen King', 
     'quote': 'Get busy living or get busy dying'
    },
    {'author': 'Dalai Lama', 
     'quote': 'Purpose of our lives is to be happy.'
    },
    {'author': 'John Lemnon', 
     'quote': 'life is what happens when you are busy making plans.'
    },
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;
    
}
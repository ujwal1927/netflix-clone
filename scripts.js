
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

// Sample data (you can replace this with real data)
const database = [
    'The Crown',
    'Stranger Things',
    'Narcos',
    'Breaking Bad',
    'Black Mirror',
    'Money Heist',
    'Ozark',
    'BoJack Horseman',
    'The Witcher',
    'House of Cards',
    'Rajat rand',
    'shivam rand',
    'The Shawshank Redemption',
 'The Godfather',
 'Pulp Fiction',
'The Dark Knight',
'Fight Club',
'Inception',
'The Matrix',
'Forrest Gump',
'Gladiator',
'The Silence of the Lambs',
'The Lord of the Rings: The Fellowship of the Ring',

'Star Wars: A New Hope',
'Jurassic Park',
'Titanic',
'Avatar',
'E.T. the Extra-Terrestrial',
'The Lion King',
'The Avengers',
'The Terminator',
'The Social Network'
];

// Function to perform the search
function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const matchingResults = database.filter(item => item.toLowerCase().includes(searchTerm));
    displayResults(matchingResults);
}

// Function to display search results
function displayResults(results) {
    searchResults.innerHTML = '';

    if (results.length === 0) {
        searchResults.innerHTML = 'No results found.';
    } else {
        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.textContent = result;
            searchResults.appendChild(resultItem);
        });
    }
}

// Add event listener for the input field
searchInput.addEventListener('input', performSearch);
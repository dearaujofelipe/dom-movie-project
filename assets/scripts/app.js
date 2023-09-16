const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
};

const renderNewMovieElement = (title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
  <div class="movie-element__image">
  <img src"${imageUrl}" alt="${title}">
  </div>
  <div class="movie-element__info">
  <h2>${title}</h2>
  <p>${rating}/5</p>
  </div>
  `;
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
};

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const toggleMovieMOdal = () => {
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();
};

const clearMovieInputs = () => {
  for (const usrInput of userInputs) {
    usrInput.value = '';
  }
};

const cancelAddMovieHandler = () => {
  toggleMovieMOdal();
  clearMovieInputs();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('please enter valid values');
    return;
  }

  const newMovie = {
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);
  toggleMovieMOdal();
  clearMovieInputs();
  renderNewMovieElement(newMovie.title, newMovie.image, newMovie.rating);
  updateUI();
};

const backdropClickHandler = () => {
  toggleMovieMOdal();
};

startAddMovieButton.addEventListener('click', toggleMovieMOdal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);

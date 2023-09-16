const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const toggleMovieMOdal = () => {
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();
};

const cancelAddMovie = () => {
  toggleMovieMOdal();
};

const backdropClickHandler = () => {
  toggleMovieMOdal();
};

startAddMovieButton.addEventListener('click', toggleMovieMOdal);
backdrop.addEventListener('click', toggleMovieMOdal);
cancelAddMovieButton.addEventListener('click', cancelAddMovie);

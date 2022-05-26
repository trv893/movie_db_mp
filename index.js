const getMovies = () =>
  fetch('./api/movies', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

const saveMovie = (note) =>
  fetch('/api/add-movie', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  });

const updateMovie = (note) =>
  fetch(`/api/update-review${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
});

const deleteMovie = (id) =>
  fetch(`/api/movie/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });


$('#showMovies').click(function(){

  console.log('renderMovies');
  getMovies().then(renderMovies)
  });


const renderMovies = (movies) => {
  let dbMovies = movies;
  dbMovies.forEach(element => {
    $(".movieTitles").append(`<li>${dbMovies.name} <button type="button" class="btn btn-danger">Delete</button></li>`)
    
  });;
};


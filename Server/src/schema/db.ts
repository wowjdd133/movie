import axios from 'axios';
const API_URL = "https://yts.am/api/v2";

const movieAPI = axios.create({
  baseURL: API_URL
});


export const getMovies = async (limit:number | null , rating:number | null) => {
  if(limit === null) limit = 0;
  if(rating === null) rating = 0;

  try{
    const { data } = await movieAPI.get(`/list_movies.json?limit=${limit}&minimum_rating=${rating}`);

    return data.data.movies;
  }catch(err){
    console.error(err)
  }
}

export const getDetails = async (movie_id: number) => {
  try{
    const {data} = await movieAPI.get(`/movie_details.json?movie_id=${movie_id}`);
    return data.data.movie;
  }catch(err){
    console.error(err);
  }
}

export const getSuggestions = async (movie_id: number) => {
  try{
    const {data} = await movieAPI.get(`/movie_suggestions.json?movie_id=${movie_id}`)
    console.log(data);
    return data.data.movies;
  }catch(err){
    console.error(err);
  }
}

// let movies = [
//   {
//     id: 0,
//     name: "star",
//     score: 0.2
//   },
//   {
//     id: 1,
//     name: "star",
//     score: 0.2
//   },{
//     id: 2,
//     name: "star",
//     score: 0.2
//   },{
//     id: 3,
//     name: "star",
//     score: 0.2
//   },{
//     id: 4,
//     name: "star",
//     score: 0.2
//   }
// ]

// export const getMovies = () => {
//   return movies;
// }

// export const getById = (id:number) => {
//   const filteredMovie = movies.find(movie => 
//     id === movie.id);

//   return filteredMovie;
// } 

// export const deleteMovie = (id:number) => {
//   const cleanedMoveis = movies.filter(movie => movie.id !== id);
//   if(cleanedMoveis.length < movies.length) {
//     movies = cleanedMoveis;
//     return true;
//   }
//   return false;
// }

// export const addMovie = (name: string, score: number) => {
//   const newMovie = {
//     id: movies.length + 1,
//     name: name,
//     score: score
//   };
//   movies.push(newMovie);

//   return newMovie;
// }

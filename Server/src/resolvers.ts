import { getMovies, getDetails, getSuggestions} from './schema/db';

interface Movies {
  limit: number | null;
  rating: number | null;
}

type IDArgs = {
  movie_id: number
}

const resolvers = {
  Query: {
    movies(_:void, args: Movies) {
      return getMovies(args.limit, args.rating);
    }, 
    movie(_:void, args:IDArgs) {
      return getDetails(args.movie_id);
    },
    suggestions(_:void, args:IDArgs) {
      return getSuggestions(args.movie_id);
    }
  }
}

export default resolvers;
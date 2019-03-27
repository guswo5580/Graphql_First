import { getMovies, getMovie, getSuggestions } from './db';
//schema에서 선언한 쿼리에 대한 대답을 정하는 부분

const resolvers = {
    Query : {
        movies : (_, { limit , rating  }) => getMovies(limit, rating),
        movie : (_, {id} ) => getMovie(id),
        suggestions : (_, {id} ) => getSuggestions(id)
    },
};

export default resolvers;
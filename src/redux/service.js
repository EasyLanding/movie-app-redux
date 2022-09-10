import axios from "axios";
import { setMovieElement, setGenre } from './reposReducer';

export const getResponseMovieDB = (searchData) =>
{
    return async (dispatch) =>
    {
        const res = axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c8e44c65deebb0118bbf6902d87d51e0&language=en-US&query=${searchData}&include_adult=false`)
        const body = await res
        dispatch(setMovieElement(body.data.results))
    }
}
export const getResponseGenreMovieDB = () =>
{
    return async (dispatch) =>
    {
        const res = axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=c8e44c65deebb0118bbf6902d87d51e0`)
        const body = await res
        dispatch(setGenre(body.data.genres))
    }
}
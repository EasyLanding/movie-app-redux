const LOADING = "LOADING"
const MOVIE_ELEMENT = "MOVIE_ELEMENT"
const TOTAL_PAGE = "TOTAL_PAGE"
const ERROR = "ERROR"
const RATE = "RATE"
const TAB_RATED = "TAB_RATED"
const GENRE = "GENRE"
const SEARCH_DATA = "SEARCH_DATA"


export const initialState = {
    loading: false,
    movieElement: [],
    totalPage: 0,
    error: false,
    searchData: null,
    rate: false,
    genre: [],
    tabRated: false,
}

export default function reposReducer (state = initialState, action)
{
    switch (action.type)
    {
        case LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case MOVIE_ELEMENT:
            return {
                ...state,
                loading: false,
                movieElement: action.payload
            }
        case TOTAL_PAGE:
            return {
                ...state,
                totalPage: action.payload
            }
        case ERROR:
            return {
                ...state,
                error: action.payload
            }
        case RATE:
            return {
                ...state,
                rate: action.payload
            }
        case TAB_RATED:
            return {
                ...state,
                tabRated: action.payload
            }
        case GENRE:
            return {
                ...state,
                genre: action.payload
            }
        case SEARCH_DATA:
            return {
                ...state,
                searchData: action.payload
            }
        default:
            return state
    }
}

export const setLoading = (loading) => ({ type: LOADING, payload: loading })
export const setMovieElement = (movieElement) => ({ type: MOVIE_ELEMENT, payload: movieElement })
export const setTotalPage = (totalPage) => ({ type: TOTAL_PAGE, payload: totalPage })
export const setError = (error) => ({ type: ERROR, payload: error })
export const setRated = (rate) => ({ type: RATE, payload: rate })
export const setTabRated = (tabRated) => ({ type: TAB_RATED, payload: tabRated })
export const setGenre = (genre) => ({ type: GENRE, payload: genre })
export const setSearchData = (searchData) => ({ type: SEARCH_DATA, payload: searchData })
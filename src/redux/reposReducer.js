const LOADING = "LOADING"
const MOVIE_ELEMENT = "MOVIE_ELEMENT"
const TOTAL_PAGE = "TOTAL_PAGE"
const CURRENT = "CURRENT"
const MIN_INDEX = "MIN_INDEX"
const MAX_INDEX = "MAX_INDEX"
const ERROR = "ERROR"
const RATE = "RATE"
const TAB_RATED = "TAB_RATED"
const GENRE = "GENRE"
const SEARCH_DATA = "SEARCH_DATA"
const VALUE = "VALUE"


export const initialState = {
    loading: false,
    movieElement: [],
    totalPage: 0,
    current: 1,
    minIndex: 0,
    maxIndex: 0,
    error: false,
    searchData: null,
    rate: false,
    genre: [],
    tabRated: false,
    value: ""
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
        case CURRENT:
            return {

            }
        case MIN_INDEX:
            return {
                ...state,
                minIndex: action.payload
            }
        case MAX_INDEX:
            return {
                ...state,
                maxIndex: action.payload
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
        case VALUE:
            return {
                ...state,
                value: action.payload
            }
        default:
            return state
    }
}

export const setLoading = (loading) => ({ type: LOADING, payload: loading })
export const setMovieElement = (movieElement) => ({ type: MOVIE_ELEMENT, payload: movieElement })
export const setTotalPage = (totalPage) => ({ type: TOTAL_PAGE, payload: totalPage })
export const setCurrent = (current) => ({ type: CURRENT, payload: current })
export const setMinIndex = (minIndex) => ({ type: MIN_INDEX, payload: minIndex })
export const setMaxIndex = (maxIndex) => ({ type: MAX_INDEX, payload: maxIndex })
export const setError = (error) => ({ type: ERROR, payload: error })
export const setRated = (rate) => ({ type: RATE, payload: rate })
export const setTabRated = (tabRated) => ({ type: TAB_RATED, payload: tabRated })
export const setGenre = (genre) => ({ type: GENRE, payload: genre })
export const setSearchData = (searchData) => ({ type: SEARCH_DATA, payload: searchData })
export const setValue = (value) => ({ type: VALUE, payload: value })
/*INTERFACE TYPE SCRIPT*/
interface UserState {
    loading: boolean;
    movieElement: any[];
    totalPage: number;
    error: boolean;
    searchData: any;
    rate: boolean;
    genre: any[];
    tabRated: boolean;
}
enum UserActionTypes {
    LOADING = "LOADING",
    MOVIE_ELEMENT = "MOVIE_ELEMENT",
    TOTAL_PAGE = "TOTAL_PAGE",
    ERROR = "ERROR",
    RATE = "RATE",
    TAB_RATED = "TAB_RATED",
    GENRE = "GENRE",
    SEARCH_DATA = "SEARCH_DATA"
}
interface LoadingUserAction {
    type: UserActionTypes.LOADING;
    payload: boolean;
}
interface MovieElementUserAction {
    type: UserActionTypes.MOVIE_ELEMENT;
    payload: any[];
}
interface TotalPageUserAction {
    type: UserActionTypes.TOTAL_PAGE;
    payload: number;
}
interface ErrorUserAction {
    type: UserActionTypes.ERROR;
    payload: boolean;
}
interface RateUserAction {
    type: UserActionTypes.RATE;
    payload: boolean;
}
interface TabRatedUserAction {
    type: UserActionTypes.TAB_RATED;
    payload: boolean;
}
interface GenreUserAction {
    type: UserActionTypes.GENRE;
    payload: any[];
}
interface SearchDataUserAction {
    type: UserActionTypes.SEARCH_DATA;
    payload: any;
}
type UserAction = LoadingUserAction | MovieElementUserAction | TotalPageUserAction | ErrorUserAction | RateUserAction | TabRatedUserAction | GenreUserAction | SearchDataUserAction;

export const initialState: UserState = {
    loading: false,
    movieElement: [],
    totalPage: 0,
    error: false,
    searchData: null,
    rate: false,
    genre: [],
    tabRated: false,
}

export default function reposReducer(state = initialState, action: UserAction): UserState {
    switch (action.type) {
        case UserActionTypes.LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case UserActionTypes.MOVIE_ELEMENT:
            return {
                ...state,
                loading: false,
                movieElement: action.payload
            }
        case UserActionTypes.TOTAL_PAGE:
            return {
                ...state,
                totalPage: action.payload
            }
        case UserActionTypes.ERROR:
            return {
                ...state,
                error: action.payload
            }
        case UserActionTypes.RATE:
            return {
                ...state,
                rate: action.payload
            }
        case UserActionTypes.TAB_RATED:
            return {
                ...state,
                tabRated: action.payload
            }
        case UserActionTypes.GENRE:
            return {
                ...state,
                genre: action.payload
            }
        case UserActionTypes.SEARCH_DATA:
            return {
                ...state,
                searchData: action.payload
            }
        default:
            return state
    }
}

export const setLoading = (loading: any) => ({ type: UserActionTypes.LOADING, payload: loading })
export const setMovieElement = (movieElement: any) => ({ type: UserActionTypes.MOVIE_ELEMENT, payload: movieElement })
export const setTotalPage = (totalPage: any) => ({ type: UserActionTypes.TOTAL_PAGE, payload: totalPage })
export const setError = (error: any) => ({ type: UserActionTypes.ERROR, payload: error })
export const setRated = (rate: any) => ({ type: UserActionTypes.RATE, payload: rate })
export const setTabRated = (tabRated: any) => ({ type: UserActionTypes.TAB_RATED, payload: tabRated })
export const setGenre = (genre: any) => ({ type: UserActionTypes.GENRE, payload: genre })
export const setSearchData = (searchData: any) => ({ type: UserActionTypes.SEARCH_DATA, payload: searchData })
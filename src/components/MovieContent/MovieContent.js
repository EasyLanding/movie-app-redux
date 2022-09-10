import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react"

/*CONTENT*/
import './MovieContent.css'
import ErrorIndicator from '../error-indicator/error-indicator';
import Spinner from '../spinner/Spinner';
import SearchInput from '../searchInput/SearchInput';
import RateM from '../Rate/Rate';
import MovieContentCookie from '../MovieContentCookie/movieContentCookie';
import Genres from '../genres/genres';

/*REDUX*/
import { setLoading } from '../../redux/reposReducer';
import { getResponseMovieDB } from '../../redux/service';
import { setError } from '../../redux/reposReducer';
import { setTabRated } from '../../redux/reposReducer';
import { setTotalPage } from '../../redux/reposReducer';
import { setSearchData } from '../../redux/reposReducer';
import { setMovieElement } from '../../redux/reposReducer';

/*ANTD*/
import { Pagination } from "antd";
import "antd/dist/antd.css";
import { format } from 'date-fns';

const pageSize = 1;
const MovieContent = () =>
{
    const dispatch = useDispatch()
    let searchDataUp = useSelector(state => state.repos.movieElement)

    const [idxCookie, setIdxCookie] = useState(0)
    const [minIndex, setMinIndex] = useState(0)
    const [maxIndex, setMaxIndex] = useState(0)
    const [current, setCurrent] = useState(1)

    const searchMovie = ((searchData) =>
    {
        dispatch(setLoading(true))
        if (searchDataUp)
        {
            dispatch(getResponseMovieDB(searchData))
            setMinIndex(0)
            setMaxIndex(pageSize)
            dispatch(setError(false))
            dispatch(setSearchData(searchDataUp))
            dispatch(setTotalPage((state) => state.repos.movieElement.length / pageSize))
            dispatch(setLoading(false))
        }
        if (searchData === '')
        {
            dispatch(setError(true))
            dispatch(setLoading(false))
            dispatch(setMovieElement([]))
        }
    })
    let handleChange = (page) =>
    {
        setMinIndex((page - 1) * pageSize)
        setMaxIndex(page * pageSize)
        setCurrent(page)
    };
    const changeRateMovie = (id) =>
    {

        let idx = searchDataUp.findIndex((el) => el.id === id)
        let newArrString = JSON.stringify(searchDataUp[idx])

        let name = idx;
        setIdxCookie(idx)
        console.log(idxCookie)
        let value = newArrString
        document.cookie = name + "=" + value
    };

    const shortDescriptionMovie = (item) =>
    {
        let maxLength = 28;
        let ShortOverview = item.split(' ');
        if (ShortOverview.length >= maxLength)
        {
            ShortOverview.length = maxLength;
            ShortOverview.push('...');
        }
        ShortOverview = ShortOverview.join(' ');
        return ShortOverview
    }
    const movieRaitingNumber = (item) =>
    {
        let ratingColor
        if (item >= 0 && item < 3) ratingColor = ' bad';
        if (item >= 3 && item < 5) ratingColor = ' not-bad';
        if (item >= 5 && item < 7) ratingColor = ' good';
        if (item >= 7) ratingColor = ' wonderful'
        return ratingColor
    }
    const movieDate = (item) =>
    {
        if (item)
        {
            let date = new Date(item);
            const formatDate = format(date, 'MMMM d, Y');
            let finalDate = formatDate;
            return finalDate
        }
    }
    let errorMessage = useSelector(state => state.repos.error) ? < ErrorIndicator /> : null;
    let length = useSelector(state => state.repos.movieElement.length)
    let tabRated = useSelector(state => state.repos.tabRated)
    let loading = useSelector(state => state.repos.loading)

    let movieElement = searchDataUp

    return (
        < div className='conteiner-1' >
            {
                tabRated ? <MovieContentCookie
                    toggleTabSearch={ () => dispatch(setTabRated(false)) }
                    toggleTabRate={ () => dispatch(setTabRated(true)) }
                    idxCookie={ idxCookie }
                    changeRateMovies={ changeRateMovie }
                /> :
                    <div className='conteinerDiv'>
                        <div className="movieCartConteinerHeader">
                            <div className="movieCartButton">
                                <button
                                    className='search-button'
                                    onClick={ () => dispatch(setTabRated(false)) }
                                >Search</button>
                                <button
                                    className='rate-button'
                                    onClick={ () => dispatch(setTabRated(true)) }
                                >Rate</button>
                            </div>
                            <SearchInput
                                searchMovie={ searchMovie }
                            />
                            <div className='movieCartHeader'><h1 className='movieCartHeader-1'>Movie DB</h1></div>
                        </div>
                        { errorMessage }
                        {
                            (loading) ? <Spinner /> :
                                <div className='movieCartConteiner'>
                                    {
                                        <div className="movieCart">
                                            {
                                                movieElement.map((itemTitle, index) =>
                                                {
                                                    //логика для пагинации и отрисовка элемента movieCart render
                                                    return index >= minIndex &&
                                                        index < maxIndex && (
                                                            <div key={ itemTitle.id } className="movieCart-cart">
                                                                <img className='movieImg' alt={ itemTitle.id } src={ `https://image.tmdb.org/t/p/original${itemTitle.poster_path}` } />
                                                                <div className='movieCart-cart-content'>
                                                                    <div className='movieCart-cart-content-header'>
                                                                        <h2 className='movieHeader'>{ itemTitle.title }</h2>
                                                                        <div className={ 'movieHeader-rate' + movieRaitingNumber(itemTitle.vote_average) }>{ itemTitle.vote_average }</div>
                                                                    </div>
                                                                    <div className="movie-card-date">{ movieDate(itemTitle.release_date) }</div>
                                                                    <Genres genreIds={ itemTitle.genre_ids } />
                                                                    <p className='movieDescription'>{ shortDescriptionMovie(itemTitle.overview) }</p>
                                                                    <div className='rate-movie-cart'>
                                                                        <RateM
                                                                            id={ itemTitle.id }
                                                                            changeRateMovies={ changeRateMovie }
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                })
                                            }

                                        </div>
                                    }
                                </div>
                        }
                        <div className='paginationConteiner'>
                            <Pagination
                                pageSize={ pageSize }
                                current={ current }
                                total={ length }
                                onChange={ handleChange }
                                style={ { bottom: "0px" } }
                            />
                        </div>
                    </div>
            }
        </div>
    )
}
export default MovieContent
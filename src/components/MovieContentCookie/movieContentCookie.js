import { Component } from 'react';
import '../MovieContent/MovieContent.css'
import RateM from '../Rate/Rate';
import Genres from '../genres/genres';
import { format } from 'date-fns';


export default class MovieContentCookie extends Component
{
    state = {
        minIndex: 0,
        moviesRated: [],
        maxIndex: 0
    }
    storageRaitingNumber = (item) =>
    {
        let ratingColor
        if (item >= 0 && item < 3) ratingColor = ' bad';
        if (item >= 3 && item < 5) ratingColor = ' not-bad';
        if (item >= 5 && item < 7) ratingColor = ' good';
        if (item >= 7) ratingColor = ' wonderful'
        return ratingColor
    }
    storageShortDescription = (item) =>
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
    storageDate = (item) =>
    {
        let date = new Date(item);
        const formatDate = format(date, 'MMMM d, Y');
        let finalDate = formatDate;
        return finalDate
    }

    render ()
    {
        let cookie
        let newArr
        if (document.cookie.length > 0)
        {
            cookie = document.cookie.slice(2, document.cookie.length)
            newArr = JSON.parse(cookie)
        }
        const { toggleTabSearch, changeRateMovie } = this.props

        return (
            <div>
                {
                    document.cookie.length > 0 ?
                        <div className='conteinerDiv'>
                            <div className="movieCartConteinerHeader">
                                <div className="movieCartButton">
                                    <button
                                        className='search-button'
                                        onClick={ toggleTabSearch }
                                    >Search</button>
                                    <button
                                        className='rate-button'
                                    >Rate</button>
                                </div>
                            </div>

                            <div className='movieCartConteiner'>
                                <div className="movieCart">
                                    <div key={ newArr.id } className="movieCart-cart">
                                        <img className='movieImg' alt={ newArr.id } src={ `https://image.tmdb.org/t/p/original${newArr.poster_path}` } />
                                        <div className='movieCart-cart-content'>
                                            <div className='movieCart-cart-content-header'>
                                                <h2 className='movieHeader'>{ newArr.title }</h2>
                                                <div className={ 'movieHeader-rate' + this.storageRaitingNumber(newArr.vote_average) }>{ newArr.vote_average }</div>
                                            </div>
                                            <div className="movie-card-date">{ this.storageDate(newArr.release_date) }</div>
                                            <Genres genreIds={ newArr.genre_ids } />
                                            <p className='movieDescription'>{ this.storageShortDescription(newArr.overview) }</p>
                                            <div className='rate-movie-cart'>
                                                <RateM
                                                    id={ newArr.id }
                                                    changeRateMovies={ changeRateMovie }
                                                />
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                        : <div className='conteinerDiv'>
                            <div className="movieCartConteinerHeader">
                                <div className="movieCartButton">
                                    <button
                                        className='search-button'
                                        onClick={ toggleTabSearch }
                                    >Search</button>
                                    <button
                                        className='rate-button'
                                    >Rate</button>
                                </div>
                            </div>
                        </div>
                }
            </div>
        )
    }
}
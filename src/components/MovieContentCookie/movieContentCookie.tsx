import '../MovieContent/MovieContent.css'
import RateM from '../Rate/Rate';
import Genres from '../genres/genres';
import { format } from 'date-fns';


const MovieContentCookie = (props: any) => {
    const storageRaitingNumber = (item: number) => {
        let ratingColor
        if (item >= 0 && item < 3) ratingColor = ' bad';
        if (item >= 3 && item < 5) ratingColor = ' not-bad';
        if (item >= 5 && item < 7) ratingColor = ' good';
        if (item >= 7) ratingColor = ' wonderful'
        return ratingColor
    }
    const storageShortDescription = (item: string) => {
        let maxLength = 28;
        let ShortOverview: string[] | string = item.split(' ');
        if (ShortOverview.length >= maxLength) {
            ShortOverview.length = maxLength;
            ShortOverview.push('...');
        }
        ShortOverview = ShortOverview.join(' ');
        return ShortOverview
    }
    const storageDate = (item: any) => {
        let date = new Date(item);
        const formatDate = format(date, 'MMMM d, Y');
        let finalDate = formatDate;
        return finalDate
    }


    const getCookieValueByName = (name = props.idxCookie) => {
        let match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));

        return match ? JSON.parse(match[2]) : "";
    }
    getCookieValueByName()
    let cookie
    let newArr
    if (document.cookie.length > 0) {
        cookie = getCookieValueByName()
        newArr = cookie
    }

    return (
        <div>
            {
                document.cookie.length > 0 ?
                    <div className='conteinerDiv'>
                        <div className="movieCartConteinerHeader">
                            <div className="movieCartButton">
                                <button
                                    className='search-button'
                                    onClick={props.toggleTabSearch}
                                >Search</button>
                                <button
                                    className='rate-button'
                                >Rate</button>
                            </div>
                        </div>

                        <div className='movieCartConteiner'>
                            <div className="movieCart">
                                <div key={newArr.id} className="movieCart-cart">
                                    <img className='movieImg' alt={newArr.id} src={`https://image.tmdb.org/t/p/original${newArr.poster_path}`} />
                                    <div className='movieCart-cart-content'>
                                        <div className='movieCart-cart-content-header'>
                                            <h2 className='movieHeader'>{newArr.title}</h2>
                                            <div className={'movieHeader-rate' + storageRaitingNumber(newArr.vote_average)}>{newArr.vote_average}</div>
                                        </div>
                                        <div className="movie-card-date">{storageDate(newArr.release_date)}</div>
                                        <Genres genreIds={newArr.genre_ids} />
                                        <p className='movieDescription'>{storageShortDescription(newArr.overview)}</p>
                                        <div className='rate-movie-cart'>
                                            <RateM
                                                id={newArr.id}
                                                changeRateMovies={props.changeRateMovie}
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
                                    onClick={props.toggleTabSearch}
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
export default MovieContentCookie
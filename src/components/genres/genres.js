import { useSelector, useDispatch } from 'react-redux';
import { getResponseGenreMovieDB } from '../../redux/service';
import { useEffect } from 'react'
import './genres.css'

const Genres = ({ genreIds }) =>
{
    const dispatch = useDispatch()
    useEffect(() =>
    {
        dispatch(getResponseGenreMovieDB())
    }, [dispatch])
    let genre = useSelector(state => state.repos.genre)

    return (
        <div className="movie-card-genre-conteiner">{
            // eslint-disable-next-line array-callback-return
            genre.map((genre) =>
            {
                let genreNames
                genreIds.forEach((genreId) =>
                {
                    if (genre.id === genreId)
                    {
                        genreNames = genre.name
                    }
                })
                if (genreNames)
                {
                    return (
                        <div key={ genre.id } className="movie-card-genre">
                            { genreNames }
                        </div>
                    );
                }
            })
        }
        </div>
    );
}
export default Genres
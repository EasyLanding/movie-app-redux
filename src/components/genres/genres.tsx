import { useSelector, useDispatch } from 'react-redux';
import { getResponseGenreMovieDB } from '../../redux/service';
import { useEffect } from 'react'
import './genres.css'

const Genres = (props: any) => {
    const dispatch: any = useDispatch()
    useEffect(() => {
        dispatch(getResponseGenreMovieDB())
    }, [dispatch])
    let genre = useSelector((state: any) => state.repos.genre)

    return (
        <div className="movie-card-genre-conteiner">{
            // eslint-disable-next-line array-callback-return
            genre.map((genre: any) => {
                let genreNames
                props.genreIds.forEach((genreId: number) => {
                    if (genre.id === genreId) {
                        genreNames = genre.name
                    }
                })
                if (genreNames) {
                    return (
                        <div key={genre.id} className="movie-card-genre">
                            {genreNames}
                        </div>
                    );
                }
            })
        }
        </div>
    );
}
export default Genres